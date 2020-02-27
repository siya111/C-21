var frect, mrect;
function setup() {
  createCanvas(800,800);
  frect = createSprite(400,100,20,5);
  frect.shapeColor = "red";
  frect.velocityY = 5;
  mrect = createSprite(400, 800, 20, 25);
  mrect.shapeColor = "blue";
  mrect.velocityY = -4;
}

function draw(){
    background("black");
    bounceOff(mrect, frect);
    drawSprites();
}

function bounceOff(object1, object2){
    if(object1.x - object2.x < object1.width/2 + object2.width/2 
        && object2.x - object1.x < object1.width/2 + object2.width/2){
            object1.velocityX = object1.velocityX * (-1);
            object2.velocityX = object2.velocityX * (-1);
        }
    if(object1.y - object2.y < object1.height/2 + object2.height/2
        && object2.y - object1.y < object2.height/2 + object1.height/2){
            object2.velocityY = object2.velocityY * (-1);
            object1.velocityY = object1.velocityY * (-1);
        }
}