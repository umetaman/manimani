function preload(){

}

var circles = [];
const AGENT_NUM = 100;

function setup(){
    createCanvas(windowWidth, windowHeight);

    for(var i = 0; i < AGENT_NUM; i++){
        var radius = random(10,100);
        circles.push(new Circle(
            random(0 + radius, windowWidth - radius),
            random(0 + radius, windowHeight - radius),
            radius
        ));
    }
}

function draw(){

    for(var i = 0; i < AGENT_NUM; i++){
        stroke(255, 0, 0);
        fill(255);
        circles[i].draw();
    }

}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}