module.exports = {
    // Colors
    colors: {
        // Whites and Blacks
        black: '#000000',
        white: '#FFFFFF',
        gray: '#808080', // Medium gray
        grey: '#808080', // Medium gray
        silver: '#C0C0C0', // Light gray
    
        // Reds
        red: '#FF0000',
        crimson: '#DC143C', // Dark, desaturated red
        maroon: '#800000', // Very dark, desaturated red
        tomato: '#FF6347', // Light, somewhat desaturated red
    
        // Oranges
        orange: '#FFA500',
        coral: '#FF7F50', // Somewhat desaturated orange
        chocolate: '#D2691E', // Dark, moderately saturated orange
        sienna: '#A0522D', // Dark, moderately saturated orange
    
        // Yellows
        yellow: '#FFFF00',
        gold: '#FFD700', // Slightly desaturated yellow
        khaki: '#F0E68C', // Very light, moderately saturated yellow
        beige: '#F5F5DC', // Very light, desaturated yellow
        bisque: '#FFE4C4', // Very light, somewhat desaturated orange
    
        // Greens
        green: '#00FF00',
        lime: '#00FF00', // Same as green
        darkgreen: '#006400', // Very dark green
        olive: '#808000', // Dark, desaturated green
        teal: '#008080', // Dark, desaturated cyan-green
        brightGreen: '#97ca00',
    
        // Blues
        blue: '#0000FF',
        lightblue: '#ADD8E6', // Light, fairly saturated blue
        skyblue: '#87CEEB', // Light, fairly saturated cyan-blue
        cyan: '#00FFFF', // Equal parts green and blue
        navy: '#000080', // Very dark blue
        darkblue: '#00008B', // Very dark blue
        turquoise: '#40E0D0', // Moderately saturated cyan-blue
    
        // Purples and Pinks
        purple: '#800080', // Equal parts red and blue
        magenta: '#FF00FF', // Equal parts red and blue, but lighter than purple
        violet: '#EE82EE', // Light, moderately saturated magenta
        lavender: '#E6E6FA', // Very light, desaturated blue-magenta
        orchid: '#DA70D6', // Moderately light, moderately saturated magenta
        darkorchid: '#9932CC', // Dark, moderately saturated magenta
        indigo: '#4B0082', // Very dark, moderately saturated blue-magenta
        pink: '#FFC0CB', // Very light, somewhat desaturated red
    
        // Browns
        brown: '#A52A2A', // Dark, moderately saturated red
    
        // Add more colors as needed...
    },

    /**
     * Fetches the hexadecimal code of a color by its name.
     * 
     * @param {string} colorName - The name of the color.
     * @return {string|null} The hexadecimal code of the color, or null if the color is not found.
     */
    getColor: function(colorName) {
        return this.colors[colorName];
    },

    /**
     * Checks if a string is a valid hexadecimal color code.
     * 
     * @param {string} colorCode - The string to check.
     * @return {boolean} True if the string is a valid hexadecimal color code, false otherwise.
     */
    isValidHexCode: function(colorCode) {
        // Check if the color code is a string and if it matches the hexadecimal color pattern
        return typeof colorCode === 'string' && /^#([0-9A-F]{3}){1,2}$/i.test(colorCode);
    },

    /**
     * Retrieves a valid hexadecimal color code based on the input query.
     * If the query is not a valid color name or hexadecimal code, it returns the fallback color.
     *
     * @param {string} query - The query for the desired color (color name or hexadecimal code).
     * @param {string} fallbackColor - The fallback color to return if the query is not valid.
     * @returns {string} The hexadecimal color code or the fallback color.
     */
    getColorQuery: function(query, fallbackColor) {
        let requestedColor = this.getColor(query);
        if (query) {
            if (this.isValidHexCode(requestedColor)) {
                return requestedColor;
            } else {
                if (this.isValidHexCode(query)) {
                    return query;
                } else {
                    requestedColor = '#' + query;
                    if (this.isValidHexCode(requestedColor)) {
                        return requestedColor;
                    } else {
                        return fallbackColor;
                    }
                }
            }
        } else {
            return fallbackColor;
        }
    }
};