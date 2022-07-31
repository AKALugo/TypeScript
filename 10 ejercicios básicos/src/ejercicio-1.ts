/**
 * Función que recibe un año y nos dice si es biciesto o no.
 * @param year año que se pasa por parámetro.
 * @returns verdadero si el año es biciesto, falso si no lo es.
 */
export function isLeapYear(year: number): boolean {
  if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}
