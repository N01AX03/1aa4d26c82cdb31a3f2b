
var canvas;
let xeno ;
var obstacles;
var drugs;
var song;




  function preload() {

song = loadSound('libraries/song.mp3');
song2 = loadSound('libraries/sound.mp3');
song3 = loadSound('libraries/song3.mp3')
song4 = loadSound('libraries/song4.mp3')
song5 = loadSound('libraries/sound5.mp3')



//MOUSE AVATAR:
    xeno = createSprite(400,200);
    xeno.addAnimation('xeno', 'libraries/xeno/0001.png', 'libraries/xeno/0004.png');
    xeno.addAnimation('mage', 'libraries/mage/0001.png', 'libraries/mage/0003.png');
    xeno.addAnimation('dancing', 'libraries/dancing/0001.png', 'libraries/dancing/0055.png');
    xeno.addAnimation('kitana', 'libraries/kitana/0001.png', 'libraries/kitana/0009.png');
    xeno.addAnimation('nakrul', 'libraries/nakrul/0001.png', 'libraries/nakrul/0015.png');
    xeno.addAnimation('sheeva', 'libraries/sheeva/0001.png', 'libraries/sheeva/0012.png');
    xeno.addAnimation('cuc', 'libraries/cuc/0001.png', 'libraries/cuc/0025.png');
    xeno.addAnimation('ko', 'libraries/ko/0001.png', 'libraries/ko/0012.png');
    xeno.addAnimation('gat', 'libraries/gat/0001.png', 'libraries/gat/0020.png');
    xeno.addAnimation('spider', 'libraries/spider/0001.png', 'libraries/spider/0012.png');
    xeno.addAnimation('sonic', 'libraries/sonic/0001.png', 'libraries/sonic/0006.png');
    xeno.addAnimation('unicorn', 'libraries/unicorn/0001.png', 'libraries/unicorn/0007.png');
    xeno.addAnimation('jenj', 'libraries/jenj/0001.png', 'libraries/jenj/0015.png');
    xeno.addAnimation('lizard', 'libraries/lizard/0001.png', 'libraries/lizard/0016.png');
    xeno.addAnimation('dragon', 'libraries/dragon/0001.png', 'libraries/dragon/0004.png');
    xeno.addAnimation('acid', 'libraries/acid/0001.png', 'libraries/acid/0006.png');
    xeno.addAnimation('cyberdemon', 'libraries/cyberdemon/0001.png', 'libraries/cyberdemon/0010.png');

    //initial random character:
    //xeno.changeAnimation(random(['xeno','mage','dancing','kitana','nakrul','sheeva','cuc','ko','gat','spider','sonic','unicorn', 'jenj','lizard','dragon','acid','cyberdemon']));
    xeno.changeAnimation(random(['spider','cyberdemon']));
//drugs
drugs = createSprite(random(50, windowWidth*0.9), random(50, windowHeight*0.9),50,50);;
  drugs.addAnimation('normal', 'libraries/drugs/0001.png', 'libraries/drugs/0039.png');
  drugs.mouseActive = true;
  drugs.scale=0.5


mdma = createSprite(random(50, windowWidth*0.9), random(50, windowHeight*0.9),50,50);;
    //createSprite(random(0, windowHeight*0.9), random(0, windowWidth*0.9),50,50);;
     mdma.addAnimation('normal', 'libraries/mdma/0001.png', 'libraries/mdma/0016.png');
     mdma.mouseActive = true;

mdma2 = createSprite(random(50, windowWidth*0.9), random(50, windowHeight*0.9),50,50);;
        //createSprite(random(0, windowHeight*0.9), random(0, windowWidth*0.9),50,50);;
         mdma2.addAnimation('normal', 'libraries/mdma/0001.png', 'libraries/mdma/0016.png');
         mdma2.mouseActive = true;




speed = createSprite(random(50, windowWidth*0.9), random(50, windowHeight*0.9),50,50);;
         speed.addAnimation('normal', 'libraries/speed/0001.png', 'libraries/speed/0028.png');
         speed.mouseActive = true;

speed2 = createSprite(random(50, windowWidth*0.9), random(50, windowHeight*0.9),50,50);
         speed2.addAnimation('normal', 'libraries/speed/0001.png', 'libraries/speed/0028.png');
         speed2.mouseActive = true;



//otros objetos

door = createSprite(windowWidth/2,windowHeight/2,50,50);;
                  door.addAnimation('normal', 'libraries/door/0006.png', 'libraries/door/0006.png');
                  door.addAnimation('open', 'libraries/door/0001.png', 'libraries/door/0006.png');
                  door.mouseActive = true;

exit = createSprite(windowWidth*0.93,windowHeight*0.9,50,50);;
                  exit.addAnimation('normal', 'libraries/door/0006.png', 'libraries/door/0006.png');
                  exit.addAnimation('open', 'libraries/door/0001.png', 'libraries/door/0006.png');
                  exit.mouseActive = true;



}

function setup() {

  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0)


  //background(0)
  song5.play();
  song3.loop();
  frameRate(30);

//BACKGROUND:

//background objects


star = new Group();
for(var i=0; i<100; i++)
{

  // var bstar = createSprite(random(0, width), random(0, height),20,20);
  // bstar.addAnimation('normal', 'libraries/bstar/0001.png', 'libraries/bstar/0001.png');
  // star.add(bstar);
  var bstar = createSprite(random(0, width), random(0, height),2,2);

  star.add(bstar);



}

fondo = new Group();


for(var i=0; i<3; i++){

  var speaker = createSprite(random(0, width), random(0, height),20,20);
  speaker.addAnimation('normal', 'libraries/background/speaker/0001.png', 'libraries/background/speaker/0009.png');
  fondo.add(speaker);

  var candle = createSprite(random(0, width), random(0, height),20,20);
  candle.addAnimation('normal', 'libraries/background/candle/0001.png', 'libraries/background/candle/0002.png');
  fondo.add(candle);

  var fan = createSprite(random(0, width), random(0, height),20,20);
  fan.addAnimation('normal', 'libraries/background/fan/0001.png', 'libraries/background/fan/0004.png');
  fondo.add(fan);

  var celebrate = createSprite(random(0, width), random(0, height),20,20);
  celebrate.addAnimation('normal', 'libraries/background/celebrate/0001.png', 'libraries/background/celebrate/0006.png');
  fondo.add(celebrate);

  var flame = createSprite(random(0, width), random(0, height),20,20);
  flame.addAnimation('normal', 'libraries/background/flame/0001.png', 'libraries/background/flame/0032.png');
  fondo.add(flame);

  var radar = createSprite(random(0, width), random(0, height),20,20);
  radar.addAnimation('normal', 'libraries/background/radar/0001.png', 'libraries/background/radar/0021.png');
  fondo.add(radar);





}


//collision

collide = new Group();
for(var i=0; i<2; i++)
{

  var cauldron = createSprite(random(0, width), random(0, height),20,20);
  cauldron.addAnimation('normal', 'libraries/collision/cauldron/0001.png', 'libraries/collision/cauldron/0004.png');
  collide.add(cauldron);
  cauldron.setCollider('rectangle', 0, 40, 40, 10);


}

//obstacles

  obstacles = new Group();
  for(var i=0; i<5; i++)
  {
    var barril = createSprite(random(0, width), random(0, height),20,20);
    barril.addAnimation('normal', 'libraries/obstacles/barril/barril_0001.png', 'libraries/obstacles/barril/barril_0003.png');
    obstacles.add(barril);

    var scul = createSprite(random(0, width), random(0, height),20,20);
    scul.addAnimation('normal', 'libraries/obstacles/scul/0001.png', 'libraries/obstacles/scul/0013.png');
    obstacles.add(scul);


    var bola = createSprite(random(0, width), random(0, height),20,20);
    bola.addAnimation('normal', 'libraries/obstacles/bola/0001.png', 'libraries/obstacles/bola/0015.png');
    obstacles.add(bola);

    //var speaker = createSprite(random(0, width), random(0, height),20,20);
    //speaker.addAnimation('normal', 'libraries/obstacles/speaker/0001.png', 'libraries/obstacles/speaker/0009.png');
    //obstacles.add(speaker);

    //var speaker = createSprite(random(0, width), random(0, height),20,20);
  //  speaker.addAnimation('normal', 'libraries/obstacles/speaker/0001.png', 'libraries/obstacles/speaker/0009.png');
  //  obstacles.add(speaker);
  }

//drugs

// drugs = new Group();
//   for (var i = 0; i < 10; i++) {
//     var drug = createSprite(
//       random(100, width-100),
//       random(100, height-100),
//       10, 10);
//     drug.addAnimation('normal', 'libraries/drugs/0001.png', 'libraries/drugs/0039.png');
//     drugs.add(drug);
//     drug.mouseActive = true;
//     if(drug.mouseIsOver) {
//         ghost.visible = false
//
//     }
//   }

}

function draw() {
//on/off





 xeno.velocity.x = (mouseX-xeno.position.x)*0.2; //mouse position
 xeno.velocity.y = (mouseY-xeno.position.y)*0.2;

//fisiques
 xeno.displace(obstacles);
 xeno.collide(collide);
 obstacles.displace(collide);

// DROGUES MOUSE OVER
 if(drugs.mouseIsOver ){

    drugs.rotation-= 10;
    drugs.scale=0.7;

}else {
  drugs.scale=0.5
  drugs.rotation=0
}


// EFECECTES DE LA DROGA :
//hardcore:
 if(drugs.mouseIsPressed ){


   song4.play();


   background(random(0,255),random(0,255),random(0,255))
    xeno.changeAnimation(random(['xeno','mage','kitana','nakrul','sheeva','ko','gat','spider','sonic','unicorn','jenj','lizard','dragon','acid','cyberdemon']));
   //  drugs.rotation-= 10;
     drugs.remove()


     drugs = createSprite(random(200, width*0.9), random(100, height*0.9),50,50);;
       drugs.addAnimation('normal', 'libraries/drugs/0001.png', 'libraries/drugs/0039.png');
       drugs.mouseActive = true;
       drugs.scale=0.5










       for(var i=0; i<20; i++)
       {
         var barril = createSprite(random(0, width), random(0, height),20,20);

         barril.addAnimation('normal', 'libraries/drugs/0001.png', 'libraries/drugs/0039.png');
         obstacles.add(barril);
         barril.life=100
         barril.scale=0.5

        explosion = createSprite(random(0, windowWidth), random(0, windowHeight),50,50);;
         explosion.addAnimation('normal', 'libraries/explosion/0001.png', 'libraries/explosion/0019.png');

         explosion.life=50
}
   //
   //  kok = createSprite(random(0, windowWidth), random(0, windowHeight),50,50);;
   //    kok.addAnimation('normal', 'libraries/drugs/0001.png', 'libraries/drugs/0039.png');
   //   obstacles.add(kok);
   //    kok.life =100;
   //    kok.rotation-=10;
}else{


}





if (mdma.mouseIsOver){
  mdma.scale=0.7;
    mdma.rotation-= 10;
}else{

mdma.scale=0.6;
}



if(mdma.mouseIsPressed ){



      mdma.remove()
      mdma2.visible=true;


}else{
  background(0)
  mdma2.visible=false;


}



if (mdma2.mouseIsOver){
  mdma2.scale=0.7;
    mdma2.rotation-= 10;
}else{

mdma2.scale=0.6;
}

if(mdma2.mouseIsPressed ){


  song2.play();


  background(0)

  //  drugs.rotation-= 10;
    drugs.remove()
    mdma2.remove()

    mdma = createSprite(random(200, width*0.9), random(100, height*0.9),50,50);;
      mdma.addAnimation('normal', 'libraries/mdma/0001.png', 'libraries/mdma/0016.png');
      mdma.mouseActive = true;
      mdma.scale=0.6

      mdma2 = createSprite(random(200, width*0.9), random(100, height*0.9),50,50);;
        mdma2.addAnimation('normal',  'libraries/mdma/0001.png', 'libraries/mdma/0016.png');
        mdma2.mouseActive = true;
        mdma2.scale=0.7

      drugs = createSprite(random(200, width*0.9), random(100, height*0.9),50,50);;
        drugs.addAnimation('normal', 'libraries/drugs/0001.png', 'libraries/drugs/0039.png');
        drugs.mouseActive = true;
        drugs.scale=0.5



      for(var i=0; i<20; i++)
      {
        var barril = createSprite(random(0, width), random(0, height),20,20);

        barril.addAnimation('normal', 'libraries/mdma/0001.png', 'libraries/mdma/0016.png');
        obstacles.add(barril);
        barril.life=100
        barril.scale=0.7

       explosion = createSprite(random(0, windowWidth), random(0, windowHeight),50,50);;
        explosion.addAnimation('normal', 'libraries/explosion/0001.png', 'libraries/explosion/0019.png');

        explosion.life=50
}
  //
  //  kok = createSprite(random(0, windowWidth), random(0, windowHeight),50,50);;
  //    kok.addAnimation('normal', 'libraries/drugs/0001.png', 'libraries/drugs/0039.png');
  //   obstacles.add(kok);
  //    kok.life =100;
  //    kok.rotation-=10;
}else{


}







if (speed.mouseIsOver){
  speed.scale=0.8;
  speed.rotation-= 10;
}else{
speed.scale=0.7;
}

if(speed.mouseIsPressed ){
if(mouseIsPressed){

}else{
  xeno.changeAnimation(random(['xeno','mage','kitana','nakrul','sheeva','ko','gat','spider','sonic','unicorn','jenj','lizard','dragon','acid','cyberdemon']));

}

speed2.visible=true;


speed.remove()


}else{

speed2.visible=false;
}


//antispeed
if (speed2.mouseIsOver){
  speed2.scale=0.8;
  speed2.rotation-= 10;
}else{
speed2.scale=0.7;
}
if(speed2.mouseIsPressed ){


  song5.play();


  background(random(0,255),random(0,255),random(0,255))
   xeno.changeAnimation(random(['xeno','mage','kitana','nakrul','sheeva','ko','gat','spider','sonic','unicorn','jenj','lizard','dragon','acid','cyberdemon']));
  //  drugs.rotation-= 10;
    drugs.remove()
    speed2.remove()

    speed = createSprite(random(200, width*0.9), random(100, height*0.9),50,50);;
      speed.addAnimation('normal', 'libraries/speed/0001.png', 'libraries/speed/0028.png');
      speed.mouseActive = true;
      speed.scale=0.7

      speed2 = createSprite(random(200, width*0.9), random(100, height*0.9),50,50);;
        speed2.addAnimation('normal', 'libraries/speed/0001.png', 'libraries/speed/0028.png');
        speed2.mouseActive = true;
        speed2.scale=0.7

      drugs = createSprite(random(200, width*0.9), random(100, height*0.9),50,50);;
        drugs.addAnimation('normal', 'libraries/drugs/0001.png', 'libraries/drugs/0039.png');
        drugs.mouseActive = true;
        drugs.scale=0.5









      for(var i=0; i<20; i++)
      {
        var barril = createSprite(random(0, width), random(0, height),20,20);

        barril.addAnimation('normal', 'libraries/speed/0001.png', 'libraries/speed/0028.png');
        obstacles.add(barril);
        barril.life=100
        barril.scale=0.7

       explosion = createSprite(random(0, windowWidth), random(0, windowHeight),50,50);;
        explosion.addAnimation('normal', 'libraries/explosion/0001.png', 'libraries/explosion/0019.png');

        explosion.life=50
}
  //
  //  kok = createSprite(random(0, windowWidth), random(0, windowHeight),50,50);;
  //    kok.addAnimation('normal', 'libraries/drugs/0001.png', 'libraries/drugs/0039.png');
  //   obstacles.add(kok);
  //    kok.life =100;
  //    kok.rotation-=10;
}else{


}









if (door.mouseIsOver){

  door.changeAnimation('open');

}else{
  door.changeAnimation('normal');
door.scale=1;

}

if(door.mouseIsPressed ){



  drawSprites()

  drawSprite(xeno)
  drawSprite(drugs)
  drawSprite(mdma)
  drawSprite(mdma2)
  drawSprite(speed)
  drawSprite(speed2)
  drawSprite(door)


door.remove()
song3.setVolume(1)
song5.setVolume(1)




}else{

drawSprite(door)
drawSprite(xeno)
song3.setVolume(0.1)
song5.setVolume(0.1)


}

if (exit.mouseIsOver){

  exit.changeAnimation('open');

}else{
  exit.changeAnimation('normal');
exit.scale=1;

}

if (exit.mouseIsPressed){
location.reload();
}







//   background(0)
// }

//xeno.rotation -= 2;

//xeno.changeAnimation(random(['xeno','mage','dancing','kitana','nakrul','sheeva','cuc','ko','gat','spider','sonic','unicorn','jenj','lizard','dragon','acid','cyberdemon']));




// else {
//
// background(0)
//
// }






// drawSprites()
// drawSprite(xeno)
// drawSprite(drugs)
// drawSprite(mdma)
// drawSprite(speed)
// drawSprite(door)
}






function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0)

}
