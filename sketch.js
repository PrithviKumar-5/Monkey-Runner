//variables
  var monkey , monkey_running,ground
  var banana ,bananaImage, obstacle, obstacleImage
  var FoodGroup, obstacleGroup
  var score
  
  //pre-loading images
  function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

  function setup() {

   //monkey sprite
   monkey = createSprite(80,315,20,20)
   monkey.addAnimation("moving",monkey_running)
   monkey.scale = 0.1

   //ground sprite
   ground  = createSprite(400,350,900,10)
   ground.x = ground.width/2

   score = 0
  }

  function draw() {
     background("green");

    //making the monkey jump
    if(keyDown("space")&& monkey.y >= 200) {
     monkey.velocityY = -12;
    }

    //gravity
    monkey.velocityY = monkey.velocityY + 0.8
    monkey.collide(ground);

    //survival time
    stroke("black")
    textSize(20)
    fill("black")
    score = Math.ceil(frameCount/frameRate())
    text("Survival Time : "+ score,120,50)


    spawnFood()
    spawnObstacles()

    drawSprites()

    FoodGroup = new Group()
    obstaclesGroup = new Group()
  }

 //spawning the obstacle
   function spawnObstacles(){
    if (frameCount % 150 === 0){
     obstacle = createSprite(350,320,20,20);
     obstacle.velocityX = -5
     obstacle.addImage(obstacleImage)
     obstacle.scale = 0.15;
     obstacle.lifetime = 200
     obstaclesGroup.add(obstacle);
     }
    }

   //spawning the banana
   function spawnFood(){
   if (frameCount % 80 === 0) {
      banana = createSprite(390,120,20,200);
      banana.y = Math.round(random(100,180));
      banana.addImage(bananaImage);
      banana.scale = 0.1;
      banana.velocityX = -5;

       //assign lifetime to the variable
      banana.lifetime = 200;
      FoodGroup.add(banana)

     }
   }






