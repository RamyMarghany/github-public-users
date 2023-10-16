// Modules
import React from "react";

// Styles
import * as Styled from "./UserDetailsCard.styled";

// Definition
type  UserDetailsCardProps ={
    userName: string;
    avatarUrl:string;
}

export const UserDetailsCard: React.FC<UserDetailsCardProps> =({userName, avatarUrl }: UserDetailsCardProps)=>{

    return(
        <Styled.UserDetailsCardWrapper>
            <Styled.ProfileWrapper>
            <Styled.Avatar src={avatarUrl} alt="login"/>
            <Styled.UserName>{userName}</Styled.UserName>
            </Styled.ProfileWrapper>
            <Styled.ReposLink href={`/user/${userName}`}> {`Repos of ${userName}`}</Styled.ReposLink>
        </Styled.UserDetailsCardWrapper>
    )

 }