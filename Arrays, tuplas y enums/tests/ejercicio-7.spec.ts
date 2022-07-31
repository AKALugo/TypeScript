import 'mocha';
import {expect} from "chai";
import {multiplyAll} from '../src/ejercicio-7';

describe('multiplyAll function tests', () => {
  it('multiplyAll([2, 6, 8])(3) returns [6, 18, 24]', () => {
    expect(multiplyAll([2, 6, 8])(3)).to.eql([6, 18, 24]);
  });
  it('multiplyAll([5, 5])(5) returns [25, 25]', () => {
    expect(multiplyAll([5, 5])(5)).to.eql([25, 25]);
  });
});
