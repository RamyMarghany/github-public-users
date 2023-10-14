import styled from "styled-components";

export const App = styled.div`
  background: ${({ theme }) => theme.colors.lightBlue};
  padding-top: 5rem;
  min-height: 100%;
`;

export const ContentWrapper = styled.section`
  max-width: ${({ theme }) => theme.spacing.maxWidth};
  margin: auto;
  padding: ${({ theme }) => theme.spacing.large};
`;
