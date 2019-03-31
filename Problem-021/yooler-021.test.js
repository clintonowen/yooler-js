/* global describe it */
'use strict';

const chai = require('chai');
const sumAmicableNums = require('./yooler-021.js');
const expect = chai.expect;

describe('Problem 21', () => {
  describe('With a valid input:', () => {
    it('Returns the correct solution for a valid input', () => {
      const answer = sumAmicableNums(10);
      expect(answer).to.equal('The sum of all the amicable numbers under 10 is ?.');
    });
  });

  describe('With an invalid input:', () => {
    it('Returns an error message for no input', () => {
      const badInput = () => sumAmicableNums();
      const errMsg = 'Please enter a positive integer greater than 0.';
      expect(badInput).to.throw(errMsg).with.property('name', 'InputException');
    });

    it('Returns an error message for a negative input', () => {
      const badInput = () => sumAmicableNums(-10);
      const errMsg = 'Please enter a positive integer greater than 0.';
      expect(badInput).to.throw(errMsg).with.property('name', 'InputException');
    });

    it('Returns an error message for a non-integer input', () => {
      const badInput = () => sumAmicableNums(10.33);
      const errMsg = 'Please enter a positive integer greater than 0.';
      expect(badInput).to.throw(errMsg).with.property('name', 'InputException');
    });

    it('Returns an error message for a non-numeric input', () => {
      const badInput = () => sumAmicableNums('10');
      const errMsg = 'Please enter a positive integer greater than 0.';
      expect(badInput).to.throw(errMsg).with.property('name', 'InputException');
    });

    it('Returns an error message for an input of 0', () => {
      const badInput = () => sumAmicableNums(0);
      const errMsg = 'Please enter a positive integer greater than 0.';
      expect(badInput).to.throw(errMsg).with.property('name', 'InputException');
    });
  });
});
