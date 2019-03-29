/* global describe it */
'use strict';

const chai = require('chai');
const findMaxPath = require('./yooler-018.js');
const expect = chai.expect;

describe('Problem 18', () => {
  const testTriangle = [
    [3],
    [7, 4],
    [2, 4, 6],
    [8, 5, 9, 3]
  ];

  describe('With a valid input:', () => {
    it('Returns the correct solution for a valid input', () => {
      const answer = findMaxPath(testTriangle);
      expect(answer).to.equal('The maximum total from top to bottom of the triangle is 23.');
    });
  });

  describe('With an invalid input:', () => {
    it('Returns an error message for no input', () => {
      const badInput = () => findMaxPath();
      const errMsg = 'Please provide a valid array of arrays of positive integers in ascending triangular order.';
      expect(badInput).to.throw(errMsg).with.property('name', 'InputException');
    });

    it('Returns an error message for a non-array input', () => {
      const badInput = () => findMaxPath(3);
      const errMsg = 'Please provide a valid array of arrays of positive integers in ascending triangular order.';
      expect(badInput).to.throw(errMsg).with.property('name', 'InputException');
    });

    it('Returns an error message for an array without sub-arrays', () => {
      const badInput = () => findMaxPath([7, 4]);
      const errMsg = 'Please provide a valid array of arrays of positive integers in ascending triangular order.';
      expect(badInput).to.throw(errMsg).with.property('name', 'InputException');
    });

    it('Returns an error message for arrays in non-triangular order', () => {
      const badInput = () => findMaxPath([[7, 4], [3]]);
      const errMsg = 'Please provide a valid array of arrays of positive integers in ascending triangular order.';
      expect(badInput).to.throw(errMsg).with.property('name', 'InputException');
    });

    it('Returns an error message if a sub-element is not an array', () => {
      const badInput = () => findMaxPath([[3], 7]);
      const errMsg = 'Please provide a valid array of arrays of positive integers in ascending triangular order.';
      expect(badInput).to.throw(errMsg).with.property('name', 'InputException');
    });

    it('Returns an error message for a negative input', () => {
      const badInput = () => findMaxPath([[3], [-7, 4]]);
      const errMsg = 'Please provide a valid array of arrays of positive integers in ascending triangular order.';
      expect(badInput).to.throw(errMsg).with.property('name', 'InputException');
    });

    it('Returns an error message for a non-numeric input', () => {
      const badInput = () => findMaxPath([[3], [7, '4']]);
      const errMsg = 'Please provide a valid array of arrays of positive integers in ascending triangular order.';
      expect(badInput).to.throw(errMsg).with.property('name', 'InputException');
    });
  });
});
