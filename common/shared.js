const pageWidth = 559 * 2;
const pageHeight = 794 * 2;
const width = pageWidth;
const height = pageHeight;

let numShapesX = 20;
let numShapesY = 20;
let margin = 10;
const density = 2;

// OTHER COLOR PALETTES
// const COLORS = ["#f94144","#f3722c","#f8961e","#f9844a","#f9c74f","#90be6d","#43aa8b","#4d908e","#577590","#277da1"]
// const COLORS = ["#f54e2d","#ac968eff","#ff914c","#674361","#7558b0","#5f6cd8","#487fff"]
// const COLORS = ["#f72585","#b5179e", "#669900","#99cc33","#ccee66","#006699","#3399cc","#990066","#cc3399","#ff6600","#ff9900","#ffcc00"];
// const COLORS = ["#eb5e55","#3a3335","#d81e5b","#fdf0d5","#c6d8d3"]
// const COLORS = ["#0c0f0a","#ff206e","#fbff12","#41ead4","#ffffff"];

const COLORS = ["#f72585","#3f37c9","#4361ee","#4cc9f0","#f9844a","#f9c74f","#43aa8b"];
const COLOR_TRIANGLE = "#B0FFFA";
const COLOR_CIRCLE = "#E4FF30";
const BG = '#ffe4a5';
const alpha = 200;
const S = COLORS[0];

const shapeWidth = width / (numShapesX * 3);
const shapeHeight = height / (numShapesY * 3);

const circleW = width - margin * 10;
const circleH = margin * 10;
const triangleW = shapeWidth * 3;
const triangleH = (height / 3) - margin * 10;
const triangleW2 = width - margin * 10;
const triangleH2 = margin * 10;
const circleW2 = shapeWidth * 5;
const circleH2 = (height / 3) - margin * 5;

const tSize = width / numShapesX / 2;

let h1 = height / 3 - margin * 4;
let h2 = height / 3 * 2 - margin * 4;
let h3 = height - margin * 4;

function maskRect() {
    rect(margin, margin, width - margin * 2, height - margin * 2);
}

function maskRects() {
    rect(margin, margin, width - margin * 2, h1);
    rect(margin, h1 + margin * 2, width - margin * 2, h2 - h1);
    rect(margin, h2 + margin * 3, width - margin * 2, h3 - h2);
}

const drawRandomShape = (x, y, w, h, alpha) => {
    push();
    rectMode(CENTER);
    translate(x + w / 2 + margin / 2, y + h / 2 + margin / 2);
    // rotate(radians(noise(x) * random(-10, 10)));
    const c = color(random(COLORS));
    c.setAlpha(alpha);
    fill(c);
    const shapeType = int(random(0, 5));
    const xr = random(0.7, 1.2);
    const yr = random(0.7, 1.2);
    // const xr = 1;
    // const yr = 1;
    const wA = w;
    const hA = h;
    switch (shapeType) {
        case 0:
        const startAngle = random(-PI, PI) * (random() < 0.5 ? -1 : 1);
        const endAngle = startAngle + random(-PI, PI);
        arc(0, 0, wA, hA, startAngle, endAngle, CHORD);
        break;
        case 1:
        let l1 = [random(wA - 10, wA + 10), random(0, 10)];
        let l2 = [random(wA, wA + 10) / 2, random(hA - 10, hA + 10)];
        triangle(0, 0, l1[0], l1[1], l2[0], l2[1]);
        break;
        case 2:
        quad(0, 0, wA, 0, wA, hA, 0, hA);
        break;
        case 3:
        ellipse(0, 0, wA * xr, hA * yr);
        break;
        case 4:
        rect(0, 0, wA * xr, hA * yr);
        break;
    }
    pop();
};