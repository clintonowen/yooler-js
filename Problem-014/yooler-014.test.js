/* global describe it */
'use strict';

const chai = require('chai');
const getFirstNDigitsOfSum = require('./yooler-014.js');
const expect = chai.expect;

describe('Problem 14', () => {
  describe('With a valid input:', () => {
    it('Returns the correct solution for a valid input', () => {
      const answer = getFirstNDigitsOfSum(100);
      expect(answer).to.equal('The starting number (under 100) which produces the longest Collatz sequence is 97.');
    });
  });

  describe('With an invalid input:', () => {
    it('Returns an error message for no input', () => {
      const badInput = () => getFirstNDigitsOfSum();
      const errMsg = 'Please enter a positive integer higher than 1 for `max`.';
      expect(badInput).to.throw(errMsg).with.property('name', 'InputException');
    });

    it('Returns an error message for a negative input', () => {
      const badInput = () => getFirstNDigitsOfSum(-1000);
      const errMsg = 'Please enter a positive integer higher than 1 for `max`.';
      expect(badInput).to.throw(errMsg).with.property('name', 'InputException');
    });

    it('Returns an error message for a non-integer input', () => {
      const badInput = () => getFirstNDigitsOfSum(1000.33);
      const errMsg = 'Please enter a positive integer higher than 1 for `max`.';
      expect(badInput).to.throw(errMsg).with.property('name', 'InputException');
    });

    it('Returns an error message for a non-numeric input', () => {
      const badInput = () => getFirstNDigitsOfSum('1000');
      const errMsg = 'Please enter a positive integer higher than 1 for `max`.';
      expect(badInput).to.throw(errMsg).with.property('name', 'InputException');
    });

    it('Returns an error message for an input of 1', () => {
      const badInput = () => getFirstNDigitsOfSum(1);
      const errMsg = 'Please enter a positive integer higher than 1 for `max`.';
      expect(badInput).to.throw(errMsg).with.property('name', 'InputException');
    });
  });
});
