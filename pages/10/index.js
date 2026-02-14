function setup() {  
  let numShapesX = 10;
  let numShapesY = 20;
  let margin = 10;
  const COLORS = ["#250902","#38040e","#640d14","#800e13","#ad2831"]
  const BG = '#802249ff';
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

  for (let i = shapeWidth; i < width; i+= shapeWidth * 2) {
    for (let j = shapeHeight + margin; j < height; j += shapeHeight * 2 + margin * 2) {
      const c1 = color(random(COLORS))
      const c2 = color(random(COLORS))
      if ((alterX && alterY) || (alterX != !alterY)) {
        stroke(STROKE);
        fill(c1);
        push();
        translate(i, j);
        rotate(PI);
        circle(0, 0, shapeWidth * 1.5);
        pop();

        stroke(STROKE);
        fill(c2);
        push();
        translate(i, j - 3);
        rotate(radians(random(-180, 180)));
        triangle(0, -shapeWidth / 2, -shapeWidth / 2, shapeWidth / 2, shapeWidth / 2, shapeWidth / 2);
        pop();
        alterY = !alterY;
      } else {
        stroke(STROKE);
        fill(c1);
        push();
        translate(i, j - 3);
        rotate(radians(random(-180, 180)));
        let size = shapeWidth / 1.20;
        triangle(0, -size, -size, size, size, size);
        pop();

        stroke(STROKE);
        fill(c2);
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