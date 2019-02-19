/* global describe it */
'use strict';

const chai = require('chai');
const getFirstNDigitsOfSum = require('./yooler-013.js');
const expect = chai.expect;

describe('Problem 13', () => {
  describe('With a valid input:', () => {
    it('Returns the correct solution for a single digit', () => {
      const answer = getFirstNDigitsOfSum(1);
      expect(answer).to.equal('The first digit of the sum of the one-hundred 50-digit numbers is 5.');
    });
    it('Returns the correct solution for multiple digits', () => {
      const answer = getFirstNDigitsOfSum(10);
      expect(answer).to.equal('The first 10 digits of the sum of the one-hundred 50-digit numbers is 5537376230.');
    });
  });

  describe('With an invalid input:', () => {
    it('Returns an error message for no input', () => {
      const badInput = () => getFirstNDigitsOfSum();
      const errMsg = 'Please enter a positive integer for `n`.';
      expect(badInput).to.throw(errMsg).with.property('name', 'InputException');
    });

    it('Returns an error message for a negative input', () => {
      const badInput = () => getFirstNDigitsOfSum(-5);
      const errMsg = 'Please enter a positive integer for `n`.';
      expect(badInput).to.throw(errMsg).with.property('name', 'InputException');
    });

    it('Returns an error message for a non-integer input', () => {
      const badInput = () => getFirstNDigitsOfSum(5.33);
      const errMsg = 'Please enter a positive integer for `n`.';
      expect(badInput).to.throw(errMsg).with.property('name', 'InputException');
    });

    it('Returns an error message for a non-numeric input', () => {
      const badInput = () => getFirstNDigitsOfSum('5');
      const errMsg = 'Please enter a positive integer for `n`.';
      expect(badInput).to.throw(errMsg).with.property('name', 'InputException');
    });
  });
});
