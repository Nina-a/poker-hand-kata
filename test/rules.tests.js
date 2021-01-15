import { pokerResult } from '../poker.js';

const expect = require('chai').expect;

describe('Poker Hand', function () {
  describe('Single Cars', function () {
    it('la plus haute carte gagne', () => {
      let main1 = ['2H', '3C', '5H', '9H', 'KH'];
      let main2 = ['2C', '3H', '4S', '8C', 'QH'];

      testEtTestInverse(main1, main2);
    });
  });

  describe('Pair', function () {
    var mainsPlusFaibles = new Map();
    mainsPlusFaibles.set('singleCard', ['2C', '3H', '4S', '8C', 'QH']);
    mainsPlusFaibles.set('paire', ['2C', '5H', '5S', 'KC', 'TH']);
    mainsPlusFaibles.set('paireIdentique + carte simple inférieure', ['2C', '7D', '7S', 'QC', 'TH']);

    mainsPlusFaibles.forEach((mainPLusFaible, key) => {
      it(`la paire gagne contre ${key}`, () => {
        let main1 = ['5C', '6C', '7C', '7H', 'KC'];
        //gagnant avec une couleur devant des cartes simples
        testEtTestInverse(main1, mainPLusFaible);
      });
    });
  });

  describe('doublePair', function () {
    var mainsPlusFaibles = new Map();
    mainsPlusFaibles.set('singleCard', ['2C', '3H', '4S', '8C', 'QH']);
    mainsPlusFaibles.set('paire', ['2C', '5H', '5S', 'KC', 'TH']);
    mainsPlusFaibles.set('doublepaire', ['2C', '5H', '5S', 'TC', 'TH']);

    mainsPlusFaibles.forEach((mainPLusFaible, key) => {
      it(`la paire gagne contre ${key}`, () => {
        let main1 = ['5C', '7C', '7C', 'KH', 'KC'];
        //gagnant avec une couleur devant des cartes simples
        testEtTestInverse(main1, mainPLusFaible);
      });
    });
  });

  describe('Three of a Kind', function () {

    var mainsPlusFaibles = new Map();
    mainsPlusFaibles.set('singleCard', ['2C', '3H', '4S', '8C', 'QH']);
    mainsPlusFaibles.set('paire', ['2H', '2S', '9S', 'KC', 'KD']);
    mainsPlusFaibles.set('doublePaire', ['2C', '5H', 'TS', '5C', 'TH']);
    mainsPlusFaibles.set('brelan',  ['2C', '3H', '8S', '8C', '8H']);
    mainsPlusFaibles.forEach((mainPLusFaible, key) => {
      it(`le brelan gagne contre ${key}`, () => {
        let main1 = ['2H', 'AD', '9S', '9C', '9D'];
        //gagnant avec une couleur devant des cartes simples
        testEtTestInverse(main1, mainPLusFaible);
      });
    });

  });

  describe('Suite', function () {

    var mainsPlusFaibles = new Map();
    mainsPlusFaibles.set('singleCard', ['2C', '3H', '4S', '8C', 'QH']);
    mainsPlusFaibles.set('paire', ['2C', '5H', 'TS', 'KC', 'TH']);
    mainsPlusFaibles.set('doublePaire', ['2H', '2S', '9S', 'KC', 'KD']);
    mainsPlusFaibles.set('brelan', ['2H', '3D', '9S', '9C', '9D']);
    mainsPlusFaibles.set('suite', ['2H', '3D', '4S', '5C', '6D']);

    mainsPlusFaibles.forEach((mainPLusFaible, key) => {
      it(`la suite gagne contre ${key}`, () => {
        let main1 = ['5C', '6C', '7C', '8C', '9C'];
        //gagnant avec une couleur devant des cartes simples
        testEtTestInverse(main1, mainPLusFaible);
      });
    });

  });
  describe('Couleur', function () {

    var mainsPlusFaibles = new Map();
    mainsPlusFaibles.set('singleCard', ['2C', '3H', '4S', '8C', 'QH']);
    mainsPlusFaibles.set('paire', ['2H', '2S', '9S', 'KC', 'KD']);
    mainsPlusFaibles.set('doublePaire', ['2C', '5H', 'TS', 'KC', 'TH']);
    mainsPlusFaibles.set('brelan', ['2H', '3D', '9S', '9C', '9D']);
    mainsPlusFaibles.set('suite', ['2H', '3D', '4S', '5C', '6D']);
    mainsPlusFaibles.set('couleur', ['3D', '4D', 'TD', '6D', '5D']);

    mainsPlusFaibles.forEach((mainPLusFaible, key) => {
      it(`la couleur gagne contre ${key}`, () => {
        let main1 = ['2C', '3C', '8C', 'TC', 'QC'];
        //gagnant avec une couleur devant des cartes simples
        testEtTestInverse(main1, mainPLusFaible);
      });
    });
  });

  describe ('Full', function () {
    var mainsPlusFaibles = new Map();
    mainsPlusFaibles.set('singleCard', ['2C', '3H', '4S', '8C', 'QH']);
    mainsPlusFaibles.set('paire', ['2H', '2S', '9S', 'KC', 'KD']);
    mainsPlusFaibles.set('doublePaire', ['2C', '5H', 'TS', 'KC', 'TH']);
    mainsPlusFaibles.set('brelan', ['2H', '3D', '9S', '9C', '9D']);
    mainsPlusFaibles.set('suite', ['2H', '3D', '4S', '5C', '6D']);
    mainsPlusFaibles.set('couleur', ['3D', 'KD', 'TD', '6D', '7D']);
    mainsPlusFaibles.set('full', ['3D', '3S', '7D', '7C', '7H']);


    mainsPlusFaibles.forEach((mainPLusFaible, key) => {
      it(`le full gagne contre ${key}`, () => {
        let main1 = ['KC', 'KS', '8C', '8S', '8H'];
        //gagnant avec une couleur devant des cartes simples
        testEtTestInverse(main1, mainPLusFaible);
      });
    });
  });

  describe ('Carré', function () {
    var mainsPlusFaibles = new Map();
    mainsPlusFaibles.set('singleCard', ['2C', '3H', '4S', '8C', 'QH']);
    mainsPlusFaibles.set('paire', ['2H', '2S', '9S', 'KC', 'KD']);
    mainsPlusFaibles.set('doublePaire', ['2C', '5H', 'TS', 'KC', 'TH']);
    mainsPlusFaibles.set('brelan', ['2H', '3D', '9S', '9C', '9D']);
    mainsPlusFaibles.set('suite', ['2H', '3D', '4S', '5C', '6D']);
    mainsPlusFaibles.set('couleur', ['3D', 'KD', 'TD', '6D', '7D']);
    mainsPlusFaibles.set('full', ['3D', '3S', '7D', '7C', '7H']);
    mainsPlusFaibles.set('carre', ['3D', '7S', '7D', '7C', '7H']);

    mainsPlusFaibles.forEach((mainPLusFaible, key) => {
      it(`le carré gagne contre ${key}`, () => {
        let main1 = ['KC', '8S', '8C', '8S', '8H'];
        //gagnant avec une couleur devant des cartes simples
        testEtTestInverse(main1, mainPLusFaible);
      });
    });
  });

  describe ('Quinte flush', function () {
    var mainsPlusFaibles = new Map();
    mainsPlusFaibles.set('singleCard', ['2C', '3H', '4S', '8C', 'QH']);
    mainsPlusFaibles.set('paire', ['2H', '2S', '9S', 'KC', 'KD']);
    mainsPlusFaibles.set('doublePaire', ['2C', '5H', 'TS', 'KC', 'TH']);
    mainsPlusFaibles.set('brelan', ['2H', '3D', '9S', '9C', '9D']);
    mainsPlusFaibles.set('suite', ['2H', '3D', '4S', '5C', '6D']);
    mainsPlusFaibles.set('couleur', ['3D', 'KD', 'TD', '6D', '7D']);
    mainsPlusFaibles.set('full', ['3D', '3S', '7D', '7C', '7H']);
    mainsPlusFaibles.set('carre', ['3D', '7S', '7D', '7C', '7H']);
    mainsPlusFaibles.set('quinte flush', ['3D', '4D', '5D', '6D', '7D']);

    mainsPlusFaibles.forEach((mainPLusFaible, key) => {
      it(`la quinte flush gagne contre ${key}`, () => {
        let main1 = ['4C', '5C', '6C', '7C', '8C'];
        //gagnant avec une couleur devant des cartes simples
        testEtTestInverse(main1, mainPLusFaible);
      });
    });
  });

  describe ('Quinte flush Royale', function () {
    var mainsPlusFaibles = new Map();
    mainsPlusFaibles.set('singleCard', ['2C', '3H', '4S', '8C', 'QH']);
    mainsPlusFaibles.set('paire', ['2H', '2S', '9S', 'KC', 'KD']);
    mainsPlusFaibles.set('doublePaire', ['2C', '5H', 'TS', 'KC', 'TH']);
    mainsPlusFaibles.set('brelan', ['2H', '3D', '9S', '9C', '9D']);
    mainsPlusFaibles.set('suite', ['2H', '3D', '4S', '5C', '6D']);
    mainsPlusFaibles.set('couleur', ['3D', 'KD', 'TD', '6D', '7D']);
    mainsPlusFaibles.set('full', ['3D', '3S', '7D', '7C', '7H']);
    mainsPlusFaibles.set('carre', ['3D', '7S', '7D', '7C', '7H']);
    mainsPlusFaibles.set('quinte flush', ['3D', '4D', '5D', '6D', '7D']);

    mainsPlusFaibles.forEach((mainPLusFaible, key) => {
      it(`la quinte flush royale gagne contre ${key}`, () => {
        let main1 = ['TC', 'JC', 'QC', 'KC', 'AC'];
        //gagnant avec une couleur devant des cartes simples
        testEtTestInverse(main1, mainPLusFaible);
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
});
