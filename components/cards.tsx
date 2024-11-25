import ButtonArrow from "@/ui/icons/buttonArrow"
import Image from "next/image"

const Cards = () => {
    return (
<div className="cards_container">
    <div className="cards_children_container">
        <p  className="cards_header">Designed with the best technology</p>
    
    </div>
    <div className="cards_content">
    <div className="card_container" style={{backgroundColor: '#F4F8EF'}}>
        <div className="card_header" style={{color: '#3C4A41'}}>
        <Image style={{width: '3rem', height: '3rem'}} src='/cards/dbIcon.svg' alt='db icon' width={500} height={500} />
        <p className="card_header_title">Data integration</p>
        </div>
        <div className="card_bottom">
           <p className="card_bottom_button" style={{color: "#3C4A41"}}>
            Learn more <ButtonArrow color="#3C4A41"/></p> 
           <p className="card_bottom_description">Lorem ipsum dolor sit amet consectetur. Sagittis sed congue semper sapien pulvinar. Tellus fames velit leo vel.</p> 
            
        </div>
    </div>
    <div className="card_container" style={{backgroundColor: '#3C4A41'}}>
        <div className="card_header" style={{color: '#F4F8EF'}} >
        <Image style={{width: '3rem', height: '3rem'}} src='/cards/lockIcon.svg' alt='lock icon' width={500} height={500} />
        <p className="card_header_title">Security</p>
        </div>
        <div className="card_bottom">
           <p className="card_bottom_button" style={{color: "#f4f8ef"}}>
            Learn more <ButtonArrow color="#F4F8EF"/> 
           </p> 
           <p className="card_bottom_description" style={{color: "#f4f8ef"}}>
            Lorem ipsum dolor sit amet consectetur. Sagittis sed congue semper sapien pulvinar. Tellus fames velit leo vel.
           </p> 
            
        </div>
    </div>
    </div>
    </div>
    )
}

export default Cards

