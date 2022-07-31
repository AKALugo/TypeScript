import 'mocha';
import {expect} from "chai";
import {ordenDescendente} from '../src/ejercicio-5';

describe('ordenDescendente function tests', () => {
  it('ordenDescendente(54192) returns 95421)', () => {
    expect(ordenDescendente(54192)).to.be.equal(95421);
  });

  it('ordenDescendente(145263) returns 654321', () => {
    expect(ordenDescendente(145263)).to.be.equal(654321);
  });

  it('ordenDescendente(123456789) returns 987654321', () => {
    expect(ordenDescendente(123456789)).to.be.equal(987654321);
  });

  it('ordenDescendente(42145) returns 54421', () => {
    expect(ordenDescendente(42145)).to.be.equal(54421);
  });
});
