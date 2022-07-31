import {estadisticasBasicasType, universoType, Fighter} from "./luchador";

/**
 * @type tipo para los equipos.
 */
export type dragonBallTeamType = ("Goku" | "Freezer");

/**
 * @class Clase DragonBall
 */
export class DragonBall extends Fighter {
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
      universo: universoType, private equipo: dragonBallTeamType) {
    super(nombre, peso, altura, estadisticasBasicas, frase, universo);
  }

  /**
   * get del equipo
   * @returns El quipo
   */
  getEquipo(): dragonBallTeamType {
    return this.equipo;
  }

  /**
   * set del equipo
   * @param equipo equipo nuevo
   */
  setEquipo(equipo: dragonBallTeamType): void {
    this.equipo = equipo;
  }
}

/**
 * @class Clase DragonBallImprimir
 */
export class DragonBallImprimir {
  /**
   * Constructor de la clase
   * @param objeto Objeto DragonBall
   */
  constructor(private objeto: DragonBall) {}

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
  
const goku = new DragonBall("Goku", 100, 4, [100, 100, 100, 100], "Me pican los cocos", "Dragon Ball", "Goku");
const gokuImprimir = new DragonBallImprimir(goku);
console.log(gokuImprimir.print());
