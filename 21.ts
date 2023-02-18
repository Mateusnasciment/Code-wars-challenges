function findPair(numbers: number[], sum: number): [number, number] | null {
  // Create a map to store value and its index
  const seen = new Map<number, number>();

  // Iterate through the given array
  for (let i = 0; i < numbers.length; i++) {
    // Calculate the sum - value of each item in array
    const complement = sum - numbers[i];
    // Check if the complement already exist ()
    if (seen.has(complement)) {
      // Return both number pair if found
      return [complement, numbers[i]];
    }
    // Store the current number with its index
    seen.set(numbers[i], i);
  }

  // If not found, return null
  return null;
}
