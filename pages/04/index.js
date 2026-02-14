function setup() {
  strokeWeight(2);
  createCanvas(width, height);
  push();
  fill("#FFFFFF");
  noStroke();
  rect(0, 0, pageWidth, pageHeight);
  pop();
  noStroke();

  clip(maskRects, { inverted: true});

  const circleW3 = width / 2 - shapeWidth;
  const circleH3 = h1 / 2 - shapeHeight / 2;
  const triangleW3 = width / 2 + shapeWidth;
  const triangleH3 = h1 / 2 - shapeHeight / 2;

  // 1
  fill(BG);
  stroke(COLORS[0]);
  rect(margin, margin, width - margin * 2, h1);
  noFill();
  strokeWeight(1);

  for (let i = numShapesX / 2 + margin; i < width - margin * 3; i += numShapesX * 2) {
    push();
    for (let j = numShapesY / 2 + margin; j < h1 - margin / 2; j += numShapesY * 2) {
      if (dist(i, j, circleW3, circleH3) > width / numShapesX * 1.5 && dist(i, j, triangleW3, triangleH3) > width / numShapesX * 1.5) {
          drawRandomShape(i, j, numShapesX, numShapesY, 0);
      }
    }
    pop();
  }

  fill(COLOR_CIRCLE);
  push();
  const tSize = width / numShapesX / 2;
  translate(circleW3 + shapeWidth, circleH3 + shapeHeight);
  circle(0, 0, tSize);
  pop();

  fill(COLOR_TRIANGLE);
  push();
  const tSize4 = width / numShapesX / 2;
  translate(triangleW3 + shapeWidth, triangleH3 + shapeHeight);
  triangle(0, -tSize4 / 2, -tSize4 / 2, tSize4 / 2, tSize4 / 2, tSize4 / 2);
  pop();


  // 2
  fill(BG);
  rect(margin, h1 + margin * 2, width - margin * 2, h2 - h1);

  for (let i = numShapesX / 2; i < width - margin * 4; i += numShapesX) {
    push();
    for (let j = h1 + numShapesY / 2 + margin; j < h2 + margin * 1; j += numShapesY) {
      if (dist(i, j, triangleW2, triangleH2 + h1) > width / numShapesX) {
        drawRandomShape(i, j, numShapesX, numShapesY, alpha - 100);
      }
    }
    pop();
  }

  fill(COLOR_TRIANGLE);
  push();
  const tSize2 = width / numShapesX / 2;
  translate(triangleW2 + margin * 2, h1 + triangleH2 + margin);
  triangle(0, -tSize2 / 2, -tSize2 / 2, tSize2 / 2, tSize2 / 2, tSize2 / 2);
  pop();

  // 3
  fill(BG);
  rect(margin, h2 + margin * 3, width - margin * 2, h3 - h2);

  for (let i = numShapesX / 2; i < width - margin * 3; i += numShapesX / 2) {
    push();
    for (let j = h2 + numShapesY / 2 + margin ; j < h3 + margin / 2; j += numShapesY / 2) {
      if (dist(i, j, circleW2, circleH2 + h2) > width / numShapesX) {
        drawRandomShape(i, j, numShapesX, numShapesY, alpha - 100);
      }
    }
    pop();
  }

  fill(COLOR_CIRCLE);
  push();
  const tSize3 = width / numShapesX / 2;
  translate(circleW2 + margin * 2, h2 + circleH2 + margin * 2);
  circle(0, 0, tSize3);
  pop();
}