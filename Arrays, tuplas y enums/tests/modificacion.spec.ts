import 'mocha';
import {expect} from "chai";
import {adnToArn, arnToAdn} from '../src/modificacion';

describe('adnToArn function tests', () => {
  it('adnToArn([]) returns undefined', () => {
    expect(adnToArn([])).to.eql(undefined);
  });
  it('adnToArn(["ACGTT", ""]) returns undefined', () => {
    expect(adnToArn(["ACGTT", ""])).to.eql(undefined);
  });
  it('adnToArn(["ACGTT", "HOLA"]) returns undefined', () => {
    expect(adnToArn(["ACGTT", "HOLA"])).to.eql(undefined);
  });
  it('adnToArn(["ACGTT", "TGCAA"]) returns ["UGCAA", "ACGUU"]', () => {
    expect(adnToArn(["ACGTT", "TGCAA"])).to.eql(["UGCAA", "ACGUU"]);
  });
  it('adnToArn(["AGGCTA", "GCTAGCAA", "AGCTGCTTA"]) returns ["UCCGAU", "CGAUCGUU", "UCGACGAAU"]', () => {
    expect(adnToArn(["AGGCTA", "GCTAGCAA", "AGCTGCTTA"])).to.eql(["UCCGAU", "CGAUCGUU", "UCGACGAAU"]);
  });
});

describe('arnToAdn function tests', () => {
  it('arnToAdn([]) returns undefined', () => {
    expect(arnToAdn([])).to.eql(undefined);
  });
  it('arnToAdn(["UGCAA", ""]) returns undefined', () => {
    expect(arnToAdn(["UGCAA", ""])).to.eql(undefined);
  });
  it('arnToAdn(["UGCAA", "HOLA"]) returns undefined', () => {
    expect(arnToAdn(["UGCAA", "HOLA"])).to.eql(undefined);
  });
  it('arnToAdn(["UGCAA", "ACGUU"]) returns "ACGTT", "TGCAA"', () => {
    expect(arnToAdn(["UGCAA", "ACGUU"])).to.eql(["ACGTT", "TGCAA"]);
  });
  it('arnToAdn(["UCCGAU", "CGAUCGUU", "UCGACGAAU"]) returns ["AGGCTA", "GCTAGCAA", "AGCTGCTTA"]', () => {
    expect(arnToAdn(["UCCGAU", "CGAUCGUU", "UCGACGAAU"])).to.eql(["AGGCTA", "GCTAGCAA", "AGCTGCTTA"]);
  });
});