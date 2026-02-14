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
  const c = color(COLOR_CIRCLE);
  const sc = color(COLORS[0]);
  let lastX = 0;
  let lastY = 0;

  const GRADIENT_COLORS = ColorSteps.getColorSteps('#669900', '#ff9900', width);

  for (let i = 0; i < width - margin * 2 - shapeWidth * 2; i += 5) {
    const x = i;
    const c = color(GRADIENT_COLORS[int(i)]);
    fill(c);
    stroke(sc);
    let y = 100 * cos(x * 0.008) + (height / 3);
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

  const GRADIENT_COLORS_2 = ColorSteps.getColorSteps('#3399cc', '#ffcc00', width);

  for (let i = width - 1; i > 5; i -= 5) {
    const x = i;
    const c = color(GRADIENT_COLORS_2[i < 0 ? 0 : int(i)]);
    fill(c);
    stroke(sc);
    let y = 100 * cos(x * 0.01) + (height / 2);
    push();
    translate(x, y);
    circle(0, 0, shapeWidth * 2);
    pop();
  }

  const GRADIENT_COLORS_3 = ColorSteps.getColorSteps('#cc3399', '#006699', width);

  for (let i = width - 1; i > 5; i -= 5) {
    const x = i;
    const c = color(GRADIENT_COLORS_3[i < 0 ? 0 : int(i)]);
    fill(c);
    stroke(sc);
    let y = 110 * cos(x * 0.015) + (height / 1.45);
    push();
    translate(x, y);
    circle(0, 0, shapeWidth * 2);
    pop();
  }
}
