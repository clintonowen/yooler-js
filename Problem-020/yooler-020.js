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
 * Similar to Problem 16, the number 100! is going to be a very large integer,
 * so we should try a similar approach in creating our own data type and
 * calculating the factorial in-place. We can then easily sum the digits.
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

  let num = n.toString().split('').map(n => Number(n));
  // console.log('num:', num);
  for (let i = n - 1; i > 1; i--) {
    let mult = i.toString().split('').map(n => Number(n));
    // console.log('mult:', mult);
    let carryProd = 0;
    let sums = [];
    for (let j = 0; j < mult.length; j++) {
      sums.push([]);
      for (let k = num.length - 1; k >= 0; k--) {
        let prod = mult[j] * num[k] + carryProd;
        if (prod > 9) {
          carryProd = Number(prod.toString()[0]);
          prod = Number(prod.toString()[1]);
        } else {
          carryProd = 0;
        }
        // console.log('prod:', prod);
        sums[j].unshift(prod);
      }
      if (carryProd > 0) {
        sums[j].unshift(carryProd);
        carryProd = 0;
      }
    }

    if (sums.length > 1) {
      const newNum = [];
      sums[0].push(0);
      const diff = sums[0].length - sums[1].length;
      for (let p = 0; p < diff; p++) {
        sums[1].unshift(0);
      }
      // console.log('sums:', sums);
      let carrySum = 0;
      for (let m = sums[0].length - 1; m >= 0; m--) {
        let tempSum = sums[1][m] + sums[0][m] + carrySum;
        if (tempSum > 9) {
          carrySum = Number(tempSum.toString()[0]);
          tempSum = Number(tempSum.toString()[1]);
        } else {
          carrySum = 0;
        }
        newNum.unshift(tempSum);
      }
      if (carrySum > 0) {
        newNum.unshift(carrySum);
        carrySum = 0;
      }
      num = newNum;
    } else {
      num = sums[0];
    }
    // console.log('num:', num);
  }

  // console.log('num:', num);
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum += num[i];
  }

  return `The sum of the digits in the number ${n}! is ${sum}.`;
}

/* ========== INVALID INPUTS ========== */
// console.log(sumFactorialDigits());
// console.log(sumFactorialDigits(-10));
// console.log(sumFactorialDigits(10.33));
// console.log(sumFactorialDigits('10'));
// console.log(sumFactorialDigits(0));

/* ========== VALID INPUTS ========== */
// console.log(sumFactorialDigits(10)); // => 27 (3+6+2+8+8+0+0)
// console.log(sumFactorialDigits(15)); // => 45 (1+3+0+7+6+7+4+3+6+8+0+0+0)

/* ========== SOLUTION ========== */
console.time();
console.log(sumFactorialDigits(100)); // => 666
console.timeEnd();

module.exports = sumFactorialDigits;
