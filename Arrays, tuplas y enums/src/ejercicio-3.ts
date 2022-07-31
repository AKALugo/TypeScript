
/**
 * ___Función que decodifica una resistencia___
 * @param color1 typeColor que contiene el primer color
 * @param color2 typeColor que contiene el segundo color
 * @param colores array que contiene el resto de colores.
 * @returns number que contiene el valor de la resistencia según sus colores.
 */
enum color {Negro, Marron, Rojo, Naranja, Amarillo, Verde, Azul, 
           Violeta, Gris, Blanco};
type typeColor = color;

export function decodeResistor(color1: typeColor, color2: typeColor, 
    ...colores: typeColor[]): number {
  return color1 * 10 + color2;
}
