var ISS, spaceShuttle
var issImg
var backgroundImg
var spacShuImg1,spacShuImg2,spacShuImg3,spacShuImg4
var hasDocked = false


function preload(){
  issImg = loadImage("iss.png")
  backgroundImg = loadImage("spacebg.jpg")
  spacShuImg1 = loadAnimation("spacecraft1.png")
  spacShuImg2 = loadAnimation("spacecraft2.png")
  spacShuImg3 = loadAnimation("spacecraft3.png")
  spacShuImg4 = loadAnimation("spacecraft4.png")
}


function setup() {
  createCanvas(800,600);
  ISS = createSprite(400,200,40,40);
  ISS.addImage(issImg);
  spaceShuttle = createSprite(400,530,40,40)
  spaceShuttle.addAnimation("SpaceCraft",spacShuImg1)
  spaceShuttle.addAnimation("ScR_smoke",spacShuImg4)
  spaceShuttle.addAnimation("ScL_smoke",spacShuImg3)
  spaceShuttle.addAnimation("ScD_smoke",spacShuImg2)

  spaceShuttle.scale = 0.3
}

function draw() {
  background(backgroundImg);

  if(hasDocked === false){
    if(keyDown(UP_ARROW)){
      spaceShuttle.y -= 2
    }
    if(keyDown(DOWN_ARROW)){
      spaceShuttle.changeAnimation("ScD_smoke",spacShuImg2)
    }
    if(keyDown(RIGHT_ARROW)){
      spaceShuttle.x += 1
      spaceShuttle.changeAnimation("ScL_smoke",spacShuImg3)
    }
    if(keyDown(LEFT_ARROW)){
      spaceShuttle.x -= 1
      spaceShuttle.changeAnimation("ScR_smoke",spacShuImg4)
    }
    if(spaceShuttle.y <= 300 ){
      hasDocked = true
    }
  }
  if(hasDocked === true){
    textSize(40)
    fill("skyblue")
    text("DOCKING SUCCESSFUL!", 150,500)


  }
  drawSprites();

}