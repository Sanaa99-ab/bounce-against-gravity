window.onload = function() {

var canvas = document.getElementById("canvas");

    var context = canvas.getContext("2d");
    
    var x = 300;
    var y = 350;
    var t = Date.now();
    var speed = 25;

    context.arc(x, y, 50, 0, 2 * Math.PI);
    
    let count = 0;

    document.onkeydown = function() {
  count += 1;
  y -= 25;
}
document.ontouchstart = function() {
  count += 1;
  y -= 25;
}
    //clearing the canvas
    function draw(){
    context.clearRect(0, 0, 600, 400);
     
    //redrawing the circle   
    context.beginPath();
    context.arc(x, y, 50, 0, 2 * Math.PI);
    context.fillStyle="red";
    context.fill();

    //drawing the count value
    context.font = '25px Arial';
    context.fillStyle = 'white';
    context.fillText("Count: " + count, 20, 30);
    
    
    var timePassed = (Date.now() - t) / 1000;
t = Date.now();

if(y <= 350) {
  speed += 50 * timePassed;
  y += speed*timePassed;
}
if(y > 350) {
  speed = 25;
  count = 0
}

    
 window.requestAnimationFrame(draw);
}
draw();
    




    
    
    
    }
