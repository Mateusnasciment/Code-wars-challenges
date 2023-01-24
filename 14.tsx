export function arrayDiff(a: number[], b: number[]): string {
    let result: number[] = [];
    let result2: number[] = [];
    a.map(item => {
        if (b.includes(item)){
            result.push(item);
        } else {
            result2.push(item)
        }
    })
    return `a was [${result2.join(', ')}],b was [${result.join(', ')}]`;
} 
#errado 
#feat WIP



export function arrayDiff(a: number[], b: number[]): number[] {
    const result = a.filter(item => !b.includes(item));
    if(result.length == 0) return []
    else return result;
}
// This function is a JavaScript implementation of an array difference algorithm. It takes in two arrays, a and b, as input and returns a new array containing the elements that are present in a but not in b.

// The function uses the filter() method to create a new array with all elements from a that do not satisfy the provided callback function. The callback function is checking if the current element (item) from a is not included in b (!b.includes(item)), if true it will include that element in the new array.

// If the new array is empty, it will return an empty array, otherwise it will return the filtered array containing the elements that are present in a but not in b.

// This implementation is also known as a symmetric difference, which is the set of elements which are in either of the sets and not in their intersection.