import { pokerResult } from '../poker.js';

const expect = require('chai').expect;

describe('Poker Hand', function () {
  let arraySingleCard = ['2C', '3H', '4S', '8C', 'QH'];
  let arrayPaire = ['2C', '5H', '5S', 'KC', 'TH'];
  let arrayDoublePaire = ['2C', '5H', 'TS', '5C', 'TH'];
  let arrayBrelan = ['2C', '3H', '8S', '8C', '8H'];
  let arraySuite = ['2H', '3D', '4S', '5C', '6D'];
  let arrayCouleur = ['3D', '4D', 'TD', '6D', '5D'];
  let arrayFull = ['3D', '3S', '7D', '7C', '7H'];
  let arrayCarre = ['3D', '7S', '7D', '7C', '7H'];
  let arrayQuinteFlush = ['3D', '4D', '5D', '6D', '7D'];

  describe('Single Cars', function () {
    it('la plus haute carte gagne', () => {
      let main1 = ['2H', '3C', '5H', '9H', 'KH'];
      let main2 = ['2C', '3H', '4S', '8C', 'QH'];

      testEtTestInverse(main1, main2);
    });
  });

  describe('Pair', function () {
    var mainsPlusFaibles = new Map();
    mainsPlusFaibles.set('singleCard', arraySingleCard);
    mainsPlusFaibles.set('paire', arrayPaire);
    mainsPlusFaibles.set('paireIdentique + carte simple inférieure', [
      '2C',
      '7D',
      '7S',
      'QC',
      'TH',
    ]);

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
    mainsPlusFaibles.set('singleCard', arraySingleCard);
    mainsPlusFaibles.set('paire', arrayPaire);
    mainsPlusFaibles.set('doublepaire', arrayDoublePaire);

    mainsPlusFaibles.forEach((mainPLusFaible, key) => {
      it(`la paire gagne contre ${key}`, () => {
        let main1 = ['5C', '7C', '7C', 'KH', 'KC'];
        testEtTestInverse(main1, mainPLusFaible);
      });
    });
  });

  describe('Three of a Kind', function () {
    var mainsPlusFaibles = new Map();
    mainsPlusFaibles.set('singleCard', arraySingleCard);
    mainsPlusFaibles.set('paire', arrayPaire);
    mainsPlusFaibles.set('doublePaire', arrayDoublePaire);
    mainsPlusFaibles.set('brelan', arrayBrelan);

    mainsPlusFaibles.forEach((mainPLusFaible, key) => {
      it(`le brelan gagne contre ${key}`, () => {
        let main1 = ['2H', 'AD', '9S', '9C', '9D'];
        testEtTestInverse(main1, mainPLusFaible);
      });
    });
  });

  describe('Suite', function () {
    var mainsPlusFaibles = new Map();
    mainsPlusFaibles.set('singleCard', arraySingleCard);
    mainsPlusFaibles.set('paire', arrayPaire);
    mainsPlusFaibles.set('doublePaire', arrayDoublePaire);
    mainsPlusFaibles.set('brelan', arrayBrelan);
    mainsPlusFaibles.set('suite', arraySuite);

    mainsPlusFaibles.forEach((mainPLusFaible, key) => {
      it(`la suite gagne contre ${key}`, () => {
        let main1 = ['5C', '6C', '7C', '8C', '9C'];
        testEtTestInverse(main1, mainPLusFaible);
      });
    });
  });
  describe('Couleur', function () {
    var mainsPlusFaibles = new Map();
    mainsPlusFaibles.set('singleCard', arraySingleCard);
    mainsPlusFaibles.set('paire', arrayPaire);
    mainsPlusFaibles.set('doublePaire', arrayDoublePaire);
    mainsPlusFaibles.set('brelan', arrayBrelan);
    mainsPlusFaibles.set('suite', arraySuite);
    mainsPlusFaibles.set('couleur', arrayCouleur);

    mainsPlusFaibles.forEach((mainPLusFaible, key) => {
      it(`la couleur gagne contre ${key}`, () => {
        let main1 = ['2C', '3C', '8C', 'TC', 'QC'];
        testEtTestInverse(main1, mainPLusFaible);
      });
    });
  });

  describe('Full', function () {
    var mainsPlusFaibles = new Map();
    mainsPlusFaibles.set('singleCard', arraySingleCard);
    mainsPlusFaibles.set('paire', arrayPaire);
    mainsPlusFaibles.set('doublePaire', arrayDoublePaire);
    mainsPlusFaibles.set('brelan', arrayBrelan);
    mainsPlusFaibles.set('suite', arraySuite);
    mainsPlusFaibles.set('couleur', arrayCouleur);
    mainsPlusFaibles.set('full', arrayFull);

    mainsPlusFaibles.forEach((mainPLusFaible, key) => {
      it(`le full gagne contre ${key}`, () => {
        let main1 = ['KC', 'KS', '8C', '8S', '8H'];
        testEtTestInverse(main1, mainPLusFaible);
      });
    });
  });

  describe('Carré', function () {
    var mainsPlusFaibles = new Map();
    mainsPlusFaibles.set('singleCard', arraySingleCard);
    mainsPlusFaibles.set('paire', arrayPaire);
    mainsPlusFaibles.set('doublePaire', arrayDoublePaire);
    mainsPlusFaibles.set('brelan', arrayBrelan);
    mainsPlusFaibles.set('suite', arraySuite);
    mainsPlusFaibles.set('couleur', arrayCouleur);
    mainsPlusFaibles.set('full', arrayFull);
    mainsPlusFaibles.set('carre', arrayCarre);

    mainsPlusFaibles.forEach((mainPLusFaible, key) => {
      it(`le carré gagne contre ${key}`, () => {
        let main1 = ['KC', '8S', '8C', '8S', '8H'];
        testEtTestInverse(main1, mainPLusFaible);
      });
    });
  });

  describe('Quinte flush', function () {
    var mainsPlusFaibles = new Map();
    mainsPlusFaibles.set('singleCard', arraySingleCard);
    mainsPlusFaibles.set('paire', arrayPaire);
    mainsPlusFaibles.set('doublePaire', arrayDoublePaire);
    mainsPlusFaibles.set('brelan', arrayBrelan);
    mainsPlusFaibles.set('suite', arraySuite);
    mainsPlusFaibles.set('couleur', arrayCouleur);
    mainsPlusFaibles.set('full', arrayFull);
    mainsPlusFaibles.set('carre', arrayCarre);
    mainsPlusFaibles.set('quinte flush', arrayQuinteFlush);

    mainsPlusFaibles.forEach((mainPLusFaible, key) => {
      it(`la quinte flush gagne contre ${key}`, () => {
        let main1 = ['4C', '5C', '6C', '7C', '8C'];
        testEtTestInverse(main1, mainPLusFaible);
      });
    });
  });

  describe('Quinte flush Royale', function () {
    var mainsPlusFaibles = new Map();
    mainsPlusFaibles.set('singleCard', arraySingleCard);
    mainsPlusFaibles.set('paire', arrayPaire);
    mainsPlusFaibles.set('doublePaire', arrayDoublePaire);
    mainsPlusFaibles.set('brelan', arrayBrelan);
    mainsPlusFaibles.set('suite', arraySuite);
    mainsPlusFaibles.set('couleur', arrayCouleur);
    mainsPlusFaibles.set('full', arrayFull);
    mainsPlusFaibles.set('carre', arrayCarre);
    mainsPlusFaibles.set('quinte flush', arrayQuinteFlush);

    mainsPlusFaibles.forEach((mainPLusFaible, key) => {
      it(`la quinte flush royale gagne contre ${key}`, () => {
        let main1 = ['TC', 'JC', 'QC', 'KC', 'AC'];
        testEtTestInverse(main1, mainPLusFaible);
      });
    });
  });

  function testEtTestInverse(main1, main2) {
    expect(
      pokerResult(
        main1,
        main2
      )
    ).to.be.equal('1');
    expect(
      pokerResult(
        main2,
        main1
      )
    ).to.be.equal('2');
  }
});
