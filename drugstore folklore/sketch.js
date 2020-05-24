var canvas;
var ghost;

function preload() {
  ghost = createSprite(130, 470, 50, 100);
  ghost.addAnimation(
    "floating",
    "assets/nino/nino_0001.png",
    "assets/nino/nino_0120.png"
  );
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

  drawSprites();
}
