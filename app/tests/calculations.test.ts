/**
 * Test suite to test basic math operations on various numbers, across addition, subtraction, multiplication and division.
 */

import { hexCalculate } from "app/utils/calculations";

describe('Basic math operations', () => {
    // Addition tests
    it('should add 2 and 3 to equal 5', () => {
        expect(hexCalculate(2, 3, '+')).toBe('5');
    });

    it('should add -5 and 10 to equal 5', () => {
        expect(hexCalculate(-5, 10, '+')).toBe('5');
    });

    // Subtraction tests
    // it('should subtract 7 from 10 to equal 3', () => {
    //     expect(subtract(10, 7)).toBe(3);
    // });

    // it('should subtract 10 from -5 to equal 5', () => {
    //     expect(subtract(-5, 10)).toBe(-15);
    // });

    // // Multiplication tests
    // it('should multiply 2 and 4 to equal 8', () => {
    //     expect(multiply(2, 4)).toBe(8);
    // });

    // it('should multiply -3 and 5 to equal -15', () => {
    //     expect(multiply(-3, 5)).toBe(-15);
    // });

    // // Division tests
    // it('should divide 10 by 2 to equal 5', () => {
    //     expect(divide(10, 2)).toBe(5);
    // });

    // it('should handle division by zero', () => {
    //     expect(() => divide(10, 0)).toThrow("Division by zero");
    // });
});