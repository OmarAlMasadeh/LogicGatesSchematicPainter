import {spacing} from './Grid.js';
import {ctx} from './CanvasManager.js';
import {Shape,drawingLineWidth} from './Shape.js';

export class AndGate extends Shape{
    constructor(name,x,y,n){
        super(name,x,y);
        this.n = n
        
        //TODO add input / output coordiantes
    }
    Draw(){
        let size = this.n + 2;
        if(size%2!=0){
            size=size-1;
        }
        let startPoint = {
            x:this.x*spacing,
            y:this.y*spacing
        };
        ctx.strokeStyle = "#000000";
        if(this.name == "hover")
            ctx.strokeStyle = "#FF0000";

        ctx.beginPath();
        ctx.moveTo(startPoint.x,startPoint.y);
        ctx.lineTo(startPoint.x,startPoint.y+(size*spacing));
        ctx.lineTo(startPoint.x+(4*spacing),startPoint.y+(size*spacing));
        ctx.moveTo(startPoint.x+(4*spacing),startPoint.y);
        ctx.arc(startPoint.x+(4*spacing),startPoint.y+(size*spacing)/2,(size*spacing)/2,-Math.PI/2,Math.PI/2);
        ctx.moveTo(startPoint.x+(4*spacing),startPoint.y);
        ctx.lineTo(startPoint.x,startPoint.y);
        ctx.lineWidth = drawingLineWidth;
        ctx.stroke();

        ctx.strokeStyle = "#000000";
    }
}
