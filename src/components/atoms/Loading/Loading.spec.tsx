import React from "react";
import { render, screen } from "@testing-library/react";
import { Loading } from "./Loading";

// Helper
import { ThemeProviderWrapper } from "utils/ThemeProviderWrapper";

describe("Test Loading", () => {
  it("Render Loading Successfully", () => {
    render(
      <ThemeProviderWrapper>
        <Loading />
      </ThemeProviderWrapper>
    );
    expect(screen.getByText("Loading...")).toBeDefined();
  });
});
