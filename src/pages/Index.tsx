import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { PhilosophySection } from "@/components/PhilosophySection";
import { CollectionSection } from "@/components/CollectionSection";
import { HeritageSection } from "@/components/HeritageSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <PhilosophySection />
      <CollectionSection />
      <HeritageSection />
      <NewsletterSection />
      <Footer />
    </main>
  );
};

export default Index;
