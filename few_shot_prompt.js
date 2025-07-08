function addNumbers(a, b) {
    if (a === undefined || b === undefined) {
        throw new Error('Both arguments must be provided.');
    }
    if (a === null || b === null) {
        throw new Error('Arguments cannot be null.');
    }
    if (typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b)) {
        throw new Error('Both arguments must be valid numbers.');
    }
    return a + b;
}

// Example usage:
console.log(addNumbers(5, 3));    // 8
// addNumbers('5', 3);            // Throws error
// addNumbers(5);                 // Throws error
// addNumbers(null, 3);           // Throws error