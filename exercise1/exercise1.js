/* eslint-disable no-restricted-syntax */
/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

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

module.exports = highestOccurrence;
