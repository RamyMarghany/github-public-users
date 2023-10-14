import styled from "styled-components";

export const Loader = styled.div`
  text-align: center;
  background: ${({ theme }) => theme.colors.darkBlue};
  color: ${({ theme }) => theme.colors.yellow};
  padding: ${({ theme }) => theme.spacing.default};
  border-radius: ${({ theme }) => theme.spacing.medium};
`;
