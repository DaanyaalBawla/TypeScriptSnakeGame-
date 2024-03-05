import WorldModel from "./worldmodel";
interface IWorldView {
    display(worldmodel: WorldModel): void;
}
export default IWorldView;
