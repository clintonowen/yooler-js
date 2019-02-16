'use strict';

/**
 * ========== PROBLEM 5: Smallest multiple ==========
 * 2520 is the smallest number that can be divided by each of the numbers from
 * 1 to 10 without any remainder.
 *
 * What is the smallest positive number that is evenly divisible by all of the
 * numbers from 1 to 20?
 */

/**
 * ========== MY THOUGHTS ==========
 * If a number is divisible by 10, then it's also divisible by 5 & 2.
 * If a number is divisible by 9, then it's also divisible by 3.
 * If a number is divisible by 8, then it's also divisible by 4 & 2.
 * If a number is divisible by 6, then it's also divisible by 3 & 2.
 * 1 * 2 * 3 * 3 * 4 * 5 * 7      = 2520
 * A combination of the above numbers can produce any number from 1 to 10.
 * 1 * 2 * 2 * 2 * 3 * 3 * 5 * 7  = 2520
 * 1 * 2^3 * 3^2 * 5 * 7          = 2520
 * 1 * 8 * 9 * 5 * 7              = 2520
 *
 * If a number is divisible by 20, then it's also divisible by 10, 5, 4, & 2.
 * If a number is divisible by 18, then it's also divisible by 9, 6, 3, & 2.
 * If a number is divisible by 16, then it's also divisible by 8 & 2.
 * If a number is divisible by 15, then it's also divisble by 5 & 3.
 * If a number is divisible by 14, then it's also divisible by 7 & 2.
 * If a number is divisible by 12, then it's also divisible by 6, 4, 3, & 2.
 * 1 * 2 * 2 * 3 * 3 * 4 * 5 * 7 * 11 * 13 * 17 * 19      = 232792560
 * A combination of the above numbers can produce any number from 1 to 20.
 * 1 * 2 * 2 * 2 * 2 * 3 * 3 * 5 * 7 * 11 * 13 * 17 * 19  = 232792560
 * 1 * 2^4 * 3^2 * 5 * 7 * 11 * 13 * 17 * 19              = 232792560
 * 1 * 16 * 9 * 5 * 7 * 11 * 13 * 17 * 19                 = 232792560
 */

/**
 * ========== PSEUDOCODE ==========
 * Initialize an empty array of `numbers`
 * Iterate from `low` to `high`, adding any prime numbers to `numbers`
 * Iterate through `numbers` and for each `number`:
 *  Find the highest exponent which will produce a number <= `high`
 *  Replace `number` with the value of itself raised to the highest exponent
 * Find and return the product of all numbers in the array
 */

function InputException (message) {
  this.message = message;
  this.name = 'InputException';
}

function isPrime (n) {
  // console.log(`Checking if ${n} is prime.`);
  if (n < 2) {
    return false;
  }
  let prime = true;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      prime = false;
      break;
    }
  }
  return prime;
}

function getSmallestMultiple (low, high) {
  // Validate the input
  if (!low || !high ||
    low < 1 || high < 1 ||
    !Number.isInteger(low) || !Number.isInteger(high)) {
    throw new InputException('Please enter positive integers for `low` and `high`.');
  }
  if (low >= high) {
    throw new InputException('`low` must be less than `high`.');
  }

  const primes = [];

  for (let i = low; i <= high; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }

  const numbers = primes.map(n => {
    let exponent = 1;
    while (n ** exponent <= high) {
      exponent++;
    }
    exponent--;
    return n ** exponent;
  });

  const product = numbers.reduce((product, n) => product * n, 1);

  return `The smallest positive number that is evenly divisible by all of the numbers from ${low} to ${high} is ${product}.`;
}

/* ========== INVALID INPUTS ========== */
// console.log(getSmallestMultiple());
// console.log(getSmallestMultiple(1));
// console.log(getSmallestMultiple(-1, 10));
// console.log(getSmallestMultiple(1.5, 10));
// console.log(getSmallestMultiple(1, '10'));
// console.log(getSmallestMultiple(10, 1));

/* ========== VALID INPUTS ========== */
// console.log(getSmallestMultiple(1, 3));
// console.log(getSmallestMultiple(1, 15));

/* ========== TEST CASE ========== */
// console.log(getSmallestMultiple(1, 10)); // => 2520

/* ========== SOLUTION ========== */
// console.log(getSmallestMultiple(1, 20)); // => 232792560

module.exports = getSmallestMultiple;
