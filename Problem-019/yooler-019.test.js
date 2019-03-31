/* global describe it */
'use strict';

const chai = require('chai');
const countFirstSundays = require('./yooler-019.js');
const expect = chai.expect;

describe('Problem 19', () => {
  it('Returns the correct solution', () => {
    const answer = countFirstSundays();
    expect(answer).to.equal('During the twentieth century (1 Jan 1901 to 31 Dec 2000), 171 Sundays fell on the first of the month.');
  });
});
