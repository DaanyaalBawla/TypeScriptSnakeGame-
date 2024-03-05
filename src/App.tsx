import "./App.css";
import "./App.css";
import Snake from "./Snake";
import display from "./display";
import { useEffect } from "react";
import WorldModel from "./worldmodel";
import CanvasWorldView from "./canvasworldview"
import "./index.css"

export default function App() {
  // Add Snake Tests with display below
  useEffect(() => {
    // Include your display statements to test below
    document.getElementById("output")!.innerText = "OUTPUT:\n";
    display("hey");
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
    WorldModel_.WorldView = CanvasWorldView_
    WorldModel_.update(1)

  }, []);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <pre id="output">
       OUTPUT: <br />
      </pre>
    </div>
  );
}
