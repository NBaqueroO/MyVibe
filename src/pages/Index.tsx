import { I18nProvider } from "@/contexts/I18nContext";
import Navbar from "@/components/landingPageComponents/Navbar";
import HeroSection from "@/components/landingPageComponents/HeroSection";
import StepsSection from "@/components/landingPageComponents/StepsSection";
import CtaSection from "@/components/landingPageComponents/CtaSection";
import Footer from "@/components/landingPageComponents/Footer";

const Index = () => {
  return (
    <I18nProvider>
      <div className="min-h-screen bg-background">
        <Navbar />
        <HeroSection />
        <StepsSection />
        <CtaSection />
        <Footer />
      </div>
    </I18nProvider>
  );
};

export default Index;
