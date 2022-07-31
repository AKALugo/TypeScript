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
 * Funcion que eleva un número a otro.
 * @param n1 numero decimal.
 * @param n2 numero decimal.
 * @returns numero decimal.
 */
function pow(n1: number, n2: number): number {
  let aux: number = 1;
  for (let size: number = 0; size < n2; size++) {
    aux *= n1;
  }
  return aux;
}
/**
 * Funcion que calcula las direcciones disponibles entre dos IPV4.
 * @param n1 Cadena que contiene una IPV4
 * @param n2 Cadena que contiene una IPV4
 * @returns numero decimal
 */
export function ipsInRange(ip1: string, ip2: string): number {
  const ip1Parts: string[] = ip1.split(".");
  const ip2Parts: string[] = ip2.split(".");
  let sum1: number = 0;
  let sum2: number = 0;
  let cont: number = 3;

  for (let size: number = 0; size < 4; size++) {
    if (ip1Parts[size] !== ip2Parts[size]) {
      sum1 += pow(256, cont) * parseInt(ip1Parts[size]);
      sum2 += pow(256, cont) * parseInt(ip2Parts[size]);
    }
    cont--;
  }
  return abs(sum1, sum2);
}
