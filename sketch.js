var backIMg,back;
var tomIMg1,tom1;
var jerryIMg,jerry;

var T2Img;
var T3Img;

var M2Img;
var M3Img;

var T4Img;
var M4IMg;

function preload() {
    //load the images here

    backIMg = loadImage ("pics/garden.png");
    tomIMg1 = loadAnimation ("pics/cat1.png");
    jerryIMg = loadAnimation ("pics/mouse1.png");
    T2Img = loadAnimation ("pics/cat2.png");
    T3Img = loadAnimation ("pics/cat3.png");
    M2Img = loadAnimation ("pics/mouse2.png");
    M3Img = loadAnimation ("pics/mouse3.png");

    T4IMg = loadImage ("pics/cat4.png");
    M4IMg = loadImage("pics/mouse4.png")
}

function setup(){

    createCanvas(1000,800);
    //create tom and jerry sprites here

    back = createSprite(100,100);
    back.addImage(backIMg);
    back.scale = 2;

        tom1 = createSprite(850,670);
        tom1.scale = 0.2;
        tom1.addAnimation("normal",tomIMg1);

        tom1.setCollider("Rectangle",0,0,830,830);

           jerry = createSprite (260,670);
           jerry.addAnimation("normal",jerryIMg);
           jerry.scale = 0.1;
 

}

function draw() {

    background("green");
   
    jerry.debug = false;
    tom1.debug = false;

    if (keyCode === RIGHT_ARROW){

        keyPressed();

      tom1.velocityX = -2;
    }

  if (tom1.x - jerry.x < (tom1.width + jerry.width)/3.5 &&
     jerry.x - tom1.x < (jerry.width + tom1.width)/3.5){ 


        tom1.addAnimation("normal",tomIMg1);
        tom1.changeAnimation("normal");
        tom1.velocityX = 0;
      
        jerry.addAnimation ("mouseD",M4IMg); 
        jerry.changeAnimation ("mouseD");
      

  }

    drawSprites();
}

function keyPressed(){

  //For moving and changing animation write code here
  if (frameCount % 10 === 0){

    tom1.addAnimation("catRunning",T2Img);
    tom1.changeAnimation("catRunning");
    tom1.frameDelay = 25;
  }


  if (frameCount % 20 === 0){

    tom1.addAnimation("catRunning1",T3Img);
    tom1.changeAnimation("catRunning1");
    tom1.frameDelay = 25;

  }
  

  if (frameCount % 10 === 0){

   jerry.addAnimation("Jteasing",M2Img);
   jerry.changeAnimation("Jteasing");
   jerry.frameDelay = 25;


   if (frameCount % 20 === 0){


   jerry.addAnimation ("Jteasing",M3Img);
   jerry.changeAnimation("Jteasing");
   jerry.frameDelay = 25;
   
   }

  }

}


