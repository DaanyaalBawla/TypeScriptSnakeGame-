import SnakeController from './snakecontrol';
import AvoidWallsPlayer from './playerwalls';
import WorldModel from './worldmodel';
import Snake from './Snake';
import CanvasWorldView from './canvasworldview';
import GameController from './GameController';

describe('Player walls testing', () => {
  let snakeController: SnakeController;
  let avoidWallsPlayer: AvoidWallsPlayer;
  let snake: Snake;
  let worldmodel: WorldModel;

  beforeEach(() => {
    snake = new Snake;
    worldmodel = new WorldModel(snake, 30,30)
    snakeController = new SnakeController(worldmodel,snake);
    avoidWallsPlayer = new AvoidWallsPlayer(snakeController);
  });

  it('should turn the snake left when moving up and reaching the top wall on the left side', () => {
    snake.move(snakeController.worldHeight / 2 - 1); // Move snake to top left
    avoidWallsPlayer.makeTurn();
    expect(snake.direction).toBe(2);
  });

  it('should turn the snake right when moving up and reaching the top wall on the right side', () => {
    snake.move(snakeController.worldHeight / 2 - 1); // Move snake to top
    snake.turnRight(); // Face right
    snake.move(snakeController.worldWidth / 2); // Move to top right
    avoidWallsPlayer.makeTurn();
    expect(snake.direction).toBe(-2);
  });


});