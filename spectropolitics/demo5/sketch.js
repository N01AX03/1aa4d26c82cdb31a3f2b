
var canvas;
var logo_a, logo_b, logo_c, logo_d, logo_e, logo_f;


function preload() {



    logo_a = createSprite(600, 200, 50, 100);




  logo_a.addAnimation('floating', 'img/titol1.png', 'img/titol2.png');

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
  logo_a.attractionPoint(0.2, mouseX, mouseY);
 logo_a.maxSpeed = 8;



   drawSprites();

}
