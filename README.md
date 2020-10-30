# HTML Canvas Game Engine
Game engine supporting 2D graphics built with HTML Canvas.

## Canvas
The canvas JS object contains the canvas element, its height and width, its drawing context, its x and y offsets.

## Scene
The scene JS object contains the canvas object, an array of the sprites currently in the scene, the framerate of the scene, and an array tracking the state of each key on the keyboard. The scene object is meant to represent any "screen" of the game. A scene could be a menu selection, a level, or the entire game itself. 

The scene runs the game loop. The heart of the game loop is calling an update function on the scene. An interval which calls this function is started in the start function according to the framerate set. The pause function will stop this interval and display a message that the game is paused, calling the start method again will restart the game loop. Calling the end function will completely end the game loop (for the current scene, user can start another scene if they want) and clean up all of its resources. 

The update method has default behavior, but it is meant to be overriden for custom scenes. 

## Sprites
Sprites represent game objects that are drawn on the screen. All sprites are represented by an image which has position, motion, acceleration, and other attributes described in the OOD document. Sprites are all contained within a bounding rectangle which is tracked by the height and width of the sprite. Even if the image is a circle, the sprite (and its collision detection) will be entirely represented as a rectangle. For the base Sprite object, only a single image is supported at a time (though the image can be changed, only one image is displayed at a time), but the sprite object could be extended to be a composite sprite object which includes multiple images (and bounding rectangles).

In every frame, the sprite's update function is called. This is meant to be overriden in extensions of the object, but the default behavior is to update the position and motion of the sprite, check if the sprite can be seen (not off screen), check for collisions, and then redraw the sprite.

## Collisions
Collisions must be checked anytime the position of a sprite is changed. By default, this is done in the update function after the position of the sprite is updated. The collision of the sprite must be checked against every other sprite currently in the scene and the borders. There are 3 functions used to do this. The first function iterates over every sprite currently in the scene and calls the second function to check if the 2 sprites have collided. If they have collided, then the third function is called which handles the collision. Lastly, the borders of the scene must be checked for collision. If one of the edges of the scene has been collided with, then the collision is handled in one of 4 ways depending on the state of the borderRule member. It will either have the sprite bounce off of the border, wrap around the border, ignore collision with the border, or die when it hits the border. 

One exception with collisions is the fact that not all sprites have to have collision detection. For this reason, all sprites have a member collidable which when set to false will not trigger collisions.

Collisions must also be checked on image change for a sprite because the new image might change the size of the sprite which could cause a collision. Therefore, after the image is changed and the new width and height are calculated, the entire collision checking process is started for the sprite.