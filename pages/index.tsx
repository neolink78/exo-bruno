import Layout from '@/components/layout/index';
import ImageSection from "@/components/imageSection";
import LogoSlider from "@/ui/components/logoSlider";
import Carousel from "@/ui/components/carousel/index";
import BreadCrumb from "@/ui/components/breadcrumb/index";
import Cards from "@/ui/components/cards/index";
import CarouselCards from '@/ui/components/carouselCards';
import Section from "@/ui/components/section/index";
import { carouselConfig } from "@/config/carouselConfig"
import { breadcrumbConfig } from "@/config/breadCrumbConfig"
import { cardsConfig } from '@/config/cardsConfig';
import { carouselCardsConfig } from '@/config/carouselCardsConfig';

export default function Home() {
  return (
    <Layout>
   <ImageSection />
   <LogoSlider logos={[
  "/logosSlider/slack.svg",
  "/logosSlider/doctolib.svg",
  "/logosSlider/spendesk.svg",
  "/logosSlider/natixis.svg",
  "/logosSlider/payfit.svg",
]} />
   <Carousel title='A solution for everyone' carouselConfig={carouselConfig}/>
   <BreadCrumb 
   items={["ESG Data Solution", "Carbon Assessment", "CSRD", "Impact Analysis & Compliance"]}
   title='All your ESG journey needs in one platform'
   breadCrumbConfig={breadcrumbConfig}
    />
   <Cards title='Designed with the best technology' cardConfig={cardsConfig}/>
   <CarouselCards 
   title='+500 companies use Greenscope' 
   carouselCardsConfig={carouselCardsConfig} 
   bottomText='Lorem ipsum dolor sit amet consectetur. Fringilla lorem proin nunc enim luctus ut quis. Sapien diam eget congue molestie. Vitae vestibulum accumsan adipiscing nulla.' 
   />
   <Section 
   leftText="Notre équipe d'experts vous accompagne dans votre démarche ESG" 
   rightText="Nos experts vous accompagnent sur toute la verticale ESG/RSE de vos fonds d'investissement ou de votre entreprise:"
   buttonText = "Demander une démo"
   />
    </Layout>
  );
}
