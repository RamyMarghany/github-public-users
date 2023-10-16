import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "./Button";

// Helper
import { ThemeProviderWrapper } from "utils/ThemeProviderWrapper";

describe("Test Button", () => {
  it("Render ErrorMessage Successfully", () => {
    render(
      <ThemeProviderWrapper>
        <Button>Button</Button>
      </ThemeProviderWrapper>
    );
    expect(screen.getByText("Button")).toBeDefined();
  });

   it('Execute Increment fun', () => {
        const onClickHandlerButton = jest.fn()
        render(
         <ThemeProviderWrapper>
             <Button onClickHandler={onClickHandlerButton}>Button</Button>
        </ThemeProviderWrapper>
        )
        const incrementButton = screen.getByRole('button', { name: 'Button' })
        fireEvent.click(incrementButton)
        expect(onClickHandlerButton).toBeCalled()
    })
});
