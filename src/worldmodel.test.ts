import Snake from "./Snake";
class WorldModel {
  private ske: Snake;
  constructor(s: Snake) {
    this.ske = s;
  }
  set snake(s: Snake) {
    this.ske = s;
  }
  update(steps: number) {
    this.ske.move(steps);
  }
}
export default WorldModel;
