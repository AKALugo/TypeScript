import 'mocha';
import {expect} from "chai";
import {Pelicula, peliculaType} from "../../src/ejercicio-2/pelicula";

let patos: peliculaType = {
  nombre: "Patos",
  fecha: "11-11-11",
  presupuesto: 30,
  director: "Pepe",
}

let gatos: peliculaType = {
  nombre: "Gatos",
  fecha: "10-10-01",
  presupuesto: 10,
  director: "Ramon",
}

let perros: peliculaType = {
  nombre: "Perros",
  fecha: "01-02-03",
  presupuesto: 5,
  director: "Pepe",
}

const pelicula = new Pelicula(patos, gatos);

describe('Pelicula class tests', () => {
  it('Un Pelicula no es null', () => {
    expect(pelicula).not.to.eql(null);
  });
  it('Un Pelicula tiene un método para ver la cantidad', () => {
    expect(pelicula.getNumeroItems()).to.eql(2);
  });
  it('Un Pelicula tiene un método para añadir contenido', () => {
    expect(pelicula.addContenido(perros)).to.eql(true);
  });
  it('Un Pelicula tiene un método para buscar por nombre', () => {
    expect(pelicula.getContenidoPorNombre("Perros")).to.eql([perros]);
  });
  it('Un Pelicula tiene un método para buscar por fecha', () => {
    expect(pelicula.getContenidoPorFecha("11-11-11")).to.eql([patos]);
  });
  it('Un Pelicula tiene un método para buscar por presupuesto', () => {
    expect(pelicula.getContenidoPorPresupuesto(10)).to.eql([gatos]);
  });
  it('Un Pelicula tiene un método para buscar por Director', () => {
    expect(pelicula.getContenidoPorDirector("Pepe")).to.eql([patos, perros]);
  });
});