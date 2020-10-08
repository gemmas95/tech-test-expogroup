/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
const sinon = require("sinon");
const { expect } = require("chai");
const { describe } = require("mocha");

const maxSubarraySum = require("./exercise2");

describe("Exercise 2 - Maximum Sub Array Sum", () => {
  let fakeArray = [];
  let fakeNumber;
  afterEach(() => {
    sinon.restore();
  });

  it("should return a primitive value of number", () => {
    fakeArray = [1, 2, 5, 2, 8, 1, 5];
    fakeNumber = 4;
    const result = maxSubarraySum(fakeArray, fakeNumber);

    expect(result).to.be.an("number");
  });

  it("should return the highest ocurrence values in array [1, 2, 5, 2, 8, 1, 5]", () => {
    fakeArray = [1, 2, 5, 2, 8, 1, 5];
    fakeNumber = 4;
    const result = maxSubarraySum(fakeArray, fakeNumber);

    expect(result).to.equal(17);
  });

  it("should return the highest ocurrence values in [1,2,5,2,8,1,5]", () => {
    fakeArray = [1, 2, 5, 2, 8, 1, 5];
    fakeNumber = 2;

    const result = maxSubarraySum(fakeArray, fakeNumber);

    expect(result).to.equal(10);
  });

  it("should return the highest ocurrence values in [4,2,1,6]", () => {
    fakeArray = [4, 2, 1, 6];
    fakeNumber = 1;

    const result = maxSubarraySum(fakeArray, fakeNumber);

    expect(result).to.equal(6);
  });

  it("should return the highest ocurrence values in [4,2,1,6,2]", () => {
    fakeArray = [4, 2, 1, 6, 2];
    fakeNumber = 4;

    const result = maxSubarraySum(fakeArray, fakeNumber);

    expect(result).to.equal(13);
  });

  it("should return the highest ocurrence values in []", () => {
    fakeArray = [];
    fakeNumber = 4;

    const result = maxSubarraySum(fakeArray, fakeNumber);

    expect(result).to.equal(null);
  });
});
