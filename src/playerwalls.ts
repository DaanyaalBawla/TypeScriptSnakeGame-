import player from "./player";
import SnakeController from "./snakecontrol";
class AvoidWallsPlayer extends player {
  constructor(snakeController: SnakeController) {
    super(snakeController);
  }
  moveTurn(): void {
    if (
      this.sc.snakeDirection === -1 &&
      this.sc.snakePosition.x === 0 &&
      this.sc.snakePosition.y < this.sc.worldHeight
    ) {
      this.sc.turnSnakeLeft();
    }
  }
}
export default AvoidWallsPlayer;
