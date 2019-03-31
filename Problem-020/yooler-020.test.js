/* global describe it */
'use strict';

const chai = require('chai');
const sumFactorialDigits = require('./yooler-020.js');
const expect = chai.expect;

describe('Problem 20', () => {
  describe('With a valid input:', () => {
    it('Returns the correct solution for a valid input', () => {
      const answer = sumFactorialDigits(10);
      expect(answer).to.equal('The sum of the digits in the number 10! is 27.');
    });
  });

  describe('With an invalid input:', () => {
    it('Returns an error message for no input', () => {
      const badInput = () => sumFactorialDigits();
      const errMsg = 'Please enter a positive integer greater than 0.';
      expect(badInput).to.throw(errMsg).with.property('name', 'InputException');
    });

    it('Returns an error message for a negative input', () => {
      const badInput = () => sumFactorialDigits(-10);
      const errMsg = 'Please enter a positive integer greater than 0.';
      expect(badInput).to.throw(errMsg).with.property('name', 'InputException');
    });

    it('Returns an error message for a non-integer input', () => {
      const badInput = () => sumFactorialDigits(10.33);
      const errMsg = 'Please enter a positive integer greater than 0.';
      expect(badInput).to.throw(errMsg).with.property('name', 'InputException');
    });

    it('Returns an error message for a non-numeric input', () => {
      const badInput = () => sumFactorialDigits('10');
      const errMsg = 'Please enter a positive integer greater than 0.';
      expect(badInput).to.throw(errMsg).with.property('name', 'InputException');
    });

    it('Returns an error message for an input of 0', () => {
      const badInput = () => sumFactorialDigits(0);
      const errMsg = 'Please enter a positive integer greater than 0.';
      expect(badInput).to.throw(errMsg).with.property('name', 'InputException');
    });
  });
});
