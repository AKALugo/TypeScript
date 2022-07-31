import {TableroConecta4} from "./tablero";
import {ColorFichas, JugadorConecta4} from "./jugador";

/**
 * @class Conecta4 clase que simula el juego Conecta 4.
 */
export class Conecta4 {
  /**
   * @param tablero tablero del juego.
   */
  private tablero = new TableroConecta4();

  /**
   * ___Constructor de la clase de Conecta 4___
   * @param j1 jugador 1
   * @param j2 jugador 2
   */
  constructor(private j1: JugadorConecta4, private j2: JugadorConecta4) {
    // Si los nombres son iguales.
    if (this.j1.nombre === this.j2.nombre) {
      this.j1.nombre = "Jugador 1";
      this.j2.nombre = "Jugador 2";
      console.log("Los nombres de los jugadores eran iguales y se han cambiado a Jugador 1 y Jugador 2");
    }

    // SI usan las mismas fichas.
    if (this.j1.color === this.j2.color) {
      console.log(`Los jugadores no pueden jugar con las mismas fichas`);
      if (this.j1.color === 1) {
        this.j1.color = ColorFichas.Rojo;
      } else {
        this.j1.color = ColorFichas.Amarillo;
      }
      console.log(`Ahora las fichas de ${this.j1.nombre} son de color ${ColorFichas[this.j1.color]}`);
    }
    // Si tienen la cantidad de fichas incorrecta.
    if (this.j1.fichas !== 21) {
      this.j1.fichas = 21;
      console.log(`${this.j1.nombre} tenía la cantidad incorrecta de fichas, ahora tiene 21`);
    }
    if (this.j2.fichas !== 21) {
      this.j2.fichas = 21;
      console.log(`${this.j2.nombre} tenía la cantidad incorrecta de fichas, ahora tiene 21`);
    }
  }

  /**
   * ___Método que inicializa la partida___
   */
  start(modo: boolean = false): string {
    console.log("");
    let fichas1 = this.j1.fichas;
    let fichas2 = this.j2.fichas;

    const readlineSync = require('readline-sync');
    let lectura: string = "";

    console.log("El estado actual del tablero es:");
    this.tablero.print();

    // Hasta que no se queden sin fichas.
    while (fichas1 > 0 || fichas2 > 0) {
      // Turno del jugador 1
      console.log(`-----Es el turno del jugador ${this.j1.nombre}-----`);
      console.log("Elija donde colocar la ficha");
      this.tablero.columnasDisponibles();

      // Tiene que introducir una columna valida
      if (modo) {
        do {
          lectura = readlineSync.question("");
        } while (!this.tablero.colocarFicha(parseInt(lectura) - 1, this.j1.color));
      } else {
        this.tablero.colocarFicha(1, this.j1.color);
      }

      fichas1--;

      console.log("El estado actual del tablero es:");
      this.tablero.print();

      // Miramos si J1 ha ganado.
      if (this.tablero.comprobarGanador() !== 0) {
        console.log(`¡¡¡¡¡¡¡¡¡¡Felicidade ${this.j1.nombre} has ganado!!!!!!!!!!`);
        return `¡¡¡¡¡¡¡¡¡¡Felicidade ${this.j1.nombre} has ganado!!!!!!!!!!`;
      }

      // Turno del jugador 1
      console.log(`Es el turno del jugador ${this.j2.nombre}`);
      console.log("Elija donde colocar la ficha");
      this.tablero.columnasDisponibles();

      // Tiene que introducir una columna valida
      if (modo) {
        do {
          lectura = readlineSync.question("");
        } while (!this.tablero.colocarFicha(parseInt(lectura) - 1, this.j2.color));
      } else {
        this.tablero.colocarFicha(2, this.j2.color);
      }
      fichas2--;

      console.log("El estado actual del tablero es:");
      this.tablero.print();

      // Miramos si J2 ha ganado.
      if (this.tablero.comprobarGanador() !== 0) {
        console.log(`¡¡¡¡¡¡¡¡¡¡Felicidade ${this.j2.nombre} has ganado!!!!!!!!!!`);
        return `¡¡¡¡¡¡¡¡¡¡Felicidade ${this.j2.nombre} has ganado!!!!!!!!!!`;
      }
    }
    // Si han quedado en empate.
    console.log("¡¡¡La partida ha quedado en empate, bien jugado!!!");
    return "¡¡¡La partida ha quedado en empate, bien jugado!!!";
  }
}

const j1 = new JugadorConecta4("PEPE", ColorFichas.Amarillo);
const j2 = new JugadorConecta4("PEPE", ColorFichas.Amarillo);

const juego = new Conecta4(j1, j2);

juego.start(false);
