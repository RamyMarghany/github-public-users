// Modules
import React, { useContext, useEffect } from "react";
import { render, screen } from "@testing-library/react";
import { ThemeContextProvider, ThemeContext } from "./ThemeContext";

describe("Test ThemeContext", () => {
  it("Render component successfully", () => {
    const TestComponent = () => {
      const { themeStyle, setThemeStyle } = useContext(ThemeContext);
      useEffect(() => {
        setThemeStyle(true);
      }, []);
      return <div>{themeStyle ? "lightTheme" : "darkTheme"}</div>;
    };

     render(
      <ThemeContextProvider>
        <TestComponent />
      </ThemeContextProvider>
    );

    expect(screen.getByText("lightTheme")).toBeDefined();
  });
});
