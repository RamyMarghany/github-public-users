import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import { Menu } from "./Menu";

// Helper
import { ThemeProviderWrapper } from "utils/ThemeProviderWrapper";

describe("Test Menu", () => {
  it("should render Menu correctly", () => {
    render(
      <ThemeProviderWrapper>
        <Router>
          <Menu />
        </Router>
      </ThemeProviderWrapper>
    );
    expect(screen.getByText("Github Users")).toBeDefined();
  });
});
