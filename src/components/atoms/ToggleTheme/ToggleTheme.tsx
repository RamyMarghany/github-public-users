// Modules
import { useContext } from "react";

// Context
import { ThemeContext } from "context/ThemeContext";

// Icons
import { Night } from "assets/icons/Night";
import { Day } from "assets/icons/Day";

// Style
import * as Styled from "./ToggleTheme.styled";

export const ThemeToggler = () => {
  const { themeStyle, setThemeStyle } = useContext(ThemeContext);
  return (
    <Styled.ThemeTogglerBtn onClick={() => setThemeStyle(!themeStyle)}>
      {themeStyle ? <Day /> : <Night />}
    </Styled.ThemeTogglerBtn>
  );
};
