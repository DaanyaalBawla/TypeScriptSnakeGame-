import Snake from "./Snake";
import WorldModel from "./worldmodel";

class SnakeController {
  private snakeWorld: WorldModel;
  private slitherer: Snake;
  constructor(w:WorldModel) {
    //this.snakeWorld = new WorldModel(new Snake(), 0, 0);
    this.slitherer = new Snake();
    this.snakeWorld = w
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
  set wmode(w:WorldModel) {
    this.snakeWorld = w
  }
}
export default SnakeController;
