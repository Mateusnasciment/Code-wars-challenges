import { MORSE_CODE } from './preloaded';
  export function decodeMorse(code: string): string {
  code = code.trim();
  let words = code.split("   ");
  let decoded = "";
  for (let word of words) {
    let letters = word.split(" ");
    for (let letter of letters) {
      decoded += MORSE_CODE[letter];
    }
    decoded += " ";
  }
  return decoded.trim();
}
// Este código é uma implementação da função do decodificador de código Morse no TypeScript. A função recebe uma string de código morse como entrada e retorna uma string decodificada legível por humanos.
// Ele importa o dicionário MORSE_CODE do arquivo pré-carregado e usa o método trim() para remover quaisquer espaços extras do código de entrada.
// Em seguida, ele usa o método split() para dividir o código de entrada em palavras e letras e usa um loop for para iterar sobre cada palavra e letra. Para cada letra, ele usa o dicionário MORSE_CODE para decodificar a letra e adicioná-la à string decodificada.
// Finalmente,
// ele adiciona um espaço entre as palavras e apara quaisquer espaços extras da string decodificada final antes de retorná-la.