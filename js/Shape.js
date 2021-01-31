import {spacing} from './Grid.js';
import {ctx} from './CanvasManager.js';
const drawingLineWidth = 3;

class Shape{
    constructor(name,x,y){
        this.name = name;
        this.x = x;
        this.y = y;
    }
    Draw() {
        //TODO
    }
}
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
export class NandGate extends Shape{
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
        ctx.arc(startPoint.x+(4*spacing),startPoint.y+(size*spacing)/2,(size*spacing)/2,-Math.PI/2,0);
        ctx.arc(startPoint.x+(6*spacing)+spacing/2,startPoint.y+(size*spacing)/2,spacing/2,Math.PI,Math.PI*-1);
        ctx.arc(startPoint.x+(4*spacing),startPoint.y+(size*spacing)/2,(size*spacing)/2,0,Math.PI/2);
        ctx.moveTo(startPoint.x+(4*spacing),startPoint.y);
        ctx.lineTo(startPoint.x,startPoint.y);        
        ctx.lineWidth = drawingLineWidth;
        ctx.stroke();

        ctx.strokeStyle = "#000000";
    }
}