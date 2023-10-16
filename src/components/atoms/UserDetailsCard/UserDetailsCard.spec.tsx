import React from "react";
import { render, screen } from "@testing-library/react";
import { UserDetailsCard } from "./UserDetailsCard";

// Helper
import { ThemeProviderWrapper } from "utils/ThemeProviderWrapper";

describe("Test User Card", () => {
  it("Render User Card Successfully", () => {
    render(
      <ThemeProviderWrapper>
       <UserDetailsCard 
        userName="username"
        avatarUrl="https://www.google.com"
       />
      </ThemeProviderWrapper>
    );
    expect(screen.getByText("username")).toBeDefined();
  });
});
