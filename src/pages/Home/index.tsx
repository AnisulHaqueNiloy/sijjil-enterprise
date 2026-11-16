import React from 'react';
import { usePageTitle } from '@/hooks/usePageTitle';
import { HeroSection } from './sections/HeroSection';
import { ServicesPreviewSection } from './sections/ServicesPreviewSection';
import { AboutPreviewSection } from './sections/AboutPreviewSection';
import { ApproachSection } from './sections/ApproachSection';
import { ProjectsTeaserSection } from './sections/ProjectsTeaserSection';
import { HomeCTASection } from './sections/HomeCTASection';
import { COMPANY_INFO } from '@/data/company';

const Home: React.FC = () => {
  usePageTitle(
    `${COMPANY_INFO.name} | Government & Public Sector Contractor Bangladesh`,
    COMPANY_INFO.heroSubtext
  );

  return (
    <div className="w-full">
      <HeroSection />
      <ServicesPreviewSection />
      <AboutPreviewSection />
      <ApproachSection />
      <ProjectsTeaserSection />
      <HomeCTASection />
    </div>
  );
};

export default Home;
