/* eslint-disable no-unused-vars */
/* eslint-disable no-debugger */
/* eslint-disable no-console */
/* eslint-disable no-plusplus */

function maxSubarraySum(array, number) {
  let sum = 0;
  let arraySum = 0;
  for (let j = 0; j <= array.length; j++) {
    sum = 0;
    debugger;
    for (let i = 0; i - 1 < number; i++) {
      console.log("1n sum...", sum);

      sum += array[i];
      console.log("2n sum...", sum);
      arraySum = [sum, ...arraySum];
      console.log("1n arraySum-...", arraySum);
    }
  }
  console.log("2n arraySum...", arraySum);

  return arraySum;
}

// maxSubarraySum([1, 2, 3], 2)
