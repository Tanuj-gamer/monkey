
var monkey , monkey_running,ground,ground2
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
   createCanvas(600, 400);
  
  monkey=createSprite(45,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1
  
   
  ground = createSprite(400,350,900,10);
  ground.x = ground.width /2;
    ground.velocityX = -4;
  
   ground2= createSprite(400,350,900,10);
  ground2.x = ground.width /2;
    
  

  
}


function draw() {
    background("skyblue");
  FoodGroup();
  
  
  
  
  
    console.log(" ground");
  
      drawSprites();
  
}

function FoodGroup() {
  
  if (frameCount % 100 === 0) {
     banana = createSprite(800,300,10,10);
     banana.y = Math.round(random(10,100));
     banana.addImage(bananaImage);
     banana.scale = 0.1; 
    banana.velocityX = -3;
    banana.lifetime = 250;
 
  
}

}



