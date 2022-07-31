import 'mocha';
import {expect} from "chai";
import {isValidISBN} from '../src/ejercicio-4';

describe('isValidISBN function tests', () => {
  it('isValidISBN("3-598-21508-8") returns true', () => {
    expect(isValidISBN("3-598-21508-8")).to.be.equal(true);
  });

  it('isValidISBN(“3598215088”) returns true', () => {
    expect(isValidISBN("3598215088")).to.be.equal(true);
  });

  it('isValidISBN(“3-598-21507-X”) returns true', () => {
    expect(isValidISBN("3-598-21507-X")).to.be.equal(true);
  });

  it('isValidISBN("359821507X") returns true', () => {
    expect(isValidISBN("359821507X")).to.be.equal(true);
  });
});
