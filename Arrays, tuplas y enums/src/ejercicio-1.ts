/**
 * ___Función que devuelve n tablas de multiplicar con n valores___
 * @param n number que indica la cantidad de tablas de multiplicar y la 
 * cantidad de valores.
 * @returns array de array de numbers con las tablas de multiplicar.
 */
export function productTable(n: number): number[][] | undefined {
  const table: number[][] = [];
  
  if (n < 1) {
    return undefined;
  }

  let aux: number[] = [];
  let numero1: number = 1;
  let numero2: number = 1;

  while (numero1 <= n) {    
    while (numero2 <= n) {
      aux.push(numero2 * numero1);
      numero2++;
    }
    numero1++;
    numero2 = 1;
    table.push(aux);
    aux = [];
  }

  return table;
}
