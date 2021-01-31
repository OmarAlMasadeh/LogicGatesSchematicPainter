import {canvas,ctx} from "./CanvasManager.js";
export let spacing = 40;

export function drawPoint(x, y){
    ctx.fillRect(x-1,y-1,2,2);
}

export function drawPointGrid(){
    //let t0 = performance.now()
    for(let i = 0; i<canvas.width ; i+=spacing)
        for(let j = 0 ;j<canvas.height;j+=spacing)
            drawPoint(i,j);
    //let t1 = performance.now();
    //console.log("drawing Point grid took " + (t1 - t0) + " milliseconds.");
}

export function setSpacing(s){
    spacing = Math.min(Math.max(s, 20), 60);
}