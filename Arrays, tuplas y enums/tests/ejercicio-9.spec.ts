import 'mocha';
import {expect} from "chai";
import {suma, resta, mult, eucli} from '../src/ejercicio-9';

describe('type Point = number[]; functions tests', () => {
  it('suma([3, 5, 12], [5, 3, -4]) returns [8, 8, 8]', () => {
    expect(suma([3, 5, 12], [5, 3, -4])).to.eql([8, 8, 8]);
  });
  it('suma([12], [5, 3, -4]) returns undefined', () => {
    expect(suma([12, 12, 12, 12], [5, 3, -4])).to.eql(undefined);
  });
  it('resta([3, 5, 0, 5], [5, 3, 0]) returns undefined', () => {
    expect(resta([3, 5, 0, 5], [5, 3, 0])).to.eql(undefined);
  });
  it('mult([3, 5, 1], 2) returns [6, 10, 2]', () => {
    expect(mult([3, 5, 1], 2)).to.eql([6, 10, 2]);
  });
  it('mult([3, 5, 1, 8, 4], 2) returns [6, 10, 2, 16, 8]', () => {
    expect(mult([3, 5, 1, 8, 4], 2)).to.eql([6, 10, 2, 16, 8]);
  });
  it('eucli([3, 5, 3], [4, 8, 4]) returns 3.3166247903554', () => {
    expect(eucli([3, 5, 3], [4, 8, 4])).to.eql(3.3166247903554);
  });
});