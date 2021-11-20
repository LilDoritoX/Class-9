var boy
function setup() {
  createCanvas(400,400);
boy=createSprite(50,50,50,50)
boy.shapeColor='lightBlue'
}

function draw() 
{
  background('blue');
if(keyDown('right')){
boy.x=boy.x+ 2

}
if(keyDown('left')){
  boy.x=boy.x- 2
  
  }

  if(keyDown('up')){
    boy.y=boy.y- 2
    
    }
    if(keyDown('down')){
      boy.y=boy.y+ 2
    }
drawSprites()
}




