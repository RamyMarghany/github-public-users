import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "styles/theme";

export const ThemeProviderWrapper = ({ children }: { children: ReactNode }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
