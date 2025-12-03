import { expect } from "chai";
import maiorDeIdade from '../triplo.js';
//Utilizando o mocha
describe('Função Maior idade',()=>{
    it('Deve retornar true caso o número for múltiplo de três.',()=>{
        //Utilizando o Chai
        expect(maiorDeIdade(3)).to.be.true;
        expect(maiorDeIdade(12)).to.be.true;
        expect(maiorDeIdade(51)).to.be.true;
    });
    it('Deve retornar false quando o número não for múltiplo de três.',()=>{
        //Utilizando o Chai
        expect(maiorDeIdade(17)).to.be.false;
        expect(maiorDeIdade(5)).to.be.false;
        expect(maiorDeIdade(8)).to.be.false;
    
    });
});