function toKebabCase(input) {
  if (typeof input !== 'string' || !input || input.trim() === '') {
    throw new Error('Input must be a non-empty string in camelCase format.');
  }

  // Insert hyphens before uppercase letters (except at the start), then lowercase
  const kebab = input
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2')
    .toLowerCase();

  return kebab;
}

// Examples:
console.log(toKebabCase("camelCaseString")); // "camel-case-string"
console.log(toKebabCase("toKebabCase"));     // "to-kebab-case"

try {
  console.log(toKebabCase(123));
} catch (e) {
  console.error(e.message); // "Input must be a non-empty string in camelCase format."
}