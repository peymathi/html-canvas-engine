// Scene object. Represents a single screen within the game in which sprites can be loaded and unloaded. 
function Scene (canvas, frameRate) {
    
    // Canvas object
    this.canvas = canvas;

    // Array containing each sprite currently in the scene
    this.sprites = [];

    // Framerate of the scene
    this.frameRate = frameRate;

    // Boolean array that keeps track of the state of each key on the keyboard
    this.keyboardState = [];

    // Calls update on all sprites
    this.update = function() {

    };
    
    // Adds a sprite
    this.addSprite = function(sprite) {

    };

    // Starts the loop for the scene
    this.start = function() {

    };

    // Ends the loop for the scene
    this.end = function() {

    };

    // Pauses the loop for the scene
    this.pause = function() {

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

}