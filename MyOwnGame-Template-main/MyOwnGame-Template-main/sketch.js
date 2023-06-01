var fundo ;
var kim;
var kimImg;
var cam;
var ron;
var ronImg;
var barril;
var gamestate="start"
var buton

function preload() {

fundo=loadImage("rua.jpg")
kimImg=loadImage("personagem.png")
ronImg=loadImage("personagem(2).png")

}

function setup() {
  createCanvas(1000, 700);

  kim=createSprite(500,350)
  kim.addImage(kimImg)
  kim.scale=0.5
  
  ron=createSprite(600,350)
  ron.addImage(ronImg)
  ron.scale=0.5

  barril=createSprite(500,280,30,40)
  
  buton=createButton("")
  buton.class("buton")
}

function draw() {
  background("black");
  
  if(gamestate==="start"){
    
  }
  else if(gamestate==="end"){
    imageMode(CENTER)
  image(fundo,500,350)
  controles();
  camera.zoom=1.5
  
  drawSprites()
  }
}

function controles(){

  if(keyDown(UP_ARROW)){
    kim.y-=5
    
  }
  if(keyDown(DOWN_ARROW)){
    kim.y+=5
  }
  if(keyDown(RIGHT_ARROW)){
    kim.x+=5
    kim.mirrorX(-1)
  }
  if(keyDown(LEFT_ARROW)){
    kim.x-=5
    kim.mirrorX(1)
  }

  if(keyDown("w")){
    ron.y-=5
  }
  if(keyDown("s")){
    ron.y+=5
  }
  if(keyDown("d")){
    ron.x+=5
    ron.mirrorX(-1)
  }
  if(keyDown("a")){
    ron.x-=5
    ron.mirrorX(1)
  }
}