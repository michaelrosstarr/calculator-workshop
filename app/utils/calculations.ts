import { convertToDecimal, convertToHexadecimal } from "./utils";

/**
 * Adds first and second
 * @param first 
 * @param second 
 * @returns 
 */
const addition = (first: string | number, second: string | number): string => {

    if (first.toString().length > 3) return "First greater than 3 digits.";
    if (second.toString().length > 3) return "Second greater than 3 digits."

    const answer = convertToDecimal(first as string) + convertToDecimal(second as string) as number;

    if (answer < 0) return "Answer is a negative number.";
    if (answer.toString().length > 6) return "Answer greater than 6 digits."
    if (answer % 1 != 0) return "Answer contains decimal point."

    return convertToHexadecimal(answer);
}

/**
 * Subtracts second from first
 * @param first 
 * @param second 
 * @returns 
 */
const subtraction = (first: string, second: string): string => {
    const value = convertToDecimal(first) - convertToDecimal(second) as number;

    if (value < 0) return "Cannot return negative numbers.";

    return convertToHexadecimal(value);
}

/**
 * Multiplies first by second
 * @param first 
 * @param second 
 * @returns 
 */
const multiply = (first: string, second: string): string => {
    const value = convertToDecimal(first) * convertToDecimal(second) as number;

    if (value < 0) return "Cannot return negative numbers.";

    return convertToHexadecimal(value);
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

export { addition, subtraction, multiply, divide };