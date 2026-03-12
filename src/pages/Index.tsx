import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StepsSection from "@/components/StepsSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <StepsSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
