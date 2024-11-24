import LeftArrow from "@/ui/icons/leftArrow"
import RightArrow from "@/ui/icons/rightArrow"


const Carousel = () => {
    return (
<div className="carousel_container" >
<div className="carousel_header">
    <p>A solution for everyone</p>
    <div>
       <LeftArrow />
       <RightArrow />
    </div>
</div>
<div>content</div>
</div>
    )
}

export default Carousel