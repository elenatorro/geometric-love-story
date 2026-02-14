function setup() {
  const pageWidth = 559 * 2;
  const pageHeight = 794 * 2;
  const width = pageWidth;
  const height = pageHeight;

  let margin = 10;

  const COLORS = ["#f72585","#b5179e", "#669900","#99cc33","#ccee66","#006699","#3399cc","#990066","#cc3399","#ff6600","#ff9900","#ffcc00"];
  
  const COLOR_TRIANGLE = "#B0FFFA";
  const COLOR_CIRCLE = "#E4FF30";
  const BG = '#ffe4a5';

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
  rect(margin, margin, width - margin * 2, height - margin * 2);

  fill(COLORS[0]);
  stroke(COLORS[0]);
  strokeWeight(10);
  textSize(127);
  push();
  rotate(radians(-10));
  text('la historia', width / 4 - 127, height / 2 - 127 * 2);
  // text('A story about', width / 4 - 127, height / 2 - 127 * 2);
  pop();
  textSize(200);
  for (let i = 0; i < 10; i++) {
    const c = color(COLORS[i % (COLORS.length -1)]);
    fill(c);
    stroke(c);
    strokeWeight(8);
    text('de amor', width / 4 - 127 + i * 8, height / 2 + i * 8 - 100);
    // text('the love', width / 4 - 127 + i * 8, height / 2 + i * 8 - 100);
  }
  textSize(127);
  
  rotate(radians(10));
  text('del', width / 4, height / 2 + 127);
  // strokeJoin(BEVEL);
  // text('between a', width / 4, height / 2 + 127);
  fill(COLOR_CIRCLE);
  stroke(COLORS[0])
  strokeWeight(1);
  circle(width / 2 + 127, height / 2 + 127 * 2, 300);  
  rotate(radians(-25));

  fill(COLORS[5]);
  stroke(COLORS[5]);
  strokeWeight(10);
  text('y el', width / 3 + 127, height / 2 + 127 * 3);
  // text('and a', width / 3 + 127 / 2, height / 2 + 127 * 4);

  fill(COLOR_TRIANGLE);
  // push();
  const tSize = 300;
  translate(width / 2, height / 2 + tSize * 2);
  // translate(width / 2 - tSize / 2, height / 2 + tSize * 2.25);
  rotate(radians(25))
  stroke(COLORS[0]);
  strokeWeight(1);
  triangle(0, -tSize / 2, -tSize / 2, tSize / 2, tSize / 2, tSize / 2);
  // pop();
}