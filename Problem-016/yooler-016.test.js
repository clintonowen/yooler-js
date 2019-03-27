/* global describe it */
'use strict';

const chai = require('chai');
const sumPowerDigits = require('./yooler-016.js');
const expect = chai.expect;

describe('Problem 16', () => {
  describe('With a valid input:', () => {
    it('Returns the correct solution for a valid input', () => {
      const answer = sumPowerDigits(15);
      expect(answer).to.equal('The sum of the digits of the number 2^15 is 26.');
    });
  });

  describe('With an invalid input:', () => {
    it('Returns an error message for no input', () => {
      const badInput = () => sumPowerDigits();
      const errMsg = 'Please enter a positive integer greater than 0 for `n`.';
      expect(badInput).to.throw(errMsg).with.property('name', 'InputException');
    });

    it('Returns an error message for a negative input', () => {
      const badInput = () => sumPowerDigits(-1000);
      const errMsg = 'Please enter a positive integer greater than 0 for `n`.';
      expect(badInput).to.throw(errMsg).with.property('name', 'InputException');
    });

    it('Returns an error message for a non-integer input', () => {
      const badInput = () => sumPowerDigits(1000.33);
      const errMsg = 'Please enter a positive integer greater than 0 for `n`.';
      expect(badInput).to.throw(errMsg).with.property('name', 'InputException');
    });

    it('Returns an error message for a non-numeric input', () => {
      const badInput = () => sumPowerDigits('1000');
      const errMsg = 'Please enter a positive integer greater than 0 for `n`.';
      expect(badInput).to.throw(errMsg).with.property('name', 'InputException');
    });

    it('Returns an error message for an input of 0', () => {
      const badInput = () => sumPowerDigits(0);
      const errMsg = 'Please enter a positive integer greater than 0 for `n`.';
      expect(badInput).to.throw(errMsg).with.property('name', 'InputException');
    });
  });
});
