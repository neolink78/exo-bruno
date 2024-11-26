import Image from "next/image"
import Button from "@/ui/components/button"
import Logo from "@/ui/icons/logo"
const ImageSection = () => {
    return (
        <>
        <div className="image_section_pictures">
            <Image 
            src='/images/headerVideo.svg'
            alt="welcoming video"
            width={592}
            height={440}
             />
              <Image 
            src='/images/headerGraphic.svg'
            alt="graphic example"
            width={592}
            height={441}
             />
        </div>
           <div className="image_section_header_text_container">
            <div className="image_section_header_text">
            <div className="image_section_header_text_left">
           <p>Where ESG</p>
           <p>can be leveraged</p>
           </div>
           <div className="image_section_header_logo">
           <Logo size="64"/>
           </div>
        <div className="image_section_header_text_right">
          <p className="image_section_header_text_right_text">+500 companies use Greenscope</p>
          <Button buttonHeight="3.125rem" buttonWidth="8.5625rem">Get a demo</Button>
        </div>
        </div>
           </div>
           </>
    )
}

export default ImageSection