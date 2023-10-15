import styled from "styled-components";

export const Input = styled.input`
    padding: ${({ theme }) => theme.spacing.medium} ${({ theme }) => theme.spacing.default};
    border-radius: ${({ theme }) => theme.spacing.medium};
    border:1px solid ${({ theme }) => theme.colors.yellow};
    min-width: 260px;

    &:focus {
        outline: none !important;
        border-color:1px solid ${({ theme }) => theme.colors.darkBlue};
        box-shadow: 0 0 ${({ theme }) => theme.spacing.medium} ${({ theme }) => theme.colors.dark};
    }
`