import Image from "next/image"
import Logo from "@/ui/icons/logo"

type CarouselItemProps = {
    carouselItem: {
        src: string,
        alt: string,
        title: string,
        content: string
    },
    idx: number,
    itemIndex: number,
    setItemIndex: React.Dispatch<React.SetStateAction<number>>
}

const CarouselItem = ({carouselItem, idx, itemIndex, setItemIndex}: CarouselItemProps) => {
    return (
        <div key={idx}
    onClick={() => setItemIndex(idx)}
     className={`carousel_item ${idx === itemIndex ? "active" : ""}`}
     >
        <Image 
    src={carouselItem.src} 
    alt={carouselItem.alt}
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
    <p className="carousel_title_text">{carouselItem.title}</p>
    </div>
    <p className="carousel_content">{carouselItem.content}</p>
    </div>
    </div>
    )
}

export default CarouselItem