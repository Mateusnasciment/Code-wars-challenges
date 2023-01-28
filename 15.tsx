/**
 * It takes a string and returns the same string.
 * @param {string} str - The string to be reversed.
 * @returns The string that was passed in.
 */
export function solution(str: string): string {
    return str.split('').reverse().join('');
   }