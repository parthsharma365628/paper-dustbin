
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var crumPaper


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);

	
  crumPaper= new paper(300,650,50)
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  textSize(20)
  fill("yellow")
  text("press UP arrow key to throw the paper in the Dustbin",600,200)
  Engine.update(engine);

  groundObject.display();
  dustbinObj.display();
 crumPaper.display()
}
function keyPressed(){ 
	if(keyCode==UP_ARROW){
		Matter.Body.applyForce(crumPaper.body, crumPaper.body.postion,{x:150 ,y:-240})
	}
}
