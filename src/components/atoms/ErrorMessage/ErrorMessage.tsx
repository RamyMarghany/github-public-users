// Modules
import { ReactNode } from "react";

// Styles
import * as Styled from "./ErrorMessage.styled";

// Components
export const ErrorMessage = ({ children }: { children: ReactNode }) => {
  return (
    <Styled.ErrorMessage className="error-message">
      <h1>Something went wrong!</h1>
      <h3>{children}</h3>
    </Styled.ErrorMessage>
  );
};
