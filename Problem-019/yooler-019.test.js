/* global describe it */
'use strict';

const chai = require('chai');
const countFirstSundays = require('./yooler-019.js');
const expect = chai.expect;

describe('Problem 19', () => {
  describe('With a valid input:', () => {
    it('Returns the correct solution for a valid input', () => {
      const answer = countFirstSundays('01 Jan 1901', '01 Jan 1902');
      expect(answer).to.equal('Between 01 Jan 1901 and 01 Jan 1902, 2 Sundays fell on the first of the month.');
    });
  });

  describe('With an invalid input:', () => {
    it('Returns an error message for no input', () => {
      const badInput = () => countFirstSundays();
      const errMsg = 'Please provide a valid start and end date in the format: "DD MMM YYYY"';
      expect(badInput).to.throw(errMsg).with.property('name', 'InputException');
    });

    it('Returns an error message for a missing input', () => {
      const badInput = () => countFirstSundays('01 Jan 1901');
      const errMsg = 'Please provide a valid start and end date in the format: "DD MMM YYYY"';
      expect(badInput).to.throw(errMsg).with.property('name', 'InputException');
    });

    it('Returns an error message for a non-string input', () => {
      const badInput = () => countFirstSundays(1901, 2000);
      const errMsg = 'Please provide a valid start and end date in the format: "DD MMM YYYY"';
      expect(badInput).to.throw(errMsg).with.property('name', 'InputException');
    });

    it('Returns an error message for an improperly-formatted day', () => {
      const badInput = () => countFirstSundays('1 Jan 1901', '31 Dec 2000');
      const errMsg = 'Please provide a valid start and end date in the format: "DD MMM YYYY"';
      expect(badInput).to.throw(errMsg).with.property('name', 'InputException');
    });

    it('Returns an error message for an improperly-formatted month', () => {
      const badInput = () => countFirstSundays('01 January 1901', '31 December 2000');
      const errMsg = 'Please provide a valid start and end date in the format: "DD MMM YYYY"';
      expect(badInput).to.throw(errMsg).with.property('name', 'InputException');
    });

    it('Returns an error message for an improperly-formatted year', () => {
      const badInput = () => countFirstSundays('01 Jan 01', '31 Dec 00');
      const errMsg = 'Please provide a valid start and end date in the format: "DD MMM YYYY"';
      expect(badInput).to.throw(errMsg).with.property('name', 'InputException');
    });

    it('Returns an error message for an improperly-ordered date', () => {
      const badInput = () => countFirstSundays('Jan 01 1901', 'Dec 31 2000');
      const errMsg = 'Please provide a valid start and end date in the format: "DD MMM YYYY"';
      expect(badInput).to.throw(errMsg).with.property('name', 'InputException');
    });
  });
});
