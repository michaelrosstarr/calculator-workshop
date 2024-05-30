/**
 * Test suite to test basic math operations on various numbers, across addition, subtraction, multiplication and division.
 */

import { hexCalculate } from 'app/utils/calculations';

describe('Basic math operations', () => {

    describe('Addition Tests', () => {
        it('should add 2 and 3 to equal 5', () => {
            expect(hexCalculate(2, 3, '+')).toBe('5');
        });

        it('should add -5 and 10 to equal 5', () => {
            expect(hexCalculate(-5, 'A', '+')).toBe('5');
        });

        it('should throw errors as inputs are greater than 3 digits', () => {
            expect(() => hexCalculate('2710', 5, '+')).toThrow('First greater than 3 digits.');
            expect(() => hexCalculate(5, '2710', '+')).toThrow('Second greater than 3 digits.');
        })

        it('should add 271 and 271 to equal 4E2', () => {
            expect(hexCalculate('271', '271', '+')).toBe('4e2');
        })
    })

    describe('Subtraction Tests', () => {
        it('should subtract 7 from 10 to equal 3', () => {
            expect(hexCalculate('A', 7, '-')).toBe('3');
        });

        it('should subtract 10 from -5 should throw negative number error', () => {
            expect(() => hexCalculate(-5, 'A', '-')).toThrow('Answer is a negative number.');
        });

        it('should throw errors as inputs are greater than 3 digits', () => {
            expect(() => hexCalculate('2710', 5, '-')).toThrow('First greater than 3 digits.');
            expect(() => hexCalculate(5, '2710', '-')).toThrow('Second greater than 3 digits.');
        })

        it('should subtract 5 from A, should return 5', () => {
            expect(hexCalculate('A', 5, '-')).toBe('5');
        });
    })

    describe('Multiplication Tests', () => {
        it('should multiply 2 and 4 to equal 8', () => {
            expect(hexCalculate(2, 4, '*')).toBe('8');
        });

        it('should multiply -3 and 5 should throw negative number error', () => {
            expect(() => hexCalculate(-3, 5, '*')).toThrow('Answer is a negative number.');
        });

        it('should multiply FFF and FFF to equal FFE001', () => {
            expect(hexCalculate('FFF', 'FFF', '*')).toBe('ffe001');
        })

        it('should throw errors as inputs are greater than 3 digits', () => {
            expect(() => hexCalculate('2710', 5, '*')).toThrow('First greater than 3 digits.');
            expect(() => hexCalculate(5, '2710', '*')).toThrow('Second greater than 3 digits.');
        })
    })

    describe('Division Tests', () => {

        it('should throw error cause 10 divide 3 contains a decimal point', () => {
            expect(() => hexCalculate('A', 3, '/')).toThrow('Answer contains decimal point.');
        });

        it('should divide 10 by 2 to equal 5', () => {
            expect(hexCalculate('A', 2, '/')).toBe('5');
        });

        it('should handle division by zero', () => {
            expect(() => hexCalculate('A', 0, '/')).toThrow('Cannot divide by 0.');
        });

    })

});