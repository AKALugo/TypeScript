import 'mocha';
import {expect} from "chai";
import {fromArrayToRanges, fromRangesToArray} from '../src/ejercicio-2';

describe('fromArrayToRanges function tests', () => {
  it('fromArrayToRanges([2, 4, 6, 7, 8, 9, 10, 11, 12]) returns "2,4,6_12"'
      , () => {
        expect(fromArrayToRanges([2, 4, 6, 7, 8, 9, 10, 11, 12])).to.eql(
            "2,4,6_12");
      });
  it('fromArrayToRanges([]) returns undefined', () => {
    expect(fromArrayToRanges([])).to.eql(undefined);
  });
  it('fromArrayToRanges([-1, 0, 1, -6]) returns undefined', () => {
    expect(fromArrayToRanges([-1, 0, 1, -6])).to.eql(undefined);
  });
  it('fromArrayToRanges([5, 6, 8, 9, 9, 10]) returns undefined', () => {
    expect(fromArrayToRanges([5, 6, 8, 9, 9, 10])).to.eql(undefined);
  });
});

describe('fromRangesToArray function tests', () => {
  it('fromRangesToArray("2,4,6_12") returns [2, 4, 6, 7, 8, 9, 10, 11, 12]'
      , () => {
        expect(fromRangesToArray("2,4,6_12")).to.eql(
            [2, 4, 6, 7, 8, 9, 10, 11, 12]);
      });
  it('fromRangesToArray("2,4,6__12") returns undefined', () => {
    expect(fromRangesToArray("2,4,6__12")).to.eql(undefined);
  });
  it('fromRangesToArray("2,4,a_12") returns undefined', () => {
    expect(fromRangesToArray("2,4,a_12")).to.eql(undefined);
  });
  it('fromRangesToArray("4,2,5_12") returns undefined', () => {
    expect(fromRangesToArray("4,2,5_12")).to.eql(undefined);
  });
});
