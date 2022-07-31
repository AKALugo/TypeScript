import 'mocha';
import {expect} from "chai";
import {manhattan} from '../src/ejercicio-10';

describe('manhattan function tests', () => {
  it('manhattan("1,3", "4,10") returns 10)', () => {
    expect(manhattan("1,3", "4,10")).to.be.equal(10);
  });

  it('manhattan("-1,3,7", "-5,8,7") returns 9', () => {
    expect(manhattan("-1,3,7", "-5,8,7")).to.be.equal(9);
  });

  it('manhattan("1,1,1", "1,1,1") returns 0', () => {
    expect(manhattan("1,1,1", "1,1,1")).to.be.equal(0);
  });

  it('manhattan("1, 5, 10", "6,6,6") returns 10', () => {
    expect(manhattan("1, 5, 10", "6,6,6")).to.be.equal(10);
  });
});
