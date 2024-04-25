import player from "./player";
import WorldModel from "./worldmodel";
import HumanPlayer from "./HumanPlayer";
import exp from "constants";
class GameController {
    protected _world: WorldModel
    private _player1: player;
    private _player2: player;
    constructor(W: WorldModel, p: player) {
         this._world = W
         this._player1 = p
         this._player2 = p
    }
   // public set player1() {
   //     this._player1
    //}
    //public set player2() {
    //    this._player2
   // }
    run() {
       const lasttime = 0
    }
    updateframe() {
        this._player1.makeTurn()
        this._player2.makeTurn()
        if ( 
            Date.now() > 250
        
        )
        {
        this._world.update
        
        }
        requestAnimationFrame(this.run)
    }
}
export default GameController