import { I18nProvider } from "@/contexts/I18nContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <I18nProvider>
      <div className="min-h-screen bg-background">
        <Navbar />
        <Footer />
      </div>
    </I18nProvider>
  );
};

export default Index;