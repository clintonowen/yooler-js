/* global describe it */
'use strict';

const chai = require('chai');
const findTriangle = require('./yooler-012.js');
const expect = chai.expect;

describe('Problem 12', () => {
  describe('With a valid input:', () => {
    it('Returns the correct solution', () => {
      const answer = findTriangle(10);
      expect(answer).to.equal('The sum of all primes below 10 is 17.');
    });

    it('Returns a message stating that no solution exists when applicable', () => {
      const answer = findTriangle(1);
      expect(answer).to.equal('No primes found below 1.');
    });
  });

  describe('With an invalid input:', () => {
    it('Returns an error message for no input', () => {
      const badInput = () => findTriangle();
      const errMsg = 'Please enter a positive integer for `n`.';
      expect(badInput).to.throw(errMsg).with.property('name', 'InputException');
    });

    it('Returns an error message for a negative input', () => {
      const badInput = () => findTriangle(-1000);
      const errMsg = 'Please enter a positive integer for `n`.';
      expect(badInput).to.throw(errMsg).with.property('name', 'InputException');
    });

    it('Returns an error message for a non-integer input', () => {
      const badInput = () => findTriangle(1000.33);
      const errMsg = 'Please enter a positive integer for `n`.';
      expect(badInput).to.throw(errMsg).with.property('name', 'InputException');
    });

    it('Returns an error message for a non-numeric input', () => {
      const badInput = () => findTriangle('1000');
      const errMsg = 'Please enter a positive integer for `n`.';
      expect(badInput).to.throw(errMsg).with.property('name', 'InputException');
    });
  });
});
