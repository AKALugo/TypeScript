import 'mocha';
import {expect} from "chai";
import {DC, DCImprimir} from "../../src/ejercicio-1/dc";

const superMan = new DC("SuperMan", 100, 4, [100, 100, 100, 100], "Soy SuperMan", "DC", "Liga de la justicia");
const superManImprimir = new DCImprimir(superMan);

describe('DC class tests', () => {
  it('Un DC no es null', () => {
    expect(superMan).not.to.eql(null);
  });
  it('Un DC tiene equipo', () => {
    expect(superMan.getEquipo()).to.eql("Liga de la justicia");
  });
  it('Un DC cambia de equipo', () => {
    superMan.setEquipo("Teen Titans");
    expect(superMan.getEquipo()).to.eql("Teen Titans");
  });
});

describe('DCImprimir class tests', () => {
  it('Un DCImprimir no es null', () => {
    expect(superManImprimir).not.to.eql(null);
  });
  it('Un DCImprimir imprime', () => {
    expect(superManImprimir.print()).to.eql("Nombre: SuperMan Peso: 100 Altura: 4 Equipo: Teen Titans Estadísticas: Ataque: 100 Defensa: 100 Velocidad: 100 Vida: 100 ");
  });
});
