import { useState } from "react"
import Selectors from "@/ui/components/selectors"
import CarouselCardItem from "./carouselCardItem"

type CarouselCardsType = {
    carouselCardsConfig:{
        src: string,
        username:string,
        position: string,
        description: string
    }[],
    title: string,
    bottomText: string
}

const CarouselCards = ({carouselCardsConfig, title, bottomText}: CarouselCardsType) => {
    const [isSelected, setIsSelected] = useState(Math.ceil(carouselCardsConfig.length / 2))

    const goNext = () => {
        setIsSelected(isSelected === carouselCardsConfig.length - 1 ? 0 : isSelected + 1)
    }

    const goBack = () => {
        setIsSelected(isSelected === 0 ? carouselCardsConfig.length - 1 : isSelected - 1)
    }

    return (
        <div className="carousel_cards_container">
            <div className="carousel_cards_children_container">
                <p className="carousel_cards_header">{title}</p>
            </div>
            <div className="carousel_cards_items">
                {carouselCardsConfig.map((carouselCardItem, idx) => {
                    return (
                       <CarouselCardItem 
                       key={idx} idx={idx} 
                       isSelected={isSelected} 
                       setIsSelected={setIsSelected} carouselCardItem={carouselCardItem}/>
                    )
                })}
            </div>
            <div className="carousel_card_bottom_buttons">
                <p className="carousel_card_bottom_buttons_text">
                {bottomText}
                </p>
                <Selectors darkMode back={goBack} next={goNext} />
            </div>
        </div>
    )
}

export default CarouselCards