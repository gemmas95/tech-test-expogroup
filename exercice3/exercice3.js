/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-debugger */
/* eslint-disable no-plusplus */

// NOT WORKING WELL, second example not passing

function averagePair(array, number) {
  const averages = [];
  for (let i = 0; i + 1 < array.length; i++) {
    averages[i] = (array[i] + array[i + 1]) / 2;
  }
  console.log(averages);
  return console.log(averages.some((element) => element === number));
}
averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8);

/* function averagePair(array, number) {
  let averages;
  const arrayAverages = array.reduce((accum, currVal) => {
    averages = [currVal + accum / 2, averages];
    console.log(averages);
    return averages;
  });
  console.log(arrayAverages);
  return arrayAverages.some((element) => number === element);
}
averagePair([1, 2, 3], 2.5);
 */
