
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
let ball;
let ground;

function setup()
{
  createCanvas(400,400);
  engine= Engine.create();
  world=engine.world; //OUR GAME world
  let ball_options = {
    restitution : 0.95,
    firctionAir:0.01
  }
  ball=Bodies.circle(100, 20, 20,ball_options)
  World.add(world,ball)
  var ground_options={
    isStatic:true
  }
  ground=Bodies.rectangle(10,380,400,40,ground_options);
  World.add(world,ground)
}

function draw() 
{
  background(51);
  Engine.update(engine)
 ellipse(ball.position.x,ball.position.y,320);
 rect(ground.position.x,ground.position.y,400,20);

}

