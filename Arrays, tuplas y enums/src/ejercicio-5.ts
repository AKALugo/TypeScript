
/**
 * ___Función que calcula la media y encadena los caracteres de un array___
 * @param array array de number ó string que contiene los elementos a encadenar.
 * @returns la media de los números y los caracteres encadenados.
 */
export function meanAndConcatenate(array: (number | string)[]): 
[number, string] | undefined {
  let texto: string = "";
  let numero: number = 0;
  let contador: number = 0;

  for (let size = 0; size < array.length; size++) {
    const aux = array[size];
    if (typeof(aux) === "number") {
      numero += aux;
      contador ++;
    } else if (typeof(aux) === "string") {
      // Si no es un caracter, sino una cadena.
      if (aux.length !== 1) {
        return undefined;
      }
      texto += aux;
    }
  }
  if (contador === 0 || texto === "") {
    return undefined;
  }
  return [numero / contador, texto];
}
