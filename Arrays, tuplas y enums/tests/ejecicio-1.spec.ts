import 'mocha';
import {expect} from "chai";
import {productTable} from '../src/ejercicio-1';

describe('productTable function tests', () => {
  it('productTable(3) returns [[ 1, 2, 3 ], [ 2, 4, 6 ], [ 3, 6, 9 ]]', () => {
    expect(productTable(3)).to.eql([[1, 2, 3], [2, 4, 6], [3, 6, 9]]);
  });
  it('productTable(1) returns [ [ 1 ] ]', () => {
    expect(productTable(1)).to.eql([[1]]);
  });
  it('productTable(5) returns  [[ 1, 2, 3, 4, 5 ], [ 2, 4, 6, 8, 10 ], [ 3, 6, 9, 12, 15 ], [ 4, 8, 12, 16, 20 ], [ 5, 10, 15, 20, 25 ]]', () => {
    expect(productTable(5)).to.eql([[1, 2, 3, 4, 5], [2, 4, 6, 8, 10], 
      [3, 6, 9, 12, 15], [4, 8, 12, 16, 20], [5, 10, 15, 20, 25]]);
  });
  it('productTable(-3) returns undefined', () => {
    expect(productTable(-3)).to.be.equal(undefined);
  });
  it('productTable(-8) returns undefined', () => {
    expect(productTable(-8)).to.be.equal(undefined);
  });
});
