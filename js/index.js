
// Create canvas
canvas = new Canvas("mainCanvas");

// Create scene
scene = new Scene(canvas, 60, 0, 0, canvas.width, canvas.height);

// Create blue rect sprite
blue_rect = new Sprite(20, 20, document.getElementById("blue_rect"), scene, BORDER_BOUNCE, true);
blue_rect.dx = 0.25;
blue_rect.dy = 0.6;