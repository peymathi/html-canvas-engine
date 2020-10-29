// Scene object. Represents a single screen within the game in which sprites can be loaded and unloaded. 
function Scene (canvas, frameRate, x, y, width, height) {
    
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

    this.background = "";
    this.interval = 0;

    // Calls update on all sprites
    this.update = function() {

        // Call update on all current sprites
        this.sprites.forEach(function(sprite) {
            sprite.update();
        });
    };
    
    // Adds a sprite to the array of sprites. Will be updated and drawn on the next frame.
    this.addSprite = function(sprite) {
        this.sprites.push(sprite);
    };

    // Starts the loop for the scene
    this.start = function() {
        
        // Check that we aren't already started
        if (this.interval == 0)
        {   
            // Starts the game loop. Interval time is equal to the number of milliseconds delay to ensure that a max of this.framerate calls to
            // update() happen every second. Interval object is stored in member so we can stop it later
            this.interval = setInterval(this.update, 1 / this.framerate);
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
        
    };

    // Hides the cursor within the scene
    this.hideCursor = function() {

    };

    // shows the cursor within the scene
    this.showCursor = function() {

    };

    // Returns the current mouse position
    this.getMousePos = function() {

    };

    // Hides the entire scene
    this.hideScene = function() {

    };

    // Shows the entire scene
    this.showScene = function() {

    };

    // Chagnes the framerate
    this.changeFrameRate = function(framerate) {

    };

    // Sets the background
    this.setBackground = function(background) {

    };

}