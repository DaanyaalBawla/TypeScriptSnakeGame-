import player from "./player";
import WorldModel from "./worldmodel";
//import HumanPlayer from "./HumanPlayer";
//import exp from "constants";
class GameController {
    private _world: WorldModel;
    private _player1: player;
    private _player2: player;

    constructor(W: WorldModel, p: player) {
        this._world = W
        this._player1 = p
        this._player2 = p
    }
    
    set player1(p: player) {
        this._player1 = p;
    }
    set player2(p: player){
        this._player2 = p;

    }
    run() {
       let lasttime = 0
       const updateframe = (miliseconds: number) => {
        if ( 
            miliseconds - lasttime > 150
                )
        {
        this._player1.makeTurn()
        this._player2.makeTurn()
        this._world.update(1)
        lasttime = lasttime + 150 
        }
        requestAnimationFrame(updateframe)
    };
    requestAnimationFrame(updateframe)
}
}
export default GameController