import 'mocha';
import {expect} from "chai";
import {DragonBall, DragonBallImprimir} from "../../src/ejercicio-1/dragonBall";

const goku = new DragonBall("Goku", 100, 4, [100, 100, 100, 100], "Me pican los cocos", "Dragon Ball", "Goku");
const gokuFake = new DragonBall("", -1, -1, [-1, -1, -1, -1], "", "Dragon Ball", "Goku");

describe('Fighter class tests', () => {
  it('Un Fighter tiene un metodo que devuelve el nombre', () => {
    expect(goku.getNombre()).to.eql("Goku");
    expect(gokuFake.getNombre()).to.eql("UnKnow");
  });
  it('Un Fighter tiene un metodo que devuelve el peso', () => {
    expect(goku.getPeso()).to.eql(100);
    expect(gokuFake.getPeso()).to.eql(1);
  });
  it('Un Fighter tiene un metodo que devuelve la altura', () => {
    expect(goku.getAltura()).to.eql(4);
    expect(gokuFake.getAltura()).to.eql(1);
  });
  it('Un Fighter tiene un metodo que devuelve las estadisticas', () => {
    expect(goku.getEstadisticas()).to.eql([100, 100, 100, 100]);
  });
  it('Un Fighter tiene un metodo que devuelve la frase', () => {
    expect(goku.getFrase()).to.eql("Me pican los cocos");
  });
  it('Un Fighter tiene un metodo que devuelve el universo', () => {
    expect(goku.getUniverso()).to.eql("Dragon Ball");
  });

  it('Un Fighter tiene un metodo que cambia el nombre', () => {
    goku.setNombre("Pepe");
    expect(goku.getNombre()).to.eql("Pepe");
  });
  it('Un Fighter tiene un metodo que cambia el peso', () => {
    goku.setPeso(200);
    expect(goku.getPeso()).to.eql(200);
  });
  it('Un Fighter tiene un metodo que cambia la altura', () => {
    goku.setAltura(5);
    expect(goku.getAltura()).to.eql(5);
  });
  it('Un Fighter tiene un metodo que cambia las estadisticas', () => {
    goku.setEstadisticas([200, 200, 200, 200]);
    expect(goku.getEstadisticas()).to.eql([200, 200, 200, 200]);
  });
  it('Un Fighter tiene un metodo que cambia la frase', () => {
    goku.setFrase("Hola bby");
    expect(goku.getFrase()).to.eql("Hola bby");
  });
  it('Un Fighter tiene un metodo que cambia el universo', () => {
    goku.setUniverso("Marvel");
    expect(goku.getUniverso()).to.eql("Marvel");
  });
});
