/* global describe it */
'use strict';

const chai = require('chai');
const getLargestProduct = require('./yooler-008.js');
const expect = chai.expect;

describe('Problem 8', () => {
  describe('With a valid input:', () => {
    it('Returns the correct solution', () => {
      const answer = getLargestProduct(4);
      expect(answer).to.equal('The largest product produced by 4 adjacent digits is 5832 (9 x 9 x 8 x 9).');
    });
  });

  describe('With an invalid input:', () => {
    it('Returns an error message for no input', () => {
      const badInput = () => getLargestProduct();
      const errMsg = 'Please enter a positive integer for `n`.';
      expect(badInput).to.throw(errMsg).with.property('name', 'InputException');
    });

    it('Returns an error message for a negative input', () => {
      const badInput = () => getLargestProduct(-4);
      const errMsg = 'Please enter a positive integer for `n`.';
      expect(badInput).to.throw(errMsg).with.property('name', 'InputException');
    });

    it('Returns an error message for a non-integer input', () => {
      const badInput = () => getLargestProduct(4.33);
      const errMsg = 'Please enter a positive integer for `n`.';
      expect(badInput).to.throw(errMsg).with.property('name', 'InputException');
    });

    it('Returns an error message for a non-numeric input', () => {
      const badInput = () => getLargestProduct('4');
      const errMsg = 'Please enter a positive integer for `n`.';
      expect(badInput).to.throw(errMsg).with.property('name', 'InputException');
    });
  });
});
