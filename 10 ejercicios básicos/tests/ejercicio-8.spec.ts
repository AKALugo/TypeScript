import 'mocha';
import {expect} from "chai";
import {pokemonBattle} from '../src/ejercicio-8';

describe('pokemonBattle function tests', () => {
  it('pokemonBattle("agua", "fuego", 100, 50) returns 200)', () => {
    expect(pokemonBattle("agua", "fuego", 100, 50)).to.be.equal(200);
  });

  it('pokemonBattle("electrico", "fuego", 75, 100) returns 37.5', () => {
    expect(pokemonBattle("electrico", "fuego", 75, 100)).to.be.equal(37.5);
  });

  it('pokemonBattle("hierba", "agua", 80, 80) returns 100', () => {
    expect(pokemonBattle("hierba", "agua", 80, 80)).to.be.equal(100);
  });

  it('pokemonBattle("fuego","agua", 10, 200) returns 1.25', () => {
    expect(pokemonBattle("fuego", "agua", 10, 200)).to.be.equal(1.25);
  });
});
