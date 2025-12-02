import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import FeatureShowcase from '../components/FeatureShowcase';
import Comparison from '../components/Comparison';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import TeamSection from '../components/TeamSection';
import FAQ from '../components/FAQ';
import JourneySection from '../components/JourneySection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <FeatureShowcase />
      <Comparison />
      <Testimonials />
      <Pricing />
      <TeamSection />
      <FAQ />
      <JourneySection />
      <CTASection />
      <Footer />
    </div>
  );
}

export default Home;


