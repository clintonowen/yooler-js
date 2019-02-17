'use strict';

/**
 * ========== PROBLEM 9: Special Pythagorean triplet ==========
 * A Pythagorean triplet is a set of three natural numbers, a < b < c, for
 * which,
 *            a^2 + b^2 = c^2
 *
 * For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.
 *
 * There exists exactly one Pythagorean triplet for which a + b + c = 1000.
 * Find the product abc.
 */

/**
 * ========== MY THOUGHTS ==========
 * The simplest solution would be to brute force it by iterating through every
 * three numbers which add up to 1000 and seeing if they satisfy the equation.
 *
 * I suspect that there might be a more elegant mathematical method.
 * Given what we know, we can say that we need to find a and b where,
 *      a + b + sqrt(a^2 + b^2) = 1000
 *              sqrt(a^2 + b^2) = 1000 - a - b
 *                    a^2 + b^2 = 1000^2 - 2000a - 2000b + 2ab + a^2 + b^2
 *                  2ab - 2000b = 2000a - 1000^2
 *                 b(2a - 2000) = 2000a - 1000^2
 *                            b = 2000a - 1000^2 / 2a - 2000
 *                            b = 2000(a - 500) / 2(a - 1000)
 *                            b = 1000(a - 500) / a - 1000
 * Now we only need to iterate through values of `a`, using the equation above
 * to look for integer values of `b`.
 */

function InputException (message) {
  this.message = message;
  this.name = 'InputException';
}

function findPyTri (n) {
  // Validate the input
  if (!n || n < 1 || !Number.isInteger(n)) {
    throw new InputException('Please enter a positive integer for `n`.');
  }

  let triplet = null;
  let product = null;

  for (let a = 1; a < n; a++) {
    let b = (n * (a - (n / 2))) / (a - n);
    if (Number.isInteger(b)) {
      let c = Math.sqrt(a ** 2 + b ** 2);
      triplet = `${a}, ${b}, & ${c}`;
      product = a * b * c;
      break;
    }
  }

  if (triplet) {
    return `The Pythagorean triplet which adds up to ${n} is ${triplet} (whose product is ${product}).`;
  } else {
    return `No Pythagorean triplet was found which adds up to ${n}.`;
  }
}

/* ========== INVALID INPUTS ========== */
// console.log(findPyTri());
// console.log(findPyTri(-1000));
// console.log(findPyTri(1000.33));
// console.log(findPyTri('1000'));

/* ========== VALID INPUTS ========== */
// console.log(findPyTri(1));
// console.log(findPyTri(24));
// console.log(findPyTri(48));

/* ========== TEST CASE ========== */
// console.log(findPyTri(12)); // => 3, 4, 5 (60)

/* ========== SOLUTION ========== */
console.log(findPyTri(1000)); // => 200, 375, 425 (31875000)

module.exports = findPyTri;
