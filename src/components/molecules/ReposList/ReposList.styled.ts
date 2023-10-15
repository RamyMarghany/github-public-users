import styled from "styled-components";

export const RepoList = styled.ul`
    list-style-type: disclosure-closed;
    margin-bottom: ${({ theme }) => theme.spacing.large};
`

export const RepoItem = styled.li`
    margin-bottom: ${({ theme }) => theme.spacing.medium};
`
export const RepoLink = styled.a`
    color: ${({ theme }) => theme.colors.darkBlue};
    text-decoration: none;

    &:hover{
        color: ${({ theme }) => theme.colors.dark};
        text-decoration: underline;
    }
`