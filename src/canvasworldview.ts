import Snake from "./Snake";
import IWorldView from "./IWorldView"
import WorldModel from "./worldmodel"
//import display from "./display"
class CanvasWorldView implements IWorldView {
    private scalingFactor: number;
    private worldCanvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;
    constructor(scalingFactor:number) {
        this.scalingFactor = scalingFactor
        this.worldCanvas = document.createElement("canvas")
        this.context = this.worldCanvas.getContext("2d")!;
        document.body.appendChild(this.worldCanvas)
    }
    display(worldmodel: WorldModel): void {
         this.worldCanvas.width = worldmodel.Width * this.scalingFactor
         this.worldCanvas.height = worldmodel.Height * this.scalingFactor
        //this.context.rect(this.worldCanvas.width, this.worldCanvas.height, this.scalingFactor, this.scalingFactor)
        this.context.fillStyle = "red"
        this.context.fillRect(worldmodel.snake.position.x*this.scalingFactor,worldmodel.snake.position.y*this.scalingFactor,this.scalingFactor,this.scalingFactor)
    }
  
};
export default CanvasWorldView;