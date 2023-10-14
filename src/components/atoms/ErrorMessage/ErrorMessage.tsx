// Modules
import React from "react";

// Styles
import './ErrorMessage.scss'

// Definition
type ErrorMessageProps={
    children: React.ReactNode
}
export const ErrorMessage :React.FC<ErrorMessageProps>=({children})=>(
    <div className="error-message">
        <h3>{children}</h3>
    </div>
)