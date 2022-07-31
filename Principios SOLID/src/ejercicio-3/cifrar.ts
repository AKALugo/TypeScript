import {Cesar} from "./cesar";

/**
 * @class Cifrar
 */
export class Cifrar extends Cesar {
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
   * Método que cifra
   * @returns El resultado en formato texto
   */
  operacion(): string {
    let salida: string = "";

    for (let recorrido = 0; recorrido < this.mensaje.length; recorrido++) {
      if (this.alfabeto.indexOf(this.mensaje[recorrido]) === -1) {
        salida += this.mensaje[recorrido];
      } else {
        salida += this.alfabeto[(this.alfabeto.indexOf(this.mensaje[recorrido]) +
                  this.alfabeto.indexOf(this.clave[recorrido])) % this.alfabeto.length];
      }
    }

    return salida;
  }
}

const a = new Cifrar("ABCDEFGHIJKLMNÑOPQRSTUVWXYZ", "CLAVECLAVECLAVÑECLAV", "HOLAESTOESUNAP?RUEBA");
console.log(a.operacion());
const b = new Cifrar("ABCDEFGHIJKLMNÑOPQRSTUVWXYZ", "CLAVECLAVECLAVÑE", "HOLAESTOESUNAP?RUEBA");
console.log(b.operacion());
