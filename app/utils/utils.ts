/**
 * Util function to convert any string to a decimal, its easier to do calculations on a decimal than a hexadecimal.
 * @param value Is the value that you want to convert to decimal.
 * @returns A decimal.
 */
const convertToDecimal = (value: string): number => {
    return parseInt(value, 16);
}

/**
 * Util function to convert any decimal number to hexadecimal to display to the user.
 * @param value The decimal value you want to convert to hexadecimal.
 * @returns A hexadecimal.
 */
const convertToHexadecimal = (value: number): string => {
    return value.toString(16);
}

export { convertToDecimal, convertToHexadecimal };