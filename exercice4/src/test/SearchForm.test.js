import renderer from "react-test-renderer";
import React from "react";
import { act } from "react-dom/test-utils";
import { render, unmountComponentAtNode } from "react-dom";
import { fireEvent } from "@testing-library/dom";

import SearchForm from "../components/SearchForm";

describe("SearchForm", () => {
  let container = null;
  const searchFormTree = renderer.create(<SearchForm />);
  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });
  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });
  it("should match snapshot", () => {
    expect(searchFormTree).toMatchSnapshot();
  });
  xit("should call onClick and go to handleSubmit", () => {
    const repoName = "heroes";
    const handleSubmit = jest.fn((event) => event.preventDefault());

    act(() => {
      render(
        <SearchForm handleSubmit={handleSubmit} setRepoName={repoName} />,
        container
      );
      const submit = document.querySelector('[data-testid="form"]');

      fireEvent.submit(submit);
    });

    const button = document.querySelector('[data-testid="button"]');

    act(() => {
      button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    expect(handleSubmit).toHaveBeenCalled();
  });
});
