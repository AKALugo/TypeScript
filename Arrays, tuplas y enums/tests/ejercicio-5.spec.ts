import 'mocha';
import {expect} from "chai";
import {meanAndConcatenate} from '../src/ejercicio-5';

describe('meanAndConcatenate function tests', () => {
  it('meanAndConcatenate([\'a\', 1, \'l\', \'e\', 4, 20, \'j\', 13, \'a\', \'n\']) returns [9.5, \'alejan\']', () => {
    expect(meanAndConcatenate(['a', 1, 'l', 'e', 4, 20, 'j', 13, 'a', 'n'])).to.eql([9.5, 'alejan']);
  });
  it('meanAndConcatenate(["hola", 1, \'l\', \'e\', 4, 20, \'j\', 13, \'a\', \'n\']) returns undefined', () => {
    expect(meanAndConcatenate(["hola", 1, 'l', 'e', 4, 20, 'j', 13, 'a', 'n'])).to.eql(undefined);
  });
  it('meanAndConcatenate([\'a\', \'l\', \'e\']) returns undefined', () => {
    expect(meanAndConcatenate(['a', 'l', 'e'])).to.eql(undefined);
  });
  it('meanAndConcatenate([1, 2, 3]) returns undefined', () => {
    expect(meanAndConcatenate([1, 2, 3])).to.eql(undefined);
  });
});