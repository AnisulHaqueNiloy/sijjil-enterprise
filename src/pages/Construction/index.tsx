import React, { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { PageHeader } from '@/components/common/PageHeader';
import { ServiceCard } from '@/components/common/ServiceCard';
import { ServiceDetailModal } from '@/components/common/ServiceDetailModal';
import { CTABand } from '@/components/common/CTABand';
import { Reveal } from '@/components/animated/Reveal';
import { CONSTRUCTION_SERVICES, CIVIL_PROCESS_STEPS, ServiceItem } from '@/data/services';
import { PATHS } from '@/routes/paths';
import { usePageTitle } from '@/hooks/usePageTitle';
import { useQuoteModal } from '@/context/QuoteModalContext';

const Construction: React.FC = () => {
  usePageTitle(
    'Construction Division | Sijjil Enterprise',
    'Building construction, paved roads and highways, concrete bridges, water culverts, drainage channels, and building renovations.'
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
        badge="Division 02 • Civil Works"
        title="Civil Construction Services"
        description="We construct multi-story office buildings, paved asphalt roads, concrete bridges, water drainage canals, and handle complete building renovations across Bangladesh."
        bgImage="https://images.unsplash.com/photo-1541971875076-8f970d573be6?q=80&w=1800&auto=format&fit=crop"
        breadcrumbs={[
          { label: 'Services', path: PATHS.services },
          { label: 'Construction' },
        ]}
      />

      {/* Services Grid Section */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-border">
        <Container>
          <SectionTitle
            badge="Our Construction Work"
            title="Durable Buildings, Roads & Civil Works"
            description="Click on any card below to see full details, engineering specifications, and request a cost estimate."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CONSTRUCTION_SERVICES.map((service, idx) => (
              <Reveal key={service.id} delay={idx * 0.08}>
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
            title="How We Deliver Construction Projects"
            description="From initial ground survey and drawings to solid foundation and final inspection."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {CIVIL_PROCESS_STEPS.map((step, idx) => (
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
        onRequestQuote={(serviceTitle) => openQuoteModal(`Construction: ${serviceTitle}`)}
      />

      {/* CTA */}
      <CTABand
        title="Planning a Construction Project?"
        subtitle="Let our civil engineers review your site requirements, soil reports, and bill of quantities."
        onOpenQuoteModal={() => openQuoteModal('Construction Division')}
      />
    </div>
  );
};

export default Construction;
