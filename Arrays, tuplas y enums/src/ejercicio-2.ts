/**
 * ___Función que convierte los valores array en una cadena con rangos___
 * @param rango array de numbers que contiene los números en orden ascendente
 * @returns cadena con los rangos.
 */
export function fromArrayToRanges(rango: number[]): string | undefined {
  let cadena: string = "";
  if (rango.length === 0) {
    return undefined;
  }
  // Guardamos el incio del tramo.
  let inicio: number = rango[0];
  let pibote: number = rango[0];
  
  for (let elemento = 1; elemento < rango.length; elemento++) {
    // Si no están ordenados de forma ascendente.
    if (pibote >= rango[elemento]) {
      return undefined;
      // Si son consecutivos.
    } else if (pibote + 1 === rango[elemento]) {
      pibote++;
      // Si no son consecutivos.
    } else {
      // Si pibote ha avanzado quiere decir que era un tramo y no un número
      // solo.
      if (inicio !== pibote) {
        cadena += inicio.toString() + "_" + pibote.toString() + ",";
      // Pibote no ha avanzado, se trata de un número suelto.
      } else {
        cadena += inicio.toString() + ",";
      }
      // Reestablecemos el inicio y le pibote.
      inicio = rango[elemento];
      pibote = rango[elemento];
    }
  }
  
  // Miramos los últimos números.
  if (inicio !== pibote) {
    cadena += inicio.toString() + "_" + pibote.toString();
  } else {
    cadena += inicio.toString();
  }
  return cadena;
}

/**
 * ___Función que convierte una cadena con rangos en un array ascendente___
 * @param cadena cadena que contiene valores entre rangos, y sueltos.
 * @returns array de numbers que contiene los números en orden ascendente.
 */
export function fromRangesToArray(cadena: string): number[] | undefined {
  if (cadena.length < 1) {
    return undefined;
  }
  // Miramos que en la cadena solo hayan numeros, ',' y '_'
  for (let elemento = 0; elemento < cadena.length; elemento++) {
    if (!cadena[elemento].match(/^[0-9]+$/) && cadena[elemento] !== "_" && 
          cadena[elemento] !== "," ) {
      return undefined;
    }
  }
  const rango: number[] = [];
  // Separamos la cadena por las ','
  const partes: string[] = cadena.split(",");
  let aux: string[];
  
  // Recorremos cada fragmento.
  for (let elemento = 0; elemento < partes.length; elemento++) {
    // Si contiene una '_'
    if (partes[elemento].search(/_/gm) !== -1) {
      // la separamos en 2 partes.
      aux = partes[elemento].split("_");
      // Miramos que solo sean números.
      if (!aux[0].match(/^[0-9]+$/) || !aux[1].match(/^[0-9]+$/)) {
        return undefined;
      }
      // Miramos que el número más a la der sea mayor que el de la izq.
      if (parseInt(aux[0]) >= parseInt(aux[1])) {
        return undefined;
      }
      // Añadimos los números que se encuentran entre el tramo.
      for (let contador = parseInt(aux[0]); contador <= parseInt(aux[1]);
        contador++) {
        rango.push(contador);
      }
      // Si no tiene '_' añadimos directamente el número.
    } else {
      rango.push(parseInt(partes[elemento]));
    }
  }
  
  // Miramos que los número hayan quedado en orden ascendete y no se repitan.
  for (let elemento = 1; elemento < rango.length; elemento++) {
    if (rango[elemento] <= rango[elemento - 1]) {
      return undefined;
    }
  }
    
  return rango;
}
