
var canvas;
var animacio;



  function preload() {

    animacio = loadAnimation("libraries/0001.png", "libraries/0030.png");



}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0)
  canvas.style('z-index','-1');
frameRate(60);
  rectMode(CENTER);
  background (157,125,89);



}

function draw() {
animation(animacio, mouseX, mouseY, );
fill(157,125,89);
stroke(0);
strokeWeight(1);
  rect(width/2,height/2,mouseX, mouseY);


}
