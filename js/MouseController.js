import {canvas , ctx} from './CanvasManager.js';
import {spacing,setSpacing,drawPointGrid} from './Grid.js';
import {drawScene,addShapeToScene} from './Scene.js';
import {Circle,AndGate,NotGate,NandGate} from './Shape.js';

canvas.addEventListener('wheel',onWheel);
canvas.addEventListener('mousemove',drawHover);
canvas.addEventListener('click',onClick);

let selectedTool = "cursor-btn";
let btns = document.getElementsByClassName("toolbar-btn");
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click',btnClick);
  }

function btnClick(e){
    for (let i = 0; i < btns.length; i++) {
        btns[i].classList.remove("selected");
        btns[i].classList.add("unselected");
      }
    e.toElement.classList.remove("unselected");
    e.toElement.classList.add("selected");
    selectedTool= e.toElement.id;
}

let oldX = 0;
let oldY = 0;

function getMousePos(e){
    let rect = canvas.getBoundingClientRect();
    return {
        x:e.clientX - rect.left,
        y:e.clientY - rect.top
    };
}

function drawHover(e){
    let pos = getMousePos(e);
    let {x, y} = nearestGridPoint(pos.x,pos.y);
    //Only redraw if value changed
    if(x != oldX || y != oldY){
        oldX = x;
        oldY = y;
        ctx.clear();
        drawScene();
        let shape;
        if(selectedTool == "cursor-btn")
            shape = new Circle("hover",x,y,0.25).Draw();
        if(selectedTool == "and-btn")
            shape = new AndGate("hover",x,y,2).Draw();
        if(selectedTool == "nand-btn")
            shape = new NandGate("hover",x,y,2).Draw();
        if(selectedTool == "not-btn")
            shape = new NotGate("hover",x,y).Draw();
    }
}

function nearestGridPoint(x,y){
    return{
        x: Math.round(x/spacing),
        y: Math.round(y/spacing)
    };
}

function onClick(e){
    let pos = getMousePos(e);
    let {x, y} = nearestGridPoint(pos.x,pos.y);
    //if(selectedTool == "cursor-btn")
        //addShapeToScene(new Circle("c_"+x+"_"+y,x,y,0.25));
    if(selectedTool == "and-btn")
        addShapeToScene(new AndGate("c_"+x+"_"+y,x,y,2));
    if(selectedTool == "nand-btn")
        addShapeToScene(new NandGate("c_"+x+"_"+y,x,y,2));
    if(selectedTool == "not-btn")
        addShapeToScene(new NotGate("c_"+x+"_"+y,x,y));
}

function onWheel(e){
    e.preventDefault();
    setSpacing(spacing - (e.deltaY*0.1));
    drawScene();
}