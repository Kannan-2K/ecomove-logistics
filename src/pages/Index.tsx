import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ChallengeSection from "@/components/ChallengeSection";
import SolutionSection from "@/components/SolutionSection";
import USPSection from "@/components/USPSection";
// import PricingSection from "@/components/PricingSection";
import NextStepsSection from "@/components/NextStepsSection";
import ImpactSection from "@/components/ImpactSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      <HeroSection />
      <ChallengeSection />
      <SolutionSection />
      <USPSection />
      {/* <PricingSection /> */}
      {/* <NextStepsSection />*/
      <ImpactSection /> }
      <ContactSection />
    </main>
  );
};

export default Index;
