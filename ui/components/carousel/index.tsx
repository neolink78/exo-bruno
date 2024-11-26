import { useState } from "react"
import Selectors from "@/ui/components/selectors"
import CarouselItem from "./carouselItems"

type CarouselProps = {
    title: string,
    carouselConfig: {
        src: string,
        alt: string,
        title: string,
        content: string
    }[]
}

const Carousel = ({
    title = 'A solution for everyone',
    carouselConfig,
} : CarouselProps) => {
    const [itemIndex, setItemIndex] = useState(0)
    
    const goNext = () => {
        setItemIndex(itemIndex=== carouselConfig.length -1 ? 0 : itemIndex + 1)
    }

    const goBack = () => {
        setItemIndex(itemIndex=== 0 ? carouselConfig.length -1 : itemIndex - 1);
    }

    return (
        <div className="carousel_container">
<div className="carousel_container_header" >
<div className="carousel_header">
    <p>{title}</p>
<Selectors back={goBack} next={goNext}/>
</div>
</div>
<div className="carousel_items" 
style={{ transform: `translateX(-${itemIndex * 45.5}rem)` }}>
{carouselConfig.map((carouselItem, idx) => (
    <CarouselItem 
    key={idx} 
    idx={idx} 
    carouselItem={carouselItem} 
    itemIndex={itemIndex}
    setItemIndex={setItemIndex}
    />
)) }
</div>
</div>
    )
}

export default Carousel