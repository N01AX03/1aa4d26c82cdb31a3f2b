
var canvas;
var logo_a, logo_b, logo_c, logo_d, logo_e, logo_f;


function preload() {

  logo_a = createSprite(600, 200, 50, 100);
  logo_b = createSprite(600, 200, 50, 100);
  logo_c = createSprite(600, 200, 50, 100);
  logo_d = createSprite(600, 200, 50, 100);
  logo_f = createSprite(600, 200, 50, 100);
  logo_e = createSprite(600, 200, 50, 100);

  logo_a.addAnimation('floating', 'assets/logo_a_000001.png', 'assets/logo_a_000100.png');
  logo_b.addAnimation('floating', 'assets/logo_b_000001.png', 'assets/logo_b_000100.png');
  logo_c.addAnimation('floating', 'assets/logo_c_000001.png', 'assets/logo_c_000100.png');
  logo_d.addAnimation('floating', 'assets/logo_d_000001.png', 'assets/logo_d_000100.png');
logo_f.addAnimation('floating', 'assets/logo_f_000001.png', 'assets/logo_f_000100.png');
  logo_e.addAnimation('floating', 'assets/logo_e_000001.png', 'assets/logo_e_000100.png');



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
  logo_a.attractionPoint(0.1, mouseX, mouseY);
 logo_a.maxSpeed = 10;

 logo_b.attractionPoint(0.3, mouseX, mouseY);
logo_b.maxSpeed = 8;

logo_c.attractionPoint(0.1, mouseX, mouseY);
logo_c.maxSpeed = 5;

logo_d.attractionPoint(0.1, mouseX, mouseY);
logo_d.maxSpeed = 9;



logo_e.attractionPoint(0.9, mouseX, mouseY);
logo_e.maxSpeed = 6;

logo_f.attractionPoint(0.2, mouseX, mouseY);
logo_f.maxSpeed = 7;


   drawSprites();

}
