/**
 * event listener: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key#Result
 */
import IInputHandler from "./IInputHandler" 
class LRKeyInputHandler implements IInputHandler {
    private wasLeftArrowPushed: boolean;
    private wasRightArrowPushed: boolean;
    constructor() {
        this.wasLeftArrowPushed = false;
        this.wasRightArrowPushed = false;
        window.addEventListener("keydown", ({ key }) => {
            if (key === "ArrowLeft") {
            this.wasLeftArrowPushed = true;
          }
          if (key === "ArrowRight") {
            this.wasRightArrowPushed = true;
          }
        });
    }
    madeLeftMove(): boolean  {
        return this.wasLeftArrowPushed
    }
    madeRightMove(): boolean {
        return this.wasRightArrowPushed
    }
    resetLeftMove(): void {
        this.wasLeftArrowPushed = false;
    }
    resetRightMove(): void {
        this.wasRightArrowPushed = false;

    } 

}
export default LRKeyInputHandler;

/**
 * Snakecontroller's left and right does not have to do with this class. This class refers to player input, all references to snake controller removed
 * meaning of {key}: using the brackets is destructuring, It extracts just the "key" property from the event object "keydown"
 * made moves are assigned boolean types due to having to return either true or false
 * reset moves use type void because they return false/ make wasarrowpushed to false
 */