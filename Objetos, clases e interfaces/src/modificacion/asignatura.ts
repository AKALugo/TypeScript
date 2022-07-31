import {Estudiante} from "./estudiante";
import {Profesor} from "./profesor";

/**
 * @class Asignatura
 */
export class Asignatura {
  constructor(public nombreAsignatura: string, public estudiantes: Estudiante[], 
    public profesores: Profesor[]) {}

  /**
 * ___Metodo que devuleve los profesores con cierto formato___
 * @returns profesores.
 */
  printProfesor(): string {
    let auxProfe: string = "";
    console.log(`Los profesores que imparten la asignatura ${this.nombreAsignatura} son:`);
    this.profesores.forEach((pro: Profesor) => {
      auxProfe += pro.getNombre() + ", ";
    });
    console.log(auxProfe.substring(0, auxProfe.length - 2));
    return auxProfe.substring(0, auxProfe.length - 2);
  }
  /**
 * ___Metodo que devuleve los alumnos con cierto formato___
 * @returns alumnos.
 */
  printAlumno(): string {
    let auxAlum: string = "";
    console.log(`Los alumnos que cursan la asignatura ${this.nombreAsignatura} son:`);
    this.estudiantes.forEach((est: Estudiante) => {
      auxAlum += est.getNombre() + ", ";
    });
    console.log(auxAlum.substring(0, auxAlum.length - 2));
    return auxAlum.substring(0, auxAlum.length - 2);
  }
}
