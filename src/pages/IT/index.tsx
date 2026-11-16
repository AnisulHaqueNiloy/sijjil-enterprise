import React, { useState } from 'react';
import {
  Globe, Smartphone, Server, Database,
  Terminal, Cpu, Layout
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { PageHeader } from '@/components/common/PageHeader';
import { ServiceCard } from '@/components/common/ServiceCard';
import { ServiceDetailModal } from '@/components/common/ServiceDetailModal';
import { CTABand } from '@/components/common/CTABand';
import { Badge } from '@/components/ui/Badge';
import { Reveal } from '@/components/animated/Reveal';
import {
  IT_WEB_SERVICES,
  IT_APP_SERVICES,
  IT_BUILD_PROCESS,
  ServiceItem,
} from '@/data/services';
import { PATHS } from '@/routes/paths';
import { usePageTitle } from '@/hooks/usePageTitle';
import { useQuoteModal } from '@/context/QuoteModalContext';

const techCategories = [
  {
    category: 'Frontend & UI',
    icon: Layout,
    tools: ['Next.js 14/15', 'React.js', 'TypeScript', 'Tailwind CSS', 'Figma Prototyping', 'HTML5 / Modern CSS'],
  },
  {
    category: 'Backend & APIs',
    icon: Terminal,
    tools: ['Node.js & Express', 'NestJS', 'Python (Django / FastAPI)', 'PHP & Laravel', 'RESTful & GraphQL APIs'],
  },
  {
    category: 'Mobile Apps',
    icon: Smartphone,
    tools: ['Flutter & Dart', 'React Native', 'Android (Kotlin)', 'iOS (Swift)', 'Offline SQLite Sync'],
  },
  {
    category: 'Databases & Cache',
    icon: Database,
    tools: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis Caching', 'Prisma & TypeORM'],
  },
  {
    category: 'DevOps & Cloud',
    icon: Server,
    tools: ['Docker Containers', 'Linux (Ubuntu Server)', 'Nginx Web Server', 'AWS & DigitalOcean', 'CI/CD Pipelines'],
  },
  {
    category: 'Payments & Integrations',
    icon: Cpu,
    tools: ['bKash Merchant API', 'Nagad API', 'Rocket & Upay', 'SSLCommerz (Cards)', 'SMS Gateway APIs'],
  },
];

const IT: React.FC = () => {
  usePageTitle(
    'Software & Web Development | Sijjil Enterprise',
    'Custom web applications, e-governance portals, Android & iOS mobile apps, cloud databases, and digital payment integrations.'
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
        badge="Division 03 • Software Engineering"
        title="Software & Web Development"
        description="We build fast, secure web applications, e-governance portals, Android & iOS mobile apps, and custom database systems for public institutions and enterprises."
        breadcrumbs={[
          { label: 'Services', path: PATHS.services },
          { label: 'Software & Web Development' },
        ]}
      />

      {/* Development Tech Stack Banner */}
      <section className="py-12 bg-primary-dark text-white border-b border-primary-light/30">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-8">
            <Badge variant="gold" className="mb-2">Development Technologies</Badge>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Modern Tech Stacks We Build With
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              We build using proven, secure, and modern tools to ensure your software is fast, scalable, and easy to maintain.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {techCategories.map((group, idx) => {
              const Icon = group.icon;
              return (
                <div
                  key={idx}
                  className="bg-white/5 rounded-brand p-5 border border-white/10 hover:border-accent/40 transition-colors"
                >
                  <div className="flex items-center gap-2.5 mb-3 text-accent">
                    <Icon className="w-4 h-4" />
                    <h3 className="text-sm font-bold text-white">{group.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {group.tools.map((tool, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-1 rounded bg-white/10 text-[11px] font-medium text-slate-200"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Section 1: Web Development & Portals */}
      <section className="py-20 bg-white border-b border-slate-border">
        <Container>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-brand bg-primary/10 text-primary flex items-center justify-center">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs uppercase font-bold text-accent tracking-widest block">
                Field 01
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-primary">
                Web Development & E-Governance Portals
              </h2>
            </div>
          </div>
          <p className="text-slate-muted text-sm sm:text-base mb-10 max-w-2xl leading-relaxed">
            Custom web software, citizen service portals, admin dashboards, and company websites built with React, Next.js, Node.js, and Laravel.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {IT_WEB_SERVICES.map((service, idx) => (
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

      {/* Section 2: Mobile App Development */}
      <section className="py-20 bg-lightgrey border-b border-slate-border">
        <Container>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-brand bg-accent/20 text-accent-700 flex items-center justify-center">
              <Smartphone className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs uppercase font-bold text-accent-700 tracking-widest block">
                Field 02
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-primary">
                Mobile Application Development
              </h2>
            </div>
          </div>
          <p className="text-slate-muted text-sm sm:text-base mb-10 max-w-2xl leading-relaxed">
            High-performance mobile apps for Android and iOS using Flutter and React Native. Includes offline form saving, GPS location tagging, and clean Figma designs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {IT_APP_SERVICES.map((service, idx) => (
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

      {/* How We Build (Software Delivery Lifecycle) */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-border">
        <Container>
          <SectionTitle
            badge="Development Workflow"
            title="How We Build Software Projects"
            description="A clear 5-stage development process to ensure your web or mobile software is delivered without bugs, on schedule, and fully tested."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {IT_BUILD_PROCESS.map((step, idx) => (
              <Reveal key={step.step} delay={idx * 0.08}>
                <div className="bg-lightgrey rounded-brand-lg p-6 border border-slate-border shadow-soft h-full flex flex-col justify-between">
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
        onRequestQuote={(serviceTitle) => openQuoteModal(`Software Development: ${serviceTitle}`)}
      />

      {/* CTA */}
      <CTABand
        title="Have a Web or Mobile Software Project in Mind?"
        subtitle="Speak with our software engineers and full-stack developers for technical consultation, scope planning, and cost estimates."
        onOpenQuoteModal={() => openQuoteModal('Software Development Division')}
      />
    </div>
  );
};

export default IT;
