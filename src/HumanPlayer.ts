import Player from "./player"
import SnakeController from "./snakecontrol";
import lrKeyinputhandler from "./LRKeyInputHandler"
//import iinputHandler from "./IInputHandler";
class HumanPlayer extends Player {
    protected in: lrKeyinputhandler
    constructor(snakeController: SnakeController, iinputHandler: lrKeyinputhandler) {
        super(snakeController);
      this.in = iinputHandler
      }
    makeTurn(): void {
      if (
        this.in.madeLeftMove()
      )
      {
        this.sc.turnSnakeLeft()
        this.in.resetLeftMove()
      }
      else if (
        this.in.madeRightMove()
      )
      {
        this.sc.turnSnakeRight()
        this.in.resetRightMove()
      }
    }
}

export default HumanPlayer;
/**
 * Here is where we connect snakecontroller and inputhandler. using made_move to see what arrow was pressed then correlating that to the snake moving right or left
 * we use sc because like how in refers to iiinputhandler, sc refers to snakecontroller, this was established in the abstract player class. 
 */