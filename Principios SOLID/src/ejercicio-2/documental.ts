import {BasicStreamableCollection} from "./BasicStreambleCollection";

/**
 * @type datos del documental
 */
export type documentalType = {
  nombre: string; 
  fecha: string;
  capitulo: number;
  temporada: number
};

/**
 * @class Documental
 */
export class Documental extends BasicStreamableCollection<documentalType> {
  constructor(...data: documentalType[]) {
    super(data);
  }

  /**
   * Get según un nombre.
   * @param nombre nombre a buscar
   * @returns Documental
   */
  getContenidoPorNombre(nombre: string): documentalType[] {
    return this.almacen.filter((item) => item.nombre === nombre);
  }

  /**
   * Get según una fecha.
   * @param fecha fecha a buscar
   * @returns Documental
   */
  getContenidoPorFecha(fecha: string): documentalType[] {
    return this.almacen.filter((item) => item.fecha === fecha);
  }

  /**
   * Get según un capitulo
   * @param capitulo capitulo a buscar
   * @returns Documental
   */
  getContenidoPorCapitulo(capitulo: number): documentalType[] {
    return this.almacen.filter((item) => item.capitulo === capitulo);
  }

  /**
   * Get según una temporada
   * @param temporada temporada a buscar
   * @returns Documental
   */
  getContenidoPorTemporada(temporada: number): documentalType[] {
    return this.almacen.filter((item) => item.temporada === temporada);
  }
}
