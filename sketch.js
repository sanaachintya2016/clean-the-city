const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var world ,body,engine
var paper,ground,dustbin1,dustbin2,dustbin3;
function preload()
{
	
}

function setup() {
	createCanvas(800, 420);
    
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper();
	ground = new Ground(400,300,900,20)
	dustbin1 = new Dustbin(570,280,150,20)
	dustbin2 = new Dustbin(490,235,20,110)
	dustbin3 = new Dustbin(650,235,20,110)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  text(mouseX + ',' + mouseY, 30, 45);
  Engine.update(engine)
  paper.display();
  keyPressed()
  ground.display()
 dustbin1.display();
 dustbin2.display();
 dustbin3.display();


  drawSprites();
 
}
function keyPressed(){
    if(keyDown("up")){
      Matter.Body.applyForce(paper.body,paper.body.position,{x:6,y:-6})
    }

      }



