var car;
var wall;
var speed;
var weight;
function setup() {
  createCanvas(800,400);
  car = createSprite(400, 200, 20, 20);
  car.shapeColor = "white";
  wall = createSprite(700, 200, 10, 100);
  wall.shapeColor = "lightblue";

  speed = random(55, 90);
  weight = random(400, 1500);
  car.velocityX = speed;
}

function draw() {
  background("black");  

car.collide(wall);
  if(wall.x-car.x < (car.width + wall.width)/2){

   car.velocityX = 0;
   var deformation = 0.5 * speed * weight * speed / 22509;
   if(deformation > 180)
   {
   car.shapeColor = "red"
   }
   if(deformation <180 && deformation > 100){
   car.shapeColor = "yellow"
   }
   if(deformation < 100){
   car.shapeColor = "green"
}






  }
  
  
  
  
  
  drawSprites();
}