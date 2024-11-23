import Image from "next/image"

const Header = () => {
    return (
        <div className="homePage_header">
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
    )
}

export default Header