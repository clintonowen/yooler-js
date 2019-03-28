'use strict';

/**
 * ========== PROBLEM 17: Number letter counts ==========
 * If the numbers 1 to 5 are written out in words: one, two, three, four, five
 * then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.
 *
 * If all the numbers from 1 to 1000 (one thousand) inclusive were written out
 * in words, how many letters would be used?
 *
 * NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and
 * forty-two) contains 23 letters and 115 (one hundred and fifteen) contains
 * 20 letters. The use of "and" when writing out numbers is in compliance with
 * British usage.
 */

/**
 * ========== MY THOUGHTS ==========
 * The first 20 numbers are unique:
 * 1: 3
 * 2: 3
 * 3: 5
 * 4: 4
 * 5: 4
 * 6: 3
 * 7: 5
 * 8: 5
 * 9: 4
 * 10: 3
 * 11: 6
 * 12: 6
 * 13: 8
 * 14: 8
 * 15: 7
 * 16: 7
 * 17: 9
 * 18: 8
 * 19: 8
 * 20: 6
 * As well as the multiples of 10 from 30 to 90:
 * 30: 6
 * 40: 5
 * 50: 5
 * 60: 5
 * 70: 7
 * 80: 6
 * 90: 6
 * The hundreds are combinations of previous numbers plus "hundred" (7) and,
 * for non-multiples of 100, the word "and" (3).
 * The thousands are combinations of previous numbers plus "thousand" (8).
 */

function InputException (message) {
  this.message = message;
  this.name = 'InputException';
}

function countNumLetters (n) {
  // Validate the input
  if (!n || n < 1 || !Number.isInteger(n)) {
    throw new InputException('Please enter a positive integer greater than 0 for `n`.');
  }

  let letters = 0;

  return `If all the numbers from 1 to ${n} inclusive were written out in words, ${letters} letters would be used.`;
}

/* ========== INVALID INPUTS ========== */
// console.log(countNumLetters());
// console.log(countNumLetters(-15));
// console.log(countNumLetters(15.33));
// console.log(countNumLetters('15'));
// console.log(countNumLetters(0));

/* ========== VALID INPUTS ========== */
console.log(countNumLetters(5)); // => 19

/* ========== SOLUTION ========== */
// console.log(countNumLetters(1000)); // => 1366

module.exports = countNumLetters;
