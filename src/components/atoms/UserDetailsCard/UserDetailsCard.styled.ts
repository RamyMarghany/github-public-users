import styled from "styled-components";

export const UserDetailsCardWrapper = styled.div`
  background: ${({ theme }) => theme.colors.darkBlue};
  padding: ${({ theme }) => theme.spacing.default};
  color: ${({ theme }) => theme.colors.middleBlue};
  margin: 0 ${({ theme }) => theme.spacing.medium};
  border-radius: ${({ theme }) => theme.spacing.small};
  transition: all .5s ease;
  order: 1;
  flex: 0 0 calc(25%);
  min-width: 320px;

  &:hover{
     transform: scale(0.9);
        cursor: pointer;
  }
`;

export const ProfileWrapper = styled.div`
  display:flex;
  gap:${({ theme }) => theme.spacing.medium};
`

export const UserName = styled.h2`
  color: ${({ theme }) => theme.colors.middleBlue};
  text-transform: capitalize;
`

export const ReposLink = styled.a`
  color: ${({ theme }) => theme.colors.yellow};
  text-decoration: none;
 
  &:hover {
    cursor: pointer;
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.lightBlue};
  }
`

export const Avatar = styled.img`
  width: ${({ theme }) => theme.spacing.xlarge};
  height: ${({ theme }) => theme.spacing.xlarge};
  border-radius: 50%
`
