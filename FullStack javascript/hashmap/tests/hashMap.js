const { HashMap } = require('../hashMap');

describe('HashMap Tests', () => {
    let hashMap;

    beforeEach(() => {
        hashMap = new HashMap();
    });

    test('should add and retrieve a key-value pair', () => {
        hashMap.set('apple', 'green');
        expect(hashMap.get('apple')).toBe('green');
    });

    test('should overwrite existing values', () => {
        hashMap.set('apple', 'green');
        hashMap.set('apple', 'red');
        expect(hashMap.get('apple')).toBe('red');
    });

    test('should return null for non-existent keys', () => {
        expect(hashMap.get('banana')).toBe(null);
    });

    // Additional tests...
});
