var sound, analyzer, volume, string, shapes = [];

function preload(){
  sound = loadSound("data/wk6_audio.wav");
}

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('canvas-container');  
  getAudioContext().suspend();
  
  analyzer = new p5.Amplitude();
  textAlign(CENTER, CENTER);
}

function draw() {
  background(255, 149, 56, 20);
  volume = analyzer.getLevel();

  if (volume > 0.1) {
    let x = random(width);
    let y = random(height);
    let size = volume * 1000;
    noFill();
    stroke(255, 0, 0);
    strokeWeight(5);
    ellipse(x, y, size)
  }
}

function mousePressed(){
  getAudioContext().resume();
  analyzer = new p5.Amplitude();
  analyzer.setInput(sound);
  loop(); 
  if (sound.isPlaying() == true) {
    sound.stop();
    sound.noLoop();
  } else {
    sound.play();
    sound.loop();
  }
}

    
