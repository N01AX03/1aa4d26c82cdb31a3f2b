
var fic1, fic2, fic3, fic4, fic5, fic6, fic7;


function preload() {

fic1 = loadAnimation('assets/fica_01.png', 'assets/fica_04.png');
fic2 = loadAnimation('assets/ficb_01.png', 'assets/ficb_04.png');
fic3 = loadAnimation('assets/ficc_01.png', 'assets/ficc_04.png');
fic4 = loadAnimation('assets/ficd_01.png', 'assets/ficd_04.png');
fic5 = loadAnimation('assets/fice_01.png', 'assets/fice_04.png');
fic6 = loadAnimation('assets/ficf_01.png', 'assets/ficf_04.png');
fic7 = loadAnimation('assets/ficg_01.png', 'assets/ficg_04.png');

}


function setup() {
  canvas = createCanvas(4200, windowHeight);
  canvas.position(0, 0);
  frameRate(5);
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

}
