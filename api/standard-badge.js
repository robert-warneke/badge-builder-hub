const colors = require('../utils/colors');
const createStandardBadge = require('../svg/standard-badge-generator');

// Define Defaults
const FALLBACK_TEXT = 'badgeText';
const FALLBACK_TEXT_COLOR = colors.getColor('white') || '#fff';
const FALLBACK_BADGE_COLOR = colors.getColor('grey') || '#555';

// Font Weights
const NORMAL_TEXT = 'normal';
const BOLD_TEXT = 'bold';

module.exports = async (req, res) => {
    try {
        // Query Text
        let textQuery = req.query.text || null;
    
        // Define Text
        let text = textQuery || FALLBACK_TEXT;
    
        // Query Text Color
        let textColorQuery = req.query.textColor || null;
    
        // Define Text Color
        let requestedTextColor = colors.getColorQuery(textColorQuery, FALLBACK_TEXT_COLOR);
        let textColor = requestedTextColor;

        // Query Badge Color
        let badgeColorQuery = req.query.badgeColor || null;

        // Define Badge Color
        let requestedBadgeColor = colors.getColorQuery(badgeColorQuery, FALLBACK_BADGE_COLOR);
        let badgeColor = requestedBadgeColor;

        // Query & Define Bold Text
        let boldTextQuery = req.query.boldText === 'true' || false;
        let fontWeight = NORMAL_TEXT;
        if (boldTextQuery) {
            fontWeight = BOLD_TEXT;
        }
    
        // Query Badge Style (Sharp Corners or Round Corners)
        let roundCornerQuery = req.query.roundCorners !== 'false';
    
        // Create SVG
        let standardBadgeSvg = createStandardBadge(text, textColor, badgeColor, fontWeight, roundCornerQuery);

        res.setHeader("Content-Type", "image/svg+xml");
        res.status(200).send(standardBadgeSvg);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
};