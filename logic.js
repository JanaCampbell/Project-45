function wormMovement(){
    if(keyDown("right")){
        worm.x=worm.x+5;
        worm.width=30
        worm.height=5
      }
      if(keyDown("down")){
        worm.y=worm.y+5;
        worm.width=5
        worm.height=30
      }
      else if(collision()){
          worm.width=30;
          worm.height=5;
      }
      if(keyDown("up")){
        worm.y=worm.y-5;
        worm.width=5
        worm.height=30
      }
      else if(collision()){
        worm.width=30;
        worm.height=5;
    }
      if(keyDown("left")){
        worm.x=worm.x-5;
        worm.width=30
        worm.height=5
      }
      
}

function collision(){
    if(worm.isTouching(c1)||worm.isTouching(c2)||worm.isTouching(c3)||worm.isTouching(c4)||worm.isTouching(c5)||worm.isTouching(c6)
    ||worm.isTouching(c7)||worm.isTouching(c8)||worm.isTouching(c9)||worm.isTouching(c10)||worm.isTouching(c11)||worm.isTouching(c12)
    ||worm.isTouching(c13)||worm.isTouching(c14)||worm.isTouching(c15)||worm.isTouching(c16)||worm.isTouching(c17)||worm.isTouching(c18)
    ||worm.isTouching(c19)||worm.isTouching(c20)){
        worm.x=20;
        worm.y=20;
        worm.width=30;
        worm.height=5;
    }
}

function foodItems(){
    if(frameCount%80===0){
        food=createSprite(random(10,100),random(10,100),10,10);
        food.lifetime=80;
    }
}