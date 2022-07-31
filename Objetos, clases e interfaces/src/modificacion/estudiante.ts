import {Persona} from "./persona";

/**
 * @class clase que simula un estudiante
 */
export class Estudiante extends Persona {
/**
 * ___Constructor de Estudiante___
 * @param persona objeto persona
 * @param correoInstitucional correo
 * @param carrera carrera que estudiua
 * @param universidad universidad donde estudia
 */
  constructor(persona: Persona,
      public correoInstitucional: string, public carrera: string,
      public universidad: string) {
    super(persona.getNombre(), persona.getApellidos(), 
        persona.getFechaNacimiento(), persona.getGenero());
  }
}
