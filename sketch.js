var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 bottomBody = Bodies.rectangle(390,640,250,20);
	 World.add(world,bottomBody)

	 bottomSprite=createSprite(390,640,250,20);
	 bottomSprite.shapeColor=color("red");

	 side1body = Bodies.rectangle(520,600,20,100)
	 World.add(world,side1body);

	 side1Sprite = createSprite(520,600,20,100);
	 side1Sprite.shapeColor=color("red");

	side2body = Bodies.rectangle(260,600,20,100)
	World.add(world,side2body)

	side2Sprite = createSprite(260,600,20,100);
	side2Sprite.shapeColor=color("red");

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	packageSprite.x=packageBody.position.x
	packageSprite.y=packageBody.position.y
	Body.setStatic(packageBody, false)
  }
}



