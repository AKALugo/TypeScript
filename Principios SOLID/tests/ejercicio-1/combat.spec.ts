import 'mocha';
import {expect} from "chai";
import {Combat} from "../../src/ejercicio-1/combat";
import {Marvel} from '../../src/ejercicio-1/marvel';
import {Pokemon} from '../../src/ejercicio-1/pokemon';

const IronMan = new Marvel("Iron Man", 1000, 4, [50, 100, 50, 100], "Que bonita mi armadura", "Marvel", "Iron Man");
const pikachu = new Pokemon("Pikachu", 20, 1, [30, 30, 30, 300], "Pika Pika Pika", "Pokemon", "electrico");

const combate = new Combat(pikachu, IronMan);

describe('Comabt class tests', () => {
  it('Un Comabt no es null', () => {
    expect(combate).not.to.eql(null);
  });
  it('Un Comabt tiene un método que simula una batalla', () => {
    expect(combate.start()).to.eql("Iron Man");
  });
});