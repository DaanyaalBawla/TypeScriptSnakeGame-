import Snake from "./Snake";
import IWorldView from "./IWorldView"
import WorldModel from "./worldmodel"
//import display from "./display"
/*
* CanvasWorldView needs display method, gets it from IworldView
*/
class CanvasWorldView implements IWorldView {
    private scalingFactor: number;
    private worldCanvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;
/*
* Scaling factor: how much to scale the canvas
* worldCanvas stores reference to canvas
* context takes canvas and actually displays it, ! means can not be null
*/
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
/*
* all the specs of the canvas, (snake head), pick color, size and drawing a shape with those specs
*/
};
export default CanvasWorldView;