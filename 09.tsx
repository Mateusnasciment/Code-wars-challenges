const strReverse = (str: string) => str.split("").reverse().join("")

export function spinWords(words: string): string {
    
    const splitedWorlds = words.split(" ")
    const newWords = []

    for(let word of splitedWorlds) {
        const newWord = word.length >= 5 ? strReverse(word) : word
    
        newWords.push(newWord: any)
    }

    return newWords.join(" ")


    // Este código define uma função que recebe uma string como entrada e retorna uma nova string com as palavras de tamanho maior ou igual a 5 invertidas.
    //  Ele faz isso dividindo a string de entrada em um array de palavras, itera sobre cada palavra e,
    //   se a palavra tiver 5 ou mais caracteres, usa a função "strReverse" para invertê-la. 
    //  A função "strReverse" usa métodos como "split", "reverse" e "join" para dividir, inverter e juntar a string invertida.
    //  Após iterar sobre todas as palavras, a função "spinWords" junta as palavras invertidas e não invertidas de volta em uma string e retorna esse valor.


    export const spinWords = (words: string): string => words.split(' ')
                                                        .map(m => m.length >= 5 
                                                             ? m.split('').reverse().join('') 
                                                             : m)
                                                        .join(' ')