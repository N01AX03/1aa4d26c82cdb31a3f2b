
var canvas;
var ghost, logo_b, logo_c, logo_d, logo_e, logo_f;


function preload() {



    ghost = createSprite(600, 200, 50, 100);




  ghost.addAnimation('floating', 'img/assets/test10001.png', 'img/assets/test10300.png');

}
function windowResized() {
  //console.log('resized');
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);

}

function keyPressed() {
  clear();
}

function draw() {
  clear();
  ghost.attractionPoint(0.2, mouseX, mouseY);
 ghost.maxSpeed = 5;
   drawSprites();





}
