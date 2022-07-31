import 'mocha';
import {expect} from "chai";
import {decimalToFactorial, factorialToDecimal} from '../src/ejercicio-2';

describe('decimalToFactorial function tests', () => {
  it('decimalToFactorial(1000) return 1212200', () => {
    expect(decimalToFactorial(1000)).to.be.equal("1212200");
  });

  it('decimalToFactorial(12) return 2000', () => {
    expect(decimalToFactorial(12)).to.be.equal("2000");
  });

  it('decimalToFactorial(1500) return 2022000', () => {
    expect(decimalToFactorial(1500)).to.be.equal("2022000");
  });

  it('decimalToFactorial(463) return 341010', () => {
    expect(decimalToFactorial(463)).to.be.equal("341010");
  });
});

describe('factorialToDecimal function tests', () => {
  it('factorialToDecimal("1212200") returns 1000', () => {
    expect(factorialToDecimal("1212200")).to.be.equal(1000);
  });
  
  it('factorialToDecimal("2000") returns 12', () => {
    expect(factorialToDecimal("2000")).to.be.equal(12);
  });
  
  it('factorialToDecimal("2022000") returns 1500', () => {
    expect(factorialToDecimal("2022000")).to.be.equal(1500);
  });
  
  it('factorialToDecimal("341010") returns 1200', () => {
    expect(factorialToDecimal("341010")).to.be.equal(463);
  });
});
