import Header from "@/components/Header";
import Image from "next/image";
import RightArrow from "@/ui/icons/rightArrow";

export default function Home() {
  return (
    <>
   <Header />
   <div className="layout_navbar">
   <div className="homePage_header_text_container">
    <div>
   <p>Where ESG</p>
   <p>can be leveraged</p>
   </div>
   <Image src='/logo.svg' width={500} height={500} alt="logo" style={{width: "4rem", height: '4.0075rem'}}/>
<div>
  <p>+500 companies use Greenscope</p>
  <a href='/demo' className="layout_navbar_button">
                Get a demo
                <div className="layout_navbar_button_arrow">
                <RightArrow />
                </div>
                </a>
</div>
   </div>
   </div>
    </>
  );
}
