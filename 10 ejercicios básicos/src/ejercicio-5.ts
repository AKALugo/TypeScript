/**
 * Función que ordena un número en orden descendente.
 * @param numero número en notación decimal
 * @returns número en notación decimal
 */
export function ordenDescendente(numero: number): number {
  let cadena: string = numero.toString();
  let aux: string = "";
  let mayor: number;

  while (cadena.length > 0) {
    mayor = 0;
    for (let size: number = 0; size < cadena.length; size++) {
      if (parseInt(cadena.charAt(mayor)) < parseInt(cadena.charAt(size))) {
        mayor = size;
      }
    }
    aux += cadena.substring(mayor, mayor + 1);
    cadena = cadena.substring(0, mayor) + 
             cadena.substring(mayor + 1, cadena.length);
  }

  return parseInt(aux);
}
