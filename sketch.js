var bgImg;
var cat;
var mouse;

function preload() {
    //load the images here
    bg = loadImage("images/garden.png");
    catImg1 = loadImage("images/cat1.png");
    catImg2 = loadImage("images/cat2.png");
    catImg3 = loadImage("images/cat3.png");
    catImg4 = loadImage("images/cat4.png");
    mouseImg1 = loadImage("images/mouse1.png");
    mouseImg2 = loadImage("images/mouse2.png");
    mouseImg3 = loadImage("images/mouse3.png");
    mouseImg4 = loadImage("images/mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    cat = createSprite(870, 615);
    cat.addAnimation("catSitting", catImg1)
    cat.scale = 0.2;

    mouse = createSprite(86, 600);
    mouse.addAnimation("mouseStanding", mouseImg1)
    mouse.scale = 0.2;

}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < cat.width/2 - mouse.width/2){
        cat.velocityX = 0;
        cat.addAnimation("catLastImg", catImg4)
        cat.changeAnimation("catLastImg");
        cat.x = 300;

        mouse.addAnimation("mouseLookingImg", mouseImg4)
        mouse.changeAnimation("mouseLookingImg");
        
        
    
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
    mouse.addAnimation("mouseTeasing", mouseImg2, mouseImg3);
    mouse.changeAnimation("mouseTeasing");
    mouse.frameDelay = 15;

    cat.addAnimation("catWalking", catImg2, catImg3);
    cat.changeAnimation("catWalking");
    cat.velocityX = -5;
    cat.scale = 0.25;
}

}
