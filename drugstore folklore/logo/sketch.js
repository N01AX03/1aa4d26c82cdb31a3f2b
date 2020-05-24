var canvas;
var ghost;

function preload() {
  ghost = createSprite(windowWidth - 250, 200, 50, 100);
  ghost.addAnimation(
    "floating",
    "assets/nino/añflk0001.png",
    "assets/nino/añflk0231.png"
  );
  ghost.resize(0.5);
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
