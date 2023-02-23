export function bouncingBall(h: number, bounce: number, window: number): number {
    if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) {
        return -1;
      }
    
      let count = 0;
      let height = h;
    
      while (height > window) {
        // The ball passes the window on its way down
        count++;
    
        // Calculate the height of the ball after the bounce
        height *= bounce;
    
        // The ball passes the window on its way up if it still bounces
        if (height > window) {
          count++;
        }
      }
    
      return count;
    }

==========================================================================
export function bouncingBall(h: number, bounce: number, window: number): number {
    if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) {
      return -1;
    }
    
    return 2 + bouncingBall(h * bounce, bounce, window);
  }


  =============================================================================
  export function bouncingBall(h: number, bounce: number, window: number): number {
    if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) {
      return -1;
    }
    
    return 2 * Math.ceil(Math.log(window/h)/Math.log(bounce)) - 1; 
  }
======================================================================================

Claro, vou explicar a função bouncingBall passo a passo:

typescript
Copy code
export function bouncingBall(h: number, bounce: number, window: number): number {
Esta linha define uma função chamada bouncingBall com três parâmetros: h, bounce e window, todos números do tipo number. O export antes da função é usado para tornar a função disponível para outros módulos que importam este módulo.

typescript
Copy code
if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) {
  return -1;
}
Esta linha faz uma verificação de entrada para garantir que os parâmetros fornecidos atendam a três condições: h deve ser maior que 0, bounce deve estar entre 0 e 1 (não inclusive) e window deve ser menor que h. Se qualquer uma dessas condições não for atendida, a função retorna -1.

typescript
Copy code
return 2 * Math.ceil(Math.log(window/h)/Math.log(bounce)) - 1; 
Esta linha calcula o número de vezes que uma bola saltará na frente de uma janela com base nos parâmetros fornecidos. A fórmula para calcular o número de saltos é 2 * Math.ceil(Math.log(window/h)/Math.log(bounce)) - 1.

Aqui está o que cada parte da fórmula faz:

Math.log(window/h) calcula o logaritmo natural da razão entre a altura da janela e a altura inicial da bola.
Math.log(bounce) calcula o logaritmo natural do coeficiente de restituição da bola.
Dividindo o resultado do primeiro cálculo pelo resultado do segundo cálculo, obtemos o número de vezes que a bola perde altura e bate no chão até que sua altura seja menor que a altura da janela.
Math.ceil arredonda este número para cima para garantir que contemos todas as vezes que a bola passa pela janela (ida e volta).
Multiplicando este número por 2, obtemos o número total de vezes que a bola passa pela janela (ida e volta).
Subtraindo 1 do resultado final, obtemos o número de saltos completos (a bola não passa completamente pela janela na última vez que ela sobe).
Espero que isso ajude a entender a função bouncingBall!