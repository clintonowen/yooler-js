/* global describe it */
'use strict';

const chai = require('chai');
const countNumLetters = require('./yooler-017.js');
const expect = chai.expect;

describe('Problem 17', () => {
  describe('With a valid input:', () => {
    it('Returns the correct solution for a valid input', () => {
      const answer = countNumLetters(5);
      expect(answer).to.equal('If all the numbers from 1 to 5 inclusive were written out in words, 19 letters would be used.');
    });
  });

  describe('With an invalid input:', () => {
    it('Returns an error message for no input', () => {
      const badInput = () => countNumLetters();
      const errMsg = 'Please enter a positive integer greater than 0 for `n`.';
      expect(badInput).to.throw(errMsg).with.property('name', 'InputException');
    });

    it('Returns an error message for a negative input', () => {
      const badInput = () => countNumLetters(-1000);
      const errMsg = 'Please enter a positive integer greater than 0 for `n`.';
      expect(badInput).to.throw(errMsg).with.property('name', 'InputException');
    });

    it('Returns an error message for a non-integer input', () => {
      const badInput = () => countNumLetters(1000.33);
      const errMsg = 'Please enter a positive integer greater than 0 for `n`.';
      expect(badInput).to.throw(errMsg).with.property('name', 'InputException');
    });

    it('Returns an error message for a non-numeric input', () => {
      const badInput = () => countNumLetters('1000');
      const errMsg = 'Please enter a positive integer greater than 0 for `n`.';
      expect(badInput).to.throw(errMsg).with.property('name', 'InputException');
    });

    it('Returns an error message for an input of 0', () => {
      const badInput = () => countNumLetters(0);
      const errMsg = 'Please enter a positive integer greater than 0 for `n`.';
      expect(badInput).to.throw(errMsg).with.property('name', 'InputException');
    });
  });
});
