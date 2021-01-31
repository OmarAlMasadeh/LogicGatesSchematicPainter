import {drawScene} from './Scene.js';

export const canvas = document.getElementById("cv");
export const ctx = canvas.getContext("2d");

resizeCanvas(); //initial resize

// Resize canvas everytime the window resizes to avoid pixelation
// it clears the canvas on resize
window.addEventListener('resize', resizeCanvas);
function resizeCanvas(){
    canvas.width=window.innerWidth*0.85-44;
    canvas.height= window.innerHeight - 44;
    drawScene();
}

CanvasRenderingContext2D.prototype.clear = 
  CanvasRenderingContext2D.prototype.clear || function (preserveTransform) {
    if (preserveTransform) {
      this.save();
      this.setTransform(1, 0, 0, 1, 0, 0);
    }

    this.clearRect(0, 0, this.canvas.width, this.canvas.height);

    if (preserveTransform) {
      this.restore();
    }           
};
