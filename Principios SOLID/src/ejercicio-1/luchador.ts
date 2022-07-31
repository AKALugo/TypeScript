
/**
 * @type estadísticas.
 */
export type estadisticasBasicasType = [number, number, number, number];

/**
 * @type universos.
 */
export type universoType = ("Pokemon" | "Marvel" | "DC" | "Star Wars" | "Dragon Ball");

/**
 * @class Clase abstracta fighter.
 */
export abstract class Fighter {
  /**
   * Constructor de la clase
   * @param nombre Nombre del luchador
   * @param peso Peso del luchador
   * @param altura Altura del luchador
   * @param estadisticasBasicas estadisticas del luchador
   * @param frase Frase del luchador
   * @param universo Universo del luchador
   */
  constructor(private nombre: string, private peso: number,
      private altura: number, private estadisticasBasicas: 
      estadisticasBasicasType, private frase: string, private universo:
      universoType) {
    if (this.nombre === "") {
      console.log("El nombre no puede estar vacío, nombre por defecto UnKnow.");
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
    if (this.frase === "") {
      console.log("La frase no puede estar vacía, valor por defecto UnKnow");
      this.frase = "UnKnow";
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
  getNombre(): string {
    return this.nombre;
  }

  /**
   * ___Getter del peso___
   * @returns el valor del peso
   */
  getPeso(): number {
    return this.peso;
  }

  /**
   * ___Getter de la altura___
   * @returns el valor de la altura
   */
  getAltura(): number {
    return this.altura;
  }

  /**
   * ___Getter de las estadísticas___
   * @returns las estadísticas.
   */
  getEstadisticas(): estadisticasBasicasType {
    return this.estadisticasBasicas;
  }

  /**
   * Get de la frase
   * @returns la frase
   */
  getFrase(): string {
    return this.frase;
  }

  /**
   * Get del universo
   * @returns el universo
   */
  getUniverso(): string {
    return this.universo;
  }

  /**
   * Set del nombre
   * @param nombre nuevo nombre
   */
  setNombre(nombre: string): void {
    this.nombre = nombre;
  }

  /**
   * Set de la altura.
   * @param altura nueva altura
   */
  setAltura(altura: number): void {
    this.altura = altura;
  }

  /**
   * Set del peso
   * @param peso nuevo peso
   */
  setPeso(peso: number): void {
    this.peso = peso;
  }

  /**
   * Set estadísticas.
   * @param estadisticas nuevas estadísticas
   */
  setEstadisticas(estadisticas: estadisticasBasicasType): void {
    this.estadisticasBasicas = estadisticas;
  }

  /**
   * Set universo.
   * @param universo Nuevo universo
   */
  setUniverso(universo: universoType): void {
    this.universo = universo;
  }

  /**
   * Set frase.
   * @param frase nueva frase
   */
  setFrase(frase: string): void {
    this.frase = frase;
  }
}
