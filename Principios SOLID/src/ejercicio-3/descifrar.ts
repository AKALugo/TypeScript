import {Cesar} from "./cesar";

/**
 * @class Descifrar
 */
export class Descifrar extends Cesar {
  /**
   * Cosntructor
   * @param alfabeto alfabeto
   * @param clave clave
   * @param mensaje mensaje
   */
  constructor(alfabeto: string, clave: string, mensaje: string) {
    super(alfabeto, clave, mensaje);
  }

  /**
   * Método que descifra
   * @returns El resultado en formato texto
   */
  operacion(): string {
    let salida: string = "";
    let aux: number = 0;

    for (let recorrido = 0; recorrido < this.mensaje.length; recorrido++) {
      if (this.alfabeto.indexOf(this.mensaje[recorrido]) === -1) {
        salida += this.mensaje[recorrido];
      } else {
        aux = this.alfabeto.indexOf(this.mensaje[recorrido]) - this.alfabeto.indexOf(this.clave[recorrido]);
        if (aux < 0) {
          aux = this.alfabeto.length + aux;
        }
        salida += this.alfabeto[aux];
      }
    }

    return salida;
  }
}

const a = new Descifrar("ABCDEFGHIJKLMNÑOPQRSTUVWXYZ", "CLAVECLAVECLAVPLECLAV", "JZLVIUEOZWWXAL?VWOBV");
console.log(a.operacion());
