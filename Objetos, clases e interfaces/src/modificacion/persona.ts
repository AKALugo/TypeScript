/**
 * @class Clase que simula una persona.
 */
export class Persona {
  /**
   * ___Constructor de la clase Persona
   * @param nombre nombre de la persona
   * @param apellido apellidos de la persona
   * @param fechaNacimiento fecha de nacimiento de la persona
   * @param genero genero de la persona
   */
  constructor(private nombre: string, private apellido: string, 
    private fechaNacimiento: string, private genero: string) {}

  /**
   * ___Get de nombre___
   * @returns nombre
   */
  getNombre(): string {
    return this.nombre;
  }
  /**
   * ___Set de nombre___
   * @param nombre nuevo nombre
   */
  setNombre(nombre: string): void {
    this.nombre = nombre;
  }
  /**
   * ___Get de Apellidos___
   * @returns Apellido
   */
  getApellidos(): string {
    return this.apellido;
  }
  /**
   * ___Set de apellido___
   * @param apellidos nuevo apellido
   */
  setApellidos(apellidos: string): void {
    this.apellido = apellidos;
  }

  /**
   * ___Get de fechaNacimiento___
   * @returns fechaNacimiento
   */
  getFechaNacimiento(): string {
    return this.fechaNacimiento;
  }
  /**
   * ___Set de fecha___
   * @param fecha nueva fecha
   */
  setFechaNacimiento(fecha: string): void {
    this.fechaNacimiento = fecha;
  }

  /**
   * ___Get de genero___
   * @returns genero
   */
  getGenero(): string {
    return this.genero;
  }
  /**
   * ___Set de genero___
   * @param genero nuevo genero
   */
  setGenero(genero: string): void {
    this.genero = genero;
  }
}
