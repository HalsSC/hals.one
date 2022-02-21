function windowResized() {
    resizeCanvas(windowWidth, windowHeight, WEBGL);
    background(176,224,230);
}

function setup(){
    let canvas=createCanvas(windowWidth, windowHeight, WEBGL);
    canvas.position(0,0);
    canvas.style('z-index','-1');
    background(176,224,230);
    noStroke();
}

function draw(){
    frameRate(5);
    fill(random(255), random(255), random(255), random(60));
    ellipse(random(-width,width), random(-height,height), random(50,200));
}