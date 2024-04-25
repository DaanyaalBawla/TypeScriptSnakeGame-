import WorldModel from "./worldmodel";
interface IWorldView {
    display(worldModel: WorldModel): void;
}
export default IWorldView;
