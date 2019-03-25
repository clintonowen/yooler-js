'use strict';

/**
 * ========== PROBLEM 15: Lattice paths ==========
 * Starting in the top left corner of a 2×2 grid, and only being able to move
 * to the right and down, there are exactly 6 routes to the bottom right corner.
 *
 * How many such routes are there through a 20×20 grid?
 */

/**
 * ========== MY THOUGHTS ==========
 * Every path has a total of 20 moves to the right (R) and 20 moves down (D),
 * so we need to find every permutation of 20 R's and 20 D's.
 * RRRRRRRRRRRRRRRRRRRRDDDDDDDDDDDDDDDDDDDD
 * RDRDRDRDRDRDRDRDRDRDRDRDRDRDRDRDRDRDRDRD
 * DRDRDRDRDRDRDRDRDRDRDRDRDRDRDRDRDRDRDRDR
 * DDDDDDDDDDDDDDDDDDDDRRRRRRRRRRRRRRRRRRRR
 *
 * Initially, this seems like a job for recursion.
 *
 * Recursion worked find for small lattices, but ran out of memory for a 20x20.
 * There must be a simpler, mathematical way to achieve the answer.
 *
 * After reading about advanced permutations, I found that if a set of N items
 * contains A identical items and B identical items, then the total number of
 * different permutations of N items is:
 * N! / (A! * B!)
 *
 * For a 2x2 grid, the equation would be:
 * 4! / (2! * 2!) = 6
 * For a 20x20 grid, the equation would be:
 * 40! / (20! * 20!) = 137846528820
 * For a NxN grid, the equation would be:
 * (N * 2)! / (N! ** 2)
 */

function InputException (message) {
  this.message = message;
  this.name = 'InputException';
}

function getFactorial (n) {
  let factorial = 1;
  while (n > 1) {
    factorial *= n;
    n--;
  }
  return factorial;
}

function findLatticePaths (n) {
  // Validate the input
  if (!n || n < 1 || !Number.isInteger(n)) {
    throw new InputException('Please enter a positive integer greater than 0 for `n`.');
  }

  // let paths = [];
  // let rRegEx = /R/g;
  // let lRegEx = /L/g;

  // function returnPaths (n, path = '') {
  //   if (path.length === n * 2) {
  //     // console.log(`Adding ${path} to paths.`);
  //     paths.push(path);
  //     return;
  //   }
  //   let rCount = path.match(rRegEx);
  //   let lCount = path.match(lRegEx);
  //   if (rCount === null || rCount.length < n) {
  //     returnPaths(n, path + 'R');
  //   }
  //   if (lCount === null || lCount.length < n) {
  //     returnPaths(n, path + 'L');
  //   }
  // }

  // returnPaths(n);

  // return `For a ${n}x${n} grid, there are ${paths.length} paths from the top-left to the bottom-right corner (only moving right and down).`;

  let paths = Math.round(getFactorial(n * 2) / (getFactorial(n) ** 2));

  return `For a ${n}x${n} grid, there are ${paths} paths from the top-left to the bottom-right corner (only moving right and down).`;
}

/* ========== INVALID INPUTS ========== */
// console.log(findLatticePaths());
// console.log(findLatticePaths(-20));
// console.log(findLatticePaths(20.33));
// console.log(findLatticePaths('20'));
// console.log(findLatticePaths(0));

/* ========== VALID INPUTS ========== */
// console.log(findLatticePaths(1)); // => 2
// console.log(findLatticePaths(2)); // => 6

/* ========== SOLUTION ========== */
console.log(findLatticePaths(20)); // => 137846528820

module.exports = findLatticePaths;
