/* global describe it */
'use strict';

const chai = require('chai');
const getLargestPalindrome = require('./yooler-004.js');
const expect = chai.expect;

describe('Problem 4', () => {
  describe('With a valid input:', () => {
    it('Returns the correct solution when one exists', () => {
      const answer = getLargestPalindrome(2);
      expect(answer).to.equal('The largest palindrome made from the product of two 2-digit numbers is 9009 (99 * 91).');
    });

    it('Returns a message stating that no solution exists when applicable', () => {
      const answer = getLargestPalindrome(1);
      expect(answer).to.equal('No palindromes were found from the product of two 1-digit numbers.');
    });
  });

  describe('With an invalid input:', () => {
    it('Returns an error message for a missing input', () => {
      const badInput = () => getLargestPalindrome();
      const errMsg = 'Please enter a positive integer for `digits`.';
      expect(badInput).to.throw(errMsg).with.property('name', 'InputException');
    });

    it('Returns an error message for a negative input', () => {
      const badInput = () => getLargestPalindrome(-3);
      const errMsg = 'Please enter a positive integer for `digits`.';
      expect(badInput).to.throw(errMsg).with.property('name', 'InputException');
    });

    it('Returns an error message for a non-integer input', () => {
      const badInput = () => getLargestPalindrome(3.33);
      const errMsg = 'Please enter a positive integer for `digits`.';
      expect(badInput).to.throw(errMsg).with.property('name', 'InputException');
    });

    it('Returns an error message for a non-numeric input', () => {
      const badInput = () => getLargestPalindrome('3');
      const errMsg = 'Please enter a positive integer for `digits`.';
      expect(badInput).to.throw(errMsg).with.property('name', 'InputException');
    });
  });
});
