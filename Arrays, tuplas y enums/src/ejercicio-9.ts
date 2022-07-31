/**
 * @type Tipo de dato Point que es una tupla de numeros.
 */
type Point = [number, number, number, ...number[]];

/**
 * ___Función que suma 2 puntos___
 * @param a objeto Point
 * @param b objeto Point
 * @returns punto que contiene la suma.
 */
export function suma(a: Point, b: Point): Point | undefined {
  let aux: Point = [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
  if (a.length !== b.length) {
    return undefined;
  }
  if (a.length !== 3) {
    for (let contador = 3; contador < a.length; contador++) {
      aux.push(a[contador] + b[contador]);
    }
  }

  return aux;
}
 
/**
 * ___Función que resta 2 puntos___
 * @param a objeto Point
 * @param b objeto Point
 * @returns punto que contiene la resta.
 */
export function resta(a: Point, b: Point): Point | undefined {
  let aux: Point = [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
  if (a.length !== b.length) {
    return undefined;
  }
  if (a.length !== 3) {
    for (let contador = 3; contador < a.length; contador++) {
      aux.push(a[contador] - b[contador]);
    }
  }

  return aux;
}

/**
 * ___Función que multiplica cada valor de un punto por un valor___
 * @param a objeto Point
 * @param n valor por el cual el punto va a ser multiplicado.
 * @returns punto multiplicado.
 */
export function mult(a: Point, n: number): Point {
  let aux: Point = [a[0] * n, a[1] * n, a[2] * n];

  if (a.length !== 3) {
    for (let contador = 3; contador < a.length; contador++) {
      aux.push(a[contador] * n);
    }
  }

  return aux;
}

/**
 * ___Función que calcula la distancia euclidiana entre 2 puntos___
 * @param a objeto Point
 * @param b objeto Point
 * @returns distancia euclidiana entre 2 puntos.
 */
export function eucli(a: Point, b: Point): number | undefined {
  let aux: number = 0;
  if (a.length !== b.length) {
    return undefined;
  }
  for (let contador = 0; contador < a.length; contador++) {
    aux += Math.pow(a[contador] - b[contador], 2); 
  }
    
  return Math.sqrt(aux);
}
