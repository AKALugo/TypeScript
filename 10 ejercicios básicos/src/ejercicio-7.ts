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
 * Funcion que calcula las cabezas que le salen a Cerberus después 
 * de que Diana se las corte
 * @param cabezaIniciales número decimal, cantidad de cabezas que tiene Cerberus
 * @param n número decimal, cantidad de cabezas que le van a salir a Cerberus 
 * después de que una sea cortada
 * @param ataques número decimal, cantidad de ataques que Diana va a hacer
 * @returns número decimal, cantidad de cabezas finales de Cerberus.
 */
export function diana(cabezaIniciales: number, n: number, 
    ataques: number): number {
  let cabezaFinal: number = cabezaIniciales;

  for (let size: number = 1; size <= ataques; size++) {
    cabezaFinal = cabezaFinal - 1 + n * factorial(size);
  }

  return cabezaFinal;
}
