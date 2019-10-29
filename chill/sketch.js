var gif_createImg, sadboys, landscape, caca, amor;
let y = 0;

function preload() {
  sadboys = loadImage("https://i.postimg.cc/3xR99BhC/cannabis-PNG61.png");
  gif_createImg = createImg("https://i.postimg.cc/BZwHCGhb/tumblr-ptw32g8lof1wiatbxo1-400.gif");
  landscape = loadImage("https://i.postimg.cc/g0GM8WJj/cloud-PNG32.png")
  caca = loadImage("https://i.postimg.cc/vBC9brx9/descarga.png")
  amor = loadImage("https://i.postimg.cc/3xR99BhC/cannabis-PNG61.png")

}

function setup() {

  createCanvas(windowWidth, windowHeight);
  noCursor()
  background(135,206,250);

  var i = 0, select=0;
  while (i<20)  {
   select = floor(random(0,1) *2);
  //  fill((255), (255), (255));
  //  textSize(random(12,17));
  // text(random(["a"]), random(0, 5), random(0, windowHeight));

   image(sadboys, random(0, windowWidth), random(0, windowHeight));
   image(landscape, random(0, windowWidth), random(0, windowHeight));

   image(amor, random(0, windowWidth), random(0, windowHeight));

fill(random(255), random(255), random(255));
   rect(random(0, windowWidth), random(0, windowHeight), random(10, 30), random(10, 30));

   i++;
  }
}

function draw() {
  image (caca,mouseX, mouseY, random(40, 80), random(40, 30));
  gif_createImg.position(mouseX/2, mouseY/2);




}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(135,206,250);

  var i = 0, select=0;
  while (i<20)  {
   select = floor(random(0,1) *2);
  //  fill((255), (255), (255));
  //  textSize(random(12,17));
  // text(random(["a"]), random(0, 5), random(0, windowHeight));

   image(sadboys, random(0, windowWidth), random(0, windowHeight));
   image(landscape, random(0, windowWidth), random(0, windowHeight));

   image(amor, random(0, windowWidth), random(0, windowHeight));

fill(random(255), random(255), random(255));
   rect(random(0, windowWidth), random(0, windowHeight), random(10, 30), random(10, 30));

   i++;
  }
}
