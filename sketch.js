
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var engine, world;
var mango1,mango2,mango3,mango4,mango6;
var boy;
var tree;
var sling;
var stone;
var ground;
var bgImg,treeImg;


function preload()
{
  bgImg = loadImage("bg.png")
  treeImg = loadImage("tree.png");
}

function setup() {
	createCanvas(1300, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	
	mango1 = new Mango(1050,200,50)
	mango2 = new Mango(1000,290,50)
	mango3 = new Mango(950,380,50)
	mango4 = new Mango(900,170,50)	
	mango5 = new Mango(800,280,50)
	mango6 = new Mango(1100,250,50)

	ground = new Ground(0,690,3300,20)

	boy = new Boy(300,500,20,70)
 //tree = new Tree(1000,400,550,650);
 tree  = createSprite(1000,400,550,650)
 tree.addImage(treeImg)
 tree.scale = 0.5

	
  stone = new Stone(200,200,30)
  sling = new SlingShot(stone.body,{x: 235,y:420})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bgImg);
  
  textSize(30)
  text("Press Space To get a second chance to play!",250,150)

 drawSprites()
 
  boy.display()
  //tree.display()
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  mango6.display()


  stone.display()
  ground.display()


  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);

  

  
  

  sling.display()
 

}

function mouseDragged(){
  Matter.Body.setPosition(stone.body, {x: mouseX, y: mouseY});
}
  

function mouseReleased(){
   sling.fly()
}

function keyPressed(){
  if (keyCode === 32){
    Matter.Body.setPosition(stone.body,{x:235,y:420});
    sling.attach(stone.body)
  }
}
function detectCollision(lstone,lmango){
  mangoPosition = lmango.body.position;
  stonePosition = lstone.body.position;
  var distance = dist(stonePosition.x,stonePosition.y,mangoPosition.x,mangoPosition.y)
  if(distance<=lmango.radius+lstone.radius) {
     //console.log(distance);
      Matter.Body.setStatic(lmango.body,false); }
}