import Snake from "./Snake";
import IWorldView from "./IWorldView"
import display from "./display"
class WorldModel {
  private ske: Snake;
  private width: number;
  private height: number;
  private worldView: IWorldView | null;
    constructor(s: Snake, w: number, h: number) {
    this.ske = s;
    this.width = w;
    this.height = h;
    this.worldView = null;
  }
  get snake() {
    return this.ske;
  }
  update(steps: number) {
    this.ske.move(steps);
    if (this.worldView != null) {
      this.worldView.display(this) 
    }
  }
  public get Height() {
    return this.height;
  }
  public get Width() {
    return this.width;
  }
  set WorldView(worldview:IWorldView)
  {
    this.worldView = worldview;
  }
}
export default WorldModel;
