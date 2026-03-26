import HeroSection from "@/components/HeroSection";
import ChallengeSection from "@/components/ChallengeSection";
import SolutionSection from "@/components/SolutionSection";
import USPSection from "@/components/USPSection";
import ImpactSection from "@/components/ImpactSection";

const Index = () => {
  return (
    <main className="bg-background min-h-screen">
      <HeroSection />
      <ChallengeSection />
      <SolutionSection />
      <USPSection />
      <ImpactSection />
    </main>
  );
};

export default Index;
