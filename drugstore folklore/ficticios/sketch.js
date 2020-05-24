var fic1, fic2, fic3, fic4, fic5, fic6, fic7, fic8, fic9, fic10;

function preload() {
  fic1 = loadAnimation("assets/adrugstttt1.png", "assets/adrugstttt16.png");
  fic2 = loadAnimation("assets/bdrugstttt1.png", "assets/bdrugstttt16.png");
  fic3 = loadAnimation("assets/cdrugstttt1.png", "assets/cdrugstttt16.png");
  fic4 = loadAnimation("assets/ddrugstttt1.png", "assets/ddrugstttt16.png");
  fic5 = loadAnimation("assets/edrugstttt1.png", "assets/edrugstttt16.png");
  fic6 = loadAnimation("assets/fdrugstttt1.png", "assets/fdrugstttt16.png");
  fic7 = loadAnimation("assets/gdrugstttt1.png", "assets/gdrugstttt16.png");
  fic8 = loadAnimation("assets/hdrugstttt1.png", "assets/hdrugstttt16.png");
  fic9 = loadAnimation("assets/idrugstttt1.png", "assets/idrugstttt16.png");
  fic10 = loadAnimation("assets/kdrugstttt1.png", "assets/kdrugstttt16.png");
}

function setup() {
  canvas = createCanvas(6000, windowHeight);
  canvas.position(0, 0);
  frameRate(24);
}

function draw() {
  clear();

  animation(fic1, 300, 350);
  animation(fic2, 900, 350);
  animation(fic3, 1500, 350);
  animation(fic4, 2100, 350);
  animation(fic5, 2700, 350);
  animation(fic6, 3300, 350);
  animation(fic7, 3900, 350);
  animation(fic8, 4500, 350);
  animation(fic9, 5100, 350);
  animation(fic10, 5700, 350);
}
