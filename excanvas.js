function init(){
  var canvas = document.getElementById("canvas");
  if (canvas.getContext){
    var context = canvas.getContext("2d");
    context.fillStyle = "pink";
    context.fillRect(0, 0, canvas.width, canvas.height);
// the first element is the coordinate on x axis, 
// the second one is coordinate for y axis,
// and the last two numbers is the size
// or number of pixels for each side
    context.fillStyle = "salmon";
    context.fillRect(10, 10, 40, 40);

    context.lineWidth = 5;
    context.fillStyle = "red";
    context.strokeRect(20, 20, 20, 20);
    context.fillStyle = "#f19cbb"
    // for drawing a circle you need to describe a path
    context.beginPath();
    // the first two values are the x and y coordinates
    // the third one is the radius
    // the fourth one is the starting angle
    // for perfect circles use the Math.PI as below 
    // the last value means: true=will go counterclock wise, the false=clock wise
    context.arc(100, 100, 50, 0, Math.PI*2, true)
    context.fill();

    // making polygons
    context.beginPath();
    context.moveTo(350, 200);
    context.lineTo(400, 50);
    context.lineTo(450, 200);
    context.closePath();
    context.fill();

    // creating lienar gradients
    var linGrad = context.createLinearGradient(400, 100, 500, 500);
    // the colorStop first value goes between 0 and 1
    linGrad.addColorStop(0, "#F19CBB");
    linGrad.addColorStop(0.3, "#9F2B68");
    linGrad.addColorStop(0.6, "#FF033E");
    linGrad.addColorStop(0.9, "#841B2D");
    context.fillStyle = linGrad;
    context.fillRect(200, 100, 100, 100);

    // creating the fillstyle with rgba option
    // it lets you define the amount of red, green, blue, and the last value is the opacity
    context.fillStyle = "rgba(10, 150, 255, 0.1)";
    context.fillRect(200, 220, 100, 100);

    // creating round gradient
    var radGrad = createRadialGradient(275, 250, 5, 290, 260, 100);
    radGrad.addColorStop(0, "#F19CBB");
    radGrad.addColorStop(0.3, "#9F2B68");
    radGrad.addColorStop(0.6, "#FF033E");
    radGrad.addColorStop(0.9, "#841B2D");
    context.fillStyle = radGrad;
    context.arc(50, 50, 50, 0, Math.PI*2, true)
    context.fill();

    // making text appear in <canvas>
    context.font = "bold 40px Arial";
    context.fillStyle = "black";
    context.fillText("Hello!", 500, 500);


  }
}

onload = init();