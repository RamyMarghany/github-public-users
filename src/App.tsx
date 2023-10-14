// Modules
import { useContext } from "react";

// Context
import { ThemeContext } from "context/ThemeContext";

// Components
import { AppRouter } from "components/molecules/AppRouter/AppRouter";
import { Menu } from "components/molecules/Menu/Menu";

// Theme
import { ThemeProvider } from "styled-components";
import { theme, darkTheme, lightTheme } from "styles/theme";

// Styles
import * as Styled from "./App.styled";

function App() {
const { themeStyle } = useContext(ThemeContext);
  return (
     <ThemeProvider
      theme={
        themeStyle ? { ...theme, ...darkTheme } : { ...theme, ...lightTheme }
      }
    >
     <Styled.App>
        <Menu />
        <Styled.ContentWrapper>
          <AppRouter />
        </Styled.ContentWrapper>
      </Styled.App>
    </ThemeProvider>
  );
}

export default App;
