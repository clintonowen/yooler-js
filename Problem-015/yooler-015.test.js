/* global describe it */
'use strict';

const chai = require('chai');
const findLatticePaths = require('./yooler-015.js');
const expect = chai.expect;

describe('Problem 15', () => {
  describe('With a valid input:', () => {
    it('Returns the correct solution for a valid input', () => {
      const answer = findLatticePaths(2);
      expect(answer).to.equal('For a 2x2 grid, there are 6 paths from the top-left to the bottom-right corner (only moving right and down).');
    });
  });

  describe('With an invalid input:', () => {
    it('Returns an error message for no input', () => {
      const badInput = () => findLatticePaths();
      const errMsg = 'Please enter a positive integer greater than 0 for `n`.';
      expect(badInput).to.throw(errMsg).with.property('name', 'InputException');
    });

    it('Returns an error message for a negative input', () => {
      const badInput = () => findLatticePaths(-1000);
      const errMsg = 'Please enter a positive integer greater than 0 for `n`.';
      expect(badInput).to.throw(errMsg).with.property('name', 'InputException');
    });

    it('Returns an error message for a non-integer input', () => {
      const badInput = () => findLatticePaths(1000.33);
      const errMsg = 'Please enter a positive integer greater than 0 for `n`.';
      expect(badInput).to.throw(errMsg).with.property('name', 'InputException');
    });

    it('Returns an error message for a non-numeric input', () => {
      const badInput = () => findLatticePaths('1000');
      const errMsg = 'Please enter a positive integer greater than 0 for `n`.';
      expect(badInput).to.throw(errMsg).with.property('name', 'InputException');
    });

    it('Returns an error message for an input of 0', () => {
      const badInput = () => findLatticePaths(0);
      const errMsg = 'Please enter a positive integer greater than 0 for `n`.';
      expect(badInput).to.throw(errMsg).with.property('name', 'InputException');
    });
  });
});
