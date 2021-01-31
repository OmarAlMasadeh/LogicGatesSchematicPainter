
import {drawPointGrid} from "./Grid.js";
import {canvas,ctx} from "./CanvasManager.js";

let SceneGraph = [];
export function drawScene(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPointGrid();
    SceneGraph.forEach(shape => {
        shape.Draw();
    });
}

export function addShapeToScene(shape){
    SceneGraph.push(shape);
}