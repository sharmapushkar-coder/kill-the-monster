var bg,ground1,sup1;
var b1,b2,b3,b4,b5,b6,b7
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function preload() {
bg=loadImage("back.png")

}

function setup() {
  createCanvas(1600, 800);

  engine = Engine.create();
  world = engine.world;

  ground1=new Ground(800,500,1700,5);
  sup1=new Super(100,200,400,200);
  b1=new Box(600,20,50,50);
  b2=new Box(600,75,50,50);
  b3=new Box(600,130,50,50);
  b4=new Box(600,100,50,50);
  b5=new Box(600,20,50,50);
  b6=new Box(600,20,50,50);
  b7=new Box(600,20,50,50);
  b8=new Box(600,20,50,50);
  b9=new Box(600,20,50,50);
  b10=new Box(600,20,50,50);
  b11=new Box(600,20,50,50);
  b12=new Box(600,20,50,50);
  b13=new Box(600,20,50,50);
  b14=new Box(600,20,50,50);
  b15=new Box(600,20,50,50);
  b16=new Box(600,20,50,50);
  b17=new Box(600,20,50,50);
  b18=new Box(600,20,50,50);

}

function draw() {
  background(bg);
  ground1.display();
  sup1.display();
  b1.display();
  b2.display();
  b3.display();
}
function mouseDragged() {
  Matter.Body.setPosition(sup1.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  Matter.Body.setPosition(sup1.body,{x:100,y:200});
}

