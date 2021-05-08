var canvas;
var music;
var box1;
var box2;
var box3;
var box4;
var ball;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
box1 = createSprite(120,570,110,30);
box2 = createSprite(290,570,110,30);
box3 = createSprite(460,570,110,30);
box4 = createSprite(630,570,110,30);
ball = createSprite(random(20,750),500,30,30);
box1.shapeColor = "blue";
box2.shapeColor = "pink";
box3.shapeColor = "red";
box4.shapeColor = "purple";
ball.shapeColor = "black";
ball.velocityX = 8;
ball.velocityY = 10;

    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
edges = createEdgeSprites();
ball.bounceOff(edges);

if(ball.isTouching(box1)&&(ball.bounceOff(box1))){
    ball.shapeColor = "blue";
};
if(ball.isTouching(box2)&&(ball.bounceOff(box2))){
    ball.shapeColor = "pink";
};
if(ball.isTouching(box3)&&(ball.bounceOff(box3))){
    ball.shapeColor = "red";
    ball.velocityX = 0;
    ball.velocityY = 0;
    music.stop();
};
if(ball.isTouching(box4)&&(ball.bounceOff(box4))){
    ball.shapeColor = "purple";
    music.play();
};





    drawSprites();//add condition to check if box touching surface and make it box
}
