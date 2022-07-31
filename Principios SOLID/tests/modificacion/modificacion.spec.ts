import 'mocha';
import {expect} from "chai";
import {NumericPrintableCollection, StringPrintableCollection} from "../../src/modificacion/modificacion";

const numeric = new NumericPrintableCollection([1, 2, 3, 4]);
const string = new StringPrintableCollection(["hola","buenas", "trades", "amigo"]);

describe('NumericPrintableCollection class tests', () => {
  it('Un NumericPrintableCollection no es null', () => {
    expect(numeric).not.to.eql(null);
  });
  it('Un NumericPrintableCollection tiene un metodo para añadir un item', () => {
    expect(numeric.addItem(6)).to.eql(true);
  });
  it('Un NumericPrintableCollection tiene un metodo para devolver un item', () => {
    expect(numeric.getItem(0)).to.eql(1);
  });
  it('Un NumericPrintableCollection tiene un metodo para remover un item', () => {
    expect(numeric.removeIem(0)).to.eql(true);
  });
  it('Un NumericPrintableCollection tiene un metodo para mostrar la cantidad de items', () => {
    expect(numeric.getNumberOfItems()).to.eql(4);
  });
  it('Un NumericPrintableCollection tiene un metodo para imprimir', () => {
    expect(numeric.print()).to.eql("2, 3, 4, 6");
  });
});

describe('StringPrintableCollection class tests', () => {
  it('Un StringPrintableCollection no es null', () => {
    expect(string).not.to.eql(null);
  });
  it('Un stringPrintableCollection tiene un metodo para añadir un item', () => {
    expect(string.addItem("adios")).to.eql(true);
  });
  it('Un stringPrintableCollection tiene un metodo para devolver un item', () => {
    expect(string.getItem(0)).to.eql("hola");
  });
  it('Un stringPrintableCollection tiene un metodo para remover un item', () => {
    expect(string.removeIem(0)).to.eql(true);
  });
  it('Un stringPrintableCollection tiene un metodo para mostrar la cantidad de items', () => {
    expect(string.getNumberOfItems()).to.eql(4);
  });
  it('Un stringPrintableCollection tiene un metodo para imprimir', () => {
    expect(string.print()).to.eql("buenas, trades, amigo, adios");
  });
});