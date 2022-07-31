import 'mocha';
import {expect} from "chai";
import {diana} from '../src/ejercicio-7';

describe('diana function tests', () => {
  it('diana(2, 1, 1) returns 2)', () => {
    expect(diana(2, 1, 1)).to.be.equal(2);
  });

  it('diana(5, 10, 3) returns 92', () => {
    expect(diana(5, 10, 3)).to.be.equal(92);
  });

  it('diana(3, 3, 3) returns 27', () => {
    expect(diana(3, 3, 3)).to.be.equal(27);
  });

  it('diana(12,11,10) returns 44417045', () => {
    expect(diana(12, 11, 10)).to.be.equal(44417045);
  });
});
