// Module
import { ReactNode } from "react"

// Styles
import * as Styled from "./Button.styled";

type buttonProps = {
    children: ReactNode;
    onClickHandler?: () => void;
    className?: string;
    disabled:boolean;
}

export const Button = ({ children, onClickHandler, disabled, className }: buttonProps) => {
    return (
        <Styled.Button className={`${className} button`} onClick={onClickHandler} disabled={disabled}>{children}</Styled.Button>
    )
}