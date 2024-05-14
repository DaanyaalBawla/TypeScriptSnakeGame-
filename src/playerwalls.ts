import player from "./player";
import SnakeController from "./snakecontrol";
class AvoidWallsPlayer extends player {
  constructor(snakeController: SnakeController) {
    super(snakeController);
  }
  makeTurn(): any {
    if (
      this.sc.snakeDirection === -1 &&
      this.sc.snakePosition.x <= this.sc.worldWidth / 2 &&
      this.sc.snakePosition.y === this.sc.worldHeight-1
    ) {
      this.sc.turnSnakeLeft();
    }
    else if (
      this.sc.snakeDirection === -1 &&
      this.sc.snakePosition.y === this.sc.worldHeight-1 
    ) {
      this.sc.turnSnakeRight()
    }
    else if (
      this.sc.snakeDirection === 1 &&
      this.sc.snakePosition.x <= this.sc.worldWidth / 2   &&
      this.sc.snakePosition.y == 0
      ) {
        this.sc.turnSnakeRight()
      }
      else if (
        this.sc.snakeDirection === 1 && this.sc.snakePosition.y == 0
        ) {
          this.sc.turnSnakeLeft()
        }
      else if (
        this.sc.snakeDirection === -2 &&
        this.sc.snakePosition.x === this.sc.worldWidth-1  &&
        this.sc.snakePosition.y <= this.sc.worldHeight / 2
        ) {
        this.sc.turnSnakeRight()
       }
      else if (
      this.sc.snakeDirection === -2 &&
      this.sc.snakePosition.x === this.sc.worldWidth-1 
      ) {
        this.sc.turnSnakeLeft()
       } 
      else if (
        this.sc.snakeDirection === 2 &&
        this.sc.snakePosition.x === 0 &&
        this.sc.snakePosition.y <= this.sc.worldHeight / 2
      ) {
        this.sc.turnSnakeLeft()
      }
      else if (
        this.sc.snakeDirection === 2 &&
        this.sc.snakePosition.x === 0
      ) {
        this.sc.turnSnakeRight()
      }
  }
}
export default AvoidWallsPlayer;
/*
* Whenever a snake hits a certain postion on the world this will force them to turn so they stay in the canvas.
* Use direction, x for where they are on the x plane, and y to see where they are on the y plane. 
* *They could at any of the 4 sides then we have to see if they're on the top or bottom or left or right sides to decide the direction
*/
// compass: up = 1, right = -2, down = -1, left = 2 
