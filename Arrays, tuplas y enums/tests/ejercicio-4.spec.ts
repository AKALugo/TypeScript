import 'mocha';
import {expect} from "chai";
import {meshArray} from '../src/ejercicio-4';

describe('meshArray function tests', () => {
  it('meshArray(["allow", "lowering", "ringmaster", "terror"]) returns "lowringter"', () => {
    expect(meshArray(["allow", "lowering", "ringmaster", "terror"])).to.eql("lowringter");
  });
  it('meshArray(["locopep", "pepe", "pedro", "dron"]) returns "peppedro"', () => {
    expect(meshArray(["locopep", "pepe", "pedro", "dron"])).to.eql("peppedro");
  });
  it('meshArray(["locopep", "jamon", "pedro", "dron"]) returns "Error al encadenar"', () => {
    expect(meshArray(["locopep", "jamon", "pedro", "dron"])).to.eql("Error al encadenar");
  });
  it('meshArray(["jamon"]) returns undefined', () => {
    expect(meshArray(["jamon"])).to.eql(undefined);
  });
});
