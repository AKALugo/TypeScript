/**
 * Funcion que calcula la diferencia de dos número en valor absoluto.
 * @param n1 numero decimal
 * @param n2 numero decimal 
 * @returns numero decimal
 */
function abs(n1: number, n2: number): number {
  const aux: number = n1 - n2;
  
  if (aux < 0) {
    return aux * -1;
  } else {
    return aux;
  }
}

/**
 * Función que calcula la distancia de Manhattan.
 * @param p1 cadena que contiene un punto.
 * @param p2 cadena que contiene un punto.
 * @returns numero decimal.
 */
export function manhattan(p1: string, p2: string): number {
  const p1Parts: string[] = p1.split(",");
  const p2Parts: string[] = p2.split(",");
  let sum: number = 0;

  for (let size: number = 0; size < p1Parts.length; size++) {
    sum += abs(parseInt(p1Parts[size]), parseInt(p2Parts[size]));
  }
  return sum;
}
