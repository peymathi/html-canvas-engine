
// Object to represent the HTML canvas element
function Canvas (id) {
    
    // Holds the JavaScript Canvas element
    this.element = document.getElementById(id);

    // Offsets for calculating mouse position within the canvas
    this.offsety = this.element.offsetTop;
    this.offsetx = this.element.offsetLeft;

    // Size
    this.width = this.element.width;
    this.height = this.element.height;

    // Context
    this.con = this.element.getContext("2d");   

    
}