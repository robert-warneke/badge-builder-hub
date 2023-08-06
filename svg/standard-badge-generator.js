function createStandardBadge(text, textColor, badgeColor, fontWeight, roundCornerQuery) {
    const padding = 10;
    const width = getTextWidth(text) + 2 * padding;

    let clipPathElement = '';
    if (roundCornerQuery) {
      clipPathElement = `
        <clipPath id="r">
          <rect width="${width}" height="20" rx="3" fill="#fff"/>
        </clipPath>
      `;
    }

    const standardBadgeSvg = `
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${width}" height="20" role="img" aria-label="${text}">
        <title>${text}</title>
        <linearGradient id="s" x2="0" y2="100%">
            <stop offset="0" stop-color="#bbb" stop-opacity=".1"/>
            <stop offset="1" stop-opacity=".1"/>
        </linearGradient>

        ${clipPathElement}

        <g clip-path="url(#r)">
            <rect width="${width}" height="20" fill="${badgeColor}"/>
            <rect width="${width}" height="20" fill="url(#s)"/>
        </g>
        <g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" text-rendering="geometricPrecision" font-size="11">
            <text x="${width / 2}" y="14" fill="${textColor}" font-weight="${fontWeight}">${text}</text>
        </g>
    </svg>
    `;

    return standardBadgeSvg;
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

module.exports = createStandardBadge;