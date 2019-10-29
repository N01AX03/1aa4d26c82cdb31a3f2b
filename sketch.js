var gif_createImg, sadboys, landscape, caca, amor;
let y = 0;

function preload() {

  gif_createImg = createImg("https://i.postimg.cc/c4J6vhPf/descarga-1.gif");
  landscape = loadImage("https://i.postimg.cc/FFjdwGL4/pills-clipart-transparent-background.png")

  amor = loadImage("https://i.postimg.cc/tgxCWCdj/Medicine-PNG-Photo.png")

}

function setup() {

  createCanvas(windowWidth, windowHeight);
  noCursor();
  background(0);
  imageMode(CENTER)





}






function draw() {
  clear()
  gif_createImg.position(mouseX/1.2, mouseY/1.2);


    var i = 0, select=0;
    while (i<1)  {
     select = floor(random(0,1) *2);
    //  fill((255), (255), (255));
    //  textSize(random(12,17));
    // text(random(["a"]), random(0, 5), random(0, windowHeight));


     image(landscape, random(0, windowWidth), random(0, windowHeight));

     image(amor, random(0, windowWidth), random(0, windowHeight));


     i++;
    }



}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  noCursor()
  background(random(0,255),random(0,255),random(0,255));

}
