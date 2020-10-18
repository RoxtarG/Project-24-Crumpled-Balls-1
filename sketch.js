
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,ground;
var engine,world; 
function preload()
{
	
}

function setup() {
	createCanvas(400, 400);
    

	engine = Engine.create();
	world = engine.world;
	
	var ground_options ={
        isStatic: true
    }

	var paper_options={
		isStatic:false,
		restitution: 0.75,
		friction:0.5,
		density:1.2,
    }
	ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground)
	
	paper = Bodies.circle(200, 100, 20, paper_options);
	World.add(world,paper);

	redBox1=createSprite(200,380,145,10);
	redBox2=createSprite(267,330,10,100);
	redBox3=createSprite(133,330,10,100);
	redBox1.shapeColor="red";
	redBox2.shapeColor="red";
	redBox3.shapeColor="red";
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);

    ellipseMode(RADIUS);
    ellipse(paper.position.x,paper.position.y,20,20);
  drawSprites();
 
}

function keyPressed(){
	if (keyPressed===UP_ARROW){
		Matter.Body.applyForce(paper.Body,paper.Body.position,{x:85, y:-85})
	}
}



