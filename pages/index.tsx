import Header from "@/components/header";
import LogoSlider from "@/components/logoSlider";
import Carousel from "@/components/carousel";
import BreadCrumb from "@/components/breadCrumb";
import Cards from "@/components/cards";
import CarouselCards from "@/components/carouselCards";
import Section from "@/components/section";

export default function Home() {
  return (
    <>
   <Header />
   <LogoSlider />
   <Carousel />
   <BreadCrumb />
   <Cards />
   <CarouselCards />
   <Section />
    </>
  );
}
