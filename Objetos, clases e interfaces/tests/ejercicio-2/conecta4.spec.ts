import 'mocha';
import {expect} from "chai";
import {Conecta4} from "../../src/ejercicio-2/conecta4";
import {ColorFichas, JugadorConecta4} from "../../src/ejercicio-2/jugador";
import {TableroConecta4} from "../../src/ejercicio-2/tablero";

const tablero = new TableroConecta4();

describe('TableroConecta4 class tests', () => {
  it('Un tablero no es null', () => {
    expect(tablero).not.to.eql(null);
  });
  it('Un tablero tiene un atributo que representa un tablero', () => {
    expect(tablero.tablero).not.to.eql(null);
  });
  it('Un tablero tiene un metodo para mostrar las columnas libres', () => {
    expect(tablero.columnasDisponibles()).to.eql("1, 2, 3, 4, 5, 6, 7");
  });
  it('Un tablero tiene un metodo para colocar ficha', () => {
    expect(tablero.colocarFicha(10, 1)).to.eql(false);
    expect(tablero.colocarFicha(-2, 1)).to.eql(false);
    expect(tablero.colocarFicha(1, 1)).to.eql(true);
  });
  it('Un tablero tiene un metodo para comprobar el ganador', () => {
    expect(tablero.comprobarGanador()).to.eql(0);
  });
});

const jugador = new JugadorConecta4("Pepe", ColorFichas.Amarillo);

describe('JugadorConecta4 class tests', () => {
  it('Un Jugador no es null', () => {
    expect(jugador).not.to.eql(null);
  });
});

const jugador2 = new JugadorConecta4("Raul", ColorFichas.Rojo);

const juego = new Conecta4(jugador, jugador2);

describe('Conecta4 class tests', () => {
  it('Un Conecta4 no es null', () => {
    expect(juego).not.to.eql(null);
  });
  it('Un Conecta4 tiene un método que simula una partida y da un ganador', () => {
    expect(juego.start()).to.eql("¡¡¡¡¡¡¡¡¡¡Felicidade Raul has ganado!!!!!!!!!!");
  });
});
