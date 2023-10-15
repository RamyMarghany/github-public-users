import styled from "styled-components";

export const SearchWrapper = styled.div`
    text-align: center;
    margin-bottom: ${({ theme }) => theme.spacing.large};
    display: flex;
    justify-content: center;
    column-gap: 20px;
`

export const Headline = styled.h1`
    color: ${({ theme }) => theme.colors.darkBlue};
    text-align: center;
`

export const SearchResultWrapper = styled.div`
    display:flex;
    flex-wrap: wrap;
    align-items: stretch;
    justify-content: center;
    text-align: left;
    row-gap: ${({ theme }) => theme.spacing.large};
`