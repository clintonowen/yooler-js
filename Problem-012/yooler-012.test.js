/* global describe it */
'use strict';

const chai = require('chai');
const findTriangle = require('./yooler-012.js');
const expect = chai.expect;

describe('Problem 12', () => {
  describe('With a valid input:', () => {
    it('Returns the correct solution', () => {
      const answer = findTriangle(5);
      expect(answer).to.equal('The first triangle number to have over 5 divisors is 28.');
    });
  });

  describe('With an invalid input:', () => {
    it('Returns an error message for no input', () => {
      const badInput = () => findTriangle();
      const errMsg = 'Please enter a positive integer for `n`.';
      expect(badInput).to.throw(errMsg).with.property('name', 'InputException');
    });

    it('Returns an error message for a negative input', () => {
      const badInput = () => findTriangle(-5);
      const errMsg = 'Please enter a positive integer for `n`.';
      expect(badInput).to.throw(errMsg).with.property('name', 'InputException');
    });

    it('Returns an error message for a non-integer input', () => {
      const badInput = () => findTriangle(5.33);
      const errMsg = 'Please enter a positive integer for `n`.';
      expect(badInput).to.throw(errMsg).with.property('name', 'InputException');
    });

    it('Returns an error message for a non-numeric input', () => {
      const badInput = () => findTriangle('5');
      const errMsg = 'Please enter a positive integer for `n`.';
      expect(badInput).to.throw(errMsg).with.property('name', 'InputException');
    });
  });
});
