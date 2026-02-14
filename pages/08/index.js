function setup() {
  strokeWeight(2);
  createCanvas(width, height);
  push();
  fill("#FFFFFF");
  noStroke();
  rect(0, 0, pageWidth, pageHeight);
  pop();
  noStroke();

  function maskRect() {
    rect(margin, margin, width - margin * 2, height - margin * 2);
  }

  clip(maskRect, { inverted: true});
  
  fill(BG);
  stroke(COLORS[0]);
  rect(margin, margin, width - margin * 2, height - margin * 2);
  noFill();
  strokeWeight(1);


  fill(COLORS[5]);
  push();
  translate(0, pageHeight / 3);
  rect(0, 0, width, height);
  pop();

  fill(COLORS[4]);
  push();
  translate(0, pageHeight - pageHeight / 4);
  rect(0, 0, width, height);
  pop();

  stroke(COLORS[0]);
  fill(COLOR_CIRCLE);
  push();
  translate(width - width / 3, pageHeight / 3 - shapeHeight);
  circle(0, 0, shapeWidth * 2);
  pop();

  stroke(COLORS[0]);
  fill(COLOR_TRIANGLE);
  push();
  const tSize = shapeWidth * 2;
  translate(width - width / 3 + tSize, pageHeight / 3 - shapeHeight);
  triangle(0, -tSize / 2, -tSize / 2, tSize / 2, tSize / 2, tSize / 2);
  pop();

  for (let r = 0; r < 10; r++) {
      const c = color(COLORS[r % COLORS.length]);
      stroke(c);
      strokeWeight(2);
      noFill();
      push();
      let y = 100 * sin(r * 0.5) + (pageHeight / 5);
      translate(width - width / 3 - shapeWidth * 2 * 2 + r * 30, y);
      beginShape();
      for (let i = 0; i < 8; i++) {
        push();
        const x = random(-10, 10);
        const y = random(-10, 10);
        curveVertex(x, y);
        pop();
      }
      endShape();
      pop();
  }
}