// Modules
import styled from "styled-components";
import{Link } from 'react-router-dom';

export const Wrapper = styled.main`
    text-align: center;
`

export const NotFoundImg = styled.img`
     display: block;
     margin-left: auto;
     margin-right: auto;
     height: auto;
     width: 50%;
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