/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
const sinon = require("sinon");
const { expect } = require("chai");
const { describe } = require("mocha");

const highestOccurrence = require("./exercise1");

describe("Exercise1", () => {
  afterEach(() => {
    sinon.restore();
  });

  it("should return an array primitive value", () => {
    const fakeArray = [2, 3, 2, 2, 2, 4, 2];
    const result = highestOccurrence(fakeArray);

    expect(result).to.be.an("array");
  });

  it("should return the highest ocurrence values in array [2, 3, 2, 2, 2, 4, 2]", () => {
    const fakeArray = [2, 3, 2, 2, 2, 4, 2];
    const result = highestOccurrence(fakeArray);

    expect(result).to.have.deep.members([2]);
  });

  it("should return the highest ocurrence values in [2, 3, 2, 3, 2, 3, 4]", () => {
    const fakeArray = [2, 3, 2, 3, 2, 3, 4];
    const result = highestOccurrence(fakeArray);

    expect(result).to.have.deep.members([2, 3]);
  });

  it("should return the highest ocurrence values in ['a', 'b', 'c', 'a', 'a', 'a', 'a']", () => {
    const fakeArray = ["a", "b", "c", "a", "a", "a", "a"];
    const result = highestOccurrence(fakeArray);

    expect(result).to.have.deep.members(["a"]);
  });

  it("should return the highest ocurrence values in ['a', 'a', 2, 2, 2, 'a', 4]", () => {
    const fakeArray = ["a", "a", 2, 2, 2, "a", 4];
    const result = highestOccurrence(fakeArray);

    expect(result).to.have.deep.members(["a", 2]);
  });
});
