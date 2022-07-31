/**
 * @type Tipo de dato Point que es una tupla de dos numbers.
 */
type Point = [number, number];

/**
 * ___Función que calcula si el paseo que nos sugiere la app lo podemos 
 * hacer en 10 minutos___
 * @param array array de strings que contiene los diferentes movimientos.
 * @returns verdadero si en 10 min podemos dar el paseo y volver, falso si 
 * no podemos.
 */
export function paseoApp(array: string[]): boolean | undefined {
  const aux: Point = [0, 0];
  if (array.length === 0) {
    return undefined;
  }

  for (let contador = 0; contador < array.length; contador++) {
    switch (array[contador]) {
      case 'n':
        aux[0] ++;
        break;
      case 's':
        aux[0] --;
        break;
      case 'e':
        aux[1] ++;
        break;
      case 'o':
        aux[1] --;
        break;
      default:
        return undefined;
    }
    if (contador === 10) {
      break;
    }
  }
  return aux[0] === 0 && aux[1] === 0;
}
