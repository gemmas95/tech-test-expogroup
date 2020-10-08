import renderer from "react-test-renderer";
import React from "react";
import TableList from "../components/TableList";

describe("TableList", () => {
  let fakecontributorsList = null;
  it("should match", () => {
    const tableListTree = renderer.create(
      <TableList contributorsList={fakecontributorsList} />
    );
    expect(tableListTree).toMatchSnapshot();
  });
  it("should match", () => {
    fakecontributorsList = [
      { login: "pepe", id: 24 },
      { login: "lola", id: 2 },
    ];
    const tableListTree = renderer.create(
      <TableList contributorsList={fakecontributorsList} />
    );
    expect(tableListTree).toMatchSnapshot();
  });
});
