/* global describe it */
'use strict';

const chai = require('chai');
const getSmallestMultiple = require('./yooler-005.js');
const expect = chai.expect;

describe('Problem 5, Alternate Solution', () => {
  describe('With valid inputs:', () => {
    it('Returns the correct solution', () => {
      const answer = getSmallestMultiple(1, 10);
      expect(answer).to.equal('The smallest positive number that is evenly divisible by all of the numbers from 1 to 10 is 2520.');
    });
  });

  describe('With invalid inputs:', () => {
    it('Returns an error message for no inputs', () => {
      const badInput = () => getSmallestMultiple();
      const errMsg = 'Please enter positive integers for `low` and `high`.';
      expect(badInput).to.throw(errMsg).with.property('name', 'InputException');
    });

    it('Returns an error message for a missing input', () => {
      const badInput = () => getSmallestMultiple(1);
      const errMsg = 'Please enter positive integers for `low` and `high`.';
      expect(badInput).to.throw(errMsg).with.property('name', 'InputException');
    });

    it('Returns an error message for a negative input', () => {
      const badInput = () => getSmallestMultiple(-1, 10);
      const errMsg = 'Please enter positive integers for `low` and `high`.';
      expect(badInput).to.throw(errMsg).with.property('name', 'InputException');
    });

    it('Returns an error message for a non-integer input', () => {
      const badInput = () => getSmallestMultiple(1.5, 10);
      const errMsg = 'Please enter positive integers for `low` and `high`.';
      expect(badInput).to.throw(errMsg).with.property('name', 'InputException');
    });

    it('Returns an error message for a non-numeric input', () => {
      const badInput = () => getSmallestMultiple(1, '10');
      const errMsg = 'Please enter positive integers for `low` and `high`.';
      expect(badInput).to.throw(errMsg).with.property('name', 'InputException');
    });

    it('Returns an error message when `high` is less than `low`', () => {
      const badInput = () => getSmallestMultiple(10, 1);
      const errMsg = '`low` must be less than `high`.';
      expect(badInput).to.throw(errMsg).with.property('name', 'InputException');
    });
  });
});
