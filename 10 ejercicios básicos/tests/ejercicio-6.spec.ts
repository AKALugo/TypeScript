import 'mocha';
import {expect} from "chai";
import {ipsInRange} from '../src/ejercicio-6';

describe('ipsInRange function tests', () => {
  it('ipsInRange("10.0.0.0", "10.0.0.50") returns 50)', () => {
    expect(ipsInRange("10.0.0.0", "10.0.0.50")).to.be.equal(50);
  });

  it('ipsInRange("10.0.0.0", "10.0.1.0") returns 256', () => {
    expect(ipsInRange("10.0.0.0", "10.0.1.0")).to.be.equal(256);
  });

  it('ipsInRange("20.2.1.0", "20.0.1.0") returns 131072', () => {
    expect(ipsInRange("20.2.1.0", "20.0.1.0")).to.be.equal(131072);
  });

  it('ipsInRange("20.2.6.0", "20.1.1.0") returns 66816', () => {
    expect(ipsInRange("20.2.6.0", "20.1.1.0")).to.be.equal(66816);
  });
});
