import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { HeritageSection } from "@/components/HeritageSection";
import { PhilosophySection } from "@/components/PhilosophySection";
import { CollectionSection } from "@/components/CollectionSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <HeritageSection />
      <PhilosophySection />
      <CollectionSection />
      <NewsletterSection />
      <Footer />
    </main>
  );
};

export default Index;
