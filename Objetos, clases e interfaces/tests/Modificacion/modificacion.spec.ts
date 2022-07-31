import 'mocha';
import {expect} from "chai";
import {Asignatura} from "../../src/modificacion/asignatura";
import {Estudiante} from "../../src/modificacion/estudiante";
import {Profesor} from "../../src/modificacion/profesor";
import {Persona} from "../../src/modificacion/persona";

const persona1 = new Persona("Pedro", "Morales", "24-04-2001", "Masculino");
const persona2 = new Persona("Sandro", "Martines", "01-12-2001", "Masculino");
const persona3 = new Persona("Sandra", "Lugo", "12-07-1980", "Femenino");
const persona4 = new Persona("Lucas", "Gabino", "19-01-1975", "Masculino");

describe('Persona class tests', () => {
  it('Una Persona no es null', () => {
    expect(persona1).not.to.eql(null);
    expect(persona2).not.to.eql(null);
    expect(persona3).not.to.eql(null);
    expect(persona4).not.to.eql(null);
  });
  it('Una Persona tiene un método para mostrar el nombre', () => {
    expect(persona1.getNombre()).to.eql("Pedro");
    expect(persona2.getNombre()).to.eql("Sandro");
  });
  it('Una Persona tiene un método para mostrar los apellidos', () => {
    expect(persona1.getApellidos()).to.eql("Morales");
    expect(persona2.getApellidos()).to.eql("Martines");
  });
  it('Una Persona tiene un método para mostrar la fecha de nacimiento', () => {
    expect(persona1.getFechaNacimiento()).to.eql("24-04-2001");
    expect(persona1.getGenero()).to.eql("Masculino");
    expect(persona3.getGenero()).to.eql("Femenino");
  });
  it('Una Persona tiene un método para cambiar el nombre', () => {
    persona1.setNombre("Alejandro");
    persona2.setNombre("Mateo");
    expect(persona1.getNombre()).to.eql("Alejandro");
    expect(persona2.getNombre()).to.eql("Mateo");
  });
  it('Una Persona tiene un método para cambiar los apellidos', () => {
    persona1.setApellidos("Fumero");
    persona2.setApellidos("Gomez");
    expect(persona1.getApellidos()).to.eql("Fumero");
    expect(persona2.getApellidos()).to.eql("Gomez");
  });
  it('Una Persona tiene un método para cambiar la fecha de nacimiento', () => {
    persona1.setFechaNacimiento("01-01-2001");
    persona2.setFechaNacimiento("06-06-2001");
    expect(persona1.getFechaNacimiento()).to.eql("01-01-2001");
    expect(persona2.getFechaNacimiento()).to.eql("06-06-2001");
  });
  it('Una Persona tiene un método para cambiar el genero', () => {
    persona1.setGenero("Femenino");
    persona2.setGenero("Femenino");
    expect(persona1.getGenero()).to.eql("Femenino");
    expect(persona2.getGenero()).to.eql("Femenino");
  });
});

const alu1 = new Estudiante(persona1, "alu0101329185@ull.edu.es",
    "Informatica", "La Laguna");
const alu2 = new Estudiante(persona2, "alu0101329180@ull.edu.es",
    "Mecanica", "La Laguna");

describe('Estudiante class tests', () => {
  it('Un Estudiante no es null', () => {
    expect(alu1).not.to.eql(null);
    expect(alu2).not.to.eql(null);
  });
  it('Un Estudiante tiene un correo institucional', () => {
    expect(alu1.correoInstitucional).to.eql("alu0101329185@ull.edu.es");
    expect(alu2.correoInstitucional).to.eql("alu0101329180@ull.edu.es");
  });
  it('Un Estudiante estudia una carrera', () => {
    expect(alu1.carrera).to.eql("Informatica");
    expect(alu2.carrera).to.eql("Mecanica");
  });
  it('Un Estudiante estudia en una Universidad', () => {
    expect(alu1.universidad).to.eql("La Laguna");
    expect(alu2.universidad).to.eql("La Laguna");
  });
});

const prof1 = new Profesor(persona3, "pepe@ull.es", ["Informatica", "Mecanica"], "La Laguna", 20);
const prof2 = new Profesor(persona4, "ramon@ull.es", ["Quimica", "Fisica"], "La Laguna", 30);

describe('Profesor class tests', () => {
  it('Un Profesor no es null', () => {
    expect(prof1).not.to.eql(null);
    expect(prof2).not.to.eql(null);
  });
  it('Un Profesor tiene un correo institucional', () => {
    expect(prof1.correoInstitucional).to.eql("pepe@ull.es");
    expect(prof2.correoInstitucional).to.eql("ramon@ull.es");
  });
  it('Un Profesor tiene unos estudios', () => {
    expect(prof1.estudios).to.eql(["Informatica", "Mecanica"]);
    expect(prof2.estudios).to.eql(["Quimica", "Fisica"]);
  });
  it('Un Profesor trabaja en algun lugar', () => {
    expect(prof1.universidadTrabajo).to.eql("La Laguna");
    expect(prof2.universidadTrabajo).to.eql("La Laguna");
  });
  it('Un Profesor ha impartido clase una serie de años', () => {
    expect(prof1.tiempoClase).to.eql(20);
    expect(prof2.tiempoClase).to.eql(30);
  });
});

const asig = new Asignatura("Matematicas", [alu1, alu2], [prof1, prof2]);

describe('Asignatura class tests', () => {
  it('Una Asignatura no es null', () => {
    expect(asig).not.to.eql(null);
  });
  it('Una Asignatura tiene un metodo para mostar los profesores', () => {
    expect(asig.printProfesor()).to.eql("Sandra, Lucas");
  });
  it('Una Asignatura tiene un metodo para mostar los alumnos', () => {
    expect(asig.printAlumno()).to.eql("Pedro, Sandro");
  });
});
