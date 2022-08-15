var a,aimg
var avx
var score
var obstacle,objectimg
var background
var gamestate = "play"
var invisibleGround
var randred
var randblu
var randgreen
var groupvelocity = -12
var levels = 1;
var i = 1
var screen_saver
var scene
var backgroundImage,obstaclegroup
alert("Don't touch the ground!")
alert("dont go to far up")
alert("space to super jump and up key for mini jump")
alert("help entity s get home to planet zed 5**98")
alert("Good luck")
function preload(){
  //backgroundImage = loadImage("assets/space.png");
}

function setup() {
 
  createCanvas(windowWidth,windowHeight);
    a = createSprite(200,windowHeight-400,40,40);
    a.velocityY = 0
    var options ={
      restitution: 1
    }
    invisibleGround = createSprite(windowWidth/2,windowHeight-5,width,2.5);
    invisibleGround.visible = false;
    
    obstaclegroup = createGroup();
}

function draw() {
  background(250,30,40);
  //background(backgroundImage);
  drawSprites()
  
  
  if (keyDown("r")) {
    window.location.reload();
  }
   if(levels>= 2 && levels <= 6){
    var line = createSprite(windowWidth/2,windowHeight/2,windowWidth,5)
    line.shapeColor = ("BLUE")
    
  }

  if (gamestate == "play"){
      score = Math.round(frameCount/3)
      textSize(34)
      text("level:" + levels,windowWidth/2,40);
      level();
      if(a.collide(invisibleGround) || a.y < 0 || a.x < 0){
      
      gamestate = "end"
       }



      objective()



      
        Avelo()   


      if(keyDown("UP_ARROW")){
        a.velocityY = - 6
      }


      AGrav()


      if(a.y <  0){
        a.y = a.y - 5
        
      }


      a.collide(obstaclegroup) 

     if(levels  > 9){
        gamestate = "game done"
      }
   }else if(gamestate == "end"){
    window.location.replace("https://youtu.be/dQw4w9WgXcQ");    
  }
  a.collide(invisibleGround)
  
}

function objective(){ 
  var lvl9 = 300 
     if(levels <= 8){
        if(frameCount % 50 === 0) {
              var randheight = Math.round(random(windowHeight-500,windowHeight-200));
              var randwidth = Math.round(random(90,250));
              var randY = Math.round(random(windowHeight,100));
              obstacle = createSprite(windowWidth,randY,randwidth,randheight);
              obstacle.debug = false;
              obstacle.velocityX = groupvelocity
                  
              obstacle.collide(invisibleGround)   
              obstaclegroup.add(obstacle)
        }
      }else{
        
      }
      
    
    } 

function level(){
  
  if(frameCount  %  400 === 0){
     randred = Math.round(random(0,300));
     randblu = Math.round(random(0,300));
     randgreen = Math.round(random(0,300));
     levels = levels + 1
     //alert("This works")
  } 
}
function Avelo(){
  if(levels>=2 && levels <=6){
    if(a.y>windowHeight/2){
        if(keyDown("space")){a.velocityY = -16}
    }else{
      if(keyDown("space")){a.velocityY = 16}
    }
  }
  
  if(levels >= 7){
    var grav  = 16;
    var num = 0
    if(num%2 ==0 && keyDown("space")){
       num +=1;
       a.velocityY = 0
       a.velocityY = a.velocityY + 2
    }
    if(num%2!==0&&keyDown("space")){
      a.velocityY = 0
      a.velocityY = a.velocityY - 2
    }
    
   /* var grav = 0
    if(grav == 0){
       = 0
      a.velocityY = a.velocityY + 2
      grav = grav + 1
    }else{
      a.velocityY = 0
      a.velocityY = a.velocityY - 2
      if(keyDown("space")){grav = grav -1}
          
  }
*/
  }
  
  if(keyDown("space") && levels == 1){
    a.velocityY = -16
    }
    
    
  }

  

 
function AGrav(){
  if(levels>=2 && levels<=6){
    if(a.y>windowHeight/2){
      a.velocityY = a.velocityY + 2
    }else(
      a.velocityY = a.velocityY - 2
    )
  }else{
   if(levels>=7){
      var donothing = 0 
   }else(a.velocityY = a.velocityY + 2)
  }
}
