import 'mocha';
import {expect} from "chai";
import {decodeResistor} from '../src/ejercicio-3';

describe('decodeResistor function tests', () => {
  enum color {Negro, Marron, Rojo, Naranja, Amarillo, Verde, Azul, 
    Violeta, Gris, Blanco};

  it('decodeResistor("Verde", "Negro", "Azul") returns 50', () => {
    expect(decodeResistor(color.Verde, color.Negro, color.Azul)).to.eql(50);
  });
  it('decodeResistor("Amarillo", "Amarillo") returns 44', () => {
    expect(decodeResistor(color.Amarillo, color.Amarillo)).to.eql(44);
  });
});
