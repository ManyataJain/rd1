const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;

var raindrops=[];
var maxDrops=100;
var thunder1,thunder2,thunderimg1,thunderimg2;
function preload(){
    thunderimg1= loadImage("t1.jpg");
    thunderimg2=loadImage("t2.jpg");
}

function setup(){
engine = Engine.create();
 world = engine.world;
 thunder1=createSprite(400,400,5,20);
 thunder2=createSprite(450,450,5,20);
   umb=new Umbrella(700,400);
   createCanvas(1600,1600);  

   if(frameCount %150===0){

    for(var i=0; i<maxDrops; i++){
    raindrops.push(new createDrop(random(0,1600),random(0,1600)));
    
    }

  
  }
  
}
   
    


function draw(){
    background(0,0,0);
   
    

    
    for (var i=0; i<maxDrops;i++){
       raindrops[i].showDrop();
       raindrops[i].dropsFalling();
    }
    
    if(frameCount %12===0){
        var rand=Math.round(random(1,2));
        switch(rand){
            case 1:thunder1.addImage(thunderimg1);
                  break;
           case 2:thunder1.addImage(thunderimg2);
                  break;
           default:break;
        }

        if(frameCount %12===0){
            var rand=Math.round(random(1,2));
            switch(rand){
                case 1:thunder2.addImage(thunderimg1);
                      break;
               case 2:thunder2.addImage(thunderimg2);
                      break;
              default:break;
            }}}
            umb.display();
            drawSprites();
                }
 
  
