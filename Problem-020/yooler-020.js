'use strict';

/**
 * ========== PROBLEM 20: Factorial digit sum ==========
 * n! means n × (n − 1) × ... × 3 × 2 × 1
 *
 * For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
 * and the sum of the digits in the number 10! is
 * 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.
 *
 * Find the sum of the digits in the number 100!
 */

/**
 * ========== MY THOUGHTS ==========
 */

function InputException (message) {
  this.message = message;
  this.name = 'InputException';
}

function sumFactorialDigits (n) {
  // Validate the input
  if (!n || n < 1 || !Number.isInteger(n)) {
    throw new InputException('Please enter a positive integer greater than 0.');
  }

  let sum = 0;

  return `The sum of the digits in the number ${n}! is ${sum}.`;
}

/* ========== INVALID INPUTS ========== */
// console.log(sumFactorialDigits());
// console.log(sumFactorialDigits(-10));
// console.log(sumFactorialDigits(10.33));
// console.log(sumFactorialDigits('10'));
// console.log(sumFactorialDigits(0));

/* ========== VALID INPUTS ========== */
console.log(sumFactorialDigits(10)); // => 27

/* ========== SOLUTION ========== */
// console.time();
// console.log(sumFactorialDigits(100)); // => ?
// console.timeEnd();

module.exports = sumFactorialDigits;
