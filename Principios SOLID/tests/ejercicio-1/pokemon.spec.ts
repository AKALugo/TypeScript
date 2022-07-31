import 'mocha';
import {expect} from "chai";
import {Pokemon, PokemonImprimir} from "../../src/ejercicio-1/pokemon";

const pikachu = new Pokemon("Pikachu", 20, 1, [30, 30, 30, 300], "Pika Pika Pika", "Pokemon", "electrico");
const pikachuImprimir = new PokemonImprimir(pikachu);

describe('Pokemon class tests', () => {
  it('Un Pokemon no es null', () => {
    expect(pikachu).not.to.eql(null);
  });
  it('Un Pokemon tiene equipo', () => {
    expect(pikachu.getTipo()).to.eql("electrico");
  });
  it('Un Pokemon cambia de equipo', () => {
    pikachu.setTipo("agua");
    expect(pikachu.getTipo()).to.eql("agua");
  });
});

describe('PokemonImprimir class tests', () => {
  it('Un PokemonImprimir no es null', () => {
    expect(pikachuImprimir).not.to.eql(null);
  });
  it('Un PokemonImprimir imprime', () => {
    expect(pikachuImprimir.print()).to.eql("Nombre: Pikachu Peso: 20 Altura: 1 Equipo: agua Estadísticas: Ataque: 30 Defensa: 30 Velocidad: 30 Vida: 300 ");
  });
});
