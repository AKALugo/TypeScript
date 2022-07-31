import 'mocha';
import {expect} from "chai";
import {Marvel, MarvelImprimir} from "../../src/ejercicio-1/marvel";

const ironMan = new Marvel("Iron Man", 100, 4, [100, 100, 100, 100], "Soy Iron Man", "Marvel", "Iron Man");
const ironManImprimir = new MarvelImprimir(ironMan);

describe('Marvel class tests', () => {
  it('Un Marvel no es null', () => {
    expect(ironMan).not.to.eql(null);
  });
  it('Un Marvel tiene equipo', () => {
    expect(ironMan.getEquipo()).to.eql("Iron Man");
  });
  it('Un Marvel cambia de equipo', () => {
    ironMan.setEquipo("Tanos");
    expect(ironMan.getEquipo()).to.eql("Tanos");
  });
});

describe('MarvelImprimir class tests', () => {
  it('Un MarvelImprimir no es null', () => {
    expect(ironManImprimir).not.to.eql(null);
  });
  it('Un MarvelImprimir imprime', () => {
    expect(ironManImprimir.print()).to.eql("Nombre: Iron Man Peso: 100 Altura: 4 Equipo: Tanos Estadísticas: Ataque: 100 Defensa: 100 Velocidad: 100 Vida: 100 ");
  });
});
