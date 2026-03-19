import GovHeader from "@/components/GovHeader";
import Navbar from "@/components/Navbar";
import AnnouncementTicker from "@/components/AnnouncementTicker";
import HeroSection from "@/components/HeroSection";
import KeyServices from "@/components/KeyServices";
import AboutSection from "@/components/AboutSection";
import CoreValues from "@/components/CoreValues";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <GovHeader />
      <Navbar />
      <AnnouncementTicker />
      <main id="main">
        <HeroSection />
        <KeyServices />
        <AboutSection />
        <CoreValues />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
