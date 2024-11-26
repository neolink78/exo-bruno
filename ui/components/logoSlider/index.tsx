import { useEffect } from "react";
import Image from "next/image";

type logoSliderType = {
  logos : string[]
}

const LogoSlider = ({logos}: logoSliderType) => {
    useEffect(() => {
        const logosSlide = document.querySelector(".logos-slide");
        if (logosSlide){
            const copy = logosSlide.cloneNode(true);
        document.querySelector(".logos")?.appendChild(copy);}
      }, []);
    
      return (
        <div className="logos">
          <div className="logos-slide">
            {logos.concat(logos).map((logo, idx) => (
            <Image key={idx} src={logo} alt={`logo ${idx}`} width={100.63} height={100.63} />
            ))}
          </div>
        </div>
      );
};

export default LogoSlider;
