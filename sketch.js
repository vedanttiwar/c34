var Dball;
var database;
var position;


function setup(){
    createCanvas(500,500);
    database=firebase.database();

    Dball = createSprite(250,250,10,10);
    Dball.shapeColor = "red";

    var ballPosition = database.ref('ball/position');
    ballPosition.on("value",readPosition);
}


function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){
database.ref('ball/position').set({
    x:position.x+x,
    y:position.y+y
})
}
function readPosition(data){
    position=data.val();
    Dball.x=position.x;
    Dball.y=position.y;
}