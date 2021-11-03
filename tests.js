const { isColorTooSimilar, hexStringToRgbArray } = require("./colorDistance");

console.log("Tests for hexStringToRgbArray");
/*Tests for functions*/
/*Test hexStringToRgbArray*/
let testCases = [
  "#f4",
  "#f4f4",
  "#f4f4f4",
  "#fff",
  "#000",
  "#0",
  "#",
  "",
  "f4f4f4",
  "f4f",
];
testCases.forEach((color) => {
  try {
    console.log(hexStringToRgbArray(color));
  } catch (err) {
    const message =
      err.message ===
      'Invalid input, hexColorStr must be of the form "#fff", "#ffffff" or "#f4f4f4"'
        ? "pass"
        : "fail";
    console.log(message);
  }
});

console.log("\n---\n");
console.log("Tests for isColorTooSimilar");

/*Test isColorTooSimilar*/
const background = [223, 200, 123];
testCases = [
  [224, 201, 123],
  [223, 200, 123],
  [255, 255, 255],
  [0, 0, 0],
  [30, 30, 30],
];
const assertions = [true, true, false, false, false];
const threshold = 55;

let i = 0;
testCases.forEach((color) => {
  try {
    const result = isColorTooSimilar(background, color, threshold);
    const message = assertions[i] === result ? "pass" : "fail";
    console.log(message);
    i++;
  } catch (err) {
    console.log("fail");
  }
});
