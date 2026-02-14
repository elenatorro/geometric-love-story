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