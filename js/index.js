// Create canvas
var canvas = new Canvas("mainCanvas");

// Create scene
var scene = new Scene(canvas, 60, 0, 0, canvas.offsetx, canvas.offsety);

// Create blue rect sprite
var blue_rect = new Sprite(20, 20, document.getElementById("blue_rect"), scene, BORDER_BOUNCE, true);
blue_rect.dx = 0.25;
blue_rect.dy = 0.6;

scene.addSprite(blue_rect);
scene.start();
setTimeout(function() {scene.end()}, 15000);
