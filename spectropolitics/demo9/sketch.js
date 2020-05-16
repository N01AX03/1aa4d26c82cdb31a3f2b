
var canvas;
var logo_a, logo_b, logo_c, logo_d, logo_e, logo_f;


function preload() {



    logo_a = createSprite(windowWidth/2,  windowHeight/2, windowWidth/2, windowHeight/2);




  logo_a.addAnimation('floating', 'img/titol1.png', 'img/titol2.png');
logo_a.scale= 0;

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
 //  logo_a.attractionPoint(0.2, mouseX, mouseY);
 // logo_a.maxSpeed = 8;



   drawSprites();

}
