String.prototype.toJadenCase = function() {
    let result = this.charAt(0).toUpperCase() + this.slice(1);
    return result;
  };
  
  interface String{      // Declaration needed, don't remove it
    toJadenCase(): string;
  }


//   Esse código cria uma função "toJadenCase" como uma extensão da classe "String" do JavaScript.
//  Essa função converte a primeira letra de uma string em maiúscula e retorna a string modificada.
//  A interface "String" é usada para adicionar essa função à classe "String" do JavaScript,
//   permitindo que ela seja chamada diretamente em uma string.

word.split(' ').map( w => w[0].toUpperCase() + w.substring(1) ).join(' ')


// O método split(' ') é usado para dividir a string em um array de substrings, cada uma separada por um espaço.
// O método map() é usado para aplicar uma função à cada elemento do array. A função que é passada para o map() é uma função arrow que toma uma palavra como entrada, converte a primeira letra da palavra para maiúscula e concatena com o resto da palavra.
// O método join(' ') é usado para juntar todos os elementos do array novamente, separando-os com um espaço, retornando assim uma string
// Em resumo, esse código modifica a frase para que todas as primeiras letras de cada palavra sejam maiúsculas.


String.prototype.toJadenCase = function() {
    let r = r.split(' ').map(r => [0].toUpperCase() + r.substring(1) ).join(' ')
    return r;
  };
// tentativa 03




String.prototype.toJadenCase = function() {
    let r = this.split(' ').map(r => r[0].toUpperCase() + r.substring(1) ).join(' ')
    return r;
  };

//   tentativa 04
sucesso 