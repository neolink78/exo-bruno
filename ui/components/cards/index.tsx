import Card from "./card"


type CardsType = {
    title: string,
    cardConfig: {
        imgSrc: string
        imgAlt: string
        title: string
        buttonText: string
        description: string
        backgroundColor: string
        textColor: string
        href: string
    }[]
}

const Cards = ({title, cardConfig }: CardsType) => {
    return (
<div className="cards_container">
    <div className="cards_children_container">
        <p  className="cards_header">{title}</p>
    </div>
    <div className="cards_content">
        {cardConfig.map((card, idx) => (
        <Card key={idx} card={card} idx={idx}/>
         )
        )}
    </div>
    </div>
    )
}

export default Cards

