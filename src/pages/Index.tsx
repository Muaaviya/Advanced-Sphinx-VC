import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FeaturedIn from "@/components/FeaturedIn";
import Testimonials from "@/components/Testimonials";
import Features from "@/components/Features";
import Mission from "@/components/Mission";
import Pricing from "@/components/Pricing";
import Team from "@/components/Team";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <FeaturedIn />
      <Testimonials />
      <Features />
      <Mission />
      <Pricing />
      <Team />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
