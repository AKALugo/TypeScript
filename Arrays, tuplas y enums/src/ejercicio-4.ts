
/**
 * ___Función que encadena palabras___
 * @param array array de string que contiene las diferentes palabras.
 * @returns string que forma una palabra con las partes encadenadas de las 
 * palabras o devuelve ERROR al no poder encadenar las palabras.
 */
export function meshArray(array: string[]): string | undefined {
  if (array.length <= 1) {
    return undefined;
  }
      
  let cadena: string = "";
  let aux: string = "";
  let auxSolucion: string = "";
  let encontrado: boolean = false;
    
  for (let contador = 1; contador < array.length; contador++) {
    for (let expresion = array[contador - 1].length - 1; expresion >= 0;
      expresion--) {
      aux = array[contador - 1][expresion] + aux;
      if (array[contador].search(aux) === 0) {
        auxSolucion = aux;
        encontrado = true;
      }
    }
    cadena += auxSolucion;
    if (!encontrado) {
      return "Error al encadenar";
    }
    aux = "";
  }
  return cadena;
}
