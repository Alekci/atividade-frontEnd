import { expect } from "chai";
import triplo from '../triplo.js';
//Utilizando o mocha
describe('Função Maior idade',()=>{
    it('Deve retornar true caso o número for múltiplo de três.',()=>{
        //Utilizando o Chai
        expect(triplo(3)).to.be.true;
        expect(triplo(12)).to.be.true;
        expect(triplo(51)).to.be.true;
    });
    it('Deve retornar false quando o número não for múltiplo de três.',()=>{
        //Utilizando o Chai
        expect(triplo(17)).to.be.false;
        expect(triplo(5)).to.be.false;
        expect(triplo(8)).to.be.false;
    
    });
});