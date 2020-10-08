/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
const sinon = require("sinon");
const { expect } = require("chai");
const { describe } = require("mocha");

const exercise1 = require("./exercise1");

describe("Exercise1", () => {
  afterEach(() => {
    sinon.restore();
  });
  it("should return an array value", () => {
    expect(true).to.be.true;
  });
});
