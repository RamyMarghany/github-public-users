import styled from "styled-components";

export const Nav = styled.nav`
  background: ${({ theme }) => theme.colors.darkBlue};
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 9;
  border-bottom: 5px solid ${({ theme }) => theme.colors.yellow};

  ul {
    list-style-type: none;
    margin: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${({ theme }) => theme.spacing.medium}
      ${({ theme }) => theme.spacing.default};

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.yellow};
    }
  }
`;
