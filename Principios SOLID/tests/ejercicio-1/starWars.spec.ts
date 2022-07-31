import 'mocha';
import {expect} from "chai";
import {StarWars, StarWarsImprimir} from "../../src/ejercicio-1/starWars";

const hanSolo = new StarWars("Han Solo", 100, 4, [100, 100, 100, 100], "Mi nave está guapa", "Star Wars", "Rebeldes");
const hanSoloImprimir = new StarWarsImprimir(hanSolo);

describe('StarWars class tests', () => {
  it('Un StarWars no es null', () => {
    expect(hanSolo).not.to.eql(null);
  });
  it('Un StarWars tiene equipo', () => {
    expect(hanSolo.getEquipo()).to.eql("Rebeldes");
  });
  it('Un StarWars cambia de equipo', () => {
    hanSolo.setEquipo("Imperio");
    expect(hanSolo.getEquipo()).to.eql("Imperio");
  });
});

describe('StarWarsImprimir class tests', () => {
  it('Un StarWarsImprimir no es null', () => {
    expect(hanSoloImprimir).not.to.eql(null);
  });
  it('Un StarWarsImprimir imprime', () => {
    expect(hanSoloImprimir.print()).to.eql("Nombre: Han Solo Peso: 100 Altura: 4 Equipo: Imperio Estadísticas: Ataque: 100 Defensa: 100 Velocidad: 100 Vida: 100 ");
  });
});
