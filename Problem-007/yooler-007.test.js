/* global describe it */
'use strict';

const chai = require('chai');
const getSumSquareDiff = require('./yooler-007.js');
const expect = chai.expect;

describe('Problem 7', () => {
  describe('With a valid input:', () => {
    it('Returns the correct solution', () => {
      const answer = getSumSquareDiff(6);
      expect(answer).to.equal('The 6th prime number is 13.');
    });
  });

  describe('With an invalid input:', () => {
    it('Returns an error message for no input', () => {
      const badInput = () => getSumSquareDiff();
      const errMsg = 'Please enter a positive integer for `n`.';
      expect(badInput).to.throw(errMsg).with.property('name', 'InputException');
    });

    it('Returns an error message for a negative input', () => {
      const badInput = () => getSumSquareDiff(-6);
      const errMsg = 'Please enter a positive integer for `n`.';
      expect(badInput).to.throw(errMsg).with.property('name', 'InputException');
    });

    it('Returns an error message for a non-integer input', () => {
      const badInput = () => getSumSquareDiff(6.33);
      const errMsg = 'Please enter a positive integer for `n`.';
      expect(badInput).to.throw(errMsg).with.property('name', 'InputException');
    });

    it('Returns an error message for a non-numeric input', () => {
      const badInput = () => getSumSquareDiff('6');
      const errMsg = 'Please enter a positive integer for `n`.';
      expect(badInput).to.throw(errMsg).with.property('name', 'InputException');
    });
  });
});
