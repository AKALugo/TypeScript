import {Pokemon} from "./pokemon";

/**
 * @class Combat clase Combat que simula el combate entre 2 pokemons.
 */
export class Combat {
  /**
   * ___Método que construye nuestro objeto combat___
   * @param poke1 primer pokemon de nuestro combate.
   * @param poke2 segundo pokemon de nuestro combate.
   */
  constructor(private poke1: Pokemon, private poke2: Pokemon) {}

  /**
   * ___Método que simula el ataque entre dos pokemons___
   * @param miTipo tipo deatacante.
   * @param tipoOpo tipo dedefensor.
   * @param miAtaq ataque deatacante.
   * @param defOpo defensa dedefensor.
   * @returns daño que le ha realizado eatacante al defensor.
   */
  private pokemonBattle(miTipo: string, tipoOpo: string, 
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

  /**
   * ___Método que simula el combate entre dos pokemons___
   */
  start(): void | string {
    let aux: number = 0;
    let ataque1: number = 0;
    let ataque2: number = 0;
    let vidaRestante = 0;
    let turno: number = 1;

    while (true) {
      console.log(`Turno ${turno}:`);
      aux = this.pokemonBattle(this.poke1.tipo, this.poke2.tipo, 
          this.poke1.getEstadisticas()[0], this.poke2.getEstadisticas()[1]);

      ataque1 += aux;
      if (this.poke2.getEstadisticas()[3] - ataque1 < 0) {
        vidaRestante = 0;
      } else {
        vidaRestante = this.poke2.getEstadisticas()[3] - ataque1;
      }

      console.log(`${this.poke1.getNombre()} le ha causado ${aux} puntos de daño a ${this.poke2.getNombre()}, a ${this.poke2.getNombre()} le quedan ${vidaRestante} puntos de vida`);

      if (ataque1 >= this.poke2.getEstadisticas()[3]) {
        console.log(`${this.poke2.getNombre()} se ha debilitado`);
        break;
      }

      aux = this.pokemonBattle(this.poke2.tipo, this.poke1.tipo, 
          this.poke2.getEstadisticas()[0], this.poke1.getEstadisticas()[1]);

      ataque2 += aux;
      if (this.poke1.getEstadisticas()[3] - ataque2 < 0) {
        vidaRestante = 0;
      } else {
        vidaRestante = this.poke1.getEstadisticas()[3] - ataque2;
      }

      console.log(`${this.poke2.getNombre()} le ha causado ${aux} puntos de daño a ${this.poke1.getNombre()}, a ${this.poke1.getNombre()} le quedan ${vidaRestante} puntos de vida`);

      if (ataque2 >= this.poke1.getEstadisticas()[3]) {
        console.log(`${this.poke1.getNombre()} se ha debilitado`);
        break;
      }

      turno++;
    }
    if (ataque1 >= this.poke2.getEstadisticas()[3]) {
      console.log(`¡¡¡¡¡${this.poke1.getNombre()} es el ganador !!!!!`);
      return this.poke1.getNombre();
    } else {
      console.log(`¡¡¡¡¡${this.poke2.getNombre()} es el ganador !!!!!`);
      return this.poke2.getNombre();
    }
  }
}

const charmander = new Pokemon("charmander", 10, 20, "fuego", 
    [100, 100, 100, 200]);

const bulbasur = new Pokemon("bulbasur", 5, 30, "hierba", 
    [50, 200, 200, 300]);

bulbasur.print();
charmander.print();

const combate = new Combat(charmander, bulbasur);
combate.start();

