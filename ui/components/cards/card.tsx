import ButtonArrow from "@/ui/icons/buttonArrow"
import Image from "next/image"

type CardType = {
    card: {
        imgSrc: string
        imgAlt: string
        title: string
        buttonText: string
        description: string
        backgroundColor: string
        textColor: string
        href: string
    },
    idx: number
}

const Card = ({card, idx}: CardType) => {
    return (
        <div key={idx} className="card_container" style={{backgroundColor: card.backgroundColor}}>
        <div className="card_header" style={{color: card.textColor}}>
        <Image style={{width: '3rem', height: '3rem'}} src={card.imgSrc} alt={card.imgAlt} width={500} height={500} />
        <p className="card_header_title">{card.title}</p>
        </div>
        <div className="card_bottom">
           <a href={card.href} className="card_bottom_button" style={{color: card.textColor}}>
            {card.buttonText}<ButtonArrow color={card.textColor}/></a> 
           <p className="card_bottom_description">{card.description}</p> 
        </div>
    </div>
    )
}

export default Card