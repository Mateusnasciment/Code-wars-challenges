Complete the solution so that it reverses all of the words within the string passed in.

Words are separated by exactly one space and there are no leading or trailing spaces.

Example(Input --> Output):

"The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"


/**
 * We split the string into an array of words, then we map over each word, reverse it, and join it back
 * together. Then we join the array of words back together
 * @param {string} str - string
 * @returns A function that takes a string and returns a string.
 */
export function reverseWords(str: string): string {
    return str.split(" ").map(word => word.split("").reverse().join(""));
  }
Não conseguir terminar
