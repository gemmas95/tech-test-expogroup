/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-debugger */
/* eslint-disable no-plusplus */

function averagePair(array, number) {
  const averages = [];
  let counter = 0;
  for (let i = 0; i + 1 < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      averages[counter++] = (array[i] + array[j]) / 2;
    }
  }
  console.log(averages);
  return console.log(averages.some((element) => element === number));
}
averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8);
