import Logo from "@/ui/icons/logo"
import Image from "next/image"
import { useState } from "react"
import { carouselCardsItems } from "./items/carouselCardsItems"
import Selectors from "@/ui/components/selectors"

const CarouselCards = () => {
    const [isSelected, setIsSelected] = useState(Math.ceil(carouselCardsItems.length / 2))

    const goNext = () => {
        setIsSelected(isSelected === carouselCardsItems.length - 1 ? 0 : isSelected + 1)
    }

    const goBack = () => {
        setIsSelected(isSelected === 0 ? carouselCardsItems.length - 1 : isSelected - 1)
    }

    return (
        <div className="carousel_cards_container">
            <div className="carousel_cards_children_container">
                <p className="carousel_cards_header">+500 companies use Greenscope</p>
            </div>
            <div className="carousel_cards_items">
                {carouselCardsItems.map((carouselCardsItem, idx) => {
                    const position = idx - isSelected;
                    const translateAmount = position * 10;
                    
                    return (
                        <div
                           className="carousel_card_wrapper"
                            key={idx}
                            style={{
                                transform: `translateX(${translateAmount}rem)`,
                            }}
                        >
                            {idx === isSelected ? (
                                <div 
                                    className="carousel_card_selected"
                                    style={{
                                        backgroundColor: idx % 2 ? '#F4F8EF' : '#3c4a41',
                                        color: idx % 2 ? '#3c4a41' : '#f4f8ef',
                                    }}
                                >
                                    <p className="carousel_card_selected_description">
                                        {'"'}{carouselCardsItem.description}{'"'}
                                    </p>
                                    <div 
                                        className="carousel_card_selected_bottom"
                                        style={{
                                            borderTop: idx % 2 
                                                ? 'solid 0.0625rem #3C4A4133' 
                                                : 'solid 0.0625rem #d6e0d366'
                                        }}
                                    >
                                        <p className="carousel_card_selected_bottom_username">
                                            <Logo size="16" fill={idx % 2 ? '#3c4a41' : '#f4f8ef'}/> 
                                            {carouselCardsItem.username}
                                        </p>
                                        <p 
                                            className="carousel_card_selected_bottom_position"
                                            style={{color: idx % 2 ? '#3C4A41B2' : '#f4f8ef'}}
                                        >
                                            {carouselCardsItem.position}
                                        </p>
                                    </div>
                                </div>
                            ) : (
                                <Image 
                                    onClick={() => setIsSelected(idx)}
                                    src={carouselCardsItem.src}
                                    alt={`conseiller ${idx + 1}`}
                                    width={192}
                                    height={236}
                                    className="carousel_card_image"
                                />
                            )}
                        </div>
                    )
                })}
            </div>
            <div className="carousel_card_bottom_buttons">
                <p className="carousel_card_bottom_buttons_text">
                    Lorem ipsum dolor sit amet consectetur. Fringilla lorem proin nunc enim luctus ut quis. 
                    Sapien diam eget congue molestie. Vitae vestibulum accumsan adipiscing nulla.
                </p>
                <Selectors darkMode back={goBack} next={goNext} />
            </div>
        </div>
    )
}

export default CarouselCards