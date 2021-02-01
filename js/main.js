import {canvas} from './CanvasManager.js';
import {} from './MouseController.js';
import {} from './Grid.js';

let savebtn = document.getElementById('save-btn');
savebtn.addEventListener('click',(e)=>{
    let dataURL = canvas.toDataURL();
    const savedImg = document.createElement("img");
    savedImg.src=dataURL;
    savedImg.style.display="none";
    document.body.appendChild(savedImg);
    const a = document.createElement("a");
    a.download = "LGSP_Img_" + Math.floor(Math.random() * 101);  
    a.href = savedImg.src;
    a.style.display="none";
    document.body.appendChild(a);
    a.click();
})
