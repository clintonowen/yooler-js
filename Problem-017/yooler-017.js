'use strict';

/**
 * ========== PROBLEM 17: Number letter counts ==========
 * If the numbers 1 to 5 are written out in words: one, two, three, four, five
 * then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.
 *
 * If all the numbers from 1 to 1000 (one thousand) inclusive were written out
 * in words, how many letters would be used?
 *
 * NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and
 * forty-two) contains 23 letters and 115 (one hundred and fifteen) contains
 * 20 letters. The use of "and" when writing out numbers is in compliance with
 * British usage.
 */

/**
 * ========== MY THOUGHTS ==========
 * The first 20 numbers are unique:
 * 1: 3
 * 2: 3
 * 3: 5
 * 4: 4
 * 5: 4
 * 6: 3
 * 7: 5
 * 8: 5
 * 9: 4
 * 10: 3
 * 11: 6
 * 12: 6
 * 13: 8
 * 14: 8
 * 15: 7
 * 16: 7
 * 17: 9
 * 18: 8
 * 19: 8
 * 20: 6
 * As well as the multiples of 10 from 30 to 90:
 * 30: 6
 * 40: 5
 * 50: 5
 * 60: 5
 * 70: 7
 * 80: 6
 * 90: 6
 * The hundreds are combinations of previous numbers plus "hundred" (7) and,
 * for non-multiples of 100, the word "and" (3).
 * The thousands are combinations of previous numbers plus "thousand" (8).
 */

function InputException (message) {
  this.message = message;
  this.name = 'InputException';
}

function getOnes (n) {
  switch (n) {
    case 1: // "one"
    case 2: // "two"
    case 6: // "six"
    {
      return 3;
    }
    case 4: // "four"
    case 5: // "five"
    case 9: // "nine"
    {
      return 4;
    }
    case 3: // "three"
    case 7: // "seven"
    case 8: // "eight"
    {
      return 5;
    }
    default:
      throw new InputException('Please enter an integer from 1 to 9.');
  }
}

function getTeens (n) {
  switch (n) {
    case 11: // "eleven"
    case 12: // "twelve"
    {
      return 6;
    }
    case 15: // "fifteen"
    case 16: // "sixteen"
    {
      return 7;
    }
    case 13: // "thirteen"
    case 14: // "fourteen"
    case 18: // "eighteen"
    case 19: // "nineteen"
    {
      return 8;
    }
    case 17: // "seventeen"
      return 9;
    default:
      throw new InputException('Please enter an integer from 11 to 19.');
  }
}

function getTens (n) {
  switch (n) {
    case 10: // "ten"
      return 3;
    case 40: // "forty"
    case 50: // "fifty"
    case 60: // "sixty"
    {
      return 5;
    }
    case 20: // "twenty"
    case 30: // "thirty"
    case 80: // "eighty"
    case 90: // "ninety"
    {
      return 6;
    }
    case 70: // "seventy"
      return 7;
    default:
      throw new InputException('Please enter a multiple of 10 from 10 to 90.');
  }
}

function countNumLetters (n) {
  // Validate the input
  if (!n || n < 1 || !Number.isInteger(n)) {
    throw new InputException('Please enter a positive integer greater than 0.');
  }

  let letters = 0;
  for (let i = 1; i <= n; i++) {
    let num = i;
    let add = 0;
    if (num >= 1000) {
      let firstDigit = Number(num.toString()[0]);
      add += getOnes(firstDigit);
      add += 8; // "thousand"
      num -= firstDigit * 1000;
    }
    if (num >= 100) {
      let firstDigit = Number(num.toString()[0]);
      add += getOnes(firstDigit);
      add += 7; // "hundred"
      num -= firstDigit * 100;
    }
    if (num > 0 && num < i) {
      add += 3; // "and"
    }
    if (num >= 10) {
      if (num > 10 && num < 20) {
        add += getTeens(num);
        num -= num;
      } else {
        let tens = Number(num.toString()[0]) * 10;
        add += getTens(tens);
        num -= tens;
      }
    }
    if (num > 0) {
      add += getOnes(num);
    }
    // console.log(`${i}: ${add}`);
    letters += add;
  }

  return `If all the numbers from 1 to ${n} inclusive were written out in words, ${letters} letters would be used.`;
}

/* ========== INVALID INPUTS ========== */
// console.log(countNumLetters());
// console.log(countNumLetters(-15));
// console.log(countNumLetters(15.33));
// console.log(countNumLetters('15'));
// console.log(countNumLetters(0));

/* ========== VALID INPUTS ========== */
// console.log(countNumLetters(5)); // => 19

/* ========== SOLUTION ========== */
console.log(countNumLetters(1000)); // => 21124

module.exports = countNumLetters;
