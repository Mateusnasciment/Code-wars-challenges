/**
 * If the phrase matches the regex, return true, else return false.
 * @param {string} phrase - string
 * @returns A boolean value
 */
export const isPangram = (phrase: string): boolean => {
    let isPangram = /^[A-Za-z]+$/;
      return phrase.match(isPangram)?true:false;
  }