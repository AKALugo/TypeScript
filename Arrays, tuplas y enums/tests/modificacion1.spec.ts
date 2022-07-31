import 'mocha';
import {expect} from "chai";
import {mediaFilter} from '../src/modificacion1';

describe('mediaFilter function tests', () => {
  it('mediaFilter([]) returns undefined', () => {
    expect(mediaFilter([])).to.eql(undefined);
  });
  it('mediaFilter([[1,2,3], [1,2,3], [1,2,4,3]]) returns undefined', () => {
    expect(mediaFilter([[1,2,3], [1,2,3], [1,2,4,3]])).to.eql(undefined);
  });
  it('mediaFilter([[1,2], [2,3]]) returns undefined', () => {
    expect(mediaFilter([[1,2,3], [1,2,3], [1,2,300]])).to.eql(undefined);
  });
  it('mediaFilter([[1,2,3], [1,2,3],[1,2,3]]) returns [[2, 2, 2], [2, 2, 2], [2, 2, 2]]', () => {
    expect(mediaFilter([[1,2,3], [1,2,3],[1,2,3]])).to.eql([[2, 2, 2], [2, 2, 2], [2, 2, 2]]);
  });
  it('mediaFilter([[13, 15, 16], [23, 25, 26], [33, 35, 36]]) returns [[26, 26, 26], [28, 29, 29], [31, 31, 31]]', () => {
    expect(mediaFilter([[13, 15, 16], [23, 25, 26], [33, 35, 36]])).to.eql([[26, 26, 26], [28, 29, 29], [31, 31, 31]]);
  });
});