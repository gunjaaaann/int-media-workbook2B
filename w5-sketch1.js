let camera;
let sampleSize = 5;
let camWidth = 320;
let camHeight = 240;
let threshold = 500;
let multiplier;
let thresholdSlider = 765;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
  camera = createCapture({ video: true, audio: false });
  camera.size(camWidth, camHeight);
  camera.hide();
  canvas.position(0, 0);
  canvas.style('z-index', '-1')
  canvas.style('position', 'fixed');
  
  multiplier = width / camWidth;

  textSize(sampleSize * multiplier / 2);
}

function draw() {
  background(0);
  camera.loadPixels();
  for(let y=0;y<camHeight;y+=sampleSize){
    for(let x=0;x<camWidth;x+=sampleSize){
      let index=(x+y*camWidth)*4;
      let r=camera.pixels[index];
      let g=camera.pixels[index+1];
      let b=camera.pixels[index+2];
      let brightness=r+g+b;
      let fillCol=map(brightness/765, 0, 1, 0 , 255);
      if(brightness<thresholdSlider){
        push();
        //stroke(255);
        strokeWeight(1);
        fill(fillCol);
        rect(x*multiplier,y*multiplier,sampleSize*multiplier,sampleSize*multiplier);
        pop();
        noStroke();
        fill(0);
      }else{
        fill(100);
      }
    }
  }
}
