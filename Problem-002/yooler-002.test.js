/* global describe it */
'use strict';

// import sumOfMultiples from './yooler-001.js';
const chai = require('chai');
const sumOfFibonacciEvens = require('./yooler-002.js');
const expect = chai.expect;

describe('Problem 2', () => {
  describe('With a valid input:', () => {
    it('Returns the correct solution, given a valid input', () => {
      const answer = sumOfFibonacciEvens(90);
      expect(answer).to.equal('The sum of the even-valued terms in the Fibonacci sequence whose values do not exceed 90 is 44.');
    });
  });

  describe('With an invalid input:', () => {
    it('Returns an error message for a missing input', () => {
      const badInput = () => sumOfFibonacciEvens();
      const errMsg = 'Please enter a positive integer for the `upperLimit`.';
      expect(badInput).to.throw(errMsg).with.property('name', 'InputException');
    });

    it('Returns an error message for a negative input', () => {
      const badInput = () => sumOfFibonacciEvens(-90);
      const errMsg = 'Please enter a positive integer for the `upperLimit`.';
      expect(badInput).to.throw(errMsg).with.property('name', 'InputException');
    });

    it('Returns an error message for a non-integer input', () => {
      const badInput = () => sumOfFibonacciEvens(90.33);
      const errMsg = 'Please enter a positive integer for the `upperLimit`.';
      expect(badInput).to.throw(errMsg).with.property('name', 'InputException');
    });

    it('Returns an error message for a non-numeric input', () => {
      const badInput = () => sumOfFibonacciEvens('90');
      const errMsg = 'Please enter a positive integer for the `upperLimit`.';
      expect(badInput).to.throw(errMsg).with.property('name', 'InputException');
    });
  });
});
