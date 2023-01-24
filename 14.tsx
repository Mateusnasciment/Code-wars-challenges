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