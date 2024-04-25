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
      this.sc.snakePosition.y == this.sc.worldHeight-1
    ) {
      this.sc.turnSnakeLeft();
    }
    else if (
      this.sc.snakeDirection === -1 &&
      this.sc.snakePosition.y == this.sc.worldHeight-1 
    ) {
      this.sc.turnSnakeRight()
    }
    else if (
      this.sc.snakeDirection === 1 &&
      this.sc.snakePosition.x <= this.sc.worldWidth  &&
      this.sc.snakePosition.y == this.sc.worldHeight-1
      ) {
        this.sc.turnSnakeRight()
      }
      else if (
        this.sc.snakeDirection === 1 &&
        this.sc.snakePosition.y == this.sc.worldHeight-1
        ) {
          this.sc.turnSnakeLeft()
        }
      else if (
        this.sc.snakeDirection === -2 &&
        this.sc.snakePosition.x == this.sc.worldWidth-1  &&
        this.sc.snakePosition.y <= this.sc.worldHeight / 2
        ) {
        this.sc.turnSnakeLeft()
       }
      else if (
      this.sc.snakeDirection === -2 &&
      this.sc.snakePosition.x == this.sc.worldWidth-1 
      ) {
        this.sc.turnSnakeRight()
       } 
      else if (
        this.sc.snakeDirection === 2 &&
        this.sc.snakePosition.x == this.sc.worldWidth-1 &&
        this.sc.snakePosition.y <= this.sc.worldHeight / 2
      ) {
        this.sc.turnSnakeRight()
      }
      else if (
        this.sc.snakeDirection === 2 &&
        this.sc.snakePosition.x == this.sc.worldWidth-1
      ) {
        this.sc.turnSnakeLeft()
      }
  }
}
export default AvoidWallsPlayer;
// compass: N = 1, E = -2, S = -1, W = 2