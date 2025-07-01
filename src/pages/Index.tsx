
import HeroSection from '@/components/HeroSection';
import CompanyLogos from '@/components/CompanyLogos';
import FeaturesSection from '@/components/FeaturesSection';
import StatisticsSection from '@/components/StatisticsSection';
import CallToActionSection from '@/components/CallToActionSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <CompanyLogos />
      <FeaturesSection />
      <StatisticsSection />
      <CallToActionSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;
