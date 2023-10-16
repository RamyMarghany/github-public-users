// Modules
import React from "react";

// Styles
import * as Styled from "./Input.styled";

// Definition
type InputProps = {
    type?: "text" | "email" | "password" | "date" | "tel";
    value: string;
    className?: string;
    placeholder: string;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyPress?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
};

export const Input = ({ value, className, handleChange, type = "text", placeholder, onKeyPress }: InputProps) => {
    return <Styled.Input type={type} className={`custome-input ${className = ""}`} value={value} onChange={handleChange} placeholder={placeholder} onKeyPress={onKeyPress} />;
};
