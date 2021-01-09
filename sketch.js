var tom;
var tomImage
var tom2;
var jerry;
var jerryImage;
var jerry2;
var gardenImage;
var garden;
var tomfImage;
var jerryfImage;//f stands for final


function preload() {
    //load the images here
jerryImage = loadImage("jerryOne.png")
tomImage = loadImage("tomOne.png")
jerry2 = loadAnimation("jerryTwo.png","jerryThree.png")
tom2 = loadAnimation("tomTwo.png","tomThree.png")
gardenImage = loadImage("garden.png")
tomfImage = loadImage("tomFour.png")
jerryfImage = loadImage("jerryFour.png")



}

function setup(){
    createCanvas(1000,800);

garden = createSprite(500,400,40,40)
garden.addImage("background",gardenImage)
garden.scale = 1.3
tom = createSprite(700,700,30,30)
tom.addImage("tom",tomImage)
tom.scale = 0.2
jerry = createSprite(100,700,40,40)
jerry.addImage("jerry", jerryImage)
jerry.scale = 0.1


}


function draw() {

    background("purple");
    //Write condition here to evalute if tom and jerry collide
keyPressed();
  
if(tom.x - jerry.x < (tom.width - jerry.width)/2){
    tom.velocityX = 0
    tom.addImage("finalImageTom",tomfImage)
    tom.changeImage("finalImageTom")
    jerry.addImage("finalImageJerry",jerryfImage)
    jerry.changeImage("finalImageJerry")
}






drawSprites();
}


function keyPressed(){
if(keyCode === LEFT_ARROW){
    tom.velocityX = -5
    tom.addAnimation("catRunning",tom2)
    tom.changeAnimation("catRunning")
    jerry.addAnimation("jerryTeasing",jerry2)
    jerry.changeAnimation("jerryTeasing")

}
  

}
