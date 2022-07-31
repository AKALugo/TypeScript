
/**
 * Función que calcula el daño que hace nuestro pokemon en una batalla.
 * @param miTipo Cadena que contiene el tipo de nuestro pokemon
 * @param tipoOpo Cadena que contiene el tipo del pokemon del rival
 * @param miAtaq número decimal, ataque de nuestro pokemon.
 * @param defOpo número decimal, defensa del pokemon del rival.
 * @returns número decimal, daño que nuestro pokemon inflije al rival.
 */
export function pokemonBattle(miTipo: string, tipoOpo: string, 
    miAtaq: number, defOpo: number): number {
  const superEfec: number = 2;
  const normal: number = 1;
  const pocoEfec: number = 0.5;
  let damage: number = 50 * (miAtaq / defOpo);
  
  switch (miTipo) {
    case "fuego":
      switch (tipoOpo) {
        case "fuego":
          damage *= pocoEfec;
          break;
        case "agua":
          damage *= pocoEfec;
          break;
        case "hierba":
          damage *= superEfec;
          break;
        case "electrico":
          damage *= normal;
          break;
      }
      break;

    case "agua":
      switch (tipoOpo) {
        case "fuego":
          damage *= superEfec;
          break;
        case "agua":
          damage *= pocoEfec;
          break;
        case "hierba":
          damage *= pocoEfec;
          break;
        case "electrico":
          damage *= pocoEfec;
          break;
      }
      break;

    case "hierba":
      switch (tipoOpo) {
        case "fuego":
          damage *= pocoEfec;
          break;
        case "agua":
          damage *= superEfec;
          break;
        case "hierba":
          damage *= pocoEfec;
          break;
        case "electrico":
          damage *= normal;
          break;
      }
      break;

    case "electrico":
      switch (tipoOpo) {
        case "fuego":
          damage *= normal;
          break;
        case "agua":
          damage *= superEfec;
          break;
        case "hierba":
          damage *= normal;
          break;
        case "electrico":
          damage *= pocoEfec;
          break;
      }
      break;
  }
  return damage;
}
