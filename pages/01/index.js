function setup() {
  strokeWeight(1);
  createCanvas(width, height);
  push();
  fill("#FFFFFF");
  noStroke();
  rect(0, 0, pageWidth, pageHeight);
  pop();
  noStroke();

  fill(BG);
  stroke(S);
  rect(margin, margin, width - margin * 2, height - margin * 2);
  noFill();
  strokeWeight(1);

  clip(maskRect, { inverted: true});

  for (let i = numShapesX / 2 - margin / 2; i < width - margin * 2; i += numShapesX * density) {
    push();
    for (let j = numShapesY / 2 - margin / 2; j < height - margin * 4; j += numShapesY * density) {
      if (dist(i, j, triangleW, triangleH) > width / numShapesX * 1.8) {
        drawRandomShape(i, j, numShapesX, numShapesY, alpha);
      }
    }
    pop();
  }

  fill(COLOR_TRIANGLE);
  push();
  translate(triangleW + tSize, triangleH + tSize / 2);
  triangle(0, -tSize / 2, -tSize / 2, tSize / 2, tSize / 2, tSize / 2);
  pop();
}