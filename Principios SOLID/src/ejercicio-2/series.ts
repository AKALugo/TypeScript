import {BasicStreamableCollection} from "./BasicStreambleCollection";

/**
 * @type Datos de las series.
 */
export type serieType = {
  titulo: string;
  fecha: string;
  genero: string;
  capitulo: number;
  temporada: number
};

/**
 * @class Serie
 */
export class Serie extends BasicStreamableCollection<serieType> {
  /**
   * constructor.
   * @param data alamcen de datos
   */
  constructor(...data: serieType[]) {
    super(data);
  }

  /**
   * Get según un nombre.
   * @param nombre nombre a buscar
   * @returns Series.
   */
  getContenidoPorNombre(nombre: string): serieType[] {
    return this.almacen.filter((item) => item.titulo === nombre);
  }

  /**
   * Get según una fecha.
   * @param fecha fecha a buscar
   * @returns Series
   */
  getContenidoPorFecha(fecha: string): serieType[] {
    return this.almacen.filter((item) => item.fecha === fecha);
  }

  /**
   * Get según un género
   * @param genero genero a buscar
   * @returns Series
   */
  getContenidoPorGenero(genero: string): serieType[] {
    return this.almacen.filter((item) => item.genero === genero);
  }

  /**
   * Get según un capítulo.
   * @param capitulo capitulo a buscar
   * @returns Series
   */
  getContenidoPorCapitulo(capitulo: number): serieType[] {
    return this.almacen.filter((item) => item.capitulo === capitulo);
  }

  /**
   * Get según una temporada.
   * @param temporada temporada a buscar
   * @returns Series
   */
  getContenidoPorTemporada(temporada: number): serieType[] {
    return this.almacen.filter((item) => item.temporada === temporada);
  }
}
