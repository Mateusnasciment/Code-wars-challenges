/**
 * Given an array of 10 digits (or a string of 10 characters), create a phone number string in the
 * format of (123) 456-7890.
 * @param {number[]} numbers - an array of 10 integers (0-9)
 * @returns A string of numbers in the format (123) 456-7890
 */
export function createPhoneNumber(numbers: number[]): string {
    return `(${numbers.slice(0, 3).join('')}) ${numbers.slice(3, 6).join('')}-${numbers.slice(6).join('')}`;
  }