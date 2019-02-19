/* global describe it */
'use strict';

const chai = require('chai');
const getLargestGridProduct = require('./yooler-011.js');
const expect = chai.expect;

describe('Problem 11', () => {
  it('Returns the correct solution', () => {
    const answer = getLargestGridProduct(10);
    expect(answer).to.equal('The greatest product of four adjacent numbers is 70600674.');
  });
});
