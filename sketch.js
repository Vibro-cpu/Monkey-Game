
var monkey , monkey_running
var ground;
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime = 0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  //monkey creation
    monkey = createSprite(80,315,20,20);
    monkey.addAnimation("moving",monkey_running);
    monkey.scale = 0.1;
  
  //ground creation
    ground = createSprite(400,350,900,10);
    ground.velocityX = -4;
    console.log(ground.x);
  
  //groups creation
    FoodGroup = createGroup();
    obstacleGroup = createGroup();
  
  //score
    score = 0;
}


function draw() {

  //frame controller
    background(400);
  
  //text
    //score
      stroke("white");
      textSize(20);
      fill("white");
      text("score: " + score,500,50);
  
    //survival time
      stroke("black");
      textSize(20);
      fill("black");
      survivalTime = Math.ceil(frameCount/frameRate());
      text("Survival Time: " + survivalTime,100,50);
  
  //jumping machanisim
    if(keyDown("space")){
      monkey.velocityY = -15;
    }
  
  //adding gravity
    monkey.velocityY = monkey.velocityY + 0.8
  
  //infinating ground
    ground.x = ground.width/2;
  
  //function calling
    spawnFood();
    spawnObstacles();
  
  drawSprites();
  
  //creating solid ground
    monkey.collide(ground);
}

function spawnFood(){
  if(frameCount % 80 === 0){
    food = createSprite(400,225,20,20);
    food.y = Math.round(random(120,200));
    food.velocityX = -6.5;
    food.lifetime = 65;
    food.addImage(bananaImage);
    food.scale = 0.1;
    FoodGroup.add(food);
  }
}

function spawnObstacles(){
  if(frameCount % 300 === 0){
    obstacle = createSprite(400,315,20,20);
    obstacle.velocityX = -6.5;
    obstacle.lifetime = 65;
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.225;
  }
}






