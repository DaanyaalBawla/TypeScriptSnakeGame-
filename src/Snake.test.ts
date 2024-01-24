import Snake from "./Snake";
import display from "./display";
/*
const moveSnakes = (times: number, turn: boolean = false) => {
  const greenSnake = new Snake();
  const maroonSnake = new Snake();
  let totalSquares = 0;

  for (let i = 0; i < times; i++) {
    const numSquares1 = Math.floor(Math.random() * 100);
    const numSquares2 = Math.floor(Math.random() * 100);
    greenSnake.move(numSquares1);
    maroonSnake.move(numSquares2);
    greenSnake.move(5);
    totalSquares += numSquares2;
    if (turn) {
      const numSquares3 = Math.floor(Math.random() * 100);
      const numSquares4 = Math.floor(Math.random() * 10);
      //greenSnake.turn();
      greenSnake.turnLeft();
      //maroonSnake.turn();
      maroonSnake.turnRight();
      maroonSnake.move(numSquares3);
      totalSquares -= numSquares3;
      greenSnake.move(numSquares3);
      //maroonSnake.turn();
      // maroonSnake.turn();
      //maroonSnake.turn();
      maroonSnake.move(numSquares4);
      totalSquares += numSquares4;
    }
  }

  return {
    actual: maroonSnake.position,
    expected: totalSquares,
  };
};

describe("Snake Tests", function () {
  const outputElement = document.createElement("div");
  outputElement.id = "output";
  document.body.appendChild(outputElement);
  const tests = [0, 3, 10, 4].map((num, index) => moveSnakes(num, index > 2));

  const testDescriptions = [
    "starts with the correct position of 0",
    "has the correct position after 3+ random moves",
    "has the correct position after 10+ random moves",
    "has the correct position after 4+ random moves with turns",
  ];

  testDescriptions.forEach((description, index) => {
    it(description, () =>
      expect(tests[index].expected).toBe(tests[index].actual),
    );
  });
});

describe("Addition", function () {
  it("sums numbers", () => {
    expect(1 + 1).toEqual(2);
  });
});

export {};
*/

describe("Snake Tests", () => {
  let snake: Snake;

  beforeEach(() => {
    snake = new Snake();
  });

  it("starts with the correct position of 0", () => {
    expect(snake.position.x).toBe(0);
    expect(snake.position.y).toBe(0);
  });
  it("The snake moves a random amount.", () => {
    const rannum = Math.floor(Math.random() * 10);
    snake.move(rannum);
    expect(snake.position.x).toBe(0);
    expect(snake.position.y).toBe(rannum);
  });
  it("The snake turns right and moves.", () => {
    snake.turnRight();
    snake.move(1);
    expect(snake.position.x).toBe(1);
    expect(snake.position.y).toBe(0);
  });
});
export {};
