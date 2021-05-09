var canvas;
var music;
var sprite1,sprite2,sprite3,sprite4;
var boxSprite;
var edges;


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    music.play();

    //create 4 different surfaces
    sprite1 = createSprite(70,560,200,20);
    sprite1.shapeColor = "red";

    sprite2 = createSprite(280,560,200,20);
    sprite2.shapeColor = "blue";

    sprite3 = createSprite(490,560,200,20);
    sprite3.shapeColor = "yellow";

    sprite4 = createSprite(700,560,200,20);
    sprite4.shapeColor = "purple";

    boxSprite = createSprite(random(20,750),100,30,30);
    boxSprite.shapeColor = "white";
    boxSprite.velocityY = 4;
    boxSprite.velocityX = 4;
    
    edges = createEdgeSprites();

    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    
    

    if(sprite1.isTouching(boxSprite) && boxSprite.bounceOff(sprite1)){
        boxSprite.shapeColor = "red";
        
    }

    if(sprite2.isTouching(boxSprite) && boxSprite.bounceOff(sprite2)){
        boxSprite.shapeColor = "blue";
    }

    
    if(sprite3.isTouching(boxSprite) && boxSprite.bounceOff(sprite3)){
        boxSprite.shapeColor = "yellow";
    }

    if(sprite4.isTouching(boxSprite) && boxSprite.bounceOff(sprite4)){
        music.stop();
        boxSprite.shapeColor = "purple";
    }
    

  
    boxSprite.bounceOff(edges);




    //add condition to check if box touching surface and make it box
    drawSprites();
}
