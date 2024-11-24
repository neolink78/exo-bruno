import React from "react"
import RightArrow from "../icons/rightArrow"

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
    <RightArrow size={arrowSize}/>
    </div>
    </a>
    )
}

export default Button

//height: 3.125rem;
//width: 8.5625rem;