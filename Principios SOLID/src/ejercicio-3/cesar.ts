/**
 * @interface Alfabeto contiene un string
 */
interface Alfabeto {
  alfabeto: string;
}

/**
 * @interface Clave contiene un string
 */
interface Clave {
  clave: string;
}

/**
 * @interface Mensaje contiene un string
 */
interface Mensaje {
  mensaje: string;
}

/**
 * @interface CifradoCesar contiene un método que ejecuta una operación
 */
interface CifradoCesar {
  operacion(): string;
}

/**
 * @class Cesar
 */
export abstract class Cesar implements Alfabeto, Clave, Mensaje, CifradoCesar {
  /**
   * Cosntructor
   * @param alfabeto alfabeto
   * @param clave clave
   * @param mensaje mensaje
   */
  constructor(public readonly alfabeto: string, public clave: string,
      public readonly mensaje: string) {
    while (this.clave.length < this.mensaje.length) {
      this.clave += this.clave;
    }
  }

  /**
   * Método que realiza una operación y devuelve el resultado
   * en un string.
   */
  abstract operacion(): string;
}
