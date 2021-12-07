
var Objeto;

function setup() {
  createCanvas(400,400);
  Objeto=createSprite(200,200,50,50);
}

function draw() 
{
  background(30);
  if (keyDown(DOWN_ARROW)){
    Objeto.position.y=Objeto.position.y+4;
  }
  if (keyDown(UP_ARROW)){
    Objeto.position.y=Objeto.position.y-4;
  }
  if (keyDown(LEFT_ARROW)){
    Objeto.position.x=Objeto.position.x-4;
  }
  if (keyDown(RIGHT_ARROW)){
    Objeto.position.x=Objeto.position.x+4;
  }
  drawSprites();

}




