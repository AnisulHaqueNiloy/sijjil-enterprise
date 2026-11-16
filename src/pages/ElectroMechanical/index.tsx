import React, { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { PageHeader } from '@/components/common/PageHeader';
import { ServiceCard } from '@/components/common/ServiceCard';
import { ServiceDetailModal } from '@/components/common/ServiceDetailModal';
import { CTABand } from '@/components/common/CTABand';
import { Reveal } from '@/components/animated/Reveal';
import { ELECTRO_SERVICES, MEP_PROCESS_STEPS, ServiceItem } from '@/data/services';
import { PATHS } from '@/routes/paths';
import { usePageTitle } from '@/hooks/usePageTitle';
import { useQuoteModal } from '@/context/QuoteModalContext';

const ElectroMechanical: React.FC = () => {
  usePageTitle(
    'Electro-Mechanical Services | Sijjil Enterprise',
    'Electrical wiring, substations, central AC (HVAC), backup diesel generators, lifts, water pumps, and fire safety systems.'
  );

  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { openQuoteModal } = useQuoteModal();

  const handleOpenDetailModal = (service: ServiceItem) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleCloseDetailModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-full">
      <PageHeader
        badge="Division 01 • MEP Engineering"
        title="Electro-Mechanical Services"
        description="We install and maintain electrical power systems, central air conditioning, backup generators, elevators, water supply pumps, and fire safety equipment."
        bgImage="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1800&auto=format&fit=crop"
        breadcrumbs={[
          { label: 'Services', path: PATHS.services },
          { label: 'Electro-Mechanical' },
        ]}
      />

      {/* Services Grid Section */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-border">
        <Container>
          <SectionTitle
            badge="What We Do"
            title="Electrical, Air Conditioning & Safety Work"
            description="Click on any card below to see what is included, equipment options, and request an estimate."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ELECTRO_SERVICES.map((service, idx) => (
              <Reveal key={service.id} delay={idx * 0.05}>
                <ServiceCard
                  service={service}
                  onSelectModal={handleOpenDetailModal}
                />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Process Timeline */}
      <section className="py-20 lg:py-28 bg-lightgrey border-b border-slate-border">
        <Container>
          <SectionTitle
            badge="Simple Steps"
            title="How We Execute Electrical & MEP Work"
            description="From initial power load calculation to safe installation and final testing."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {MEP_PROCESS_STEPS.map((step, idx) => (
              <Reveal key={step.step} delay={idx * 0.08}>
                <div className="bg-white rounded-brand-lg p-6 border border-slate-border shadow-soft h-full flex flex-col justify-between">
                  <div>
                    <span className="w-8 h-8 rounded-full bg-accent/20 text-accent-700 font-extrabold flex items-center justify-center text-xs mb-4">
                      {step.step}
                    </span>
                    <h3 className="text-base font-bold text-primary mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-muted leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        isOpen={isModalOpen}
        onClose={handleCloseDetailModal}
        onRequestQuote={(serviceTitle) => openQuoteModal(`Electro-Mechanical: ${serviceTitle}`)}
      />

      {/* CTA */}
      <CTABand
        title="Need an Electrical or MEP Estimate?"
        subtitle="Our engineers are ready to review your building drawings and provide a clear, fair price estimate."
        onOpenQuoteModal={() => openQuoteModal('Electro-Mechanical Division')}
      />
    </div>
  );
};

export default ElectroMechanical;
