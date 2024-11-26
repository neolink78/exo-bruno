import Logo from "@/ui/icons/logo"
import Image from "next/image"

type CarouselCardItemType = {
    idx: number,
    isSelected: number,
    setIsSelected: React.Dispatch<React.SetStateAction<number>>,
    carouselCardItem: {
        src: string,
        username:string,
        position: string,
        description: string
    }
}

const CarouselCardItem = ({idx, isSelected, setIsSelected, carouselCardItem }: CarouselCardItemType) => {
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
                     {'"'}{carouselCardItem.description}{'"'}
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
                         {carouselCardItem.username}
                     </p>
                     <p 
                         className="carousel_card_selected_bottom_position"
                         style={{color: idx % 2 ? '#3C4A41B2' : '#D6E0D3B2'}}
                     >
                         {carouselCardItem.position}
                     </p>
                 </div>
             </div>
         ) : (
             <Image 
                 onClick={() => setIsSelected(idx)}
                 src={carouselCardItem.src}
                 alt={`conseiller ${idx + 1}`}
                 width={192}
                 height={236}
                 className="carousel_card_image"
             />
         )}
     </div>
    )
}

export default CarouselCardItem