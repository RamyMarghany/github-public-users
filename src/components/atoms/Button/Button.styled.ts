import styled from "styled-components";

export const Button = styled.button`
    padding: ${({ theme }) => theme.spacing.medium} ${({ theme }) => theme.spacing.default};
    border-radius: ${({ theme }) => theme.spacing.medium};
    background-color: ${({ theme }) => theme.colors.darkBlue};
    color: ${({ theme }) => theme.colors.yellow};
    border:1px solid ${({ theme }) => theme.colors.yellow};

    &:hover{
        cursor: pointer;
        color: ${({ theme }) => theme.colors.lightBlue};
         border:1px solid ${({ theme }) => theme.colors.lightBlue};
    }

    &:disabled,
    &[disabled]{
        border: 1px solid ${({ theme }) => theme.colors.white};
        background-color: ${({ theme }) => theme.colors.dark};
        color: ${({ theme }) => theme.colors.white};
        cursor: not-allowed;
    }
`