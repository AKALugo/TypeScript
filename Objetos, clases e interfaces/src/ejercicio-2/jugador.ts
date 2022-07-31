
export enum ColorFichas {Amarillo = 1, Rojo = 2};
export type fichasType = ColorFichas

/**
 * ___Interfaz de un jugador básico___
 */
interface JugadorBasico {
  nombre: string;
  fichas: number;
  color: fichasType;
}

/**
 * @class JugadorConecta4 clase que simula el comportamiento
 * de un jugador de Conecta 4.
 */
export class JugadorConecta4 implements JugadorBasico {
  /**
   * ___COnstructor de nuestro objeto jugador___
   * @param nombre nombre del jugador
   * @param color color de la ficha del jugador
   * @param fichas cantidad de fichas del jugador.
   */
  constructor(public nombre: string, public color: fichasType, 
      public fichas: number = 21) { 
    if (this.nombre === "") {
      console.log("Valor incorrecto de nombre, por defecto JugadorX");
      this.nombre = "JugadorX";
    }
    if (this.fichas < 1) {
      console.log("Valor incorrecto de fichas, por defecto 21");
      this.fichas = 21;
    }
  }
}

const jugador1 = new JugadorConecta4("", ColorFichas.Amarillo, -10);
