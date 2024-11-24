import { useState } from "react"
import LeftArrow from "../icons/leftArrow"
import RightArrow from "../icons/rightArrow"

type SelectorsType = {
    back: () => void
    next: () => void
}

const Selectors = ({back, next}: SelectorsType) => {
    const [leftColor, setLeftColor] = useState('#F4F8EF')
    const [rightColor, setRightColor] = useState('#F4F8EF')
    return (
        <>
        <div className="ui_selectors">
        <div className="ui_selector"
        onMouseEnter={() => setLeftColor('#3c4a41')} 
        onMouseLeave={() => setLeftColor('#F4F8EF')}
        onClick={back}>
       <LeftArrow color={leftColor}/>
       </div>
       <div className="ui_selector" 
       onMouseEnter={() => setRightColor('#3c4a41')} 
       onMouseLeave={() => setRightColor('#F4F8EF')}
       onClick={next}>
       <RightArrow color={rightColor}/>
       </div>
       </div>
        </>
    )
}

export default Selectors