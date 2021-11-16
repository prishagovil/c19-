var  forestImg, forest;
var ghost, ghostImg 

var boy, boyImg 

var gameState = "play"

var gamestate = "end"



function preload(){
forestImg = loadImage("forest.jpg");
boyImg = loadAnimation("boy-running.gif");
ghostImg = loadAnimation("ghost.png");
obstaclesImg = loadImage ("obstacles.png")
}

function setup() {
createCanvas(600, 300);
forest = createSprite(300,150,600,600);
forest.addImage("forest",forestImg);
forest.velocityX = 1;
ghost= createSprite (200,200,50,50)
ghost.addImage (ghostImg)
ghost.scale = 0.2
forest.scale = 2.0
boy= createSprite (200,100,50,50)
boy.addImage (boyImg)
boy.scale = 0.2
}


function draw() {
    background(200)
    drawSprites()
 if (gameState == "play") {
    if(forest.x > 400){
        forest.x = 300
      }
    if (keyDown ("Space")) {
      boy.velocityY = -7
    }
    spawnobstacles ()
    boy.velocityX = boy.velocityX + 0.8
   if (boy.isTouching (obstacles)) {
      boy.destroy ()
      gameState = "end" 
    }
  }
  else if (gameState == "end") {
  stroke("yellow") 
  fill ("yellow")
  textSize (30)
  text ("Game over", 230,250) 
  }
  }
  function spawndoors (){
    if (frameCount %250 == 0 ) {
    rock =createSprite (200,-50)
    rock.addImage (obstaclesImg)
    rock.x= Math.round(random (120,400))
    rock.velocityx = 1 
    rock.lifetime = 800
    rockGroup.add (obstacles)


}
}