import { pokerResult } from '../poker.js';

const expect = require('chai').expect;

describe('Poker Hand', function () {

  describe('Single Cars', function(){
    it('la plus haute carte gagne #1', () => {
      expect(
        pokerResult(
          ['2H', '3D', '5S', '9C', 'KD'], // 1 gagne avec K
          ['2C', '3H', '4S', '8C', 'QH']
        )
      ).to.be.equal('1');
    });

    it('la plus haute carte gagne #2', () => {
      expect(
        pokerResult(
          ['2H', '3D', '5S', '9C', 'KD'],
          ['2C', '3H', '4S', '8C', 'AH'] // 2 gagne avec A
        )
      ).to.be.equal('2');
    });
  })

  describe('Pair', function () {
    it('la plus grande paire gagne #1', () => {
      expect(
        pokerResult(
          ['2H', '4S', '9S', 'KC', 'KD'], // 1 gagne avec la paire de roi
          ['2C', '3H', '5S', '5C', 'AH']
        )
      ).to.be.equal('1');
    });

    it('la plus grande paire gagne #2', () => {
      expect(
        pokerResult(
          ['2C', '3H', '4S', '4C', 'AH'],
          ['2H', '2S', '9S', 'KC', 'KD'] // 2 gagne avec la paire de Roi
        )
      ).to.be.equal('2');
    });

     it('la main contenant au moins une paire contre des simples cartes gagne #1', () => {
      expect(
        pokerResult(
          ['2H', '3S', '9S', '9C', 'KD'], // gagne avec une paire de 9
          ['2C', '3H', '4S', '5C', 'TH']
        )
      ).to.be.equal('1');
    });

    it('la main contenant au moins une paire contre des simples cartes gagne #2', () => {
      expect(
        pokerResult(
          ['2H', '3S', '5S', '9C', 'KD'],
          ['2C', '3H', '4S', 'TC', 'TH']// gagne avec une paire de 10
        )
      ).to.be.equal('2');
    });

    it('la main contenant 2 paires contre 1 paire gagne #1 ', () => {
      expect(
        pokerResult(
          ['2H', '2S', '9S', '9C', 'KD'],// double paire de 9 et de 2
          ['2C', '3H', '3S', '5C', 'TH']
        )
      ).to.be.equal('1');
    });

    it('la main contenant 2 paires contre 1 paire gagne #2 ', () => {
      expect(
        pokerResult(
          ['2H', '2S', '9S', 'AC', 'KD'],// double paire de 9 et de 2
          ['2C', '3H', '3S', 'TC', 'TH']
        )
      ).to.be.equal('2');
    });

    it('la main avec la plus grande des 2 paires gagne ', () => {
      expect(
        pokerResult(
          ['2H', '2S', '9S', '9C', 'KD'],
          ['2C', '2H', 'TS', '5C', 'TH']
        )
      ).to.be.equal('2');
    });

    it('la main avec la plus grande des 2 paires gagne #2 ', () => {
      expect(
        pokerResult(
          ['3H', '3S', '9S', '9C', 'KD'],
          ['2C', '5H', '9S', '5C', '9H']
        )
      ).to.be.equal('2');
    });
  });
});
