import 'mocha';
import {expect} from "chai";
import {Documental, documentalType} from "../../src/ejercicio-2/documental";

let patos: documentalType = {
  nombre: "Patos",
  fecha: "11-11-11",
  capitulo: 30,
  temporada: 2,
}

let gatos: documentalType = {
  nombre: "Gatos",
  fecha: "10-10-01",
  capitulo: 10,
  temporada: 2,
}

let perros: documentalType = {
  nombre: "Perros",
  fecha: "01-02-03",
  capitulo: 5,
  temporada: 3,
}

const documental = new Documental(patos, gatos);

describe('Documental class tests', () => {
  it('Un Documental no es null', () => {
    expect(documental).not.to.eql(null);
  });
  it('Un Documental tiene un método para ver la cantidad', () => {
    expect(documental.getNumeroItems()).to.eql(2);
  });
  it('Un Documental tiene un método para añadir contenido', () => {
    expect(documental.addContenido(perros)).to.eql(true);
  });
  it('Un Documental tiene un método para buscar por nombre', () => {
    expect(documental.getContenidoPorNombre("Perros")).to.eql([perros]);
  });
  it('Un Documental tiene un método para buscar por fecha', () => {
    expect(documental.getContenidoPorFecha("11-11-11")).to.eql([patos]);
  });
  it('Un Documental tiene un método para buscar por capitulo', () => {
    expect(documental.getContenidoPorCapitulo(10)).to.eql([gatos]);
  });
  it('Un Documental tiene un método para buscar por temporada', () => {
    expect(documental.getContenidoPorTemporada(3)).to.eql([perros]);
  });
});