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
    circle.x += circle.speedX;
    circle.y += circle.speedY;
    
    circle.size = 30 + sin(frameCount * 0.05) * 10;
    circle.color[0] = (circle.color[0] + 1) % 255;
     
    if (circle.x > width || circle.x < 0 ) {
      circle.speedX *= -1;
    }
    if (circle.y > height || circle.y < 0) {
      circle.speedY *= -1;
    }
    fill(circle.color);
    noStroke();
    ellipse(circle.x, circle.y, circle.size);
  }
  }
