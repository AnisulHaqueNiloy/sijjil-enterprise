import React from 'react';
import { ArrowRight, FolderKanban } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Reveal } from '@/components/animated/Reveal';
import { PATHS } from '@/routes/paths';

export const ProjectsTeaserSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-border">
      <Container>
        <Reveal>
          <div className="max-w-4xl mx-auto bg-lightgrey rounded-brand-lg p-8 sm:p-12 text-center border border-slate-border shadow-soft relative overflow-hidden">
            <div className="w-16 h-16 rounded-brand bg-primary/10 text-primary flex items-center justify-center mx-auto mb-6">
              <FolderKanban className="w-8 h-8 text-primary" />
            </div>

            <Badge variant="gold" className="mb-3">
              Project Portfolio
            </Badge>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-4">
              Our Project Portfolio Is Being Updated
            </h2>

            <p className="text-sm sm:text-base text-slate-muted max-w-xl mx-auto mb-8 leading-relaxed">
              We are currently uploading project photos, completion certificates, and summaries from our recent government and private contracts. If you need our verified work history for a tender or proposal, please reach out to us directly.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button
                to={PATHS.projects}
                variant="outline"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                View Project Page
              </Button>

              <Button
                to={PATHS.contact}
                variant="primary"
              >
                Request Company Profile
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
};
