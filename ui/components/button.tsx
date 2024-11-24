import React from "react"
import ButtonArrow from "../icons/buttonArrow"

type ButtonTypes = {
 children: React.ReactNode
 buttonWidth: string
 buttonHeight: string
 arrowSize?: string
 buttonFontSize?: string
}

const Button = ({
    buttonWidth,
    arrowSize,
    buttonHeight,
    buttonFontSize = '1rem',
    children}: ButtonTypes) => {
    return (
    <a href='/demo' 
    className="ui_button" 
    style={{width: buttonWidth, height: buttonHeight, fontSize: buttonFontSize}}>
    {children}
    <div className="ui_button_arrow">
    <ButtonArrow size={arrowSize}/>
    </div>
    </a>
    )
}

export default Button