var hr=hour();
var mn=minute();
var sc=second();
var clock;
var hourHand;
function setup() {
  createCanvas(800,400);
  clock=createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}