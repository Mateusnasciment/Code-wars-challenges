export function cockroachSpeed(s: number): number{ s = s * 1000 * 1000 / 3600; return s}
 código  não está passando no ultimo teste 



 #codigo arrumado  com método Math.floor
 export function cockroachSpeed(s: number): number {return Math.floor(s * 100 * 1000 / 3600);}
estava espectando o valor de 30 e estava retornando 3000
