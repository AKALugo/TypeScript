import 'mocha';
import {expect} from "chai";
import {FighterDex, FighterDexImprimir} from "../../src/ejercicio-1/fighterDex";
import {DragonBall} from '../../src/ejercicio-1/dragonBall';
import {Marvel} from '../../src/ejercicio-1/marvel';
import {Pokemon} from '../../src/ejercicio-1/pokemon';

const goku = new DragonBall("Goku", 100, 4, [100, 100, 100, 100], "Me pican los cocos", "Dragon Ball", "Goku");
const IronMan = new Marvel("Iron Man", 1000, 4, [50, 100, 50, 100], "Que bonita mi armadura", "Marvel", "Iron Man");
const pikachu = new Pokemon("Pikachu", 20, 1, [30, 30, 30, 300], "Pika Pika Pika", "Pokemon", "electrico");

const dex = new FighterDex(goku, IronMan);
const imprimirdex = new FighterDexImprimir(dex);

describe('FighterDex class tests', () => {
  it('Un FighterDex no es null', () => {
    expect(dex).not.to.eql(null);
  });
  it('Un FighterDex tiene un método que devuelve la cantidad', () => {
    expect(dex.getNumberOfFigthers()).to.eql(2);
  });
  it('Un FighterDex tiene un método que busca un fighter', () => {
    expect(dex.getFigther(0)).to.eql(goku);
  });
  it('Un FighterDex tiene un método que añade un fighter', () => {
    expect(dex.addFighter(pikachu)).to.eql(true);
    expect(dex.addFighter(pikachu)).to.eql(false);
  });
});

let salidaDex: string = "Nombre: Goku Peso: 100 Altura: 4 Equipo: Goku Estadísticas: Ataque: 100 Defensa: 100 Velocidad: 100 Vida: 100 \n" +
                    "Nombre: Iron Man Peso: 1000 Altura: 4 Equipo: Iron Man Estadísticas: Ataque: 50 Defensa: 100 Velocidad: 50 Vida: 100 \n" +
                    "Nombre: Pikachu Peso: 20 Altura: 1 Equipo: electrico Estadísticas: Ataque: 30 Defensa: 30 Velocidad: 30 Vida: 300 \n"

describe('FighterDexImprimir class tests', () => {
  it('Un FighterDexImprimir no es null', () => {
    expect(imprimirdex).not.to.eql(null);
  });
  it('Un FighterDexImprimir imprime', () => {
    expect(imprimirdex.print()).to.eql(salidaDex);
  });
});
