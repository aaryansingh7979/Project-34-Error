
const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var rock,mango,tree;

var bg_img;

var button
var treeimg,rockimg


function preload()
{
  bg_img = loadImage('background.png');
  treeimg = loadImage('tree.jpeg');
  rockimg = loadImage('rock.png');
  mangoimg = loadImage('mango.png');
}

function setup() {
  createCanvas(800,700);
  frameRate(80);

  engine = Engine.create();
  world = engine.world;


  button = createImg('button.webp');
  button.position(200,380);
  button.size(50,50);                         

  tree = createSprite(320,50,20,20);
  tree.addImage(treeimg,'tree.jpeg');
  tree.scale = 0.02;

  rock = createSprite(320,50,20,20);
  rock.addImage(rockimg,'rock.img');
  rock.scale = 0.02;

  mango = createSprite(320,50,20,20);
  mango.addImage(mangoimg);
  mango.scale = 0.02;
}


function draw() 
{
  background(51);
  image(bg_img,0,0,width,height)

  drawSprites();
}