let brushSize = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  if (mouseIsPressed) {
    let r = map(mouseX, 0, width, 0, 255);
    let g = map(mouseY, 0, height, 0, 255);
    let b = map(mouseX + mouseY, 0, width + height, 0, 255);

    fill(r, g, b, 150);
    noStroke();
    ellipse(mouseX, mouseY, brushSize, brushSize);
  }
}

function keyPressed() {
  if (key === 'C' || key === 'c') {
    background(255);
  }
}
