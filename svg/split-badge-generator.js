/**
 * Creates an SVG split badge with two sections, displaying text in each section.
 * The colors and text content can be customized by providing appropriate parameters.
 *
 * @param {string} leftText - The text to be displayed in the left section of the badge.
 * @param {string} rightText - The text to be displayed in the right section of the badge.
 * @param {string} leftSectionColor - The color of the left section of the badge in hexadecimal format (#RRGGBB).
 * @param {string} rightSectionColor - The color of the right section of the badge in hexadecimal format (#RRGGBB).
 * @param {string} leftTextColor - The color of the text in the left section of the badge in hexadecimal format (#RRGGBB).
 * @param {string} rightTextColor - The color of the text in the right section of the badge in hexadecimal format (#RRGGBB).
 * @param {string} [leftFontWeight="normal"] - The font weight of the text in the left section. Use values like "normal" or "bold".
 * @param {string} [rightFontWeight="normal"] - The font weight of the text in the right section. Use values like "normal" or "bold".
 * @param {boolean} [roundCornerQuery=false] - If true, the badge will have rounded corners.
 * @returns {string} The SVG code representing the split badge.
 */
function createSplitBadge(leftText, rightText, leftSectionColor, rightSectionColor, leftTextColor, rightTextColor, leftFontWeight, rightFontWeight, roundCornerQuery) {
  const padding = 10;
  const leftSectionWidth = getTextWidth(leftText) + 2 * padding;
  const rightSectionWidth = getTextWidth(rightText) + 2 * padding;
  const totalWidth = leftSectionWidth + rightSectionWidth;

  let clipPathElement = '';
  if (roundCornerQuery) {
    clipPathElement = `
      <clipPath id="r">
        <rect width="${totalWidth}" height="20" rx="3" fill="#fff"/>
      </clipPath>
    `;
  }

  const splitBadgeSvg = `
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${totalWidth}" height="20" role="img" aria-label="${leftText} ${rightText}">
      <title>${leftText} ${rightText}</title>
      <linearGradient id="s" x2="0" y2="100%">
        <stop offset="0" stop-color="#bbb" stop-opacity=".1"/>
        <stop offset="1" stop-opacity=".1"/>
      </linearGradient>

      ${clipPathElement}
      
      <g clip-path="url(#r)">
        <rect width="${leftSectionWidth}" height="20" fill="${leftSectionColor}"/>
        <rect x="${leftSectionWidth}" width="${rightSectionWidth}" height="20" fill="${rightSectionColor}"/>
        <rect width="${totalWidth}" height="20" fill="url(#s)"/>
      </g>
      <g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" text-rendering="geometricPrecision" font-size="11">
        <text x="${leftSectionWidth / 2}" y="14" fill="${leftTextColor}" font-weight="${leftFontWeight}">${leftText}</text>
        <text x="${leftSectionWidth + rightSectionWidth / 2}" y="14" fill="${rightTextColor}" font-weight="${rightFontWeight}">${rightText}</text>
      </g>
    </svg>
  `;

  return splitBadgeSvg;
}

/**
 * Calculates the width of the text based on the number of characters.
 *
 * @param {string} text - The text for which to calculate the width.
 * @returns {number} The width of the text in pixels.
 */
function getTextWidth(text) {
  return text.length * 6;  
}

module.exports = createSplitBadge;

