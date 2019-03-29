var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

var x = canvas.width / 2;
var y = canvas.height - 30;

var dx = 2;
var dy = -2;
var ballRadius = 10;

//paleta
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width - paddleWidth) / 2;

//DEctar las teclas direccionales de la izquierda y derecha
var rightPressed = false;
var leftPressed = false;

//agregar eventos de precionado y soltado de teclas
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

//Esta funcion si se preciona una teclas
function keyDownHandler(event) {
  if (event.keyCode == 39) {
    rightPressed = true;
  } else if (event.keyCode == 37) {
    leftPressed = true;
  }
}

//Esta funcion determina si se suelta una teclas
function keyUpHandler(event) {
  if (event.keyCode == 39) {
    rightPressed = false;
  } else if (event.keyCode == 37) {
    leftPressed = false;
  }
}

//esta funcion dibuja una paleta
function drawPaddle() {
  context.beginPath();
  context.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
  context.fillStyle = "#0095DD";
  context.fill();
  context.closePath();
}

//Esta function para el circulo de x. y
function drawBall() {
  context.beginPath();
  context.arc(x, y, ballRadius, 0, Math.PI*2);
  context.fillStyle = "#0095DD";
  context.fill();
  context.closePath();
}

function draw() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  //se llama la function de dibujar un circulo
  drawBall();

  //se llama la funcion de dibujar una paleta
  drawPaddle();

//verificar si llego al limite de arriba/abajo.
  if(y + dy < 0 || y + dy > canvas.height) {
    dy = -dy;
  }

  //verificar si llego al limite de la izquierda/derecho.
  if(x + dx < 0 || x + dx > canvas.width) {
    dx = -dx;
  }

  //verificar si se toco la tecla direccional derecha
  if (rightPressed && paddleX < canvas.width - paddleWidth) {
    paddleX += 7;
  } else if (leftPressed && paddleX > 0) {
    paddleX -=7;
  }

  x += dx;
  y += dy;
}

setInterval(draw, 10);
