// Object to represent a sprite
function Sprite (startx, starty, image, scene) {
    
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

    // Reference to the scene this sprite belongs to
    this.scene = scene;

    // Method to draw the sprite
    this.draw = 

    // Method runs once per frame to update the sprite
    this.update = function () {

    }


}