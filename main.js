function calculateSlope(x1, y1, x2, y2) {
  return (y2 - y1) / (x2 - x1);
}

const x1 = document.getElementById("x1");
const y1 = document.getElementById("y1");
const x2 = document.getElementById("x2");
const y2 = document.getElementById("y2");

const slope = (y2 - y1) / (x2 - x1);

document.getElementById(
  "result"
).textContent = `The slope of the line is: ${slope}`;
