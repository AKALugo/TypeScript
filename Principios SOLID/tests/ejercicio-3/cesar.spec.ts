import 'mocha';
import {expect} from "chai";
import {Cifrar} from "../../src/ejercicio-3/cifrar";
import {Descifrar} from "../../src/ejercicio-3/descifrar";

const cifrar = new Cifrar("ABCDEFGHIJKLMNÑOPQRSTUVWXYZ", "CLAVECLAVECLAVPECLAV", "HOLAESTOESUNAP?RUEBA");

const descifrar = new Descifrar("ABCDEFGHIJKLMNÑOPQRSTUVWXYZ", "CLAVECLAVECLAVPE", "JZLVIUEOZWWXAL?VWOBV");


describe('Cifrar class tests', () => {
  it('Un Cifrar no es null', () => {
    expect(cifrar).not.to.eql(null);
  });
  it('Un Cifrar tiene un metodo que cifra', () => {
    expect(cifrar.operacion()).to.eql("JZLVIUEOZWWXAL?VWOBV");
  });
});

describe('Descifrar class tests', () => {
  it('Un Descifrar no es null', () => {
    expect(descifrar).not.to.eql(null);
  });
  it('Un Descifrar tiene un metodo que descifra', () => {
    expect(descifrar.operacion()).to.eql("HOLAESTOESUNAP?RUEBA");
  });
});