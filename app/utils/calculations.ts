import { convertToDecimal, convertToHexadecimal } from "./utils";

/**
 * Used as a middleware of sorts.
 * @param first 
 * @param second 
 * @param type 
 * @returns 
 */
const hexCalculate = (first: string | number, second: string | number, type: string): string | number => {

    if (first.toString().length > 3) throw new Error("First greater than 3 digits.");
    if (second.toString().length > 3) throw new Error("Second greater than 3 digits.");

    first = convertToDecimal(first.toString());
    second = convertToDecimal(second.toString());

    try {

        let answer: number = -999999999;

        switch (type) {
            case '+': answer = addition(first, second); break;
            case '-': answer = subtraction(first, second); break;
            case '*': answer = multiply(first, second); break;
            // case '/': answer = divide(first, second); break;
        }

        if (answer === -999999999) throw new Error("Arithmetic type not provided.");
        if (answer < 0) throw new Error("Answer is a negative number.");
        if (answer % 1 != 0) throw new Error("Answer contains decimal point.");

        const convertedHex = convertToHexadecimal(answer);

        if (convertedHex.toString().length > 6) throw new Error("Answer greater than 6 digits.");

        return convertedHex;

    } catch (e) {
        throw e;
    }
}

/**
 * Adds first and second
 * @param first 
 * @param second 
 * @returns 
 */
const addition = (first: number, second: number): number => {
    return first + second;
}

/**
 * Subtracts second from first
 * @param first 
 * @param second 
 * @returns 
 */
const subtraction = (first: number, second: number): number => {
    return first - second;
}

/**
 * Multiplies first by second
 * @param first 
 * @param second 
 * @returns 
 */
const multiply = (first: number, second: number): number => {
    return first * second;
}

/**
 * Divides first by second
 * @param first 
 * @param second 
 * @returns 
 */
const divide = (first: string, second: string): string => {
    const value = convertToDecimal(first) / convertToDecimal(second) as number;

    if (value < 0) return "Cannot return negative numbers.";

    return convertToHexadecimal(value);
}

export { addition, subtraction, multiply, divide, hexCalculate };