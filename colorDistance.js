/**
 * Function that returns true if the sampleColor is closer to the backgroun
 * color than the given threshold, otherwise false. This function can be used to
 * determine if the input color is too similar to the background color
 *@param {Number[]} sampleColor array representation of rgb values of sample color
 *@param {Number[]} backgroundColor array representation of rgb values of bg color
 *@param {Number} thresholdDistance maximum distance sample color can be to background color
 *@throws Error if thresholdDistance < 0
 *@returns {boolean} true if color is outside threshold, false otherwise
 **/
const isColorTooSimilar = function (
  backgroundColor,
  sampleColor,
  thresholdDistance
) {
  if (thresholdDistance < 0)
    throw Error("Threshold distance must be greater than 0.");
  const r = Math.pow(sampleColor[0] - backgroundColor[0], 2);
  const g = Math.pow(sampleColor[1] - backgroundColor[1], 2);
  const b = Math.pow(sampleColor[2] - backgroundColor[2], 2);
  const distance = Math.sqrt(r + g + b);
  return distance < thresholdDistance ? true : false;
};

/**Function that converts a string representation of RGB into an array
 * integer representation of RGB in base 10. Example: '#ffffff' => [255,255,255]
 * or '#fff' => [255, 255, 255]
 *@param {string} hexColorStr a string in HEX representation of RGB
 *@throws {error} if string not formatted correctly or hex value out of range
 *@returns {Number[]} an array number base 10 representation of color in RGB
 **/
const hexStringToRgbArray = function (hexColorStr) {
  if (hexColorStr.length !== 7 && hexColorStr.length != 4)
    throw Error(
      'Invalid input, hexColorStr must be of the form "#fff", "#ffffff" or "#f4f4f4"'
    );

  let rgbArray = [];

  if (hexColorStr.length === 7) {
    for (let i = 1; i < hexColorStr.length; i += 2) {
      let val = `${hexColorStr[i]}${hexColorStr[i + 1]}`;
      rgbArray.push(parseInt(val, 16));
    }
  } else {
    for (let i = 1; i < hexColorStr.length; i++) {
      let val = `${hexColorStr[i]}${hexColorStr[i]}`;
      rgbArray.push(parseInt(val, 16));
    }
  }

  for (const color in rgbArray) {
    if (color < 0 || color > 255) {
      throw Error("Invalid RGB value. R,G,B values must be between 00 and FF");
    }
  }

  return rgbArray;
};

module.exports = { isColorTooSimilar, hexStringToRgbArray };
