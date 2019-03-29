'use strict';

/**
 * ========== PROBLEM 18: Maximum path sum I ==========
 * By starting at the top of the triangle below and moving to adjacent numbers
 * on the row below, the maximum total from top to bottom is 23.
 *                             3
 *                            7 4
 *                           2 4 6
 *                          8 5 9 3
 *
 * That is, 3 + 7 + 4 + 9 = 23.
 *
 * Find the maximum total from top to bottom of the triangle below:
 *                             75
 *                           95  64
 *                         17  47  82
 *                       18  35  87  10
 *                     20  04  82  47  65
 *                   19  01  23  75  03  34
 *                 88  02  77  73  07  63  67
 *               99  65  04  28  06  16  70  92
 *             41  41  26  56  83  40  80  70  33
 *           41  48  72  33  47  32  37  16  94  29
 *         53  71  44  65  25  43  91  52  97  51  14
 *       70  11  33  28  77  73  17  78  39  68  17  57
 *     91  71  52  38  17  14  91  43  58  50  27  29  48
 *   63  66  04  68  89  53  67  30  73  16  69  87  40  31
 * 04  62  98  27  23  09  70  98  73  93  38  53  60  04  23
 *
 * NOTE: As there are only 16384 routes, it is possible to solve this problem
 * by trying every route. However, Problem 67, is the same challenge with a
 * triangle containing one-hundred rows; it cannot be solved by brute force,
 * and requires a clever method! ;o)
 */

/**
 * ========== MY THOUGHTS ==========
 * One method would be to start at the bottom row, compare each pair of adjacent
 * numbers, and add the larger one to the number above. Then, move up a row and
 * repeat until you reach the top of the triangle.
 */

function InputException (message) {
  this.message = message;
  this.name = 'InputException';
}

function isValidTriangle (triangle) {
  let valid = true;
  if (!Array.isArray(triangle)) {
    console.log('Main element not an array.');
    return false;
  }
  for (let i = 0; i < triangle.length; i++) {
    if (!Array.isArray(triangle[i])) {
      console.log(`Sub-element ${i} not an array.`);
      return false;
    }
    if (i < triangle.length - 1 &&
      triangle[i].length !== triangle[i + 1].length - 1) {
      console.log(`Sub-element ${i} not in triangular order.`);
      return false;
    }
    triangle[i].forEach(num => {
      if (num < 0 || !Number.isInteger(num)) {
        console.log('Negative or non-integer number.');
        valid = false;
      }
    });
  }
  return valid;
}

function findMaxPath (triangle) {
  // Validate the input
  if (!triangle || !isValidTriangle(triangle)) {
    throw new InputException('Please provide a valid array of arrays of positive integers in ascending triangular order.');
  }

  for (let i = triangle.length - 1; i > 0; i--) {
    const row = triangle[i];
    for (let j = 0; j < row.length - 1; j++) {
      const bigger = row[j] > row[j + 1] ? row[j] : row[j + 1];
      triangle[i - 1][j] += bigger;
    }
  }

  return `The maximum total from top to bottom of the triangle is ${triangle[0][0]}.`;
}

/* ========== INVALID INPUTS ========== */
// console.log(findMaxPath());
// console.log(findMaxPath(3));
// console.log(findMaxPath([7, 4]);
// console.log(findMaxPath([[7, 4], [3]]));
// console.log(findMaxPath([[3], 7]));
// console.log(findMaxPath([[3], [-7, 4]]));
// console.log(findMaxPath([[3], [7, '4']]));

/* ========== VALID INPUTS ========== */
// const testTriangle = [
//   [3],
//   [7, 4],
//   [2, 4, 6],
//   [8, 5, 9, 3]
// ];
// console.log(isValidTriangle(testTriangle)); // => true
// console.log(findMaxPath(testTriangle)); // => 23

/* ========== SOLUTION ========== */
const triangle = [
  [75],
  [95, 64],
  [17, 47, 82],
  [18, 35, 87, 10],
  [20, 4, 82, 47, 65],
  [19, 1, 23, 75, 3, 34],
  [88, 2, 77, 73, 7, 63, 67],
  [99, 65, 4, 28, 6, 16, 70, 92],
  [41, 41, 26, 56, 83, 40, 80, 70, 33],
  [41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
  [53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
  [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
  [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
  [63, 66, 4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
  [4, 62, 98, 27, 23, 9, 70, 98, 73, 93, 38, 53, 60, 4, 23]
];
console.log(findMaxPath(triangle)); // => 1074

module.exports = findMaxPath;
