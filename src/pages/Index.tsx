
import HeroSection from '@/components/HeroSection';
import CompanyLogos from '@/components/CompanyLogos';
import FeaturesSection from '@/components/FeaturesSection';
import StatisticsSection from '@/components/StatisticsSection';
import CallToActionSection from '@/components/CallToActionSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <CompanyLogos />
      <FeaturesSection />
      <StatisticsSection />
      <CallToActionSection />
    </div>
  );
};

export default Index;
