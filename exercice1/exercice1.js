/* eslint-disable no-restricted-syntax */
/* eslint-disable prefer-const */
/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */
/* eslint-disable func-names */
/* eslint-disable eqeqeq */
/* eslint-disable no-undef */
/* function highestOcurrence(array) {
  return array.map((element, index) => {
    return `${index}: ${element}`;
  });
}

highestOcurrence([2, 3, 2, 2, 2, 4, 2]);
 */

/* function highestOcurrence(array) {
  const ocurrences = array.reduce((accumulator, currentValue, index) => {
    accumulator = [`${currentValue}: ${index}`];
    return accumulator;
  }, 1);
  return ocurrences;
}

highestOcurrence([2, 3, 2, 1]);
 */
/* function highestOcurrence(array) {
  const ocurrences = array.reduce((accumulator, currentValue, index) => {
    [`${currentValue}: ${index}`];
    return accumulator;
  }, 1);
  return ocurrences;
} */

function countFrequency(array) {
  const uniqueSet = new Set(array);
  const backtoArray = [...uniqueSet];
  return backtoArray;
}
countFrequency([2, 3, 2, 1]);

function countFrequency2(array) {
  return console.log(array.filter((item, x) => array.indexOf(item) == x));
}
countFrequency2([0, 3, 2, 1, 1]);

function countFrequencyReduce(array) {
  return console.log(
    array.reduce(
      (accumulator, currentValue) =>
        accumulator.includes(currentValue)
          ? accumulator
          : [...accumulator, currentValue],
      []
    )
  );
}
countFrequencyReduce([0, 3, 2, 1, 1]);
/*
function countFrequencySet(array) {
  return console.log([...new Set(array)]);
}
countFrequencySet([0, 2, 2, 1, 1]);

function mode(arr) {
  return console.log(arr.sort((a, b) => arr.filter(a - b)));
}

mode([1, 2, 2, "a", "a"]); // apple
 */

/* WORKING
 function freqs(array) {
  const freqObj = array.reduce((accum, curr) => {
    curr in accum ? accum[curr]++ : (accum[curr] = 1);

    return accum;
  }, {});
  [freqObj].sort();
  return freqObj;
}
const result = freqs([1, 2, 3, 7, 2, 7, 1, 2, 1, "a", "a", "a"]);
console.log("result", result);
const highOccurVal = [];

const hightFrequency = Object.values(result).sort((a, b) => a < b)[0];
console.log(hightFrequency);

for (let i in result) {
  if (result[i] === hightFrequency) highOccurVal.push(Number(i) || i);
}
console.log("final array..", highOccurVal);
 */

// THE GOOD ONE, don't know the complexity but it do what it has to do
function highestOccurrence(array) {
  const frequenciesObject = array.reduce((accum, curr) => {
    curr in accum ? accum[curr]++ : (accum[curr] = 1);

    return accum;
  }, {});
  const highOccurVal = [];

  const highestFrequency = Object.values(frequenciesObject).sort(
    (a, b) => b - a
  )[0];

  /*   const highestFrequency = Object.values(frequenciesObject).sort(
    (a, b) => a < b
  )[0]; */
  for (const i in frequenciesObject) {
    if (frequenciesObject[i] === highestFrequency)
      highOccurVal.push(Number(i) || i);
  }

  return highOccurVal;
}
console.log("FINAL", highestOccurrence(["a", "a", 2, 2, 2, "a", 4]));
