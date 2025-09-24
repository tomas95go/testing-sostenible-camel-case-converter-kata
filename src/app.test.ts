import { describe, expect, it } from "@jest/globals";
import { camelCaseConverter } from "./app";

describe('the camel case converter', () => {
    it('should return an empty string when no word is given', () => {
       const result = camelCaseConverter('');
       const expected = '->';
       expect(result).toBe(expected);
    });
});