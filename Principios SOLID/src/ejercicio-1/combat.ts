import {DC} from "./dc";
import {DragonBall} from "./dragonBall";
import {Fighter} from "./luchador";
import {Marvel} from "./marvel";
import {Pokemon} from "./pokemon";

/**
 * @class Clase que simula un combate
 */
export class Combat {
  /**
   * Constructor de la clase Comabt.
   * @param fighter1 luchador 1
   * @param fighter2 luchador 2
   */
  constructor(private fighter1: Fighter, private fighter2: Fighter) {}
  
  /**
   * Método que calcula cuanta vida le quita un luchador a otro.
   * @param f1 luchador 1
   * @param f2 luchador 2
   * @returns La vida que le quita el luchador 1 al luchador 2.
   */
  private figtherBattle(f1: Fighter, f2: Fighter): number {
    console.log(f1.getFrase());
    
    let damage: number = 0;
    const atacante = f1;
    const defensor = f2;

    if (f1 instanceof Pokemon) {
      if (f2 instanceof Pokemon) {
        const superEfec: number = 2;
        const normal: number = 1;
        const pocoEfec: number = 0.5;
        damage = 50 * (f1.getEstadisticas()[0] / f1.getEstadisticas()[1]);
        switch (f1.getTipo()) {
          case "fuego":
            switch (f2.getTipo()) {
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
            switch (f2.getTipo()) {
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
            switch (f2.getTipo()) {
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
            switch (f2.getTipo()) {
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
      } else if (f2 instanceof Marvel) {
        return f1.getEstadisticas()[0] / 5;
      } else if (f2 instanceof DC) {
        return f1.getEstadisticas()[0] / 4;
      } else if (f2 instanceof DragonBall) {
        return f1.getEstadisticas()[0] / 1000;
      } else {
        return f1.getEstadisticas()[0] * 2 / f2.getEstadisticas()[1];
      }
    } else if (f1 instanceof Marvel) {
      if (f2 instanceof Pokemon) {
        return f1.getEstadisticas()[0] * 1.5;
      } else if (f2 instanceof DC) {
        return f1.getEstadisticas()[0] / f2.getEstadisticas()[1];
      } else if (f2 instanceof DragonBall) {
        return f1.getEstadisticas()[0] / 10;
      } else if (f2 instanceof Marvel) {
        return f1.getEstadisticas()[0];
      } else {
        return f1.getEstadisticas()[0] / f2.getEstadisticas()[1];
      }
    } else if (f1 instanceof DC) {
      if (f2 instanceof Pokemon) {
        return f1.getEstadisticas()[0] * 1.5;
      } else if (f2 instanceof DC) {
        return f1.getEstadisticas()[0] / f2.getEstadisticas()[1];
      } else if (f2 instanceof DragonBall) {
        return f1.getEstadisticas()[0] / 10;
      } else if (f2 instanceof Marvel) {
        return f1.getEstadisticas()[0];
      } else {
        return f1.getEstadisticas()[0] / f2.getEstadisticas()[1];
      }
    } else if (f1 instanceof DragonBall) {
      return 1000;
    } else {
      return f1.getEstadisticas()[0] * 10;
    }
  }
  
  /**
   * Método que inicia la pelea.
   * @returns Granador del combate
   */
  start(): void | string {
    let aux: number = 0;
    let ataque1: number = 0;
    let ataque2: number = 0;
    let vidaRestante = 0;
    let turno: number = 1;
  
    while (true) {
      console.log(`Turno ${turno}:`);
      aux = this.figtherBattle(this.fighter1, this.fighter2);
  
      ataque1 += aux;
      if (this.fighter2.getEstadisticas()[3] - ataque1 < 0) {
        vidaRestante = 0;
      } else {
        vidaRestante = this.fighter2.getEstadisticas()[3] - ataque1;
      }
  
      console.log(`${this.fighter1.getNombre()} le ha causado ${aux} puntos de daño a ${this.fighter2.getNombre()}, a ${this.fighter2.getNombre()} le quedan ${vidaRestante} puntos de vida`);
  
      if (ataque1 >= this.fighter2.getEstadisticas()[3]) {
        console.log(`${this.fighter2.getNombre()} se ha muerto`);
        break;
      }
  
      aux = this.figtherBattle(this.fighter2, this.fighter1);
  
      ataque2 += aux;
      if (this.fighter1.getEstadisticas()[3] - ataque2 < 0) {
        vidaRestante = 0;
      } else {
        vidaRestante = this.fighter1.getEstadisticas()[3] - ataque2;
      }
  
      console.log(`${this.fighter2.getNombre()} le ha causado ${aux} puntos de daño a ${this.fighter1.getNombre()}, a ${this.fighter1.getNombre()} le quedan ${vidaRestante} puntos de vida`);
  
      if (ataque2 >= this.fighter1.getEstadisticas()[3]) {
        console.log(`${this.fighter1.getNombre()} se ha muerto`);
        break;
      }
  
      console.log("\n\n");
      turno++;
    }
    if (ataque1 >= this.fighter2.getEstadisticas()[3]) {
      console.log(`¡¡¡¡¡${this.fighter1.getNombre()} es el ganador !!!!!`);
      return this.fighter1.getNombre();
    } else {
      console.log(`¡¡¡¡¡${this.fighter2.getNombre()} es el ganador !!!!!`);
      return this.fighter2.getNombre();
    }
  }
}

const goku = new DragonBall("Goku", 100, 4, [100, 100, 100, 100], "Me pican los cocos", "Dragon Ball", "Goku");
const IronMan = new Marvel("Iron Man", 1000, 4, [50, 100, 50, 100], "Que bonita mi armadura", "Marvel", "Iron Man");
const pikachu = new Pokemon("Pikachu", 20, 1, [30, 30, 30, 300], "Pika Pika Pika", "Pokemon", "electrico");

const combate = new Combat(pikachu, IronMan);
console.log(combate.start());
