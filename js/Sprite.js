// Constants for border collisions
const BORDER_BOUNCE = "BOUNCE";
const BORDER_WRAP = "WRAP";
const BORDER_IGNORE = "IGNORE";
const BORDER_DIE = "DIE";

// Object to represent a sprite
function Sprite (startx, starty, image, scene, borderRule, collidable) {
    
    // Position
    this.xpos = startx;
    this.ypos = starty;

    // Motion
    this.dx = 0;
    this.dy = 0;

    // Acceleration
    this.ddx = 0;
    this.ddy = 0;

    // String representing where the image for the sprite is located
    this.image = image;

    // Dimensions set by image dimensions
    this.width = this.image.width;
    this.height = this.image.height;

    // Reference to the scene this sprite belongs to
    this.scene = scene;

    // Reference to the canvas
    this.canvas = this.scene.canvas;

    // Defines the rules for border collisions
    this.borderRule = borderRule;

    // Determines if this sprite can collide with other sprites (can still collide with border)
    this.collidable = collidable;

    // Tracks whether the sprite should be hidden or not
    this.hidden = false;

    // Method to draw the sprite
    this.draw = function () {
        
        // Draw the image using floored values for the x and y positions
        this.canvas.con.drawImage(this.image, Math.floor(this.xpos), Math.floor(this.ypos));
    };

    // Method runs once per frame to update the sprite
    this.update = function () {

        // Update kinematic values
        this.xpos += this.dx;
        this.ypos += this.dy;
        
        this.dx += this.ddx;
        this.dy += this.ddy;

        // Make sure we are still visible
        if (this.xpos + this.width < this.scene.xpos || this.xpos + this.width > this.scene.xpos + this.scene.width
            || this.ypos + this.height < this.scene.ypos || this.ypos + this.height > this.scene.ypos + this.scene.height)
        {
            this.justDie();
            console.log("I am dying");
            return;
        }

        // Check for collisions
        this.checkAllCollisions();

        // Draw the sprite
        this.draw();
    };

    // Method to hide the sprite (disables drawing)
    this.hide = function () {
        this.hidden = true;
    };

    // Method to show the sprite (allows drawing)
    this.show = function () {
        this.hiddden = false;
    };

    // Method to change the angle of the sprite
    this.changeAngle = function (angle) {

    };

    // Method to change the speed of the sprite
    this.changeSpeed = function (speed) {

    };

    // Method which adds a force to the sprite. Units of force is sorta Newtons but instead of being kg * m/s^2 it is kg * px/s^2
    this.addForce = function (force) {

    };

    // Allows the user to change the border rule. Only accepts constants. 
    this.changeBorderRule = function (rule) {
        this.borderRule = rule;
    };

    // Checks for collision between this sprite and the sprite passed. Calls the respective collide methods if collision has occured (and collision is enabled)
    this.checkCollision = function (sprite) {
        
        // For a collision to occur, at least one (x, y) pair of this sprite must be equal to at least one (x, y) pair of the other sprite.
        // To find out if this is the case, we just need to find the range of x and y values for both sprites and if there is any
        // overlap, then the sprites have collided. This only works for rectangles though.
        
        // Smallest x value in the range is going to be the current x position. Largest is going to be xpos + width - 1
        let this_xmax = this.xpos + this.width - 1;

        // Same for y
        let this_ymax = this.ypos + this.height - 1;

        let that_xmax = sprite.xpos + sprite.width - 1;
        let that_ymax = sprite.ypos + sprite.height - 1;

        // Helpers
        let xshared = false;
        let yshared = false;

        // Check if there is overlap
        // If this sprites xmax is less than that sprites xmax and greater than that sprites xmin, then they must share some x
        if (this_xmax <= that_xmax && this_xmax >= sprite.xpos)
        {
            xshared = true;
        }
        
        // Same for the other sprite
        else if (that_xmax <= this_xmax && that_xmax >= this.xpos)
        {
            xshared = true;
        }

        // Same logic for the y side
        if (this_ymax <= that_ymax && this_ymax >= sprite.ypos)
        {
            yshared = true;
        }

        else if (that_ymax <= this_ymax && that_ymax >= this.ypos)
        {
            yshared = true;
        }

        // Collision occured, call collide functions
        if (xshared && yshared)
        {
            this.collide(sprite, xshared, yshared);
            sprite.collide(this, xshared, yshared);
        }
    };

    // Changes the image for the sprite. Updates the height and width and runs collision detection.
    this.setImage = function (image) {

        // Set the image and height / width. Check for collisions.
        this.image = image;

        // Update height / width (ideally we set image in terms of em for portability and then convert to px here, but no time for that now)
        this.width = image.width;
        this.height = image.height;

        // Run collision detection
        this.checkAllCollisions();
    };

    // Method that handles collision between this sprite and another sprite. Default is that the sprite will bounce off from whatever it
    // collides with, but this method should be overriden to give custom collision behavior. Takes the booleans which determined the collision
    // for use in determining where the sprites go next
    this.collide = function (sprite, xshared, yshared) {

        // The first step is to move the sprites out from each other so they aren't on top of each other. 
        // Need to determine which way that is, and how much the sprites need to move. Goal is to move the sprites the least possible distance
        // so that they will not have any similar (x, y) pairs anymore.
        
        // See if the x needs adjusted
        if (xshared)
        {
            // Check which way 
        }
        console.log("Collision?");


        // Now we need to determine where the sprites will go next. The simplest way (and the way I am using for this first engine) is to 
        // set the velocity and acceleration to be inverse for the respective dimension IF that dimension was involved in the collision.
        // For rectangles, this should appear to be a fairly normal completely elastic collision, but for sprites that are not rectangular this will
        // not look that good for.
    };

    // Runs the collision checker. Checks collisions for this sprite against all other sprites and borders
    this.checkAllCollisions = function () {
        
        // Check for collisions against sprites
        this.scene.sprites.forEach(function(sprite) {
            
            // Make sure this sprite isn't the current sprite
            if (sprite != this)
            {
                this.checkCollision(sprite);
            }
        }.bind(this));

        // Check for collisions against borders
        // Left
        if (this.xpos <= this.scene.xpos)
        {
            if (this.borderRule == BORDER_BOUNCE)
            {
                this.dx *= -1;
                this.ddx *= -1;
                this.xpos += 1;
            }

            else if (this.borderRule == BORDER_DIE)
            {
                this.die();
            }

            else if (this.borderRule == BORDER_WRAP)
            {
                this.xpos = this.scene.width - 1;
            }
        }

        // Right
        if (this.xpos >= this.scene.width)
        {
            if (this.borderRule == BORDER_BOUNCE)
            {
                this.dx *= -1;
                this.ddx *= -1;
                this.xpos -= 1;
            }

            else if (this.borderRule == BORDER_DIE)
            {
                this.die();
            }

            else if (this.borderRule == BORDER_WRAP)
            {
                this.xpos = this.scene.xpos + 1;
            }
        }

        // Top
        if (this.ypos <= this.scene.ypos)
        {
            if (this.borderRule == BORDER_BOUNCE)
            {
                this.dy *= -1;
                this.ddy *= -1;
                this.ypos += 1;
            }

            else if (this.borderRule == BORDER_DIE)
            {
                this.die();
            }

            else if (this.borderRule == BORDER_WRAP)
            {
                this.ypos = this.scene.height - 1;
            }
        }

        // Bot
        if (this.ypos >= this.scene.height)
        {
            console.log("I should have bounced, but i did not bounce");
            console.log(this.borderRule);
            if (this.borderRule == BORDER_BOUNCE)
            {
                console.log("BOUNCE!");
                this.dy *= -1;
                this.ddy *= -1;
                this.ypos -= 1;
            }

            else if (this.borderRule == BORDER_DIE)
            {
                this.die();
            }

            else if (this.borderRule == BORDER_WRAP)
            {
                this.ypos = this.scene.ypos + 1;
            }
        }
    };

    // Method called by scene object when the sprite is first added. Meant to be overriden to allow any beginning
    // animations or behavior
    this.init = function () {

    };

    // Method called when the sprite is to be removed from the scene. Sprite can do whatever it wants upon death.
    // Default just calls the justDie method which actually cleans up the sprite but this method is meant to be overriden.
    this.die = function () {

        this.justDie();
    };

    // Method called when the sprite needs to be immediately removed from the scene. No final animations or anything just poof gone.
    this.justDie = function () {
        
        // Set collidable to false so this sprite doesn't cause any collisions during the death process
        this.collidable = false;

        // Remove ourselves from the scene array of sprites
        this.scene.removeSprite(this);

    };

}



