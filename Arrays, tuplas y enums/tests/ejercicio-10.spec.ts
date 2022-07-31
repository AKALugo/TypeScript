import 'mocha';
import {expect} from "chai";
import {paseoApp} from '../src/ejercicio-10';

describe('paseoApp function tests', () => {
  it('paseoApp([\'n\', \'n\', \'o\', \'o\', \'e\', \'s\', \'e\', \'s\']) returns true', () => {
    expect(paseoApp(['n', 'n', 'o', 'o', 'e', 's', 'e', 's'])).to.eql(true);
  });
  it('paseoApp([\'n\', "hola", \'o\', \'o\', \'e\', \'s\']) returns undefined', () => {
    expect(paseoApp(['n', "hola", 'o', 'o', 'e', 's', 'e', 's'])).to.eql(undefined);
  });
  it('paseoApp([]) returns undefined', () => {
    expect(paseoApp([])).to.eql(undefined);
  });
  it('paseoApp([\'o\', \'e\', \'s\']) returns undefined', () => {
    expect(paseoApp(['o', 'e', 's'])).to.eql(false);
  });
  it('paseoApp([\'o\', \'e\', \'s\', \'o\', \'e\', \'s\', \'o\', \'e\', \'s\', \'o\', \'e\', \'s\']) returns undefined', () => {
    expect(paseoApp(['o', 'e', 's', 'o', 'e', 's', 'o', 'e', 's', 'o', 'e', 's'])).to.eql(false);
  });
});