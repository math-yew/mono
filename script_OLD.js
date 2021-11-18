// import html2canvas from 'html2canvas';
// const html2canvas = require('../../../node_modules/html2canvas');

// var divX2=document.createElement('canvas');
var divX2 = document.querySelector("canvas");
divAt2X('#download',1.5);

$('#go').on('click',function(){
    // save
    var a = document.createElement('a');
    a.href = divX2.toDataURL("image/png");
    a.download = 'image.png';
    a.click();
});
//
// function divAt2X(id,upscale){
//     var w=$(id).width();
//     var h=$(id).height();
//     html2canvas($(id),{
//         onrendered:
//             function(canvasDiv){
//                 // scale up
//                 ctx=divX2.getContext('2d');
//                 divX2.width=w*upscale;
//                 divX2.height=h*upscale;
//                 ctx.scale(upscale,upscale);
//                 ctx.drawImage(canvasDiv,0,0);
//             }
//         }
//     );
// }


function divAt2X(id,upscale){
    var w=$(id).width();
    var h=$(id).height();
    // html2canvas($(id))
    console.log(divX2);
    html2canvas(document.querySelector("#download"), {canvas: document.querySelector("canvas"), scale: 1})
      .then(canvasDiv=>{
          ctx=divX2.getContext('2d');
          divX2.width=w*upscale;
          divX2.height=h*upscale;
          ctx.scale(upscale,upscale);
          ctx.drawImage(canvasDiv,0,0);
        });

        // var container = document.body; // full page
        // 			html2canvas(container, {canvas: canvas, scale: 1})
        //       .then(function(canvas) {
        //                 var link = document.createElement("a");
        //                 document.body.appendChild(link);
        //                 link.download = "html_image.png";
        //                 link.href = canvas.toDataURL("image/png");
        //                 link.target = '_blank';
        //                 link.click();
        //               });


    }


function test(){
  alert("TEST!");
}
