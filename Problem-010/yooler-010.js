'use strict';

/**
 * ========== PROBLEM 10: Summation of primes ==========
 * The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
 *
 * Find the sum of all the primes below two million.
 */

/**
 * ========== MY THOUGHTS ==========
 * I already have a pretty good `isPrime` function from earlier problems, so
 * I'll use that to iterate up to two million, keeping a running `sum` as I go.
 */

function InputException (message) {
  this.message = message;
  this.name = 'InputException';
}

function isPrime (n, primes) {
  // console.log(`Checking if ${n} is prime.`);
  if (n < 2) {
    return false;
  }
  for (let i = 0; primes[i] <= Math.sqrt(n); i++) {
    if (n % primes[i] === 0) {
      return false;
    }
  }
  return true;
}

function sumPrimes (n) {
  // Validate the input
  if (!n || n < 1 || !Number.isInteger(n)) {
    throw new InputException('Please enter a positive integer for `n`.');
  }

  if (n < 2) {
    return `No primes found below ${n}.`;
  } else if (n === 2) {
    return 'The sum of all primes below 2 is 2.';
  }

  const primes = [2];
  let sum = 2;

  for (let i = 3; i < n; i += 2) {
    if (isPrime(i, primes)) {
      primes.push(i);
      sum += i;
    }
  }

  return `The sum of all primes below ${n} is ${sum}.`;
}

/* ========== INVALID INPUTS ========== */
// console.log(sumPrimes());
// console.log(sumPrimes(-10));
// console.log(sumPrimes(10.33));
// console.log(sumPrimes('10'));

/* ========== VALID INPUTS ========== */
// console.log(sumPrimes(1));
// console.log(sumPrimes(2));
// console.log(sumPrimes(100));
// console.log(sumPrimes(1000));

/* ========== TEST CASE ========== */
// console.log(sumPrimes(10)); // => 17

/* ========== SOLUTION ========== */
console.time();
console.log(sumPrimes(2000000)); // => 142913828922
console.timeEnd();

module.exports = sumPrimes;
