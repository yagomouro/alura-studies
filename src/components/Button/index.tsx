import React from "react";
import style from "./Button.module.scss"

interface buttonProps {
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void,
    children?: React.ReactNode
}

function Button({ onClick, type, children }: buttonProps) {
    return (
        <button
            onClick={onClick}
            type={type}
            className={style.botao}
        >
            {children}
        </button>
    )
}

export default Button