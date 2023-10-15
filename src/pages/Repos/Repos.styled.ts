// Modules
import styled from "styled-components";
import{Link } from 'react-router-dom';

export const Headline = styled.h2`
    color: ${({ theme }) => theme.colors.darkBlue};
    text-transform: capitalize;
`

export const NoRepo = styled.p`
    text-transform: capitalize;
    margin-bottom: ${({ theme }) => theme.spacing.large};
`

export const BackButton = styled(Link)`
    background: ${({ theme }) => theme.colors.darkBlue};
    padding: ${({ theme }) => theme.spacing.medium};
    text-decoration: none;
    color: ${({ theme }) => theme.colors.yellow};
    text-transform: capitalize;
    border-radius: 5px;

    &:hover{
        color: ${({ theme }) => theme.colors.lightBlue};
    }
`