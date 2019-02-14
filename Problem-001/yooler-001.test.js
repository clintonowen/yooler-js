/* global describe it */
'use strict';

// import sumOfMultiples from './yooler-001.js';
const chai = require('chai');
const sumOfMultiples = require('./yooler-001.js');
const expect = chai.expect;

describe('Problem 1', () => {
  describe('With valid inputs:', () => {
    it('Returns the correct solution, given valid inputs', () => {
      const answer = sumOfMultiples(10, [3, 5]);
      expect(answer).to.equal('The sum of all multiples of 3 or 5 below 10 is 23.');
    });
  });

  describe('With invalid `upperLimit`:', () => {
    it('Returns an error message for a missing `upperLimit`', () => {
      const badInput = () => sumOfMultiples();
      const errMsg = 'Please enter a positive integer for the `upperLimit`.';
      expect(badInput).to.throw(errMsg).with.property('name', 'InputException');
    });

    it('Returns an error message for a negative `upperLimit`', () => {
      const badInput = () => sumOfMultiples(-20, [3, 5]);
      const errMsg = 'Please enter a positive integer for the `upperLimit`.';
      expect(badInput).to.throw(errMsg).with.property('name', 'InputException');
    });

    it('Returns an error message for a non-integer `upperLimit`', () => {
      const badInput = () => sumOfMultiples(1000.33, [3, 5]);
      const errMsg = 'Please enter a positive integer for the `upperLimit`.';
      expect(badInput).to.throw(errMsg).with.property('name', 'InputException');
    });

    it('Returns an error message for a non-numeric `upperLimit`', () => {
      const badInput = () => sumOfMultiples('1000', [3, 5]);
      const errMsg = 'Please enter a positive integer for the `upperLimit`.';
      expect(badInput).to.throw(errMsg).with.property('name', 'InputException');
    });
  });

  describe('With invalid `multiples`:', () => {
    it('Returns an error message for a missing `multiples`', () => {
      const badInput = () => sumOfMultiples(1000);
      const errMsg = 'Please enter an array of positive integers for `multiples`.';
      expect(badInput).to.throw(errMsg).with.property('name', 'InputException');
    });

    it('Returns an error message for an empty `multiples`', () => {
      const badInput = () => sumOfMultiples(1000, []);
      const errMsg = 'Please enter an array of positive integers for `multiples`.';
      expect(badInput).to.throw(errMsg).with.property('name', 'InputException');
    });

    it('Returns an error message for a non-array `multiples`', () => {
      const badInput = () => sumOfMultiples(1000, 5);
      const errMsg = 'Please enter an array of positive integers for `multiples`.';
      expect(badInput).to.throw(errMsg).with.property('name', 'InputException');
    });

    it('Returns an error message for a negative value in `multiples`', () => {
      const badInput = () => sumOfMultiples(1000, [-3, 5]);
      const errMsg = 'Please enter an array of positive integers for `multiples`.';
      expect(badInput).to.throw(errMsg).with.property('name', 'InputException');
    });

    it('Returns an error message for a non-integer value in `multiples`', () => {
      const badInput = () => sumOfMultiples(1000, [3, 5.25]);
      const errMsg = 'Please enter an array of positive integers for `multiples`.';
      expect(badInput).to.throw(errMsg).with.property('name', 'InputException');
    });

    it('Returns an error message for a non-numeric value in `multiples`', () => {
      const badInput = () => sumOfMultiples(1000, [3, true]);
      const errMsg = 'Please enter an array of positive integers for `multiples`.';
      expect(badInput).to.throw(errMsg).with.property('name', 'InputException');
    });
  });
});
