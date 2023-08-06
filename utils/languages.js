const languages = {
  null: { color: '#000000' },
  JavaScript: { color: '#f1e05a' },
  Python: { color: '#3572A5' },
  Ruby: { color: '#701516' },
  Java: { color: '#b07219' },
  C: { color: '#555555' },
  Cpp: { color: '#f34b7d' },
  CSharp: { color: '#178600' },
  Go: { color: '#00ADD8' },
  TypeScript: { color: '#2b7489' },
  Swift: { color: '#ffac45' },
  Kotlin: { color: '#F18E33' },
  Rust: { color: '#dea584' },
  PHP: { color: '#4F5D95' },
  HTML: { color: '#e34c26' },
  CSS: { color: '#563d7c' },
  Shell: { color: '#89e051' },
  PowerShell: { color: '#012456' },
  Perl: { color: '#0298c3' },
  R: { color: '#198ce7' },
  Lua: { color: '#000080' },
  Scala: { color: '#c22d40' },
  Groovy: { color: '#e69f56' },
  MATLAB: { color: '#e16737' },
  ObjectiveC: { color: '#438eff' },
  CoffeeScript: { color: '#244776' },
  Dart: { color: '#00B4AB' },
  Julia: { color: '#a270ba' },
  Haskell: { color: '#5e5086' },
  Elixir: { color: '#6e4a7e' },
  Elm: { color: '#60B5CC' },
  FSharp: { color: '#b845fc' },
  VB: { color: '#945db7' },
  Cobol: { color: '#4E71BA' },
  Racket: { color: '#22228f' },
};

/**
 * Fetches the color associated with a programming language.
 *
 * @param {string} languageName - The name of the programming language. It is case-insensitive.
 * @returns {string} The color associated with the language, or a default color if the language is not found.
 *
 * @example
 * // Returns '#f1e05a' for "JavaScript" (case-insensitive)
 * getLanguageColor("JavaScript");
 *
 * // Returns '#00B4AB' for "DART" (case-insensitive)
 * getLanguageColor("DART");
 *
 * // Returns '#0298c3' for "perl" (case-insensitive)
 * getLanguageColor("perl");
 *
 * // Returns '#dea584' for "RuSt" (case-insensitive)
 * getLanguageColor("RuSt");
 */
function getLanguageColor(languageName) {
  // Convert the input languageName to lowercase
  const lowerCaseLanguageName = languageName.toLowerCase();

  // Find the case-insensitive match for the languageName in the languages object keys
  const matchedLanguage = Object.keys(languages).find(
    (key) => key.toLowerCase() === lowerCaseLanguageName
  );

  // If a match is found, return the color associated with the matched language
  if (matchedLanguage) {
    return languages[matchedLanguage].color;
  }

  // If the language is not found, return the default color for the "null" key
  return languages.null.color;
}

/**
 * Formats the programming language name to match the case used in the languages object.
 *
 * @param {string} languageName - The name of the programming language. It is case-insensitive.
 * @returns {string} The formatted language name, or the original input if the language is not found.
 *
 * @example
 * // Returns "JavaScript" for "javascript" (case-insensitive)
 * formatLanguageName("javascript");
 *
 * // Returns "Dart" for "DART" (case-insensitive)
 * formatLanguageName("DART");
 *
 * // Returns "Perl" for "perl" (case-insensitive)
 * formatLanguageName("perl");
 *
 * // Returns "Rust" for "RuSt" (case-insensitive)
 * formatLanguageName("RuSt");
 */
function formatLanguageName(languageName) {
  // Convert the input languageName to lowercase
  const lowerCaseLanguageName = languageName.toLowerCase();

  // Find the case-insensitive match for the languageName in the languages object keys
  const matchedLanguage = Object.keys(languages).find(
    (key) => key.toLowerCase() === lowerCaseLanguageName
  );

  // If a match is found, return the matched language name with correct casing
  if (matchedLanguage) {
    return matchedLanguage;
  }

  // If the language is not found, return the original input language name
  return languageName;
}

// Export both the languages object and the getLanguageColor function
module.exports = { languages, getLanguageColor, formatLanguageName };
