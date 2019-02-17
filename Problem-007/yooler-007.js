'use strict';

/**
 * ========== PROBLEM 7: 10001st prime ==========
 * By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see
 * that the 6th prime is 13.
 *
 * What is the 10 001st prime number?
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

function getNthPrime (n) {
  // Validate the input
  if (!n || n < 1 || !Number.isInteger(n)) {
    throw new InputException('Please enter a positive integer for `n`.');
  }

  if (n === 1) {
    return 'The 1st prime number is 2.';
  }

  let count = 1;
  let i = 3;
  while (count < n) {
    if (isPrime(i)) {
      count++;
    }
    i += 2;
  }

  let suffix = 'th';
  let lastDigit = n.toString()[n.toString().length - 1];
  if (n !== 11 && lastDigit === '1') {
    suffix = 'st';
  } else if (n !== 12 && lastDigit === '2') {
    suffix = 'nd';
  } else if (n !== 13 && lastDigit === '3') {
    suffix = 'rd';
  }

  return `The ${n}${suffix} prime number is ${i - 2}.`;
}

/* ========== INVALID INPUTS ========== */
// console.log(getNthPrime());
// console.log(getNthPrime(-6));
// console.log(getNthPrime(6.33));
// console.log(getNthPrime('6'));

/* ========== VALID INPUTS ========== */
// console.log(getNthPrime(1));
// console.log(getNthPrime(2));
// console.log(getNthPrime(3));
// console.log(getNthPrime(11));
// console.log(getNthPrime(12));
// console.log(getNthPrime(13));
// console.log(getNthPrime(21));
// console.log(getNthPrime(22));
// console.log(getNthPrime(23));
// console.log(getNthPrime(10));
// console.log(getNthPrime(100));
// console.log(getNthPrime(1000));
// console.log(getNthPrime(10000));
// console.log(getNthPrime(100000));
// console.log(getNthPrime(1000000));

/* ========== TEST CASE ========== */
// console.log(getNthPrime(6)); // => 13

/* ========== SOLUTION ========== */
console.log(getNthPrime(10001)); // => 104743

module.exports = getNthPrime;
