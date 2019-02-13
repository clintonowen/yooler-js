/* ========== PROBLEM 1: Multiples of 3 and 5 ========== */
// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

function sumOfMultiples (upperLimit, multiples) {
  // Validate the inputs
  if (upperLimit < 0 || !Number.isInteger(upperLimit)) {
    return console.error('Please enter a positive integer for the `upperLimit`.');
  }
  for (let multiple of multiples) {
    if (multiple < 0 || !Number.isInteger(multiple)) {
      return console.error('Please enter a positive integer for all `multiples`.');
    }
  }

  // For every integer below the `upperLimit`, check if it is a multiple of
  // any of the `multiples` and, if so, add it to the `sum`
  let sum = 0;
  for (let i = 0; i < upperLimit; i++) {
    for (let multiple of multiples) {
      if (i % multiple === 0) {
        // console.log(i);
        sum += i;
        break;
      }
    }
  }

  // Format `multiples` for use in the response string
  let multText = '';
  for (let i = 0; i < multiples.length; i++) {
    if (i === 0) {
      multText += `${multiples[i]}`;
    } else if (multiples.length === 2) {
      multText += ` or ${multiples[i]}`;
    } else if (i + 1 < multiples.length) {
      multText += `, ${multiples[i]}`;
    } else {
      multText += `, or ${multiples[i]}`;
    }
  }

  // Return the sum
  return console.log(`The sum of all multiples of ${multText} below ${upperLimit} is ${sum}.`);
}

// sumOfMultiples(-5, [3, 5]);
// sumOfMultiples(33.33, [3, 5]);
// sumOfMultiples(1000, [-5, 5]);
// sumOfMultiples(1000, [2.3, 5]);

// sumOfMultiples(1000, [5]);
// sumOfMultiples(1000, [3, 5, 7]);
sumOfMultiples(1000, [3, 5]);
