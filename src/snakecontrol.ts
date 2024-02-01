import Snake from "./Snake";
import WorldModel from "./worldmodel";

class SnakeController {
  private snakeWorld: WorldModel;
  private slitherer: Snake;
  constructor() {
    this.snakeWorld = new WorldModel(new Snake(), 0, 0);
    this.slitherer = new Snake();
  }
  turnSnakeLeft() {
    this.slitherer.turnLeft();
  }
  turnSnakeRight() {
    this.slitherer.turnRight();
  }
  public get snakePosition() {
    return this.slitherer.position;
  }
  public get snakeDirection() {
    return this.slitherer.direction;
  }
  public get worldHeight() {
    return this.snakeWorld.Height;
  }
  public get worldWidth() {
    return this.snakeWorld.Width;
  }
}
export default SnakeController;
