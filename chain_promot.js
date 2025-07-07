/**
 * Transforms a camelCase string into kebab-case.
 * @param {string} input - The camelCase input string.
 * @returns {string} The kebab-case version of the input string.
 * @throws Will throw an error if the input is not a valid non-empty string.
 */
function toKebabCase(input) {
  if (typeof input !== 'string' || !input.trim()) {
    throw new Error("Invalid input: Expected a non-empty string.");
  }

  // Insert hyphens before capital letters, then convert to lowercase
  const kebab = input
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")  // e.g., camelCase → camel-Case
    .replace(/([A-Z])([A-Z][a-z])/g, "$1-$2") // e.g., ABCWord → ABC-Word
    .toLowerCase();

  return kebab;
}

// 🔍 Examples
console.log(toKebabCase("camelCaseString"));  // "camel-case-string"
console.log(toKebabCase("toKebabCase"));      // "to-kebab-case"

try {
  console.log(toKebabCase(123));              // Throws error
} catch (e) {
  console.error(e.message);                   // "Invalid input: Expected a non-empty string."
}
