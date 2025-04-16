function setup() {
 let canvas = createCanvas (windowWidth, 5000);
 canvas.parent('canvas-container');
 background (255, 255, 255);
 frameRate(8);
}

function draw() {
  let x = random(width);
  let y = random(height);
  drawFlower(x, y);
  
}

function drawFlower(x, y){
  translate(mouseX, mouseY); // position flower on the screen
  fill(255, 0, 0);
  noStroke();
  for (let i = 0; i < 10; i++) {
    ellipse(0, 30, 20, 50); // ellipse (x-coord., y-coord., width, height).
    // To make a flower, you want the coordinates to be fairly close to each other so that the ellipses overlap.
    rotate(PI / 5); // from where the ellipse is positioned, divide 5 ellipses around the origin (also: TAU/10)
  }
  fill(0); 
  circle(0, 0, 30, 20);  
}
