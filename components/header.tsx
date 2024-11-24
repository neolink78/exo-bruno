import Image from "next/image"
import Button from "@/ui/components/button"

const Header = () => {
    return (
        <>
        <div className="homePage_pictures">
            <Image 
            style={{width: '37rem', height: '27.5rem'}}
            src='/headerVideo.svg'
            alt="welcoming video"
            width={500}
            height={500}
             />
              <Image 
              style={{width: '37rem', height: '27.5625rem'}}
            src='/headerGraphic.svg'
            alt="graphic example"
            width={500}
            height={500}
             />
        </div>
           <div className="homePage_header_text_container">
            <div className="homePage_header_text">
            <div className="homePage_header_text_left">
           <p>Where ESG</p>
           <p>can be leveraged</p>
           </div>
           <Image 
           src='/logo.svg' 
           width={500} 
           height={500} 
           alt="logo" 
           style={{width: "4rem", height: '4.0075rem', marginLeft: "5.2rem"}}/>
        <div className="homePage_header_text_right">
          <p className="homePage_header_text_right_text">+500 companies use Greenscope</p>
          <Button buttonHeight="3.125rem" buttonWidth="8.5625rem">Get a demo</Button>
        </div>
        </div>
           </div>
           </>
    )
}

export default Header