// Complete a função para que ela encontre a média das três notas passadas a ela e retorne o valor da letra associada a essa nota.

// Pontuação NuméricaLetra Nota
// 90 <= pontuação <= 100 'A'
// 80 <= pontuação < 90    'B'
// 70 <= pontuação < 80    'C'
// 60 <= pontuação < 70    'D'
// 0 <= pontuação < 60    'F'
// Os valores testados estão todos entre 0 e 100. Não há necessidade de verificar valores negativos ou valores maiores que 100.

export function getGrade(s1, s2, s3) {
    const soma = (s1 + s2 + s3) / 3;

    if(soma >= 90) return 'A'
    else if(soma >= 80) return 'B'
    else if(soma >= 70) return 'C'
    else if(soma >= 60) return 'D'
    else return 'F'
}

console.log(getGrade(95,90,93))