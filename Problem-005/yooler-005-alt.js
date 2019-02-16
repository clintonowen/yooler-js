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
 * After reading about least common multiples (LCM), I believe this problem
 * could be solved by coming up with a formula to find the LCM of two numbers
 * and then applying that formula recursively to every number in the range.
 *
 * For example:
 * LCM(1,2) = 2
 * LCM(LCM(1,2),3) = 6
 * LCM(LCM(LCM(1,2),3),4) = 12
 * LCM(LCM(LCM(LCM(1,2),3),4),5) = 60
 * and so on...
 */

/**
 * ========== PSEUDOCODE ==========
 * LCM (low, mid, high)
 *  If mid === `high` (base case):
 *    Return `low`
 *  Find the factors of `low` and `mid`
 *  Find the greatest common factor (GCF)
 *  Return LCM((`low` * `mid`) / `GCF`), `mid` + 1, `high`)
 */

function InputException (message) {
  this.message = message;
  this.name = 'InputException';
}

function getFactors (n) {
  let factors = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      factors.push(i);
    }
  }
  return factors;
}

function getLCM (low, mid, high) {
  if (mid === high) {
    return low;
  }
  const lowFactors = getFactors(low);
  const midFactors = getFactors(mid);
  let GCF;
  for (let i = lowFactors.length - 1; i >= 0; i--) {
    if (midFactors.includes(lowFactors[i])) {
      GCF = lowFactors[i];
      break;
    }
  }
  return getLCM((low * mid) / GCF, mid + 1, high);
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

  const LCM = getLCM(low, low + 1, high);

  return `The smallest positive number that is evenly divisible by all of the numbers from ${low} to ${high} is ${LCM}.`;
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
console.log(getSmallestMultiple(1, 20)); // => 232792560

module.exports = getSmallestMultiple;
