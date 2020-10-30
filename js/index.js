// Create canvas
var canvas = new Canvas("mainCanvas");

// Create scene
var scene = new Scene(canvas, 60, 0, 0, canvas.width, canvas.height);

// Create blue rect sprite
var blue_rect = new Sprite(0, 0, document.getElementById("blue_rect"), scene, BORDER_BOUNCE, true);
blue_rect.dx = 0.25;
blue_rect.dy = 0.6;

scene.addSprite(blue_rect);
scene.start();
setTimeout(function() {scene.end()}, 60000);


function mouse(e) {
    mousex = e.clientX;
    mousey = e.clientY;

    out = document.getElementById("out");
    let x = this.mousex - this.canvas.offsetx;
    let y = this.mousey - this.canvas.offsety;

    out.textContent = `Mousex: ${x} Mousey: ${y}`;
}

document.getElementById("mainCanvas").addEventListener("mousemove", mouse);
