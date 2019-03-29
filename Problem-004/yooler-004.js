'use strict';

/**
 * ========== PROBLEM 4: Largest palindrome product ==========
 * A palindromic number reads the same both ways. The largest palindrome made
 * from the product of two 2-digit numbers is 9009 = 91 × 99.
 *
 * Find the largest palindrome made from the product of two 3-digit numbers.
 */

/**
 * ========== MY THOUGHTS ==========
 * The largest result will be the product of the two largest numbers, so we
 * should start with 999 * 999 (max) and work our way down to 100 * 100 (min).
 * The trick is to decide when to decrement each side of the equation so that
 * the resultant products are returned in descending order, because:
 * 999 * 997 < 998 * 998
 *
 * In order to look for a possible pattern, I have listed the top-31 largest
 * 3-digit number combinations, sorted in descending order:
 * 999 * 999 = 998001   =>   X * Y
 * 999 * 998 = 997002   =>   X * Y  <-- Y decremented by 1
 * 998 * 998 = 996004   =>   X * Y  <-- X decremented by 1
 * 999 * 997 = 996003   => X+1 * Y-1
 * 998 * 997 = 995006   =>   X * Y  <-- Y decremented by 1
 * 999 * 996 = 995004   => X+1 * Y-1
 * 997 * 997 = 994009   =>   X * Y  <-- X decremented by 1
 * 998 * 996 = 994008   => X+1 * Y-1
 * 999 * 995 = 994005   => X+2 * Y-2
 * 997 * 996 = 993012   =>   X * Y  <-- Y decremented by 1
 * 998 * 995 = 993010   => X+1 * Y-1
 * 999 * 994 = 993006   => X+2 * Y-2
 * 996 * 996 = 992016   =>   X * Y  <-- X decremented by 1
 * 997 * 995 = 992015   => X+1 * Y-1
 * 998 * 994 = 992012   => X+2 * Y-2
 * 999 * 993 = 992007   => X+3 * Y-3
 * 996 * 995 = 991020   =>   X * Y  <-- Y decremented by 1
 * 997 * 994 = 991018   => X+1 * Y-1
 * 998 * 993 = 991014   => X+2 * Y-2
 * 999 * 992 = 991008   => X+3 * Y-3
 * 995 * 995 = 990025   =>   X * Y  <-- X decremented by 1
 * 996 * 994 = 990024   => X+1 * Y-1
 * 997 * 993 = 990021   => X+2 * Y-2
 * 998 * 992 = 990016   => X+3 * Y-3
 * 999 * 991 = 990009   => X+4 * Y-4
 * 995 * 994 = 989030   =>   X * Y  <-- Y decremented by 1
 * 996 * 993 = 989028   => X+1 * Y-1
 * 997 * 992 = 989024   => X+2 * Y-2
 * 998 * 991 = 989018   => X+3 * Y-3
 * 999 * 990 = 989010   => X+4 * Y-4
 * 994 * 994 = 988036   =>   X * Y  <-- X decremented by 1
 *
 * We can see that a pattern forms:
 * 1) Start with X * Y
 * 2) Increment the left side and decrement the right side until either
 * the left side equals 999 (max) or the right side equals 100 (min)
 * 3) Decrement Y and repeat step 2
 * 4) Decrement X and start over
 *
 * I have verified that this pattern works for any number of digits.
 *
 * Additionally, we need a helper function which reverses each number to check
 * if it is a palindrome.
 */

function InputException (message) {
  this.message = message;
  this.name = 'InputException';
}

function isPalindrome (n) {
  let arr = `${n}`.split('');
  let reversed = '';
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed += arr[i];
  }
  return n === Number(reversed);
}

function findPalindrome (x, y, max, min) {
  // First check the supplied values of `x` and `y` for a palindrome
  let test = x * y;
  if (test >= 11 && isPalindrome(test)) {
    return `${test} (${x} * ${y})`;
  }
  // Increment `x` and decrement `y`, checking for a palindrome at each step,
  // until the `max` or `min` value is reached
  while (x < max && y > min) {
    x += 1;
    y -= 1;
    test = x * y;
    if (test >= 11 && isPalindrome(test)) {
      return `${test} (${x} * ${y})`;
    }
  }
  // The function returns nothing if no palindrome is found
}

function getLargestPalindrome (digits) {
  // Validate the input
  if (!digits || digits < 1 || !Number.isInteger(digits)) {
    throw new InputException('Please enter a positive integer for `digits`.');
  }

  // Find the maximum and minimum values with the given number of digits
  let max = '10';
  let min = '1';
  for (let i = 1; i < digits; i++) {
    max += '0';
    min += '0';
  }
  max = Number(max) - 1;
  min = Number(min);

  let palindrome;
  let n1 = max;
  let n2 = max;

  // Decrement n1 and n2 alternatingly, running them through `findPalindrome`,
  // until a palindrome is found or the `min` is reached
  while (n1 >= min && n2 >= min) {
    palindrome = findPalindrome(n1, n2, max, min);
    if (palindrome) { break; }
    n2 -= 1;
    palindrome = findPalindrome(n1, n2, max, min);
    if (palindrome) { break; }
    n1 -= 1;
  }

  if (palindrome) {
    return `The largest palindrome made from the product of two ${digits}-digit numbers is ${palindrome}.`;
  } else {
    return `No palindromes were found from the product of two ${digits}-digit numbers.`;
  }
}

/* ========== INVALID INPUTS ========== */
// console.log(getLargestPalindrome());

/* ========== VALID INPUTS ========== */
// console.log(getLargestPalindrome(1));
// console.log(getLargestPalindrome(4));
// console.log(getLargestPalindrome(5));
// console.log(getLargestPalindrome(6));
// console.log(getLargestPalindrome(7));

/* ========== TEST CASE ========== */
// console.log(getLargestPalindrome(2)); // => 9009 (99 * 91)

/* ========== SOLUTION ========== */
console.time();
console.log(getLargestPalindrome(3)); // => 906609 (993 * 913)
console.timeEnd();

module.exports = getLargestPalindrome;
