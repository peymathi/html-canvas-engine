// Create canvas
var canvas = new Canvas("mainCanvas");

// Create scene
var scene = new Scene(canvas, 60, 0, 0, canvas.width, canvas.height);

// Create blue rect sprite
var blue_rect = new Sprite(0, 0, document.getElementById("blue_rect"), scene, BORDER_BOUNCE, true);
blue_rect.dx = 0.2;
blue_rect.dy = 0.1;

scene.addSprite(blue_rect);

scene.start();
setTimeout(function() {scene.end()}, 100000);
let img = document.getElementById("blue_rect");


function mouse(e) {
    let mousex = e.offsetX;
    let mousey = e.offsetY;

    out = document.getElementById("out");
    let x = mousex;
    let y = mousey;

    out.textContent = `Mousex: ${x} Mousey: ${y}`;
}

document.getElementById("mainCanvas").addEventListener("mousemove", mouse);
