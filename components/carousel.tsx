import Image from "next/image"
import Logo from "@/ui/icons/logo"
import { useState } from "react"
import Selectors from "@/ui/components/selectors"

const carouselItems = [
    {
        src: '/carouselManual/example.svg',
        alt: 'carousel image',
        title: 'For companies',
        content: 'Elevate your ESG strategy to its full potential: measure all your impacts, lead CSRD initiatives, assess your risks and shape your sustainable strategy',

    },
    {
        src: '/carouselManual/example.svg',
        alt: 'carousel image',
        title: 'For companies',
        content: 'Elevate your ESG strategy to its full potential: measure all your impacts, lead CSRD initiatives, assess your risks and shape your sustainable strategy',

    },
    {
        src: '/carouselManual/example.svg',
        alt: 'carousel image',
        title: 'For companies',
        content: 'Elevate your ESG strategy to its full potential: measure all your impacts, lead CSRD initiatives, assess your risks and shape your sustainable strategy',

    }
]


const Carousel = () => {
    const [itemIndex, setItemIndex] = useState(0)
    
    const goNext = () => {
        setItemIndex(itemIndex=== carouselItems.length -1 ? 0 : itemIndex + 1)
    }

    const goBack = () => {
        setItemIndex(itemIndex=== 0 ? carouselItems.length -1 : itemIndex - 1);
    }

    return (
        <div className="carousel_container">
<div className="carousel_container_header" >
<div className="carousel_header">
    <p>A solution for everyone</p>
<Selectors back={goBack} next={goNext}/>
</div>
</div>
<div className="carousel_items" 
style={{ transform: `translateX(-${itemIndex * 45.5}rem)` }}>
{carouselItems.map((carouselItems, idx) => (
    <div key={idx}
    onClick={() => setItemIndex(idx)}
     className={`carousel_item ${idx === itemIndex ? "active" : ""}`}
     >
    <Image 
    src={carouselItems.src} 
    alt={carouselItems.alt}
    width={500} height={500} 
    style={{
        width: '24.5rem', 
        height: '31.5625rem',
        objectFit: 'cover', 
        clipPath: itemIndex === idx ? 'polygon(0 0, 100% 4%, 100% 99%, 0 100%)' : ''}}/>
    <div className="carousel_content_container">
    <div className="carousel_title_container">
    <div className="carousel_title_logo">
    <Logo fill='white'/>
    </div>
    <p className="carousel_title_text">{carouselItems.title}</p>
    </div>
    <p className="carousel_content">{carouselItems.content}</p>
    </div>
    </div>
)) }
</div>
</div>
    )
}

export default Carousel