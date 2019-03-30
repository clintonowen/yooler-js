'use strict';

/**
 * ========== PROBLEM 19: Counting Sundays ==========
 * You are given the following information, but you may prefer to do some
 * research for yourself.
 *
 * - 1 Jan 1900 was a Monday.
 * - Thirty days has September,
 *   April, June and November.
 *   All the rest have thirty-one,
 *   Saving February alone,
 *   Which has twenty-eight, rain or shine.
 *   And on leap years, twenty-nine.
 * - A leap year occurs on any year evenly divisible by 4, but not on a century
 *   unless it is divisible by 400.
 *
 * How many Sundays fell on the first of the month during the twentieth century
 * (1 Jan 1901 to 31 Dec 2000)?
 */

/**
 * ========== MY THOUGHTS ==========
 * - 1 Jan 1901 was a Tuesday.
 * - 6 Jan 1901 was the first Sunday in the twentieth century.
 * - 1 Sep 1901 was the first Sunday on a first in the twentieth century.
 * If we start at 1 Jan 1901 and iterate through all the firsts of the month, we
 * can count the number of times that the first is evenly divisible by 6.
 */

function InputException (message) {
  this.message = message;
  this.name = 'InputException';
}

function isValidDate (date) {

}

function countFirstSundays (start, end) {
  // Validate the input
  if (!start || !end || !isValidDate(start) || !isValidDate(end)) {
    throw new InputException('Please provide a valid start and end date in the format: "DD MMM YYYY"');
  }

  let count = 0;

  return `Between ${start} and ${end}, ${count} Sundays fell on the first of the month.`;
}

/* ========== INVALID INPUTS ========== */
// console.log(countFirstSundays());
// console.log(countFirstSundays('01 Jan 1901'));
// console.log(countFirstSundays(1901, 2000);
// console.log(countFirstSundays('01 Jan 01', '31 Dec 00');
// console.log(countFirstSundays('1 Jan 1901', '31 Dec 2000');
// console.log(countFirstSundays('01 January 1901', '31 December 2000');
// console.log(countFirstSundays('Jan 01 1901', 'Dec 31 2000');

/* ========== VALID INPUTS ========== */
console.log(isValidDate('01 Jan 1901')); // => true
console.log(countFirstSundays('01 Jan 1901', '01 Jan 1902')); // => 2

/* ========== SOLUTION ========== */
// console.time();
// console.log(countFirstSundays('01 Jan 1901', '31 Dec 2000')); // => ?
// console.timeEnd();

module.exports = countFirstSundays;
