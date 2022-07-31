import 'mocha';
import {expect} from "chai";
import {Combat} from "../../src/ejercicio-1/combate";
import {Pokedex} from "../../src/ejercicio-1/pokedex";
import {Pokemon} from "../../src/ejercicio-1/pokemon";

const charmander = new Pokemon("charmander", 10, 20, "fuego", 
    [100, 100, 100, 200]);
const bulbasur = new Pokemon("bulbasur", 5, 30, "hierba", 
    [50, 200, 200, 300]);
const bulbasurShiny = new Pokemon("bulbasur", 1000, 3000, "hierba", 
    [50, 200, 200, 300]);

describe('Pokemon class tests', () => {
  it('Un Pokemon no es null', () => {
    expect(charmander).not.to.eql(null);
    expect(bulbasur).not.to.eql(null);
    expect(bulbasurShiny).not.to.eql(null);
  });
  it('Pokemon tiene un atributo nombre', () => {
    expect(charmander.getNombre()).to.eql("charmander");
    expect(bulbasur.getNombre()).to.eql("bulbasur");
    expect(bulbasurShiny.getNombre()).to.eql("bulbasur");
  });
  it('Pokemon tiene un atributo peso', () => {
    expect(charmander.getPeso()).to.eql(10);
    expect(bulbasur.getPeso()).to.eql(5);
    expect(bulbasurShiny.getPeso()).to.eql(1000);
  });
  it('Pokemon tiene un atributo altura', () => {
    expect(charmander.getAltura()).to.eql(20);
    expect(bulbasur.getAltura()).to.eql(30);
    expect(bulbasurShiny.getAltura()).to.eql(3000);
  });
  it('Pokemon tiene un atributo tipo', () => {
    expect(charmander.tipo).to.eql("fuego");
    expect(bulbasur.tipo).to.eql("hierba");
    expect(bulbasurShiny.tipo).to.eql("hierba");
  });
  it('Pokemon tiene un atributo estadísticas', () => {
    expect(charmander.getEstadisticas()).to.eql([100, 100, 100, 200]);
    expect(bulbasur.getEstadisticas()).to.eql([50, 200, 200, 300]);
    expect(bulbasurShiny.getEstadisticas()).to.eql([50, 200, 200, 300]);
  });
});

const poke = new Pokedex(charmander, bulbasur);

describe('Pokedex class tests', () => {
  it('Una Pokedex no es null', () => {
    expect(poke).not.to.eql(null);
  });
  it('Una Pokedex tiene un método para añadir pokemons', () => {
    expect(poke.addPokemon(charmander)).to.eql(false);
    expect(poke.addPokemon(bulbasurShiny)).to.eql(true);
  });
});

const combate = new Combat(charmander, bulbasur);
combate.start();

describe('Combate class tests', () => {
  it('Un combate no es null', () => {
    expect(combate).not.to.eql(null);
  });
  it('Un combate tiene un método para simular una batalla', () => {
    expect(combate.start()).to.eql("charmander");
  });
});
