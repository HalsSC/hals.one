function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    background(0);
}

function setup(){
    let canvas=createCanvas(windowWidth, windowHeight);
    canvas.position(0,0);
    canvas.style('z-index','-1');
    background(0);
    noStroke();
    setInterval(canvasReset, 15000);
}

function draw(){
    frameRate(10);
    let rand=parseInt(random(245,255));
    if(rand%6==0)      fill(rand, 255-rand, 255-rand, 75);
    else if(rand%6==1) fill(255-rand, rand, 255-rand, 75);
    else if(rand%6==2) fill(255-rand, 255-rand, rand, 75);
    else if(rand%6==3) fill(rand, rand, 255-rand, 75);
    else if(rand%6==4) fill(rand, 255-rand, rand, 75);
    else if(rand%6==5) fill(255-rand, rand, rand, 75);
    rect(random(-width,width), random(-height,height), rand-170, rand-170);
}

function canvasReset(){
    background(0);
}