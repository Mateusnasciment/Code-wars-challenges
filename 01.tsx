export function countSheeps(arrayOfSheep: Array<Boolean>) {
    let sheepCounter = 0;
    for( var i = 0; i < arrayOfSheep.length; i++) {
      if (!arrayOfSheep || !Array.isArray(arrayOfSheep)) {return 0;}
    }
   return arrayOfSheep.filter(Boolean).length;
}
// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined
Claro! Essa função é utilizada para contar o número de ovelhas (sheep, em inglês) presentes em uma lista.

Ela recebe como parâmetro uma lista de valores booleanos, onde cada valor representa se uma ovelha está presente ou não. Por exemplo, se o valor é true, significa que a ovelha está presente, e se o valor é false, significa que ela está ausente.

A função percorre a lista e verifica se ela está vazia ou não é uma lista (utilizando a função Array.isArray). Caso isso seja verdade, a função retorna o valor 0, indicando que não há nenhuma ovelha presente.

Se a lista não estiver vazia e for uma lista válida, a função utiliza a função filter do JavaScript para filtrar os valores booleanos true da lista e retorna o comprimento (length) do novo array resultante, que representa o número de ovelhas presentes na lista.

Dessa forma, a função pode ser utilizada para contar o número de ovelhas presentes em uma lista e retornar esse valor como resultado.