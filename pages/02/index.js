function setup() {
  strokeWeight(2);
  createCanvas(width, height);
  push();
  fill("#FFFFFF");
  noStroke();
  rect(0, 0, pageWidth, pageHeight);
  pop();
  noStroke();

  fill(BG);
  stroke(COLORS[0]);
  rect(margin, margin, width - margin * 2, height - margin * 2);
  noFill();
  strokeWeight(1);

  clip(maskRect, { inverted: true});

  for (let i = numShapesX / 2 - margin / 2; i < width - margin * 2; i += numShapesX * density) {
    push();
    for (let j = numShapesY / 2 - margin / 2; j < height - margin * 4; j += numShapesY * density) {
      if (dist(i, j, circleW, circleH) > width / numShapesX * 1.5) {
        drawRandomShape(i, j, numShapesX, numShapesY, alpha);
      }
    }
    pop();
  }

  fill(COLOR_CIRCLE);
  push();
  const tSize = width / numShapesX / 2;
  translate(circleW + tSize / 2, circleH + tSize / 2);
  circle(0, 0, tSize);
  pop();
}