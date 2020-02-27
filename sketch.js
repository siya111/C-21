var frect, mrect;
var ob1, ob2, ob3, ob4;

function setup() {
  createCanvas(800,400);
  frect = createSprite(200,200,20,5);
  frect.shapeColor = "red";
  mrect = createSprite(200, 100, 20, 5);
  mrect.shapeColor = "blue";
  ob1 = createSprite(200,150,20,5);
  ob2 = createSprite(300,150,20,5);
  ob3 = createSprite(400,150,20,5);
  ob4 = createSprite(500,150,20,5);
  ob1.shapeColor = rgb(222,228,51);
  ob2.shapeColor = "pink";
  ob3.shapeColor = rgb(11,93,165);
  ob4.shapeColor = rgb(16,242,106); 
}


function draw() {
  background(255,255,255);  
  mrect.x = World.mouseX;
  mrect.y = World.mouseY; 
  console.log(mrect.x - frect.x);
  
  if(isTouching(mrect,ob3)){
    ob3.shapeColor = "green";
    mrect.shapeColor = "purple";
  }
 else{
  ob3.shapeColor = rgb(11,93,165);
  mrect.shapeColor = "blue";
 }
  drawSprites();
}

function isTouching(object1, object2){
  if(object1.x - object2.x < object1.width/2 + object2.width/2 
    && object2.x - object1.x < object1.width/2 + object2.width/2
    && object1.y - object2.y < object1.height/2 + object2.height/2
    && object2.y - object1.y < object1.height/2 + object2.height/2){
    return true;
  }
  else{
  return false;  
  }
  
}