import {estadisticasBasicasType, universoType, Fighter} from "./luchador";

/**
 * @type tipo de dato formado por una tupla de 4 strings, fuego, hierba,
 * electrico y agua; son los tipos que admitimos para nuestros pokemons.
 */
 type tiposType = ("fuego" | "hierba" | "electrico" | "agua");

/**
 * @class clase Pokemon.
 */
export class Pokemon extends Fighter {
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
      universo: universoType, private tipo: tiposType) {
    super(nombre, peso, altura, estadisticasBasicas, frase, universo);
  }

  /**
   * get del equipo
   * @returns El quipo
   */
  getTipo(): tiposType {
    return this.tipo;
  }

  /**
   * set del equipo
   * @param equipo equipo nuevo
   */
  setTipo(tipo: tiposType): void {
    this.tipo = tipo;
  }
}

/**
 * @class Clase PokemonImprimir.
 */
export class PokemonImprimir {
  /**
   * Constructor de la clase
   * @param objeto Objeto Pokemon
   */
  constructor(private objeto: Pokemon) {}
  
  /**
   * Método que imprime el objeto
   * @returns el objeto en texto
   */
  print(): string {
    console.log(`Nombre: ${this.objeto.getNombre()}
      Peso: ${this.objeto.getPeso()}
      Altura: ${this.objeto.getAltura()}
      Tipo: ${this.objeto.getTipo()}
      Estadísticas: Ataque:    ${this.objeto.getEstadisticas()[0]}
                    Defensa:   ${this.objeto.getEstadisticas()[1]}
                    Velocidad: ${this.objeto.getEstadisticas()[2]}
                    Vida:      ${this.objeto.getEstadisticas()[3]}`);
                    
    let salida: string = `Nombre: ${this.objeto.getNombre()} Peso: ${this.objeto.getPeso()} Altura: ${this.objeto.getAltura()} `;
    salida += `Equipo: ${this.objeto.getTipo()} Estadísticas: Ataque: ${this.objeto.getEstadisticas()[0]} `;
    salida += `Defensa: ${this.objeto.getEstadisticas()[1]} Velocidad: ${this.objeto.getEstadisticas()[2]} `;
    salida += `Vida: ${this.objeto.getEstadisticas()[3]} `;
  
    return salida;
  }
}

const pikachu = new Pokemon("Pikachu", 20, 1, [30, 30, 30, 300], "Pika Pika Pika", "Pokemon", "electrico");
const pikachuImprimir = new PokemonImprimir(pikachu);
console.log(pikachuImprimir.print());
