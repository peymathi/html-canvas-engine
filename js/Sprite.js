// Object to represent a sprite
function Sprite (startx, starty, image, scene, borderRule, collidable) {
    
    // Position
    this.xpos = startx;
    this.ypos = starty;

    // Motion
    this.dx;
    this.dy;

    // Acceleration
    this.ddx;
    this.ddy;

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

    };

    // Method runs once per frame to update the sprite
    this.update = function () {

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

    };

    // Checks for collision between this sprite and the sprite passed. Calls the respective collide methods if collision has occured (and collision is enabled)
    this.checkCollision = function (sprite) {

    };

    // Changes the image for the sprite. Updates the height and width and runs collision detection.
    this.setImage = function (image) {

    };

    // Method that handles collision between this sprite and another sprite
    this.collide = function (sprite) {

    };

    // Runs the collision checker. Checks collisions for this sprite against all other sprites.
    this.checkAllCollisions = function () {

    };

    // Method called by scene object when the sprite is first added
    this.init = function () {

    };

    // Method called when the sprite is to be removed from the scene
    this.die = function () {

    };

    // Constants for border collisions
    this.BORDER_BOUNCE = "BOUNCE";
    this.BORDER_WRAP = "WRAP";
    this.BORDER_IGNORE = "IGNORE";
    this.BORDER_DIE = "DIE";

}