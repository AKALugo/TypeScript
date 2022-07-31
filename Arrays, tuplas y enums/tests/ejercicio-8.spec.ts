import 'mocha';
import {expect} from "chai";
import {suma, resta, mult, eucli} from '../src/ejercicio-8';

describe('type Point = [number, number] functions tests', () => {
  it('suma([3, 5], [5, 3]) returns [8, 8]', () => {
    expect(suma([3, 5], [5, 3])).to.eql([8, 8]);
  });
  it('resta([3, 5], [5, 3]) returns [0, 0]', () => {
    expect(resta([3, 5], [5, 3])).to.eql([-2, 2]);
  });
  it('mult([3, 5], 2) returns [6, 10]', () => {
    expect(mult([3, 5], 2)).to.eql([6, 10]);
  });
  it('eucli([3, 5], [4, 8]) returns 3.1622776601683795', () => {
    expect(eucli([3, 5], [4, 8])).to.eql(3.1622776601683795);
  });
});