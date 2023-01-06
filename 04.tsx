export function countSheep(num: number): string {
    let r = ''
      for (let i = 1; i<= num; i++) {
        r += i + ' sheep...'
      }
    return r
  }