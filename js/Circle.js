import {spacing} from './Grid.js';
import {ctx} from './CanvasManager.js';
import {Shape,drawingLineWidth} from './Shape.js';

export class Circle extends Shape{
    constructor(name,x,y,radius){
        super(name,x,y);
        this.radius = radius;
    }
    Draw(){
        ctx.strokeStyle = "#000000";
        if(this.name == "hover")
            ctx.strokeStyle = "#FF0000";
        let actualX = this.x*spacing;
        let actualY = this.y*spacing;
        let actualRadius = Math.floor(this.radius*spacing);
        ctx.beginPath();
        ctx.arc(actualX,actualY,actualRadius, 0, 2 * Math.PI);
        ctx.lineWidth = drawingLineWidth;
        ctx.stroke();
        ctx.strokeStyle = "#000000";
    }
}