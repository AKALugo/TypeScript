import 'mocha';
import {expect} from "chai";
import {Serie, serieType} from "../../src/ejercicio-2/series";

let patos: serieType = {
  titulo: "Patos",
  fecha: "11-11-11",
  genero: "anime",
  capitulo: 30,
  temporada: 2,
}

let gatos: serieType = {
  titulo: "Gatos",
  fecha: "10-10-01",
  genero: "aventura",
  capitulo: 10,
  temporada: 2,
}

let perros: serieType = {
  titulo: "Perros",
  fecha: "01-02-03",
  genero: "arcade",
  capitulo: 5,
  temporada: 3,
}

const serie = new Serie(patos, gatos);

describe('serie class tests', () => {
  it('Un serie no es null', () => {
    expect(serie).not.to.eql(null);
  });
  it('Un serie tiene un método para ver la cantidad', () => {
    expect(serie.getNumeroItems()).to.eql(2);
  });
  it('Un serie tiene un método para añadir contenido', () => {
    expect(serie.addContenido(perros)).to.eql(true);
  });
  it('Un serie tiene un método para buscar por nombre', () => {
    expect(serie.getContenidoPorNombre("Perros")).to.eql([perros]);
  });
  it('Un serie tiene un método para buscar por fecha', () => {
    expect(serie.getContenidoPorFecha("11-11-11")).to.eql([patos]);
  });
  it('Un serie tiene un método para buscar por capitulo', () => {
    expect(serie.getContenidoPorCapitulo(10)).to.eql([gatos]);
  });
  it('Un serie tiene un método para buscar por temporada', () => {
    expect(serie.getContenidoPorTemporada(3)).to.eql([perros]);
  });
  it('Un serie tiene un método para buscar por genero', () => {
    expect(serie.getContenidoPorGenero("anime")).to.eql([patos]);
  });
});