/* eslint-disable no-else-return */
/* eslint-disable no-plusplus */

function maxSubarraySum(array, number) {
  if (array.length === 0) {
    return null;
  } else {
    let result = 0;
    const arrayResults = [];
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < number; j++) {
        result += array[j + i];
      }
      arrayResults.push(result);
      result = 0;
    }
    return arrayResults.sort((a, b) => b - a)[0];
  }
}

module.exports = maxSubarraySum;
