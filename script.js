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

var fonts = ["none", "raleway"];

var dropdown = document.getElementById("fonts");
for(var i = 0; i < fonts.length; i++) {
    var opt = fonts[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    dropdown.appendChild(el);
}

function updatePosition() {
  var position = document.getElementById("position").value + "%";
  console.log("position: " + position);
  document.getElementById("slide").style.top = position;
}

function updateSize() {
  var size = document.getElementById("fontSize").value;
  var largerSize = size*1 + 5;
  size = size + "px";
  largerSize = largerSize + "px";
  console.log("size: " + size);
  document.getElementById("name").style.fontSize = size;
  document.getElementById("name").style.lineHeight = largerSize;
  document.getElementById("name").style.height = largerSize;
}

function changeFont(){
  console.log("changeFont");
  removeFonts();
  let newFont = document.getElementById('fonts').value;
  console.log("newFont: " + newFont);
  document.getElementById("name").classList.add(newFont);
}

function changePosition() {
  document.getElementById("name").style.color = "blue";
}

function  removeFonts(){
  for(var i = 0; i < fonts.length; i++) {
    var element = document.getElementById("name");
    element.classList.remove(fonts[i]);
  }
}

document.querySelector("#generate").addEventListener("click", function(){
  var name = document.getElementById("nameInput").value.toUpperCase();
  console.log("name: " + name);
document.getElementById("name").innerHTML = name;
document.getElementById("letter").innerHTML = name[0];
})

document.querySelector("#create").addEventListener("click", function() {
    html2canvas(document.querySelector("#content"), {
      canvas: canvas,
      useCORS: true,
      scale: 7,
      allowTaint: true,
      letterRendering: true
    }).then(function(canvas) {
        console.log('Canvas Generated');
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
