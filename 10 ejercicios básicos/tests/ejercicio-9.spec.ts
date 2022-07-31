import 'mocha';
import {expect} from "chai";
import {romanToDecimal, decimalToRoman} from '../src/ejercicio-9';

describe('romanToDecimal function tests', () => {
  it('romanToDecimal(MDLXIX) return 1569', () => {
    expect(romanToDecimal("MDLXIX")).to.be.equal(1569);
  });

  it('romanToDecimal(MMCCCXCI) return 2391', () => {
    expect(romanToDecimal("MMCCCXCI")).to.be.equal(2391);
  });

  it('romanToDecimal(CMLXXXII) return 982', () => {
    expect(romanToDecimal("CMLXXXII")).to.be.equal(982);
  });
});

describe('decimalToRoman function tests', () => {
  it('decimalToRoman(1569) returns MDLXIX', () => {
    expect(decimalToRoman(1569)).to.be.equal("MDLXIX");
  });
  
  it('decimalToRoman(2391) returns MMCCCXCI', () => {
    expect(decimalToRoman(2391)).to.be.equal("MMCCCXCI");
  });
  
  it('decimalToRoman(982) returns CMLXXXII', () => {
    expect(decimalToRoman(982)).to.be.equal("CMLXXXII");
  });
});
