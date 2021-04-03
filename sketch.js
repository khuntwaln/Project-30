const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,box21,box22,box23,box24,box25;
var ground,platform,platform1,polygon;
var slingshot;

function setup() {
  var canvas = createCanvas(800,550);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    platform = new Ground(280, 464, 280, 8);

    box1 = new Box(250,460,30,40);
    box1.color = ("lightblue");
    box2 = new Box(245,460,30,40);
    box2.color = ("lightblue");
    box3 = new Box(260,460,30,40);
    box3.color = ("lightblue");
    box4 = new Box(275,460,30,40);
    box4.color = ("lightblue");
    box5 = new Box(290,460,30,40);
    box5.color = ("lightblue");
    box6 = new Box(305,460,30,40);
    box6.color = ("lightblue");
    box7 = new Box(300,460,30,40);
    box7.color = ("lightblue");

    box8 = new Box(260,420,30,40);
    box8.color = ("pink");
    box9 = new Box(260,420,30,40);
    box9.color = ("pink");
    box10 = new Box(275,420,30,40);
    box10.color = ("pink");
    box11 = new Box(290,420,30,40);
    box11.color = ("pink");
    box12 = new Box(290,420,30,40);
    box12.color = ("pink");

    box13 = new Box(310,380,30,40);
    box13.color = ("lightgreen");
    box14 = new Box(275,380,30,40);
    box14.color = ("lightgreen");
    box15 = new Box(240,380,30,40);
    box15.color = ("lightgreen");

    box16 = new Box(275,320,30,40);
    box16.color = ("grey");

    platform1 = new Ground(610, 385, 180, 10);

    box17 = new Box(580,360,30,40);
    box17.color = ("lightblue");
    box18 = new Box(595,360,30,40);
    box18.color = ("lightblue");
    box19 = new Box(610,360,30,40);
    box19.color = ("lightblue");
    box20 = new Box(625,360,30,40);
    box20.color = ("lightblue");
    box21 = new Box(640,360,30,40);
    box21.color = ("lightblue");

    box22 = new Box(640,320,30,40);
    box22.color = ("lightgreen");
    box23 = new Box(610,320,30,40);
    box23.color = ("lightgreen");
    box24 = new Box(580,320,30,40);
    box24.color = ("lightgreen");

    box25 = new Box(610,280,30,40);
    box25.color = ("pink");

    polygon = new Polygon(40, 130, 20, 15);

    slingshot = new Slingshot(polygon.body,{x:120, y:100}); 

}

function draw() {
  Engine.update(engine);
  background("brown");  
  ground.display();
  platform.display();
  platform1.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  polygon.display();
  slingshot.display(); 

  drawSprites();
}

function mouseDragged(){
      Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
      slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32 && polygon.body.speed < 1){
     polygon.trajectory = [];
     Matter.Body.setPosition(polygon.body, {x:120, y:100});
     slingshot.attach(polygon.body);
  }
}