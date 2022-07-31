/**
 * Calcula el factorial.
 * @param valor numero al cual se le va a calcular el factorial
 * @returns el valor del factorial.
 */
function factorial(valor: number): number {
  let numero: number = 1;
  
  while (valor > 0) {
    numero *= valor;
    valor--;
  }

  return numero;
}

/**
 * Pasa un numero en notación decimal a notación factorial.
 * @param entero número decimal.
 * @returns número en notación factorial.
 */
export function decimalToFactorial(entero: number): string {
  let valor: number = 1;
  let texto: string = "";
  
  while (entero - factorial(valor) >= 0) {
    valor ++;
  }
  
  valor--;
  while (valor >= 0) {
    texto += (entero / factorial(valor) | 0).toString();
    entero = entero % factorial(valor);
    valor--; 
  }

  return texto;
}

/**
 * Pasa un número en notacón factorial a notación decimal.
 * @param cadena número en notación factorial.
 * @returns numero en notación decimal
 */
export function factorialToDecimal(cadena: string): number {
  let numero: number = 0;
  let contador: number = cadena.length - 1;

  for (let size: number = 0; size < cadena.length; size++) {
    numero += parseInt(cadena.charAt(size), 10) * factorial(contador);
    contador--;
  }
  
  return numero;
}
