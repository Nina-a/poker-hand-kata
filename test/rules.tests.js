import { pokerResult } from '../poker.js';

const expect = require('chai').expect;

describe('Poker Hand', function () {
  describe('Single Cars', function () {
    it('la plus haute carte gagne', () => {

      let main1 = ['2H', '3H', '5H', '9H', 'KH'];
      let main2 = ['2C', '3H', '4S', '8C', 'QH'];

      testEtTestInverse(main1, main2);
    });
  });

  describe('Pair', function () {
    it('la plus grande paire gagne', () => {
      let main1 = ['2H', '2S', '9S', 'KC', 'KD'];
      let main2 = ['2C', '3H', '4S', '4C', 'AH'];
      // gagnant avec une paire de Roi contreune paire de 4
      testEtTestInverse(main1, main2);
    });

    it('la main contenant au moins une paire contre des simples cartes gagne', () => {
      let main1 = ['2H', '3S', '9S', '9C', 'KD'];
      let main2 = ['2C', '3H', '4S', '5C', 'TH'];
      // gagnant avec une paire de 9 contre des cartes simples
      testEtTestInverse(main1, main2);
    });

    it('la main contenant 2 paires contre 1 paire gagne', () => {
      let main1 =  ['2H', '2S', '9S', '9C', 'KD'];
      let main2 =  ['2C', '3H', '3S', '5C', 'TH'];
      // gagnant avec une paire de 9 et 2 contre une paire de 3
      testEtTestInverse(main1, main2);
    });

    it('la main avec la plus grande des 2 paires gagne ', () => {
      let main1 = ['2C', '2H', 'TS', '5C', 'TH'];
      let main2 = ['3H', '3S', '9S', '9C', 'KD'];
      //gagnant paire de 10 et de 2 vs paire de 9 et de 3
      testEtTestInverse(main1, main2);
    });

    it('la main avec des paires identiques et la plus grande carte gagne ', () => {
      let main1 = ['2C', '5H', 'TS', 'KC', 'TH'];
      let main2 = ['3H', '7S', '9S', 'TC', 'TD'];
      //gagnant paire de 10 plus grande carte Roi vs paire de 10 et plus grande carte 9
      testEtTestInverse(main1, main2);
    });
  });
 
  describe('Three of a Kind', function () {
    it('le brelan le plus grand gagne', () => {
      let main1 = ['2H', '3D', '9S', '9C', '9D'];
      let main2 = ['2C', '3H', '8S', '8C', '8H'];
      //gagnant avec un brelan de 9 par rapport au brelan de 8
      testEtTestInverse(main1, main2);
    });

    it('le brelan gagne devant une double paire ou une paire', () => {
      let main1 = ['2H', '3D', '9S', '9C', '9D'];
      let main2 = ['2C', '3H', '8S', 'TC', 'AH'];
      //gagnant avec un brelan de 9 par rapport au brelan de 8
      testEtTestInverse(main1, main2);
    });
  });

  describe('Straight', function () {
    it('la suite gagne vs brelan', () => {
      let main1 = ['3H', '4D', '5S', '6C', '7D'];
      let main2 = ['2C', '3H', '8S', '8C', '8H'];
      //gagnant avec une suite
      testEtTestInverse(main1, main2);
    });

    it('la suite gagne vs paire/doublepaire', () => {
      let main1 = ['3H', '4D', '5S', '6C', '7D'];
      let main2 = ['2C', '3H', '3S', '8C', '8H'];
      //gagnant avec une suite
      testEtTestInverse(main1, main2);
    });

    it('la suite gagne vs carte simple ', () => {
      let main1 = ['3H', '4D', '5S', '6C', '7D'];
      let main2 = ['2C', '9H', '3S', 'TC', '8H'];
      //gagnant avec une suite
      testEtTestInverse(main1, main2);
    });
    });

    describe('Couleur', function () {
      it('la couleur gagne vs suite', () => {
        let main1 = ['3H', '4D', '5S', '6C', '7D'];
        let main2 = ['2C', '3C', '8C', 'TC', 'QC'];
        //gagnant avec une suite
        testEtTestInverse(main1, main2);
      });
      });
});

function testEtTestInverse(main1, main2) {
  expect(
    pokerResult(
      main1,
      main2
      // 2 gagne avec la paire de Roi
    )
  ).to.be.equal('1');
  expect(
    pokerResult(
      main2,
      main1
      // 2 gagne avec la paire de Roi
    )
  ).to.be.equal('2');
}

