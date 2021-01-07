import { pokerResult } from '../poker.js';

const expect = require('chai').expect;

describe('Poker Hand', function () {
  it('la plus haute carte gagne', () => {
    expect(pokerResult(['2H', '3D', '5S', '9C', 'KD'], ['2C', '3H', '4S', '8C', 'AH'])).to.be.equal('2');
  });

  // it('should evaluate a hand as high card', function () {
  //   expect(false).to.be.true;
  // });

  // it('should evaluate a hand as a pair', function () {
  //   expect(false).to.be.true;
  // });
});
