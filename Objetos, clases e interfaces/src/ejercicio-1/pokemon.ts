/**
 * @type tipo de dato formado por una tupla de 4 números que almacenaran
 * las estadísticas de los pokemons.
 */
type estadisticasBasicasType = [number, number, number, number];
/**
 * @type tipo de dato formado por una tupla de 4 strings, fuego, hierba,
 * electrico y agua; son los tipos que admitimos para nuestros pokemons.
 */
type tiposType = ("fuego" | "hierba" | "electrico" | "agua");

/**
 * @class Pokemon clase que nos permite instanciar un pokemon con unas
 * características básicas.
 */
export class Pokemon {
  /**
   * ___Método que construye nuestro objeto Pokemon___
   * @param nombre nombre del pokemon.
   * @param peso peso del pokemon.
   * @param altura altura del pokemon.
   * @param tipo tipo del pokemon.
   * @param estadisticasBasicas conjunto de valores que forman las 
   * características de un pokemon.
   */
  constructor(private nombre: string, private peso: number,
              private altura: number, public readonly tipo: tiposType,
              private estadisticasBasicas: estadisticasBasicasType) {
    if (this.nombre === "") {
      console.log("El nombre no puede estar vacío, nombre por defecto UnKonow.");
      this.nombre = "UnKnow";
    }
    if (this.peso < 1) {
      console.log("El valor del peso no puede ser menor a 1, valor por defecto 1");
      this.peso = 1;
    }
    if (this.altura < 1) {
      console.log("El valor del altura no puede ser menor a 1, valor por defecto 1");
      this.altura = 1;
    }
    this.estadisticasBasicas.forEach((element) => {
      if (element < 1) {
        console.log("El valor de las estadísticas no pueden ser menor a 1, valor por defecto 1");
        element = 1;
      }
    });
  }

  /**
   * ___Getter del nombre___
   * @returns el valor del nombre
   */
  getNombre() {
    return this.nombre;
  }

  /**
   * ___Getter del peso___
   * @returns el valor del peso
   */
  getPeso() {
    return this.peso;
  }

  /**
   * ___Getter de la altura___
   * @returns el valor de la altura
   */
  getAltura() {
    return this.altura;
  }

  /**
   * ___Getter de las estadísticas___
   * @returns las estadísticas.
   */
  getEstadisticas() {
    return this.estadisticasBasicas;
  }

  /**
  * ___Método que imprime la informaciónde un pokemon___
  */
  print(): void {
    console.log(`Nombre: ${this.nombre}
Peso: ${this.peso}
Altura: ${this.altura}
Tipo: ${this.tipo}
Estadísticas: Ataque:    ${this.estadisticasBasicas[0]}
              Defensa:   ${this.estadisticasBasicas[1]}
              Velocidad: ${this.estadisticasBasicas[2]}
              Vida:      ${this.estadisticasBasicas[3]}`);
  }
}
