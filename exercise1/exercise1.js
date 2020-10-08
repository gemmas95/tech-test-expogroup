/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-syntax */
/* eslint-disable prefer-const */
/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */
/* eslint-disable func-names */
/* eslint-disable eqeqeq */
/* eslint-disable no-undef */

function highestOccurrence(array) {
  const frequenciesObject = array.reduce((accum, curr) => {
    curr in accum ? accum[curr]++ : (accum[curr] = 1);

    return accum;
  }, {});
  const highOccurVal = [];

  const highestFrequency = Object.values(frequenciesObject).sort(
    (a, b) => b - a
  )[0];

  for (const i in frequenciesObject) {
    if (frequenciesObject[i] === highestFrequency)
      highOccurVal.push(Number(i) || i);
  }

  return highOccurVal;
}
// highestOccurrence(["a", "a", 2, 2, 2, "a", 4])

module.exports = highestOccurrence;
