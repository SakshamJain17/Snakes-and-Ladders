const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var backImg, startBtn, start, homeP, clickS, dice1Img,dice2Img,dice3Img,dice4Img,dice5Img,dice6Img;
var diceSound, bannerImg, banner, boxWidth, boxHeight, dice1;
var boxes = [];
dir = 1;
var box;
var database;

function preload(){

    backImg  = loadImage("images/backdrop.jpg");
    bannerImg= loadImage("images/banner1.png");
    startBtn = loadImage("images/start button.png");
    clickS   = loadSound("sounds/click.mp3");
    dice1Img = loadImage("images/dice1.jpg");
    dice2Img = loadImage("images/dice2.jpg");
    dice3Img = loadImage("images/dice3.jpg");
    dice4Img = loadImage("images/dice4.jpg");
    dice5Img = loadImage("images/dice5.jpg");
    dice6Img = loadImage("images/dice6.jpg");
    diceSound= loadSound("sounds/dice.mp3");
}

function setup(){
    createCanvas(displayWidth/2+20,displayWidth/2-100);

        
        boxWidth = width/10;
        boxHeight = height/10;
    for(var j=height-(boxHeight),k=0;j>=0,k<10;j-=(boxHeight),k++){
    for(var i = 0,l = width-(boxWidth) ;i< width,l>=0;i+=(boxWidth),l-=(boxWidth)){
            if(k % 2 === 0){
                box = new Box(i,j,boxWidth,boxHeight);
            }
            else{
                box = new Box(l,j,boxWidth,boxHeight);
            }
            boxes.push(box);
         }
    }
    homeP = createSprite(width/2,height/2,10,50);
    homeP.addImage(backImg);
    homeP.scale = 2.3;
    
    start = createSprite(width/2,height/1.4, 100,100);
    start.addImage(startBtn);
    start.scale = 1.3;

    banner = createSprite(width/2,height/4, 100,300);
    banner.addImage(bannerImg);
    banner.scale = 0.8;

        // dice1 = createSprite(width/2,height/4, 100,300);
        // dice1.addImage(dice1Img);
        // dice1.scale = 1;
}

function draw(){
    background("white");
     var k = 0; 
    for( var i = 0; i< 100;i++){
        if(k % 2 === 0){
            if(i%2==0){
                fill("red")
            }
            else{
                fill("yellow");
            }
            boxes[i].display(); 
        }
        else{
            if(i%2!==0){
                fill("yellow")
            }
            else{
                fill("red");
            }
            boxes[i].display(); 
        }
        push();
        textSize(30);
        fill("black")
        text(i+1,boxes[i].x+20,boxes[i].y+45)
        pop();
    }
    if(mousePressedOver(start)){
        start.visible = false;
        homeP.visible = false;
        clickS.play();
        clickS.hide();
        clickS.visibility = false;
    }
    

drawSprites();
}