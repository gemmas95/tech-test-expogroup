import React from "react";
import renderer from "react-test-renderer";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Contributor from "../components/Contributor";

describe("Contributor", () => {
  let container = null;
  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });
  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it("should render a contributor", () => {
    const fakeContributor = { login: "name" };

    act(() => {
      render(<Contributor user={fakeContributor} />, container);
    });

    expect(
      container.querySelector('[data-testid="user__login"]').textContent
    ).toBe(fakeContributor.login);
  });
  it("should match Contributor component", () => {
    const fakeContributor = { login: "name", id: 12345 };
    const contributorTree = renderer.create(
      <Contributor user={fakeContributor} key={fakeContributor.id} />
    );

    expect(contributorTree).toMatchSnapshot();
  });
});
