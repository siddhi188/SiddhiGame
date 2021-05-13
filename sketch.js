const World = Matter.World
const Engine = Matter.Engine
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint
var engine,world;

function preload(){
  pcImg = loadImage("PC.png")
}
function setup() {
  createCanvas(1350,650);
  
   
  engine = Engine.create()
  world = engine.world

  stone1 = new Stone(700,350,60)
  stone2 = new Stone(700,340,50)
  stone3 = new Stone(700,330,40)
  stone4 = new Stone(700,320,30)
  stone5 = new Stone(700,310,20)
  stone6 = new Stone(700,300,10)
  stone7 = new Stone(200,10,100)

  ground1 = new Ground(700,450,60,10)
  ground2 = new Ground(700,650,1400,30)

  rock = new Rock(350, 350, 50, 50);

  slingshot = new Slingshot(rock.body, {x: 325, y: 400})

 pc1 = new Pc(280,300,300)
}

function draw() {
  background("Green"); 

  Engine.update(engine)
  
  fill("Black")
  stone1.display()
  fill("White")
  stone2.display()
  fill("pink")
  stone3.display()
  fill("blue")
  stone4.display()
  fill("yellow")
  stone5.display()
  fill("red")
  stone6.display()
  fill("white")
  stone7.display()
  ground1.display()
  fill("black")
  ground2.display()
  pc1.display()

  drawSprites();
  detectCollision(rock,stone1)
  detectCollision(rock,stone2)
  detectCollision(rock,stone7)
  
  
  
  rock.display();
  slingshot.display();
}

function mouseDragged(){
  Matter.Body.setPosition(rock.body, {x: mouseX, y:mouseY})
}

function mouseReleased(){
  slingshot.fly();
}
function detectCollision(lpc, lstone1)
{
  stoneBodyPosition = lstone1.body.position;
  pcBodyPosition = lpc.body.position;
  
  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, pcBodyPosition.x, pcBodyPosition.y)
  
  if(distance <= lpc.r + lstone1.r)
  {
  	 //Matter.Body.setPosition(lstone1.body,{x:700,y:350});
      Matter.Body.setStatic(lstone1.body,false)
  }
}