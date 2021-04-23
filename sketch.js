var z;
var y;
var a;
var b;

function setup() {
  z = random(1, 350)
  y = random(100, 350)
  a = random(1, 300)
  b = random(100, 255)
  createCanvas(400, 400);
}

function draw() {


  background(0);
  rect(350, 250, 20, 350) //gray rectangle
  fill(b, 0, 0)
  rect(350, 235, 20, 20) //red square                         
  fill(100, 200, 0)
  ellipse(z, y, 25, 25) // green dot
  fill(255, 0, 0)
  ellipse(mouseX, mouseY, 25, 25) // red dot 
  fill(150, 200, 90)
  rect(1, 350, 399, 399) // grass
  fill(0, 0, 200)
  rect(50, 295, 70, 30) //blue car
  fill(200, 200, 200)
  ellipse(55, 335, 25, 25) //front tire
  ellipse(115, 335, 25, 25) //back tire
  fill(200, 200, 200)
  if (mouseX > 100) {
    ellipse(350, 50, 150, 150) //appearing moon
    ellipse(50, 50, 20, 20) //appearing star
    ellipse(60, 100, 10, 10) //apearing star
    ellipse(100, 30, 10, 10) //appearing star
    ellipse(120, 90, 10, 10) //appearing star
    ellipse(190, 85, 20, 20) //appearing star
    ellipse(150, 34, 10, 10) //appearing star
    ellipse(220, 46, 10, 10) //appearing star
  }


}