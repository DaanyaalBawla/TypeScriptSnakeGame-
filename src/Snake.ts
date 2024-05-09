import display from "./display";

// place your code on line 5 above the export statement below
/*
* Direction is whether it's backwards or forwards. 1=forwards, -1=backwards, later changed to 4 directions
* Position is the point on a coorodinate plane. Uses Point class
*/
class Snake {
  private currentPosition: Point;
  private currentDirection: number;
  private point: Point;
  constructor() {
    this.currentPosition = new Point(0, 0);
    this.currentDirection = 1;
    this.point = new Point(0, 0);
  }

  move(move: number) {
    console.log("The snake is moving", move, "times");
    if (this.currentDirection === 1) {
      this.currentPosition = new Point(
        this.currentPosition.x,
        this.currentPosition.y - move,
      );
    } else if (this.currentDirection === -1) {
      this.currentPosition = new Point(
        this.currentPosition.x,
        this.currentPosition.y + move,
      );
    } else if (this.currentDirection === 2) {
      this.currentPosition = new Point(
        this.currentPosition.x - move,
        this.currentPosition.y,
      );
    } else if (this.currentDirection === -2) {
      this.currentPosition = new Point(
        this.currentPosition.x + move,
        this.currentPosition.y,
      );
    }
  }
  /**
   * @deprecated use {@turnLeft} and {@turnRight} instead
   */
  turn() {
    display("The snake is turning");
    if (this.currentDirection === -1) {
      this.currentDirection = 1;
    } else if (this.currentDirection === 1) {
      this.currentDirection = -1;
    }
  }

  // compass: up = 1, right = -2, down = -1, left = 2 

  turnLeft() {
    console.log("The snake is turning");
    if (this.currentDirection === -1) {
      this.currentDirection = -2;
    } else if (this.currentDirection === 1) {
      this.currentDirection = 2;
    } else if (this.currentDirection === 2) {
      this.currentDirection = -1;
    } else if (this.currentDirection === -2) {
      this.currentDirection = 1;
    }
  }
  turnRight() {
    console.log("The snake is turning");
    if (this.currentDirection === -1) {
      this.currentDirection = 2;
    } else if (this.currentDirection === 1) {
      this.currentDirection = -2;
    } else if (this.currentDirection === 2) {
      this.currentDirection = 1;
    } else if (this.currentDirection === -2) {
      this.currentDirection = -1;
    }
  }

  public get position() {
    return this.currentPosition;
  }
  public get direction() {
    return this.currentDirection;
  }
}
class Point {
  private xcoord: number;
  private ycoord: number;
  constructor(x: number, y: number) {
    this.xcoord = x;
    this.ycoord = y;
  }
  public get x(): number {
    return this.xcoord;
  }
  public get y(): number {
    return this.ycoord;
  }
}
export default Snake;

// compass: N = 1, E = -2, S = -1, W = 2
