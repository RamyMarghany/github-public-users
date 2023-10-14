import styled from "styled-components";

export const ErrorMessage = styled.div`
  background: ${({ theme }) => theme.colors.darkBlue};
  color: ${({ theme }) => theme.colors.yellow};
  text-align: center;
  padding: ${({ theme }) => theme.spacing.default};
  border-radius: ${({ theme }) => theme.spacing.medium};
  h1 {
    color: ${({ theme }) => theme.colors.white};
  }
`;
