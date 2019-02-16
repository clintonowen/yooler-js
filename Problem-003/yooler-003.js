'use strict';

/**
 * ========== PROBLEM 3: Largest prime factor ==========
 * The prime factors of 13195 are 5, 7, 13 and 29.
 *
 * What is the largest prime factor of the number 600851475143 ?
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

function isFactor (n, x) {
  // console.log(`Checking if ${x} is a factor of ${n}.`);
  return n % x === 0;
}

function getLargestPrimeFactor (n) {
  // Validate the inputs
  if (!n || n < 0 || !Number.isInteger(n)) {
    throw new InputException('Please enter a positive integer for `n`.');
  }

  for (let i = Math.floor(Math.sqrt(n)); i > 1; i--) {
    if (isFactor(n, i) && isPrime(i)) {
      return `The largest prime factor of ${n} is ${i}.`;
    }
    // console.log(`Moving on from ${i}.`);
  }

  return `No prime factors of ${n} were found.`;
}

/* ========== INVALID INPUTS ========== */
// console.log(getLargestPrimeFactor());
// console.log(getLargestPrimeFactor(-13195));
// console.log(getLargestPrimeFactor(13195.33));
// console.log(getLargestPrimeFactor('13195'));

/* ========== VALID INPUTS ========== */
// console.log(getLargestPrimeFactor(29));

/* ========== TEST CASE ========== */
// console.log(getLargestPrimeFactor(13195)); // => 29

/* ========== SOLUTION ========== */
console.log(getLargestPrimeFactor(600851475143)); // => 6857

module.exports = getLargestPrimeFactor;
