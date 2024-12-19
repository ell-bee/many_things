let x = 200
let y = 200
let radius = 50
let r
let b
let g



function setup() {
  createCanvas(400, 400);
  createRandomColor()
  setRandomPosition()
  radius = random(5, 100)
  noStroke()
}

function draw() {
  background(255, 194, 207);
  fill(color(r,g,b))
  circle(x, y, radius)  
}

function circles() {
  setup()
  draw()
}

function setRandomPosition( xMin = 0 + radius, yMin = 0 + radius, xMax = width - radius, yMax = height - radius) { 
  x = random(xMin, xMax)
  y = random(yMin, yMax) 
}

function createRandomColor(){
  r = random(255)
  b = random(255)
  g = random(255)
}
