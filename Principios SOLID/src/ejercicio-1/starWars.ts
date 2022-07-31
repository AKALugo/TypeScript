import {estadisticasBasicasType, universoType, Fighter} from "./luchador";

/**
 * @type tipo para los equipos.
 */
export type starWarsTeamType = ("Rebeldes" | "Imperio");

/**
 * @class Clase StarWars.
 */
export class StarWars extends Fighter {
  /**
   * Constructor de la clase
   * @param nombre Nombre del luchador
   * @param peso Peso del luchador
   * @param altura Altura del luchador
   * @param estadisticasBasicas estadisticas del luchador
   * @param frase Frase del luchador
   * @param universo Universo del luchador
   * @param equipo Equipo del luchador.
   */
  constructor(nombre: string, peso: number, altura: number,
      estadisticasBasicas: estadisticasBasicasType, frase: string, 
      universo: universoType, private equipo: starWarsTeamType) {
    super(nombre, peso, altura, estadisticasBasicas, frase, universo);
  }

  /**
   * get del equipo
   * @returns El quipo
   */
  getEquipo(): starWarsTeamType {
    return this.equipo;
  }

  /**
   * set del equipo
   * @param equipo equipo nuevo
   */
  setEquipo(equipo: starWarsTeamType): void {
    this.equipo = equipo;
  }
}

/**
 * @class Clase StarWarsImprimir
 */
export class StarWarsImprimir {
  /**
   * Constructor de la clase
   * @param objeto Objeto StarWars
   */
  constructor(private objeto: StarWars) {}
  
  /**
   * Método que imprime el objeto
   * @returns el objeto en texto
   */
  print(): string {
    console.log(`Nombre: ${this.objeto.getNombre()}
      Peso: ${this.objeto.getPeso()}
      Altura: ${this.objeto.getAltura()}
      Equipo: ${this.objeto.getEquipo()}
      Estadísticas: Ataque:    ${this.objeto.getEstadisticas()[0]}
                    Defensa:   ${this.objeto.getEstadisticas()[1]}
                    Velocidad: ${this.objeto.getEstadisticas()[2]}
                    Vida:      ${this.objeto.getEstadisticas()[3]}`);
                    
    let salida: string = `Nombre: ${this.objeto.getNombre()} Peso: ${this.objeto.getPeso()} Altura: ${this.objeto.getAltura()} `;
    salida += `Equipo: ${this.objeto.getEquipo()} Estadísticas: Ataque: ${this.objeto.getEstadisticas()[0]} `;
    salida += `Defensa: ${this.objeto.getEstadisticas()[1]} Velocidad: ${this.objeto.getEstadisticas()[2]} `;
    salida += `Vida: ${this.objeto.getEstadisticas()[3]} `;
  
    return salida;
  }
}
