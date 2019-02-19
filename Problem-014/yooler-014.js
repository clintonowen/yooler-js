'use strict';

/**
 * ========== PROBLEM 14: Longest Collatz sequence ==========
 * The following iterative sequence is defined for the set of positive integers:
 *      n → n/2 (n is even)
 *      n → 3n + 1 (n is odd)
 *
 * Using the rule above and starting with 13, we generate the following
 * sequence:
 *          13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
 * It can be seen that this sequence (starting at 13 and finishing at 1)
 * contains 10 terms. Although it has not been proved yet (Collatz Problem), it
 * is thought that all starting numbers finish at 1.
 *
 * Which starting number, under one million, produces the longest chain?
 *
 * NOTE: Once the chain starts the terms are allowed to go above one million.
 */

function InputException (message) {
  this.message = message;
  this.name = 'InputException';
}

function findLongestCollatz (max) {
  // Validate the input
  if (!max || max <= 1 || !Number.isInteger(max)) {
    throw new InputException('Please enter a positive integer higher than 1 for `max`.');
  }

  let maxStart = null;
  let maxChain = [];

  for (let start = 1; start < max; start++) {
    let chain = [];
    let j = start;
    while (j !== 1) {
      chain.push(j);
      if (j % 2 === 0) {
        j = j / 2;
      } else {
        j = 3 * j + 1;
      }
    }
    chain.push(1);
    if (chain.length > maxChain.length) {
      maxStart = start;
      maxChain = chain;
    }
  }

  return `The starting number (under ${max}) which produces the longest Collatz sequence is ${maxStart}.`;
}

/* ========== INVALID INPUTS ========== */
// console.log(findLongestCollatz());
// console.log(findLongestCollatz(-1000));
// console.log(findLongestCollatz(1000.33));
// console.log(findLongestCollatz('1000'));
// console.log(findLongestCollatz(1));

/* ========== VALID INPUTS ========== */
// console.log(findLongestCollatz(100));
// console.log(findLongestCollatz(1000));

/* ========== SOLUTION ========== */
console.log(findLongestCollatz(1000000)); // => 837799

module.exports = findLongestCollatz;
