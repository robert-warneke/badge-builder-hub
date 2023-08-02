const colors = require('../utils/colors.js');
const createSplitBadge = require('../svg/split-badge-generator.js');

// Define Defaults
const FALLBACK_LEFT_TEXT = 'leftText';
const FALLBACK_RIGHT_TEXT = 'rightText';

const FALLBACK_LEFT_TEXT_COLOR = colors.getColor('white') || '#fff';
const FALLBACK_RIGHT_TEXT_COLOR = colors.getColor('white') || '#fff';
const FALLBACK_LEFT_SECTION_COLOR = colors.getColor('grey') || '#555';
const FALLBACK_RIGHT_SECTION_COLOR = colors.getColor('brightGreen') || '#97ca00';

module.exports = async (req, res) => {
    try {
      // Query Text
      let leftTextQuery = req.query.leftText || null;
      let rightTextQuery = req.query.rightText || null;

      // Define Text
      let leftText = leftTextQuery || FALLBACK_LEFT_TEXT;
      let rightText = rightTextQuery || FALLBACK_RIGHT_TEXT;

      // Query Text Colors
      let leftTextColorQuery = req.query.leftTextColor || null;
      let rightTextColorQuery = req.query.rightTextColor || null;

      // Define Text Colors
      let requestedLeftTextColor = colors.getColorQuery(leftTextColorQuery, FALLBACK_LEFT_TEXT_COLOR);
      let leftTextColor = requestedLeftTextColor;

      let requestedRightTextColor = colors.getColorQuery(rightTextColorQuery, FALLBACK_RIGHT_TEXT_COLOR);
      let rightTextColor = requestedRightTextColor;

      // Query Section Colors
      let leftSectionColorQuery = req.query.leftSectionColor || null;
      let rightSectionColorQuery = req.query.rightSectionColor || null;

      // Define Section Colors
      let requestedLeftSectionColor = colors.getColorQuery(leftSectionColorQuery, FALLBACK_LEFT_SECTION_COLOR);
      let leftSectionColor = requestedLeftSectionColor;

      let requestedRightSectionColor = colors.getColorQuery(rightSectionColorQuery, FALLBACK_RIGHT_SECTION_COLOR);
      let rightSectionColor = requestedRightSectionColor;

      // Create SVG
      let badgeSvg = createSplitBadge(leftText, rightText, leftSectionColor, rightSectionColor, leftTextColor, rightTextColor);
  
      res.setHeader("Content-Type", "image/svg+xml");
      res.status(200).send(badgeSvg);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  };