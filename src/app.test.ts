import { describe, expect, it } from "@jest/globals";
import { camelCaseConverter } from "./app";

describe('the camel case converter', () => {
    it('should return an empty string when no word is given', () => {
       const result = camelCaseConverter('');
       const expected = '->';
       expect(result).toBe(expected);
    });

    it('should return same string when given word has a capital first letter', () => {
        const result = camelCaseConverter('Foo');
        const expected = 'Foo -> Foo';
        expect(result).toBe(expected);
    });

    it('should return same string when given 2 words that has a capital first letter', () => {
        const result = camelCaseConverter('Foo Bar');
        const expected = 'Foo Bar -> FooBar';
        expect(result).toBe(expected);
    });
});