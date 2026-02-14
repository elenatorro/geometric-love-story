function setup() {  
  strokeWeight(2);
  createCanvas(width, height);
  push();
  fill("#FFFFFF");
  noStroke();
  rect(0, 0, pageWidth, pageHeight);
  pop();
  noStroke();

  clip(maskRect, { inverted: true});
  
  fill(BG);
  stroke(COLORS[0]);
  rect(margin, margin, width - margin * 2, height - margin * 2);
  noFill();
  strokeWeight(1);

  stroke(COLORS[0]);
  fill(COLOR_CIRCLE);
  const sc = color(COLORS[0]);
  let lastX = 0;
  let lastY = 0;

  const GRADIENT_COLORS = ColorSteps.getColorSteps('#669900', '#ff9900', width);

  for (let i = 0; i < width - width / 3 + shapeWidth; i += 5) {
    const x = i;
    const c = color(GRADIENT_COLORS[int(i)]);
    fill(c);
    stroke(sc);
    let y = 100 * sin(x * 0.008) + (height / 4);
    push();
    translate(x, y);
    circle(0, 0, shapeWidth * 2);
    pop();

    lastX = x;
    lastY = y;
  }

  stroke(COLORS[0]);
  fill(COLOR_CIRCLE);
  push();
  translate(lastX, lastY);
  circle(0, 0, shapeWidth * 2);
  pop();

  fill(COLORS[5]);
  push();
  translate(0, pageHeight / 3);
  rotate(PI / 4);
  rect(0, 0, width, height);
  pop();

  fill(COLORS[4]);
  push();
  translate(0, pageHeight - pageHeight / 4);
  rotate(-PI / 4);
  rect(0, 0, width, height);
  pop();

  stroke(COLORS[0]);
  fill(COLOR_TRIANGLE);
  push();
  const tSize = shapeWidth * 2;
  translate(width - width / 4 - tSize * 1.25, pageHeight / 4 - tSize / 2);
  triangle(0, -tSize / 2, -tSize / 2, tSize / 2, tSize / 2, tSize / 2);
  pop();
}