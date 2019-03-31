'use strict';

/**
 * ========== PROBLEM 21: Amicable numbers ==========
 * Let d(n) be defined as the sum of proper divisors of n (numbers less than n
 * which divide evenly into n).
 * If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair
 * and each of a and b are called amicable numbers.
 *
 * For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44,
 * 55 and 110; therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4,
 * 71 and 142; so d(284) = 220.
 *
 * Evaluate the sum of all the amicable numbers under 10000.
 */

/**
 * ========== MY THOUGHTS ==========
 */

function InputException (message) {
  this.message = message;
  this.name = 'InputException';
}

function sumAmicableNums (n) {
  // Validate the input
  if (!n || n < 1 || !Number.isInteger(n)) {
    throw new InputException('Please enter a positive integer greater than 0.');
  }

  let sum = 0;

  return `The sum of all the amicable numbers under ${n} is ${sum}.`;
}

/* ========== INVALID INPUTS ========== */
// console.log(sumAmicableNums());
// console.log(sumAmicableNums(-10));
// console.log(sumAmicableNums(10.33));
// console.log(sumAmicableNums('10'));
// console.log(sumAmicableNums(0));

/* ========== VALID INPUTS ========== */
console.log(sumAmicableNums(10)); // => ?

/* ========== SOLUTION ========== */
// console.time();
// console.log(sumAmicableNums(10000)); // => ?
// console.timeEnd();

module.exports = sumAmicableNums;
