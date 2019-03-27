'use strict';

/**
 * ========== PROBLEM 16: Power digit sum ==========
 * 2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
 *
 * What is the sum of the digits of the number 2^1000?
 */

/**
 * ========== MY THOUGHTS ==========
 * 2^0 =         1  1
 * 2^1 =         2  2
 * 2^2 =         4  4
 * 2^3 =         8  8
 * 2^4 =        16  7
 * 2^5 =        32  5
 * 2^6 =        64  10
 * 2^7 =       128  11
 * 2^8 =       256  13
 * 2^9 =       512  8
 * 2^10 =     1024  7
 * 2^11 =     2048  14
 * 2^12 =     4096  19
 * 2^13 =     8192  20
 * 2^14 =    16384  22
 * 2^15 =    32768  26
 * 2^16 =    65536  25
 * 2^17 =   131072  14
 * 2^18 =   262144  19
 * 2^19 =   524288  29
 * 2^20 =  1048576  31
 * 2^21 =  2097152  26
 * 2^22 =  4194304  25
 * 2^23 =  8388608  41
 *
 * I can't see any useful patterns other than the 10s digit (2, 4, 8, 6).
 *
 * Attempt #1:
 * I tried calculating 2^N, adding the first digit to a running sum, and then
 * removing the first digit (with subtraction) and repeating the process.
 * This stopped working after 16 digits, which I figured was an issue with
 * precision with large numbers in JavaScript.
 *
 * Attempt #2:
 * I tried using the modulus operator to get the digit at a certain position:
 *    (2 ** 1000) % 10    => 6
 *    (2 ** 1000) % 100   => 76
 *    (2 ** 1000) % 1000  => 376
 * This method produced a number which seamed feasible, but was incorrect.
 * Again, I figured it was a precision issue.
 *
 * Attempt #3:
 * The only way I could see to get around the precision issue was to create my
 * own data type which could accurately hold the value of every digit in a very
 * large number. I used an array, where each element represented one digit in
 * the number. Starting with [1], I multiplied it by 2 1000 times, using basic
 * arithmetic to compute the full, 302-digit number.
 * Then, I used a simple loop to add up the digits.
 */

function InputException (message) {
  this.message = message;
  this.name = 'InputException';
}

function sumPowerDigits (n) {
  // Validate the input
  if (!n || n < 1 || !Number.isInteger(n)) {
    throw new InputException('Please enter a positive integer greater than 0 for `n`.');
  }

  // Attempt #3
  let sum = 0;
  let num = [1];
  for (let i = 0; i < n; i++) {
    let length = num.length + 1;
    let carry = 0;
    for (let j = 0; j < length; j++) {
      let digit = num[j] || 0;
      digit = 2 * digit + carry;
      if (digit > 9) {
        digit -= 10;
        carry = 1;
      } else {
        carry = 0;
      }
      if (j < length - 1 || (j === length - 1 && digit !== 0)) {
        num[j] = digit;
      }
    }
  }
  for (let i = 0; i < num.length; i++) {
    sum += num[i];
  }

  // // Attempt #2
  // let sum = 0;
  // let num = (2 ** n).toString();
  // console.log('num:', num);
  // if (num.includes('+')) {
  //   let exp = Number(num.slice(num.indexOf('+') + 1));
  //   let prevMod = null;
  //   for (let i = 0; i <= exp; i++) {
  //     let mod = ((2 ** n) % (10 * 10 ** i)).toString();
  //     console.log('mod:', mod);
  //     const expPos = mod.indexOf('+') + 1;
  //     if (expPos > 0) {
  //       const currExp = Number(mod.slice(expPos));
  //       console.log('currExp:', currExp, ', i:', i);
  //       if (currExp === i) {
  //         sum += Number(mod[0]);
  //         console.log('sum:', sum);
  //       }
  //     } else if (mod !== prevMod) {
  //       sum += Number(mod[0]);
  //       console.log('sum:', sum);
  //     }
  //     prevMod = mod;
  //   }
  // } else {
  //   for (let i = 0; i < num.length; i++) {
  //     sum += Number(num[i]);
  //   }
  // }

  // // Attempt #1
  // let sum = 0;
  // let num = (2 ** n).toString();
  // console.log('num:', num);
  // let subtractor = 0;
  // while (num.length > 1) {
  //   let firstDigit = num[0];
  //   console.log('firstDigit:', firstDigit);
  //   sum += Number(firstDigit);
  //   console.log('sum:', sum);
  //   let expPos = num.indexOf('+') + 1;
  //   let exp = Number(num.slice(expPos));
  //   console.log('exp:', exp);
  //   subtractor += Number(firstDigit) * 10 ** exp;
  //   num = (2 ** n - subtractor).toString();
  //   console.log('num:', num);
  // }

  return `The sum of the digits of the number 2^${n} is ${sum}.`;
}

/* ========== INVALID INPUTS ========== */
// console.log(sumPowerDigits());
// console.log(sumPowerDigits(-15));
// console.log(sumPowerDigits(15.33));
// console.log(sumPowerDigits('15'));
// console.log(sumPowerDigits(0));

/* ========== VALID INPUTS ========== */
// console.log(sumPowerDigits(15)); // => 26

/* ========== SOLUTION ========== */
console.log(sumPowerDigits(1000)); // => 1366

module.exports = sumPowerDigits;
