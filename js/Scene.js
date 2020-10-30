// Scene object. Represents a single screen within the game in which sprites can be loaded and unloaded. 
function Scene (canvas, frameRate, x, y, width, height) {
    
    // Constants
    this.CURSOR_HIDE = "none";
    this.CURSOR_SHOW = "auto";

    // Canvas object
    this.canvas = canvas;

    // Array containing each sprite currently in the scene
    this.sprites = [];

    // Framerate of the scene
    this.frameRate = frameRate;

    // Boolean array that keeps track of the state of each key on the keyboard
    this.keyboardState = [];

    // Position
    this.xpos = x;
    this.ypos = y;

    // Size
    this.width = width;
    this.height = height;

    this.hidden = false;
    this.background = "";

    // Controls game loop
    this.interval = 0;

    // Calls update on all sprites
    this.update = function() {
        
        // Clear the previous frame
        this.canvas.con.clearRect(this.x, this.y, this.width, this.height);

        // Call update on all current sprites
        this.sprites.forEach(function(sprite) {
            sprite.update();
        });

        // Check if the scene is supposed to be hidden. If it is then clear the scene again
        if (this.hidden)
        {
            this.canvas.con.clearRect(this.x, this.y, this.width, this.height);
        }
    };
    
    // Adds a sprite to the array of sprites. Will be updated and drawn on the next frame.
    this.addSprite = function(sprite) {
        this.sprites.push(sprite);
    };

    // Removes a sprite from the array of sprites.
    this.removeSprite = function(sprite) {
        index = this.sprites.indexOf(sprite);
        this.sprites.splice(index, 1);
    }

    // Starts the loop for the scene
    this.start = function() {
        
        // Check that we aren't already started
        if (this.interval == 0)
        {   
            // Starts the game loop. Interval time is equal to the number of milliseconds delay to ensure that a max of this.framerate calls to
            // update() happen every second. Interval object is stored in member so we can stop it later
            this.interval = setInterval(this.update.bind(this), 1000 / this.framerate);
        }

        else
        {
            console.error("Game Engine Warning: start() method called on Scene object, but scene was already running!");
        }
    };

    // Ends the loop for the scene
    this.end = function() {
        
        // Check that the game loop is already going
        if (this.interval != 0)
        {
            // Reset the canvas background to nothing
            this.canvas.element.background = "";

            // TODO:
            // Add everything else that needs to happen when the scene ends

            // Stop the game loop
            clearInterval(this.interval);
        }

        else
        {
            console.error("Game Engine Warning: pause() method called on Scene object, but scene was not running!");
        }
    };

    // Pauses the loop for the scene
    this.pause = function() {
        
        // Check that the game loop is already going
        if (this.interval != 0)
        {
            // Stop the game loop
            clearInterval(this.interval);
        }

        else
        {
            console.error("Game Engine Warning: pause() method called on Scene object, but scene was not running!");
        }
    };

    // Clears all sprites on the screen
    this.clear = function() {
        
        // Call justDie on all sprites Clear the screen as well
        this.sprites.forEach(function(sprite) {
            sprite.justDie();
        });

        this.canvas.con.clearRect(this.xpos, this.ypos, this.width, this.height);
    };

    // Hides the cursor within the scene
    this.hideCursor = function() {

        // Adds css attribute to canvas element that hides cursor
        this.canvas.element.cursor = this.CURSOR_HIDE;
    };

    // Shows the cursor within the scene
    this.showCursor = function() {

        // Removes css attribute from canvas element if its there
        this.canvas.element.cursor = this.CURSOR_SHOW;
    };

    // Updates the mouse position from movement (callback function for mouse move event)
    this.updateMousePos = function(event) {
        this.mousex = event.clientX;
        this.mousey = event.clientY;
    };

    // Returns the current mouse x
    this.getMouseX = function() {

        // Returns the last recorded mouse x
        return this.mousex;
    };

    this.getMouseY = function () {
        
        // Returns the last recorded mouse y
        return this.mousey; 
    }


    // Toggles the member "hidden".
    this.hideScene = function() {
        this.hidden = true;
    };

    // Toggles the member "hidden".
    this.showScene = function() {
        this.hidden = false;
    };

    // Chagnes the framerate
    this.changeFrameRate = function(framerate) {

        // Stop the game loop and restart it using this new framerate
        this.framerate = framerate;
        clearInterval(this.interval);
        this.interval = setInterval(this.update.bind(this), 1000 / this.framerate);
    };

    // Sets the background
    this.setBackground = function(background) {
        this.background = background;
        this.canvas.element.background = background;
    };

    // Attach event listeners
    this.canvas.element.addEventListener("mousemove", this.updateMousePos.bind(this));

}