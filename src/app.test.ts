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

    it('should convert words to PascalCase when it is separated by underscore or hyphen and their first letter is capital', () => {
        const result = camelCaseConverter('Foo_Bar-Foo');
        const expected = 'Foo_Bar-Foo -> FooBarFoo';
        expect(result).toBe(expected);
    });

    it('should convert a word to PascalCase when its first letter is lower case', () => {
        const result = camelCaseConverter('foo');
        const expected = 'foo -> Foo';
        expect(result).toBe(expected);
    });

    it('should convert words to PascalCase when it is separated by underscore or hyphen and their first letter is lower case', () => {
        const result = camelCaseConverter('foo_bar foo-bar');
        const expected = 'foo_bar foo-bar -> FooBarFooBar';
        expect(result).toBe(expected);
    });
});