import {DC, DCImprimir} from "./dc";
import {DragonBall, DragonBallImprimir} from "./dragonBall";
import {Fighter} from "./luchador";
import {Marvel, MarvelImprimir} from "./marvel";
import {Pokemon, PokemonImprimir} from "./pokemon";
import {StarWars, StarWarsImprimir} from "./starWars";

/**
 * @class Clase FighterDex
 */
export class FighterDex {
  private almacen: Fighter[] = [];
  constructor(...almacen: Fighter[]) {
    this.almacen = almacen;
  }

  /**
   * Get del número de luchadores.
   * @returns Número de luchadores
   */
  getNumberOfFigthers(): number {
    return this.almacen.length;
  }

  /**
   * Get luchador.
   * @param index Posición
   * @returns Luchador
   */
  getFigther(index: number) {
    return this.almacen[index];
  }

  /**
   * Busca a un luchador
   * @param luchador luchador
   * @returns true si está, false si no.
   */
  private findFighter(luchador: Fighter): boolean {
    let aux: boolean = false;

    this.almacen.forEach((element) => {
      if (element === luchador) {
        aux = true;
      }
    });
    return aux;
  }

  /**
   * Añade a un luchador.
   * @param luchador Luchador
   * @returns true si se añadió, false si no.
   */
  addFighter(luchador: Fighter): boolean {
    if (this.findFighter(luchador)) {
      return false;
    } else {
      this.almacen.push(luchador);
      return true;
    }
  }
}

/**
 * @class Clase FighterDexImprimir.
 */
export class FighterDexImprimir {
  /**
   * Constructor.
   * @param figthers fighterDex
   */
  constructor(private figthers: FighterDex) {}

  /**
   * Método que imprime a los luchadores.
   * @returns Los luchadores como texto
   */
  print(): string {
    let salida: string = "";
    for (let i = 0; i < this.figthers.getNumberOfFigthers(); i++) {
      const obj = this.figthers.getFigther(i);
      if (obj instanceof Marvel) {
        const aux = new MarvelImprimir(obj);
        salida += aux.print() + "\n";
      }

      if (obj instanceof DC) {
        const aux = new DCImprimir(obj);
        salida += aux.print() + "\n";
      }

      if (obj instanceof DragonBall) {
        const aux = new DragonBallImprimir(obj);
        salida += aux.print() + "\n";
      }

      if (obj instanceof StarWars) {
        const aux = new StarWarsImprimir(obj);
        salida += aux.print() + "\n";
      }

      if (obj instanceof Pokemon) {
        const aux = new PokemonImprimir(obj);
        salida += aux.print() + "\n";
      } 
    }

    return salida;
  }
}

const goku = new DragonBall("Goku", 100, 4, [100, 100, 100, 100], "Me pican los cocos", "Dragon Ball", "Goku");
const IronMan = new Marvel("Iron Man", 1000, 4, [50, 100, 50, 100], "Que bonita mi armadura", "Marvel", "Iron Man");
const pikachu = new Pokemon("Pikachu", 20, 1, [30, 30, 30, 300], "Pika Pika Pika", "Pokemon", "electrico");

const dex = new FighterDex(goku, IronMan, pikachu);
const imprimirdex = new FighterDexImprimir(dex);

console.log(imprimirdex.print());
