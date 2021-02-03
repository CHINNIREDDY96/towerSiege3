const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygon;
var ground1, platform;
var backgroundImg; 

var score  =  0;


function preload(){

    Getbackgroundimage();
}


function setup(){
   
   
    engine = Engine.create();
    world = engine.world;
    createCanvas(1000,600);
    

   

   polygon = new Poly(200,300,30,30);
   chain = new SlingShot(polygon.body, {x:150, y:250})

   groundb = new Ground(500,600,1000,30);
	ground1 = new Ground(390,310,270,12);
	ground2 = new Ground(800,225,210,12);

    box1 = new Box(300,275,30,40);
    box2 = new Box(330,275,30,40);
	box3 = new Box(360,275,30,40);
	box4 = new Box(390,275,30,40);
	box5 = new Box(420,275,30,40);
	box6 = new Box(450,275,30,40);
	box7 = new Box(480,275,30,40);

	box8 = new Box(330,235,30,40);
    box9 = new Box(360,235,30,40);
    box10 = new Box(390,235,30,40);
    box11 = new Box(420,235,30,40);
	box12 = new Box(450,235,30,40);
	
	box13 = new Box(360,195,30,40);
	box14 = new Box(390,195,30,40);
	box15 = new Box(420,195,30,40);
	
	box16 = new Box(390,155,30,40);

	box17 = new Box(740,205,30,40);
    box18 = new Box(770,205,30,40);
    box19 = new Box(800,205,30,40);
    box20 = new Box(830,205,30,40);
	box21 = new Box(860,205,30,40);
	
    box22 = new Box(770,165,30,40);
    box23 = new Box(800,165,30,40);
	box24 = new Box(830,165,30,40);
	
    box25 = new Box(800,125,30,40);
 
    
}

function draw(){
//background("black");
if(backgroundImg){
    background(backgroundImg);
    }
Engine.update(engine);
   
  text("SCORE : " +score, 750,40)

  groundb.display();
  ground1.display();
  ground2.display();
  chain.display();
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
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    chain.fly();
}
function keyPressed(){
    if(keyCode===32){
        chain.attach(polygon.body);
    }
}

async function Getbackgroundimage(){
     
    var response =  await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var responseJSON =  await response.json();
    console.log(responseJSON);
    var datetime = responseJSON.datetime
   console.log(datetime);
   var hour = datetime.slice(11,13);
   console.log(hour);
   if(hour>6 && hour <19 ){
       backgroundImg = loadImage( "download.jpeg")
   }
   else
   {
      backgroundImg = loadImage("photo-1419242902214-272b3f66ee7a.jpeg")
   }
  
  }


 
