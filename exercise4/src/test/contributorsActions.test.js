import React from "react";
import { render, screen } from "@testing-library/react";
import { loadContributors } from "../logic/contributorsActions";

describe("contributorsActions", () => {
  beforeAll(() => jest.spyOn(window, "fetch"));

  xit("should call an api", async () => {
    const owner = "SkylabCoders";
    const repoName = "skylab-bootcamp-202007";

    const fakeData = [
      { login: "Celeritas", id: 14 },
      { login: "Bombasto", id: 13 },
    ];
    window.fetch.mockReturnValue(
      new Promise((resolve) => resolve({ fakeData }))
    );
    await loadContributors();

    expect(window.fetch).toHaveBeenCalledWith(
      `https://api.github.com/repos/${owner}/${repoName}/contributors`
    );
  });
});
