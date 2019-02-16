'use strict';

/**
 * ========== PROBLEM 6: Sum square difference ==========
 * The sum of the squares of the first ten natural numbers is,
 *      1^2 + 2^2 + ... + 10^2 = 385
 *
 * The square of the sum of the first ten natural numbers is,
 *      (1 + 2 + ... + 10)^2 = 55^2 = 3025
 *
 * Hence the difference between the sum of the squares of the first ten
 * natural numbers and the square of the sum is 3025 − 385 = 2640.
 *
 * Find the difference between the sum of the squares of the first one hundred
 * natural numbers and the square of the sum.
 */

/**
 * ========== MY THOUGHTS ==========
 *    1^2 + 2^2 + 3^2
 *  = 1x1 + 2x2 + 3x3
 *  = 14
 *
 *    (1+2+3)^2
 *  = (1+2+3) x (1+2+3)
 *  = 1(1+2+3) + 2(1+2+3) + 3(1+2+3)
 *  = 1x1+1x2+1x3 + 2x1+2x2+2x3 + 3x1+3x2+3x3
 *  = 36
 *
 * The difference could be found by finding the sum of every number multiplied
 * by every other number (excluding itself):
 * Difference = 1x2+1x3 + 2x1+2x3 + 3x1+3x2 = 22
 */

function InputException (message) {
  this.message = message;
  this.name = 'InputException';
}

function multiplyAndAddOthers (n, upperLimit) {
  let sum = 0;
  for (let i = 1; i <= upperLimit; i++) {
    if (i !== n) {
      sum += i * n;
    }
  }
  return sum;
}

function getSumSquareDiff (upperLimit) {
  // Validate the input
  if (!upperLimit || upperLimit < 1 || !Number.isInteger(upperLimit)) {
    throw new InputException('Please enter a positive integer for `upperLimit`.');
  }

  let diff = 0;
  for (let i = 1; i <= upperLimit; i++) {
    diff += multiplyAndAddOthers(i, upperLimit);
  }

  return `The difference between the sum of the squares and the square of the sum of the first ${upperLimit} natural numbers is ${diff}.`;
}

/* ========== INVALID INPUTS ========== */
// console.log(getSumSquareDiff());
// console.log(getSumSquareDiff(-10));
// console.log(getSumSquareDiff(10.33));
// console.log(getSumSquareDiff(10'));

/* ========== VALID INPUTS ========== */
// console.log(getSumSquareDiff(3));

/* ========== TEST CASE ========== */
// console.log(getSumSquareDiff(10)); // => 2640

/* ========== SOLUTION ========== */
console.log(getSumSquareDiff(100)); // => 25164150

module.exports = getSumSquareDiff;
