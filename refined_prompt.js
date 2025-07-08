/**
 * Converts a given string to camelCase format.
 *
 * Splits the input string by spaces, hyphens, or underscores, then converts the first word to lowercase
 * and capitalizes the first letter of each subsequent word, joining them together.
 *
 * @param {string} input - The string to convert to camelCase.
 * @returns {string} The camelCase formatted string.
 * @throws {Error} If the input is not a string, is null, or is undefined.
 *
 * @example
 * toCamelCase('hello world'); // 'helloWorld'
 * toCamelCase('user-name_example'); // 'userNameExample'
 * toCamelCase('  multiple   words_here-now '); // 'multipleWordsHereNow'
 */
function toCamelCase(input) {
    if (typeof input !== 'string' || input === null || input === undefined) {
        throw new Error('Input must be a non-null string');
    }
    if (input.trim() === '') {
        return '';
    }
    const words = input
        .trim()
        .split(/[\s-_]+/)
        .filter(Boolean);

    if (words.length === 0) return '';

    return words
        .map((word, idx) => {
            if (idx === 0) {
                return word.toLowerCase();
            }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join('');
}
function toDotCase(input) {
    if (typeof input !== 'string' || input === null || input === undefined) {
        throw new Error('Input must be a string');
    }
    if (input.trim() === '') {
        return '';
    }
    return input
        .split(/[\s-_]+/)
        .map(word => word.toLowerCase())
        .join('.');
}

// Example usage:
// console.log(toDotCase("hello world")); // "hello.world"
// console.log(toDotCase("user-name_example")); // "user.name.example"
// toDotCase(123); // throws Error
