
/**
 * @interface Collectable<T> intefaz abstracta que contiene
 * una serie de métodos para colecciones de datos
 */
interface Collectable<T> {
  addItem(item: T): boolean;
  getItem(posicion: number): T;
  removeIem(item: number): boolean;
  getNumberOfItems(): number;
}

/**
 * @interface Printable<T> interfaz abstracta que contiene
 * un método para imprimir una coleccion de una clase con un
 * cierto formato
 */
interface Printable<T> {
  print(): string;
}

/**
 * @class PrintableCollection<T> clase abstracta que contiene
 * una serie de métodos para manejar colecciones de datos.
 */
abstract class PrintableCollection<T> implements Collectable<T>, Printable<T> {
  /**
   * ___Constructor de la clase___
   * @param almacen almacen de datos de tipo generico.
   */
  constructor(protected almacen: T[]) {}

  /**
   * ___Método para añadir items___
   * @param item Objeto que se va a añadir a la colección
   * @returns True cuando se añade
   */
  addItem(item: T): boolean {
    this.almacen.push(item);
    return true;
  }

  /**
   * ___Método que devuelve el Item___
   * @param posicion posicion de la cual queremos sacar el item
   * @returns EL item de la posicion
   */
  getItem(posicion: number): T {
    return this.almacen[posicion];
  }

  /**
   * ___Método que elimina un item de la coleccion___
   * @param item Posicion del objeto a eliminar
   * @returns true si se elimina
   */
  removeIem(item: number): boolean {
    this.almacen.splice(item, 1);
    return true;
  }

  /**
   * ___Método que devuelve el número de objetos de la coleccion___
   * @returns numero de objetos en la coleccion
   */
  getNumberOfItems(): number {
    return this.almacen.length;
  }

  /**
   * ___Método abstracto print()___
   */
  abstract print(): string;
} 


/**
 * @class NumericPrintableCollection Clase que controla
 * una coleccion de numeros.
 */
export class NumericPrintableCollection extends PrintableCollection<number> {
  /**
   * ___COnstructor de la clase___
   * @param almacen conjunto de numeros
   */
  constructor(almacen: number[]) {
    super(almacen);
  }

  /**
   * ___Método que imprime la colección de números___
   * @returns los números d ela colección con un cierto formato
   */
  print(): string {
    let aux: string = "";
    this.almacen.forEach((numero) => {
      aux += `${numero}, `; 
    });
    return aux.substring(0, aux.length - 2);
  }
}

/**
 * @class StringPrintableCollection Clase que controla
 * una coleccion de strings.
 */
export class StringPrintableCollection extends PrintableCollection<string> {
  /**
   * ___COnstructor de la clase___
   * @param almacen conjunto de strings
   */
  constructor(almacen: string[]) {
    super(almacen);
  }

  /**
   * ___Método que imprime la colección de strings___
   * @returns los strings de la colección con un cierto formato
   */
  print(): string {
    let aux: string = "";
    this.almacen.forEach((numero) => {
      aux += `${numero}, `; 
    });
    return aux.substring(0, aux.length - 2);
  }
}
