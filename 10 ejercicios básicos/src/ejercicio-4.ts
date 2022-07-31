/**
 * Función que comprueba si una cadena está en formato ISBN-10.
 * @param isbn cadena en formato ISBN-10
 * @returns verdadero si la cadena cumple el formato ISBN-10, falso si no.
 */
export function isValidISBN(isbn: string): boolean {
  let sum: number = 0;
  let contador: number = 10;

  for (let size: number = 0; size < isbn.length; size++) {
    if (isbn.charAt(size) !== "-") {
      if (isbn.charAt(size) === "X") {
        sum += 10 * contador;
      } else {
        sum += parseInt(isbn.charAt(size)) * contador;
      }
      contador--;
    }
  }
  return sum % 11 === 0;
}
