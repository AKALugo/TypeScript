
/**
 * ___Función que desplaza los 0 de un array de numbers___
 * @param array array de numbers que contiene los diferentes números.
 * @returns array de number que contiene los 0 desplazados.
 */
export function moveZeros(array: number[]): number[] | undefined {
  if (array.length === 0) {
    return undefined;
  }
  
  const resultado: number[] = [];
  for (let contador = 0; contador < array.length; contador++) {
    if (array[contador] !== 0) {
      resultado.push(array[contador]);
    }
  }
  
  for (let contador = resultado.length; contador < array.length; contador++) {
    resultado.push(0);
  }
  
  return resultado;
}
