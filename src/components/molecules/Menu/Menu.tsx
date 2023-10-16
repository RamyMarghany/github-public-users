// Modules
import React from "react";

// Modules
import { Link } from "react-router-dom";

// Components
import { ThemeToggler } from "components/atoms/ToggleTheme/ToggleTheme";

// Styles
import * as Styled from "./Menu.styled";

export const Menu = () => {
  return (
    <Styled.Nav>
      <ul>
        <li>
          <Link to="/">
            <h1>Github Users</h1>
          </Link>
        </li>
        <li>
          <ThemeToggler />
        </li>
      </ul>
    </Styled.Nav>
  );
};
