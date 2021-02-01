import {spacing} from './Grid.js';
import {ctx} from './CanvasManager.js';
import {Shape,drawingLineWidth} from './Shape.js';

export class NotGate extends Shape{
    constructor(name,x,y){
        super(name,x,y);
        //TODO add input / output coordiantes
    }
    Draw(){
        let startPoint = {
            x:this.x*spacing,
            y:this.y*spacing
        };
        let point1 = {
            x:startPoint.x+(2*spacing-(spacing/2.5)),
            y:startPoint.y+spacing
        };
        let point2 = {
            x:startPoint.x,
            y:startPoint.y+2*spacing
        };
        let circle = {
            x:point1.x+spacing/5,
            y:point1.y,
            radius:spacing/5
        }
        ctx.strokeStyle = "#000000";
        if(this.name == "hover")
            ctx.strokeStyle = "#FF0000";
        ctx.beginPath();
        ctx.moveTo(startPoint.x,startPoint.y);
        ctx.lineTo(point1.x,point1.y);
        ctx.moveTo(circle.x+circle.radius, circle.y);
        ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
        ctx.moveTo(point1.x,point1.y);
        ctx.lineTo(point2.x,point2.y);
        ctx.lineTo(startPoint.x,startPoint.y);
        ctx.lineWidth = drawingLineWidth;
        ctx.stroke();
    }
}