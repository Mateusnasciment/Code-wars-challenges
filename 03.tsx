export function hero(bullets: number, dragons: number): boolean {
    return bullets >= dragons * 2;
}
const bullets = 10;
const dragons = 3;

if (hero(bullets, dragons)) {
    console.log("The hero will survive!");
} else {
    console.log("The hero will not survive :(")
}
// Eu defini uma função chamada hero que recebe dois argumentos: o número de balas que o herói carrega e o número de dragões que o herói precisa derrotar. A função retorna verdadeiro se o herói tiver balas suficientes para derrotar todos os dragões, e falso caso contrário.
// Em seguida, importei a função hero do arquivo onde ela está definida e a chamei com as variáveis ​​bullets e dragons como argumentos. Se a função do herói retornar verdadeiro, imprimi uma mensagem dizendo que o herói sobreviverá. Se retornar falso, imprimi uma mensagem dizendo que o herói não sobreviverá."