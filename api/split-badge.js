const colors = require('../utils/colors.js');
const badgeGenerator = require('../utils/badge-generator.js');

// Define Defaults
const FALLBACK_LEFT_TEXT = 'leftText';
const FALLBACK_RIGHT_TEXT = 'rightText';

const NORMAL_TEXT = 'normal';
const BOLD_TEXT = 'bold';

const FALLBACK_TEXT_COLOR = colors.getColor('white') || '#fff';
const FALLBACK_LEFT_TEXT_COLOR = FALLBACK_TEXT_COLOR;
const FALLBACK_RIGHT_TEXT_COLOR = FALLBACK_TEXT_COLOR;
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
      let textColorQuery = req.query.textColor || null;
      let leftTextColorQuery = req.query.leftTextColor || null;
      let rightTextColorQuery = req.query.rightTextColor || null;

      // Define Text Colors
      let requestedLeftTextColor = colors.getColorQuery(leftTextColorQuery, FALLBACK_LEFT_TEXT_COLOR);
      let leftTextColor = requestedLeftTextColor;

      let requestedRightTextColor = colors.getColorQuery(rightTextColorQuery, FALLBACK_RIGHT_TEXT_COLOR);
      let rightTextColor = requestedRightTextColor;

      let requestedTextColor = colors.getColorQuery(textColorQuery, FALLBACK_TEXT_COLOR);
      let textColor;
      if (textColorQuery) {
        textColor = requestedTextColor;
        leftTextColor = textColor;
        rightTextColor = textColor;
        if (leftTextColorQuery) {
          leftTextColor = requestedLeftTextColor;
        }
        if (rightTextColorQuery) {
          rightTextColor = requestedRightTextColor;
        }
      }

      // Query & Define Font Weight(s)
      let boldTextQuery = req.query.boldText === 'true' || false;
      let leftBoldTextQuery = req.query.leftBoldText === 'true' || false;
      let rightBoldTextQuery = req.query.rightBoldText === 'true' || false;

      let leftFontWeight = NORMAL_TEXT;
      let rightFontWeight = NORMAL_TEXT;

      if (boldTextQuery || leftBoldTextQuery) {
        leftFontWeight = BOLD_TEXT;
      }
      if (boldTextQuery || rightBoldTextQuery) {
        rightFontWeight = BOLD_TEXT;
      }

      // Query Badge Style (Sharp Corners or Round Corners)
      let roundCornerQuery = req.query.roundCorners !== 'false';

      // Query Section Colors
      let leftSectionColorQuery = req.query.leftSectionColor || null;
      let rightSectionColorQuery = req.query.rightSectionColor || null;

      // Define Section Colors
      let requestedLeftSectionColor = colors.getColorQuery(leftSectionColorQuery, FALLBACK_LEFT_SECTION_COLOR);
      let leftSectionColor = requestedLeftSectionColor;

      let requestedRightSectionColor = colors.getColorQuery(rightSectionColorQuery, FALLBACK_RIGHT_SECTION_COLOR);
      let rightSectionColor = requestedRightSectionColor;

      // Create SVG
      let splitBadgeSvg = badgeGenerator.createSplitBadge(leftText, rightText, leftSectionColor, rightSectionColor, leftTextColor, rightTextColor, leftFontWeight, rightFontWeight, roundCornerQuery);
  
      res.setHeader("Content-Type", "image/svg+xml");
      res.status(200).send(splitBadgeSvg);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  };