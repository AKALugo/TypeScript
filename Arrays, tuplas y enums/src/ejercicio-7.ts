
/**
 * ___Función que crea una factoría de multiplicaciones___
 * @param array array de number.
 * @returns función que recibe un número y multiplica el array pasado a la 
 * función primera por ese número
 */
export function multiplyAll(array: number[]): ((a: number) => number[]) {
  return (a) => {
    const aux: number[] = [];
    for (let contador = 0; contador < array.length; contador++) {
      aux.push(array[contador] * a);
    }
    return aux;
  };
}
