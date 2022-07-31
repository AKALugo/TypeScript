import 'mocha';
import {expect} from "chai";
import {isLeapYear} from '../src/ejercicio-1';

describe('isLeapYear function tests', () => {
  it('isLeapYear(1000) returns false', () => {
    expect(isLeapYear(1000)).to.be.equal(false);
  });

  it('isLeapYear(12) returns true', () => {
    expect(isLeapYear(12)).to.be.equal(true);
  });

  it('isLeapYear(1500) returns false', () => {
    expect(isLeapYear(1500)).to.be.equal(false);
  });

  it('isLeapYear(1200) returns true', () => {
    expect(isLeapYear(1200)).to.be.equal(true);
  });
});
