/* eslint-disable no-plusplus */

function averagePair(array, number) {
  const averagesArray = [];
  for (let i = 0; i + 1 < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      averagesArray.push((array[i] + array[j]) / 2);
    }
  }
  return averagesArray.some((element) => element === number);
}

module.exports = averagePair;
