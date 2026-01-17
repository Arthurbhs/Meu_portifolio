import AboutSection from "../components/About/AboutSection";
import HeroSection from "../components/hero/HeroSection";
import Web from "../components/ProjectsSection/Web"
import Design from "../components/ProjectsSection/Design"
import BaixadaPreHistoricaSection from "../components/ProjectsSection/Project";
import Footer from "../components/footer/Footer";
import ZapButton from "../components/ui/zapButton";
export default function Home() {
  return (
    <>
    <ZapButton phone="13981053610"/>
      <HeroSection />
      <AboutSection/>
      <Web/>
      <Design/>
      <BaixadaPreHistoricaSection/>
      <Footer/>
    </>
  );
}
