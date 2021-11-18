var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");

var ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.arc(75,75,50,0,Math.PI*2,true); // Outer circle
ctx.moveTo(110,75);
ctx.arc(75,75,35,0,Math.PI,false);   // Mouth (clockwise)
ctx.moveTo(65,65);
ctx.arc(60,65,5,0,Math.PI*2,true);  // Left eye
ctx.moveTo(95,65);
ctx.arc(90,65,5,0,Math.PI*2,true);  // Right eye
ctx.stroke();

document.querySelector("button").addEventListener("click", function() {
    html2canvas(document.querySelector("#content"), {canvas: canvas, useCORS: true, scale: 4, allowTaint: true, letterRendering: 1}).then(function(canvas) {
        console.log('Drew on the existing canvas');
        download();
    });
}, false);


// document.querySelector("#go").addEventListener("click", download());

function download(){
  var a = document.createElement('a');
  a.href = canvas.toDataURL("image/png");
  a.download = 'image.png';
  a.click();
}
