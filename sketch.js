let circles = [];


function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 10; i++) {
    circles.push({
      x: random(width),
      y: random(height),
      size: random(20, 50),
      color: [random(255), random(255), random(255)],
    });
  }
}
  
function draw() {
  background(255, 204, 215);
  
   for (let circle of circles) {
    fill(circle.color);
    noStroke();
    ellipse(circle.x, circle.y, circle.size);
  }
}
