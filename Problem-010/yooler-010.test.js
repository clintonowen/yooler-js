/* global describe it */
'use strict';

const chai = require('chai');
const findPyTri = require('./yooler-010.js');
const expect = chai.expect;

describe('Problem 10', () => {
  describe('With a valid input:', () => {
    it('Returns the correct solution', () => {
      const answer = findPyTri(10);
      expect(answer).to.equal('The sum of all primes below 10 is 17.');
    });

    it('Returns a message stating that no solution exists when applicable', () => {
      const answer = findPyTri(1);
      expect(answer).to.equal('No primes found below 1.');
    });
  });

  describe('With an invalid input:', () => {
    it('Returns an error message for no input', () => {
      const badInput = () => findPyTri();
      const errMsg = 'Please enter a positive integer for `n`.';
      expect(badInput).to.throw(errMsg).with.property('name', 'InputException');
    });

    it('Returns an error message for a negative input', () => {
      const badInput = () => findPyTri(-1000);
      const errMsg = 'Please enter a positive integer for `n`.';
      expect(badInput).to.throw(errMsg).with.property('name', 'InputException');
    });

    it('Returns an error message for a non-integer input', () => {
      const badInput = () => findPyTri(1000.33);
      const errMsg = 'Please enter a positive integer for `n`.';
      expect(badInput).to.throw(errMsg).with.property('name', 'InputException');
    });

    it('Returns an error message for a non-numeric input', () => {
      const badInput = () => findPyTri('1000');
      const errMsg = 'Please enter a positive integer for `n`.';
      expect(badInput).to.throw(errMsg).with.property('name', 'InputException');
    });
  });
});
