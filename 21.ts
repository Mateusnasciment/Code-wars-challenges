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
Esse código é uma função que recebe dois argumentos: um array de números e um número que representa a soma que estamos procurando. O objetivo da função é encontrar dois números no array que, quando somados, resultam nessa soma.

A primeira coisa que a função faz é criar um mapa vazio que será usado para armazenar cada número do array e seu índice correspondente. Em seguida, a função percorre o array de números usando um loop for.

Para cada número do array, a função subtrai esse número da soma que estamos procurando para obter o complemento. Em seguida, verifica se esse complemento já existe no mapa que criamos antes. Se existir, significa que encontramos um par de números cuja soma é a soma que estamos procurando, então a função retorna esses dois números.

Se o complemento não existir no mapa, a função armazena o número atual e seu índice no mapa. Em outras palavras, ela está "marcando" esse número como tendo sido visto antes.

Se a função percorrer todo o array sem encontrar um par de números cuja soma seja a soma que estamos procurando, ela retorna null, indicando que não encontrou nenhum par.