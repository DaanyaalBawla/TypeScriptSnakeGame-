import display from "./display";

// place your code on line 5 above the export statement below

class Snake {
  private currentPosition: number;
  private currentDirection: number;
  constructor() {
    this.currentPosition = 0;
    this.currentDirection = 1;
  }
  move(move: number) {
    display("The snake is moving", move, "times");
    if (this.currentDirection === 1) {
      this.currentPosition = this.currentPosition + move;
    } else if (this.currentDirection === -1) {
      this.currentPosition = this.currentPosition - move;
    }
  }
  turn(turn: number) {
    display("The snake is turning", turn);
    if (turn === 1) {
      this.currentDirection = 1;
    } else if (turn === -1) {
      this.currentDirection = -1;
    } else {
      this.currentDirection = 0;
    }
  }
  public get position() {
    return this.currentPosition;
  }
}
export default Snake;
