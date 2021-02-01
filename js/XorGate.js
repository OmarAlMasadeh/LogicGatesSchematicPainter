import {spacing} from './Grid.js';
import {ctx} from './CanvasManager.js';
import {Shape,drawingLineWidth} from './Shape.js';

export class XorGate extends Shape{
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
        ctx.arc(startPoint.x-(spacing*4),startPoint.y+(size*spacing)/2,size*spacing,-Math.PI/6,Math.PI/6);
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.arc(startPoint.x-(spacing*3),startPoint.y+(size*spacing)/2,size*spacing,-Math.PI/6,Math.PI/6);
        ctx.lineTo(startPoint.x+(4*spacing),startPoint.y+(size*spacing));
        ctx.moveTo(startPoint.x+(6*spacing),startPoint.y+(this.n*spacing));
        ctx.arc(startPoint.x+(4*spacing-(size*spacing)/2),startPoint.y+(size*spacing),2.236067*(size*spacing)/2,-0.144444*Math.PI,-0.352*Math.PI ,true);
        ctx.moveTo(startPoint.x+(6*spacing),startPoint.y+(this.n*spacing));
        ctx.arc(startPoint.x+(4*spacing-(size*spacing)/2),startPoint.y,2.236067*(size*spacing)/2,0.144444*Math.PI,0.352*Math.PI ,false);
        ctx.moveTo(startPoint.x+(4*spacing),startPoint.y);
        ctx.lineTo(startPoint.x+spacing/2,startPoint.y);
        ctx.lineWidth = drawingLineWidth;
        ctx.stroke();

        ctx.strokeStyle = "#000000";
    }
}