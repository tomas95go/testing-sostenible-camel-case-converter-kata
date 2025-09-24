import { describe, expect, it } from "@jest/globals";
import { sum } from "./app";

describe('the app module', () => {
    it('should add two numbers', () => {
       const result = sum(1,2);
        const expected = 3;
        expect(result).toBe(expected);
    });
});