function setup() {
  let numShapesX = 10;
  let numShapesY = 20;
  let margin = 10;

  const BG = '#ff9ec6ff';
  const STROKE = "#b5179e";

  const shapeWidth = width / (numShapesX * 3);
  const shapeHeight = height / (numShapesY * 3);

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
  stroke(STROKE);
  rect(margin, margin, width - margin * 2, height - margin * 2);
  noFill();
  strokeWeight(1);

  let alterX = true;
  let alterY = true

  for (let i = shapeWidth + margin * 2; i < width; i+= shapeWidth * 3) {
    for (let j = shapeHeight + margin * 2.5; j < height; j += shapeHeight * 3 + margin * 2) {
      if ((alterX && alterY) || (alterX != !alterY)) {
        stroke(STROKE);
        fill(COLOR_CIRCLE);
        push();
        translate(i, j);
        circle(0, 0, shapeWidth * 1.5);
        pop();

        stroke(STROKE);
        fill(COLOR_TRIANGLE);
        push();
        translate(i, j - 3);
        triangle(0, -shapeWidth / 2, -shapeWidth / 2, shapeWidth / 2, shapeWidth / 2, shapeWidth / 2);
        pop();
        alterY = !alterY;
      } else {
        stroke(STROKE);
        fill(COLOR_TRIANGLE);
        push();
        translate(i, j - 3);
        let size = shapeWidth / 1.20;
        triangle(0, -size, -size, size, size, size);
        pop();

        stroke(STROKE);
        fill(COLOR_CIRCLE);
        push();
        translate(i, j + 9);
        circle(0, 0, shapeWidth);
        pop();
        alterY = !alterY;
      }
    }
    alterX = !alterX;
  }
}