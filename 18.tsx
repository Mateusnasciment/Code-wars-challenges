Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

[Make sure you type the exact thing I wrote or the program may not execute properly]

/**
 * The function takes a string as an argument and returns a string
 * @param {string} name - string - The name parameter is a string.
 * @returns A string
 */
export function greet(name: string): string {
  return "Hello, " + name + " how are you doing today?"
}




/**
 * "The greet function takes a string as an argument and returns a string."
 * 
 * The greet function takes a string as an argument and returns a string
 * @param {string} name - string - This is the name of the parameter.
 */
export const greet = (name: string): string => `Hello, ${name} how are you doing today?`;