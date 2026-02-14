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
  const circleH3 = height - height / 6;
  const triangleW3 = width / 2 + shapeWidth;
  const triangleH3 = height - height / 6;

  // 1
  fill(BG);
  stroke(COLORS[0]);
  rect(margin, margin, width - margin * 2, h1);
  noFill();
  strokeWeight(1);

  for (let i = numShapesX / 2 - margin / 2; i < width - margin * 3; i += numShapesX * 2) {
    push();
    for (let j = numShapesY / 2 - margin / 2; j < h1 - margin; j += numShapesY * 2) {
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


  // 2
  fill(BG);
  rect(margin, h1 + margin * 2, width - margin * 2, h2 - h1);

  for (let i = numShapesX / 2 + margin / 2; i < width - margin * 3; i += numShapesX * 2) {
    push();
    for (let j = h1 + numShapesY / 2 + margin; j < h2 + margin; j += numShapesY * 2) {
      if (dist(i, j, triangleW, triangleH + h1) > width / numShapesX * 1.5) {
        drawRandomShape(i, j, numShapesX, numShapesY, alpha);
      }
    }
    pop();
  }

  fill(COLOR_TRIANGLE);
  push();
  const tSize2 = width / numShapesX / 2;
  translate(triangleW + tSize2 / 2, h1 + triangleH + tSize2 / 2);
  triangle(0, -tSize2 / 2, -tSize2 / 2, tSize2 / 2, tSize2 / 2, tSize2 / 2);
  pop();

  // 3
  fill(BG);
  rect(margin, h2 + margin * 3, width - margin * 2, h3 - h2);

  for (let i = numShapesX / 2 - margin / 2; i < width - margin * 2; i += numShapesX * 2) {
    push();
    for (let j = h2 + numShapesY / 2 + margin * 2 ; j < h3 + margin * 2; j += numShapesY * 2) {
      if (dist(i, j, circleW3, circleH3) > width / numShapesX * 1.5 && dist(i, j, triangleW3, triangleH3) > width / numShapesX * 1.5) {
        drawRandomShape(i, j, numShapesX, numShapesY, alpha / 2);
      }
    }
    pop();
  }

  fill(COLOR_CIRCLE);
  push();
  const tSize3 = width / numShapesX / 2;
  translate(circleW3 + margin * 2, circleH3 + margin * 2);
  circle(0, 0, tSize3);
  pop();

  fill(COLOR_TRIANGLE);
  push();
  const tSize4 = width / numShapesX / 2;
  translate(triangleW3 + margin * 2, triangleH3 + margin * 2);
  triangle(0, -tSize4 / 2, -tSize4 / 2, tSize4 / 2, tSize4 / 2, tSize4 / 2);
  pop();
}