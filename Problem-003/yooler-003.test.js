/* global describe it */
'use strict';

// import sumOfMultiples from './yooler-001.js';
const chai = require('chai');
const getLargestPrimeFactor = require('./yooler-003.js');
const expect = chai.expect;

describe('Problem 3', () => {
  describe('With a valid input:', () => {
    it('Returns the correct solution when one exists', () => {
      const answer = getLargestPrimeFactor(13195);
      expect(answer).to.equal('The largest prime factor of 13195 is 29.');
    });

    it('Returns a message stating that no solution exists when applicable', () => {
      const answer = getLargestPrimeFactor(29);
      expect(answer).to.equal('No prime factors of 29 were found.');
    });
  });

  describe('With an invalid input:', () => {
    it('Returns an error message for a missing input', () => {
      const badInput = () => getLargestPrimeFactor();
      const errMsg = 'Please enter a positive integer for `n`.';
      expect(badInput).to.throw(errMsg).with.property('name', 'InputException');
    });

    it('Returns an error message for a negative input', () => {
      const badInput = () => getLargestPrimeFactor(-13195);
      const errMsg = 'Please enter a positive integer for `n`.';
      expect(badInput).to.throw(errMsg).with.property('name', 'InputException');
    });

    it('Returns an error message for a non-integer input', () => {
      const badInput = () => getLargestPrimeFactor(13195.33);
      const errMsg = 'Please enter a positive integer for `n`.';
      expect(badInput).to.throw(errMsg).with.property('name', 'InputException');
    });

    it('Returns an error message for a non-numeric input', () => {
      const badInput = () => getLargestPrimeFactor('13195');
      const errMsg = 'Please enter a positive integer for `n`.';
      expect(badInput).to.throw(errMsg).with.property('name', 'InputException');
    });
  });
});
