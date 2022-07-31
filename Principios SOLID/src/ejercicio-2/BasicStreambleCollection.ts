/**
 * @interface Streamable contiene un alamcen.
 */
interface Streamable<T> {
  almacen: T[];
}

/**
 * @interface StreamableAdd contiene un metodo que añade.
 */
interface StreamableAdd<T> {
  addContenido(item: T): boolean;
}

/**
 * @interface StreamableGetData contiene dos getters.
 */
interface StreamableGetData<T> {
  getContenidoPorNombre(nombre: string): T[];
  getContenidoPorFecha(fecha: string): T[];
}

/**
 * @interface StreamableNumber contiene un getter.
 */
interface StreamableNumber {
  getNumeroItems(): number;
}

/**
 * @class Clase BasicStreamableCollection<T>
 */
export abstract class BasicStreamableCollection<T> implements Streamable<T>, StreamableAdd<T>, StreamableGetData<T>, StreamableNumber {
  /**
   * Constructor.
   * @param almacen almacen de los datos
   */
  constructor(public readonly almacen: T[]) {}

  /**
   * Get numero de datos.
   * @returns numero de datos
   */
  getNumeroItems(): number {
    return this.almacen.length;
  }

  /**
   * Método que añade contenido.
   * @param item item que se va a añadir
   * @returns true si se añade.
   */
  addContenido(item: T): boolean {
    this.almacen.push(item);
    return true;
  }

  /**
   * Método que busca contenido por el nombre.
   * @param nombre nombre a buscar.
   */
  abstract getContenidoPorNombre(nombre: string): T[];
  /**
   * Método que busca por la fecha.
   * @param fecha fecha a buscar
   */
  abstract getContenidoPorFecha(fecha: string): T[];
}
