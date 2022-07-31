/**
 * @type Tipo de dato Point que es una tupla de dos numbers.
 */
type Point = [number, number];

/**
 * ___Función que suma 2 puntos___
 * @param a objeto Point
 * @param b objeto Point
 * @returns punto que contiene la suma.
 */
export function suma(a: Point, b: Point): Point {
  return [a[0] + b[0], a[1] + b[1]];
}

/**
 * ___Función que resta 2 puntos___
 * @param a objeto Point
 * @param b objeto Point
 * @returns punto que contiene la resta.
 */
export function resta(a: Point, b: Point): Point {
  return [a[0] - b[0], a[1] - b[1]];
}

/**
 * ___Función que multiplica cada valor de un punto por un valor___
 * @param a objeto Point
 * @param n valor por el cual el punto va a ser multiplicado.
 * @returns punto multiplicado.
 */
export function mult(a: Point, n: number): Point {
  return [a[0] * n, a[1] * n];
}

/**
 * ___Función que calcula la distancia euclidiana entre 2 puntos___
 * @param a objeto Point
 * @param b objeto Point
 * @returns distancia euclidiana entre 2 puntos.
 */
export function eucli(a: Point, b: Point): number {
  return Math.sqrt(Math.pow(a[0] - b[0], 2) + Math.pow(a[1] - b[1], 2));
}
