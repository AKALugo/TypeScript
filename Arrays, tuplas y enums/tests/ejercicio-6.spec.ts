import 'mocha';
import {expect} from "chai";
import {moveZeros} from '../src/ejercicio-6';

describe('moveZeros function tests', () => {
  it('moveZeros([1, 2, 3, 0, 0, 1, 2, 0, 4]) returns [1, 2, 3, 1, 2, 4, 0, 0, 0]', () => {
    expect(moveZeros([1, 2, 3, 0, 0, 1, 2, 0, 4])).to.eql([1, 2, 3, 1, 2, 4, 0, 0, 0]);
  });
  it('moveZeros([]) returns undefined', () => {
    expect(moveZeros([])).to.eql(undefined);
  });
});
