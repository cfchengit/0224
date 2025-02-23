function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100);
  noStroke();
  background(0);
}

function draw() {
  background(0, 5); // 稍微透明的背景，產生拖曳效果
  let centerY = height / 2;
  for (let x = 0; x < width; x += 50) {
    let hue = random(360);
    fill(hue, 100, 100, 0.5);
    ellipse(x, centerY, 50, 50);
  }
}
