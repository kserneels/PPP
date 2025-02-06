// Function implementations
function capitalize(str) {
    if (!str) return '';
    return str[0].toUpperCase() + str.slice(1);
}

function reverseString(str) {
    return str.split('').reverse().join('');
}

const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => (b !== 0 ? a / b : 'Error: Division by zero')
};

function caesarCipher(str, shift) {
    return str.split('').map(char => {
        if (/[a-zA-Z]/.test(char)) {
            const base = char === char.toUpperCase() ? 65 : 97; // Uppercase or lowercase
            const newCharCode = (char.charCodeAt(0) - base + shift) % 26 + base;
            return String.fromCharCode(newCharCode);
        }
        return char;
    }).join('');
}

function analyzeArray(arr) {
    const average = arr.reduce((sum, num) => sum + num, 0) / arr.length;
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    return {
        average,
        min,
        max,
        length: arr.length
    };
}

// Tests
test('Capitalizes the first letter of a string', () => {
    expect(capitalize('hello')).toBe('Hello');
});

test('Returns an empty string if input is empty', () => {
    expect(capitalize('')).toBe('');
});

test('Does not modify the string if the first letter is already capitalized', () => {
    expect(capitalize('Hello')).toBe('Hello');
});

test('Reverses a string correctly', () => {
    expect(reverseString('hello')).toBe('olleh');
});

test('Handles an empty string correctly', () => {
    expect(reverseString('')).toBe('');
});

test('Add function adds two numbers correctly', () => {
    expect(calculator.add(2, 3)).toBe(5);
});

test('Subtract function subtracts two numbers correctly', () => {
    expect(calculator.subtract(5, 3)).toBe(2);
});

test('Multiply function multiplies two numbers correctly', () => {
    expect(calculator.multiply(2, 3)).toBe(6);
});

test('Divide function divides two numbers correctly', () => {
    expect(calculator.divide(6, 2)).toBe(3);
});

test('Divide function handles division by zero', () => {
    expect(calculator.divide(6, 0)).toBe('Error: Division by zero');
});

test('Encrypts string with Caesar cipher', () => {
    expect(caesarCipher('abc', 3)).toBe('def');
});

test('Handles wrapping from z to a', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
});

test('Preserves the case of letters', () => {
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
});

test('Handles punctuation and spaces correctly', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});

test('Analyzes array and returns correct object', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    });
});

test('Returns correct results for an array of one number', () => {
    expect(analyzeArray([5])).toEqual({
        average: 5,
        min: 5,
        max: 5,
        length: 1
    });
});
