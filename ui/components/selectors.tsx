import { useState } from "react"
import LeftArrow from "../icons/leftArrow"
import RightArrow from "../icons/rightArrow"

type SelectorsType = {
    back: () => void
    next: () => void
    darkMode?: boolean
}

const Selectors = ({back, next, darkMode = false}: SelectorsType) => {
    const [leftColor, setLeftColor] = useState(darkMode ? '#3c4a41' : '#F4F8EF')
    const [rightColor, setRightColor] = useState(darkMode ? '#3c4a41' : '#F4F8EF')
    return (
        <div className="ui_selectors">
        <div className={`ui_selector ${darkMode ? 'dark' : ''}`}
        onMouseEnter={() => setLeftColor(!darkMode ? '#3c4a41' : '#F4F8EF')} 
        onMouseLeave={() => setLeftColor(darkMode ? '#3c4a41' : '#F4F8EF')}
        onClick={back}>
       <LeftArrow color={leftColor}/>
       </div>
       <div className={`ui_selector ${darkMode ? 'dark' : ''}`}
       onMouseEnter={() => setRightColor(!darkMode ? '#3c4a41' : '#F4F8EF')} 
       onMouseLeave={() => setRightColor(darkMode ? '#3c4a41' : '#F4F8EF')}
       onClick={next}>
       <RightArrow color={rightColor}/>
       </div>
       </div>
    )
}

export default Selectors