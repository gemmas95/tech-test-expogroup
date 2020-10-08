/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
const sinon = require("sinon");
const { expect } = require("chai");
const { describe } = require("mocha");

const averagePair = require("./exercise3");

describe("Exercise 3 - Average Pair", () => {
  let fakeArray = [];
  let fakeNumber;
  afterEach(() => {
    sinon.restore();
  });

  it("should return a boolean primitive value", () => {
    fakeArray = [1, 2, 3];
    fakeNumber = 2.5;

    const result = averagePair(fakeArray, fakeNumber);

    expect(result).to.be.an("boolean");
  });

  it("should return true with array [1, 2, 3]", () => {
    fakeArray = [1, 2, 3];
    fakeNumber = 2.5;

    const result = averagePair(fakeArray, fakeNumber);

    expect(result).to.be.true;
  });

  it("should return true with array [1,3,3,5,6,7,10,12,19]", () => {
    fakeArray = [1, 3, 3, 5, 6, 7, 10, 12, 19];
    fakeNumber = 8;

    const result = averagePair(fakeArray, fakeNumber);

    expect(result).to.be.true;
  });

  it("should return false with array [-1,0,3,4,5,6]", () => {
    fakeArray = [-1, 0, 3, 4, 5, 6];
    fakeNumber = 4.1;

    const result = averagePair(fakeArray, fakeNumber);

    expect(result).to.be.false;
  });

  it("should return false with array []", () => {
    fakeArray = [];
    fakeNumber = 4;

    const result = averagePair(fakeArray, fakeNumber);

    expect(result).to.be.false;
  });
});
