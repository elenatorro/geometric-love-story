function setup() {
  const pageWidth = 559 * 2;
  const pageHeight = 794 * 2;
  const width = pageWidth;
  const height = pageHeight;

  let numShapesX = 5;
  let numShapesY = 20;
  let margin = 10;

  const COLOR_TRIANGLE = "#B0FFFA";
  const COLOR_CIRCLE = "#E4FF30";
  const BG = '#3399cc';
  const STROKE_COLOR = color("#ff6600");

  const shapeWidth = width / (numShapesX);
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
  rect(margin, margin, width - margin * 2, height - margin * 2);
  const GRADIENT_COLORS = ColorSteps.getColorSteps('#B0FFFA', '#E4FF30', height);
  for(let y=0; y<height; y++){
    n = map(y,0,height,0,1);
    let newc = color(GRADIENT_COLORS[int(y)]);
    stroke(newc);
    line(0,y,width, y);
  }

  stroke(STROKE_COLOR);
  strokeJoin(ROUND);
  strokeWeight(2);
  noFill();

  for (let i = 0; i < 4; i++) {

    fill(COLOR_CIRCLE);
    push();
    translate(i == 0 ? (width / 2) : (width / 2) - (shapeWidth / 2) , shapeWidth * (i/1.15+1) - shapeWidth / 2 + margin * 2);
    rotate(radians(i * 30));
    arc(0, 0, shapeWidth, shapeWidth, HALF_PI, -HALF_PI, PIE);
    pop();


    fill(COLOR_CIRCLE);
    push();
    translate(i == 0 ? (width / 2) : (width / 2) + (shapeWidth / 2), shapeWidth * (i/1.15+1) - shapeWidth / 2 + margin * 2);
    rotate(radians(i * -30));
    arc(0, 0, shapeWidth, shapeWidth, -HALF_PI, HALF_PI, PIE);
    pop();
  }

  // t1
  const tSize = shapeWidth;
  const x = width / 2 - shapeWidth / 2;
  const x2  = width / 2 + shapeWidth / 2;

  for (let i = 0; i < 4; i++) {
    const h = (height - shapeWidth) - (shapeWidth * i) - margin * 2 + shapeWidth;

    fill(COLOR_TRIANGLE);
    push();
    translate(x + i * (shapeWidth / 2), h);
    rotate(radians(45) * i)
    triangle(0, 0, tSize / 2, 0, tSize / 2, - tSize)
    pop();


    fill(COLOR_TRIANGLE);
    push();
    translate(x2 - i * (shapeWidth / 2), h);
    rotate(radians(-45) * i);
    triangle(0, 0, -tSize / 2, -tSize, -tSize / 2, 0)
    pop();
  }

  const h = (height - shapeWidth * 4) + margin * 2 + 2;
  fill(COLOR_TRIANGLE);
  push();
  translate(x + 3 * (shapeWidth / 2), h);
  rotate(radians(45) * 4)
  triangle(0, 0, tSize, 0, tSize, -tSize * 1.25)
  pop();

  fill(COLOR_TRIANGLE);
  push();
  translate(x2 - 3 * (shapeWidth / 2), h);
  rotate(radians(-45) * 4);
  triangle(0, 0, -tSize , -tSize * 1.25, -tSize, 0)
  pop();
}