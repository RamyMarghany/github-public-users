import React from "react"
import { render, screen } from "@testing-library/react";
import { ErrorMessage } from "./ErrorMessage";

// Helper
import { ThemeProviderWrapper } from "utils/ThemeProviderWrapper";

describe("Test ErrorMessage", () => {
  it("Render ErrorMessage Successfully", () => {
    render(
      <ThemeProviderWrapper>
        <ErrorMessage>Something Went Wrong!</ErrorMessage>
      </ThemeProviderWrapper>
    );
    expect(screen.getByText("Something Went Wrong!")).toBeDefined();
  });
});
