import {Pokemon} from "./pokemon";

/**
 * @class Pokedex clase Pokedex que nos permite instanciar una pokedex
 * básica.
 */
export class Pokedex {
  private pokemons: Pokemon[] = [];

  /**
   * ___Método que construye nuesto objeto pokedex___
   * @param pokemonsEntrada conjunto de pokemons que van a formar nuestra 
   * pokedex.
   */
  constructor(...pokemonsEntrada: Pokemon[]) {
    this.pokemons = pokemonsEntrada;
  }

  /**
   * ___Método que busca un pokemon en la pokedex___
   * @param pok pokemon que queremos buscar en nuestra pokedex.
   * @returns true si el pokemon que queremos añadir está en la pokedex
   * false si no lo está.
   */
  private findPokemon(pok: Pokemon) {
    let aux: boolean = false;

    this.pokemons.forEach((element) => {
      if (element === pok) {
        aux = true;
      }
    });
    return aux;
  }

  /**
   * ___Método que añade un pokemon a la pokedex___
   * @param pok pokemon que vamos a añadir a nuestra pokedex.
   * @returns undefined si el pokemon ya se encuentra en la pokedex, void si se
   * ha añadido correctamente.
   */
  addPokemon(pok: Pokemon): boolean {
    if (this.findPokemon(pok)) {
      return false;
    } else {
      this.pokemons.push(pok);
      return true;
    }
  }

  /**
   * ___Método que muestra por pantalla todos los pokemons de la pokedex___
   */
  print(): void {
    console.log("/////////////////////////////");
    console.log("/////////////////////////////");
    this.pokemons.forEach((element) => {
      element.print();
      console.log("/////////////////////////////");
    });
    console.log("/////////////////////////////\n\n\n");
  }
}

const charmander = new Pokemon("charmander", 10, 20, "fuego", 
    [100, 100, 100, 200]);

const bulbasur = new Pokemon("bulbasur", 5, 30, "hierba", 
    [50, 200, 200, 300]);

const poke = new Pokedex(charmander, bulbasur);

poke.print();

poke.addPokemon(charmander);
poke.print();

const bulbasur1 = new Pokemon("bulbasur", 1000, 30, "hierba", 
    [50, 200, 200, 300]);
poke.addPokemon(bulbasur1);
poke.print();
