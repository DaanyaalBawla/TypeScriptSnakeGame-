import "./App.css";
import Snake from "./Snake";
import display from "./display";
import { useEffect } from "react";
import WorldModel from "./worldmodel";
import CanvasWorldView from "./canvasworldview"
import "./index.css"
import GameController from "./GameController";
import HumanPlayer from "./HumanPlayer";
import player from "./player";
import AvoidWallsPlayer from "./playerwalls";
import SnakeController from "./snakecontrol";
import LRKeyInputHandler from "./LRKeyInputHandler";
import { SignatureKind } from "typescript";
import { start } from "repl";


export default function App() {
  // Add Snake Tests with display below
  useEffect(() => {
    // Include your display statements to test below
    document.getElementById("output")!.innerText = "OUTPUT:\n";
    display("This area was used at the start to test the snake's movement on a coodinate plane.");
    const snake1 = new Snake();
    snake1.turnRight();
    snake1.move(1);
    //snake1.turnRight();
    //snake1.move(1);
    //snake1.turnLeft();
    //snake1.move(1);
    const currentspace = snake1.position.x + "," + snake1.position.y;
    display("Snake's current position is", currentspace);
    const WorldModel_ = new WorldModel(snake1, 30,30);
    const CanvasWorldView_ = new CanvasWorldView(5)
    const snakecontroller = new SnakeController(WorldModel_, snake1)
    const playerAI = new AvoidWallsPlayer(snakecontroller)
    const human = new HumanPlayer(snakecontroller, new LRKeyInputHandler) 
    const startgame = new GameController(WorldModel_,human)
    startgame.player2 = playerAI
    startgame.player1 = human
    WorldModel_.WorldView = CanvasWorldView_
    WorldModel_.update(1)
    startgame.run()
  }, []);
  return (
    <div className="App">
      <h1>Snake Game</h1>
      <h2>Project by Daanyaal Bawla</h2>
      <pre id="output">
       OUTPUT: <br />
      </pre>
    </div>
  );
}
