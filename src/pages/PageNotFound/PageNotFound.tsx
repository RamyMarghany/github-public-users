// Images
import MyImage from "assets/images/pageNotFound.png";

// Styles
import * as Styled from "./PageNotFound.styled";

export const PageNotFound = () => {
    return (
        <Styled.Wrapper className="wrapper">
            <Styled.NotFoundImg src={MyImage} alt="page not found" />
            <Styled.BackButton to="/">back to homepage </Styled.BackButton>
        </Styled.Wrapper>
    );
};