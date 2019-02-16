/* global describe it */
'use strict';

const chai = require('chai');
const getSumSquareDiff = require('./yooler-006.js');
const expect = chai.expect;

describe('Problem 6', () => {
  describe('With a valid input:', () => {
    it('Returns the correct solution', () => {
      const answer = getSumSquareDiff(10);
      expect(answer).to.equal('The difference between the sum of the squares and the square of the sum of the first 10 natural numbers is 2640.');
    });
  });

  describe('With an invalid input:', () => {
    it('Returns an error message for no input', () => {
      const badInput = () => getSumSquareDiff();
      const errMsg = 'Please enter a positive integer for `upperLimit`.';
      expect(badInput).to.throw(errMsg).with.property('name', 'InputException');
    });

    it('Returns an error message for a negative input', () => {
      const badInput = () => getSumSquareDiff(-10);
      const errMsg = 'Please enter a positive integer for `upperLimit`.';
      expect(badInput).to.throw(errMsg).with.property('name', 'InputException');
    });

    it('Returns an error message for a non-integer input', () => {
      const badInput = () => getSumSquareDiff(10.33);
      const errMsg = 'Please enter a positive integer for `upperLimit`.';
      expect(badInput).to.throw(errMsg).with.property('name', 'InputException');
    });

    it('Returns an error message for a non-numeric input', () => {
      const badInput = () => getSumSquareDiff('10');
      const errMsg = 'Please enter a positive integer for `upperLimit`.';
      expect(badInput).to.throw(errMsg).with.property('name', 'InputException');
    });
  });
});
