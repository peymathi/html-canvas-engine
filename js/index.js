// Create canvas
var canvas = new Canvas("mainCanvas");

// Create scene
var scene = new Scene(canvas, 20, 0, 0, canvas.width, canvas.height);

// Create blue rect sprite
var blue_rect = new Sprite(0, 0, document.getElementById("blue_rect"), scene, BORDER_BOUNCE, true);
blue_rect.dx = 0.25;
blue_rect.dy = 0.6;

scene.addSprite(blue_rect);
let img = document.getElementById("blue_rect");
canvas.con.drawImage(document.getElementById("blue_rect"), 0, 0);
canvas.con.drawImage(document.getElementById("blue_rect"), 799, 799);

//scene.start();
//setTimeout(function() {scene.end()}, 60000);


function mouse(e) {
    let mousex = e.offsetX;
    let mousey = e.offsetY;

    out = document.getElementById("out");
    let x = mousex;// - document.getElementById("mainCanvas").offsetLeft;
    let y = mousey;// - document.getElementById("mainCanvas").offsetTop;

    console.log(mousex);
    console.log(mousey);
    console.log(document.getElementById("mainCanvas").offsetLeft);
    console.log(document.getElementById("mainCanvas").offsetTop);

    out.textContent = `Mousex: ${x} Mousey: ${y}`;
}

document.getElementById("mainCanvas").addEventListener("mousemove", mouse);
