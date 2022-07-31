import 'mocha';
import {expect} from "chai";
import {DragonBall, DragonBallImprimir} from "../../src/ejercicio-1/dragonBall";

const goku = new DragonBall("Goku", 100, 4, [100, 100, 100, 100], "Me pican los cocos", "Dragon Ball", "Goku");
const gokuImprimir = new DragonBallImprimir(goku);

describe('DragonBall class tests', () => {
  it('Un DragonBall no es null', () => {
    expect(goku).not.to.eql(null);
  });
  it('Un DragonBall tiene equipo', () => {
    expect(goku.getEquipo()).to.eql("Goku");
  });
  it('Un DragonBall cambia de equipo', () => {
    goku.setEquipo("Freezer");
    expect(goku.getEquipo()).to.eql("Freezer");
  });
});

describe('DragonBallImprimir class tests', () => {
  it('Un DragonBallImprimir no es null', () => {
    expect(gokuImprimir).not.to.eql(null);
  });
  it('Un DragonBallImprimir imprime', () => {
    expect(gokuImprimir.print()).to.eql("Nombre: Goku Peso: 100 Altura: 4 Equipo: Freezer Estadísticas: Ataque: 100 Defensa: 100 Velocidad: 100 Vida: 100 ");
  });
});
