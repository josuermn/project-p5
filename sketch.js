var r, g, b;
var diam1 = 400;

function setup() {
    // put setup code here
    createCanvas(1280, 720);
    r= random(255);
    b= random(255);
    g= random(255);
    
}
function draw() {
    background("#d1b0d1");
    //user clicks the mouse the background change color
    if (mouseIsPressed) {
        background("#913030");
    r= random(255);
    b= random(255);
    g= random(255);
    }
    
    fill("#6324a6");
    strokeWeight(4);
    stroke("#c5d9e0");
    ellipse(width/2, height/2, 500, 500);
    strokeWeight(10);
    //eyes are lines
    line(740, 250, 740, 320);
    line(550, 250, 550, 320);
    line(610, 350, 690, 340);
     //bow tie
    stroke("#3d3838")
    fill("#ed0202");
    ellipse(width/2 -80, 600, 150, 50);  
    ellipse(width/2 + 80, 600, 150, 50); 
    fill("#ed0202");
    ellipse(width/2, 600, 20, 20);
    
}
