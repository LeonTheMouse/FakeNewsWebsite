var numOne = document.getElementById("num-one");
var numTwo = document.getElementById("num-two");

numOne.addEventListener("input");
numTwo.addEventListener("input");

function draw(){
    var canvas = document.getElementById("tutorial");
    var ctx = canvas.getContext("2d");
    ctx.moveTo(0,0);
    ctx.fill = "#FF0000";
    ctx.fillRect(10,10,50,50);

}

draw();

