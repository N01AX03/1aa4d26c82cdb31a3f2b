
var canvas;
var ghost;


function preload() {

  ghost = createSprite(600, 200, 50, 100);
   ghost.addAnimation('floating', 'assets/show_case_doll_logo0001.png', 'assets/show_case_doll_logo0200.png');


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
