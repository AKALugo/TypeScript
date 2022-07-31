import {BasicStreamableCollection} from "./BasicStreambleCollection";

/**
 * @type Datos de las peliculas
 */
export type peliculaType = {
  nombre: string;
  fecha: string;
  presupuesto: number;
  director: string;
};

/**
 * @class Pelicula
 */
export class Pelicula extends BasicStreamableCollection<peliculaType> {
  constructor(...data: peliculaType[]) {
    super(data);
  }

  /**
   * Get según un nombre.
   * @param nombre nombre a buscar
   * @returns Peliculas
   */
  getContenidoPorNombre(nombre: string): peliculaType[] {
    return this.almacen.filter((item) => item.nombre === nombre);
  }

  /**
   * Get según una fecha.
   * @param fecha fecha a buscar
   * @returns Peliculas
   */
  getContenidoPorFecha(fecha: string): peliculaType[] {
    return this.almacen.filter((item) => item.fecha === fecha);
  }

  /**
   * Get según un presupuesto
   * @param presupuesto presupuesto a buscar
   * @returns Peliculas
   */
  getContenidoPorPresupuesto(presupuesto: number): peliculaType[] {
    return this.almacen.filter((item) => item.presupuesto === presupuesto);
  }

  /**
   * Get según un director
   * @param director director a buscar
   * @returns Peliculas
   */
  getContenidoPorDirector(director: string): peliculaType[] {
    return this.almacen.filter((item) => item.director === director);
  }
}
