import Snake from "./Snake";
class WorldModel {
  private ske: Snake;
  private width: number;
  private height: number;
  constructor(s: Snake, w: number, h: number) {
    this.ske = s;
    this.width = w;
    this.height = h;
  }
  set snake(s: Snake) {
    this.ske = s;
  }
  update(steps: number) {
    this.snake.move(steps);
  }
  public updateSnake(steps: number) {
    this.snake.move(steps);
  }
  public get Height() {
    return this.height;
  }
  public get Width() {
    return this.width;
  }
}
export default WorldModel;
