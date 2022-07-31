import {Persona} from "./persona";

/**
 * @class Profesor
 */
export class Profesor extends Persona {
  /**
     * ___Constructor de profesro___
     * @param persona Objeto persona
     * @param correoInstitucional correo
     * @param estudios estudios
     * @param universidadTrabajo lugar de trabajo
     * @param tiempoClase años que ha dado clase
     */
  constructor(persona: Persona,
      public correoInstitucional: string, public estudios: string[],
      public universidadTrabajo: string, public tiempoClase: number) {
    super(persona.getNombre(), persona.getApellidos(), 
        persona.getFechaNacimiento(), persona.getGenero());
  }
}
