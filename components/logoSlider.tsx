import { useEffect } from "react";
import Image from "next/image";

const logos = [
    "/logosSlider/slack.svg",
    "/logosSlider/doctolib.svg",
    "/logosSlider/spendesk.svg",
    "/logosSlider/natixis.svg",
    "/logosSlider/payfit.svg",
  ]

const LogoSlider = () => {
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
            <Image key={idx} src={logo} alt={`logo ${idx}`} width={500} height={500} />
            ))}
          </div>
        </div>
      );
};

export default LogoSlider;
