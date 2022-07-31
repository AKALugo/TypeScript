import 'mocha';
import {expect} from "chai";
import {fromCamelToSnakeCase, fromSnakeToCamelCase} from '../src/ejercicio-3';

describe('fromCamelToSnakeCase function tests', () => {
  it('fromCamelToSnakeCase(theStealthWarrior) return the_stealth_warrior', () => {
    expect(fromCamelToSnakeCase("theStealthWarrior")).to.be.equal("the_stealth_warrior");
  });

  it('fromCamelToSnakeCase(sampleString) return sample_string', () => {
    expect(fromCamelToSnakeCase("sampleString")).to.be.equal("sample_string");
  });

  it('fromCamelToSnakeCase(holaTio) return hola_tio', () => {
    expect(fromCamelToSnakeCase("holaTio")).to.be.equal("hola_tio");
  });
});

describe('fromSnakeToCamelCase function tests', () => {
  it('fromSnakeToCamelCase("the_stealth_warrior") returns theStealthWarrior', () => {
    expect(fromSnakeToCamelCase("the_stealth_warrior")).to.be.equal("theStealthWarrior");
  });
  
  it('fromSnakeToCamelCase("sample_string") returns sampleString', () => {
    expect(fromSnakeToCamelCase("sample_string")).to.be.equal("sampleString");
  });
  
  it('fromSnakeToCamelCase("hola_tio") returns holaTio', () => {
    expect(fromSnakeToCamelCase("hola_tio")).to.be.equal("holaTio");
  });
});
