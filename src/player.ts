import display from "./display";
import SnakeController from "./snakecontrol";
abstract class player {
  protected sc: SnakeController;
  constructor(SnakeController: SnakeController) {
    this.sc = SnakeController;
  }
  abstract moveTurn(): void;
}
export default player;
