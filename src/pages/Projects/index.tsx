import React, { useState } from 'react';
import { FolderKanban, ArrowRight, ShieldCheck, Calendar, MapPin } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { PageHeader } from '@/components/common/PageHeader';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { CTABand } from '@/components/common/CTABand';
import { Reveal } from '@/components/animated/Reveal';
import { PROJECTS_DATA, Project } from '@/data/projects';
import { PATHS } from '@/routes/paths';
import { usePageTitle } from '@/hooks/usePageTitle';
import { useQuoteModal } from '@/context/QuoteModalContext';

const Projects: React.FC = () => {
  usePageTitle(
    'Projects | Sijjil Enterprise - Work Portfolio',
    'Completed and ongoing civil construction, electrical engineering, and IT projects delivered across Bangladesh.'
  );

  const { openQuoteModal } = useQuoteModal();
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const divisions = ['All', 'Electro-Mechanical', 'Construction', 'IT Solutions'];

  const filteredProjects = activeFilter === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.division === activeFilter);

  return (
    <div className="w-full">
      <PageHeader
        badge="Past & Present Work"
        title="Our Projects"
        description="A look at our government and private contracts in civil construction, electrical installations, and modern software development."
        bgImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1800&auto=format&fit=crop"
        breadcrumbs={[{ label: 'Projects' }]}
      />

      <section className="py-20 lg:py-28 bg-white border-b border-slate-border">
        <Container>
          {PROJECTS_DATA.length === 0 ? (
            /* Simple, Professional In-Preparation State */
            <Reveal>
              <div className="max-w-3xl mx-auto text-center py-12 px-6 sm:px-12 bg-lightgrey rounded-brand-lg border border-slate-border shadow-soft relative overflow-hidden">
                <div className="w-20 h-20 rounded-brand bg-primary/10 text-primary flex items-center justify-center mx-auto mb-6">
                  <FolderKanban className="w-10 h-10 text-primary" />
                </div>

                <Badge variant="gold" className="mb-4">
                  Portfolio Under Preparation
                </Badge>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-primary mb-4">
                  Our Project Gallery Is Being Updated
                </h2>

                <p className="text-sm sm:text-base text-slate-muted max-w-lg mx-auto mb-8 leading-relaxed">
                  We are currently organizing photographs, project descriptions, and completion certificates from our recent contracts. If you need our verified work history for a tender or pre-qualification proposal, we will be glad to share our full credentials.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Button
                    to={PATHS.contact}
                    variant="primary"
                    size="lg"
                    icon={<ArrowRight className="w-4 h-4" />}
                  >
                    Request Credentials Dossier
                  </Button>

                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => openQuoteModal('Project Inquiry')}
                  >
                    Discuss an Upcoming Tender
                  </Button>
                </div>

                <div className="mt-12 pt-8 border-t border-slate-border/60 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-muted">
                  <div className="flex items-center justify-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-accent" />
                    <span>Government Registered</span>
                  </div>
                  <div className="flex items-center justify-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-accent" />
                    <span>Tested Work Quality</span>
                  </div>
                  <div className="flex items-center justify-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-accent" />
                    <span>On-Time Handover</span>
                  </div>
                </div>
              </div>
            </Reveal>
          ) : (
            /* Populated Projects Grid (when data/projects.ts has items) */
            <div className="space-y-8">
              <div className="flex items-center justify-center gap-2 flex-wrap pb-4">
                {divisions.map((div) => (
                  <button
                    key={div}
                    onClick={() => setActiveFilter(div)}
                    className={`px-4 py-2 rounded-brand text-xs sm:text-sm font-semibold transition-colors ${
                      activeFilter === div
                        ? 'bg-primary text-white shadow-soft'
                        : 'bg-lightgrey text-slate hover:bg-slate-200'
                    }`}
                  >
                    {div}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project: Project) => (
                  <Card key={project.id} hoverLift className="flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <Badge variant="navy">{project.division}</Badge>
                        <Badge variant={project.status === 'Completed' ? 'success' : 'gold'}>
                          {project.status}
                        </Badge>
                      </div>

                      <h3 className="text-xl font-bold text-primary mb-2">
                        {project.title}
                      </h3>

                      <p className="text-xs font-semibold text-accent-700 mb-3">
                        Client: {project.client}
                      </p>

                      <p className="text-sm text-slate-muted mb-4 leading-relaxed">
                        {project.scopeSummary}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-border text-xs text-slate-muted flex items-center justify-between">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-accent" />
                        {project.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-accent" />
                        {project.year}
                      </span>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </Container>
      </section>

      <CTABand onOpenQuoteModal={() => openQuoteModal()} />
    </div>
  );
};

export default Projects;
