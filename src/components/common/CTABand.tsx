import React from 'react';
import { ArrowRight, PhoneCall } from 'lucide-react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { PATHS } from '@/routes/paths';
import { COMPANY_INFO } from '@/data/company';

export interface CTABandProps {
  title?: string;
  subtitle?: string;
  onOpenQuoteModal?: () => void;
}

export const CTABand: React.FC<CTABandProps> = ({
  title = 'Have an Upcoming Construction, Electrical, or IT Project?',
  subtitle = 'Reach out to our engineering team today for technical consultation, site visits, or a straightforward cost estimate.',
  onOpenQuoteModal,
}) => {
  return (
    <section className="py-16 lg:py-20 bg-lightgrey border-t border-slate-border">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="relative bg-gradient-to-br from-primary to-primary-dark text-white rounded-brand-lg p-8 sm:p-12 lg:p-16 shadow-soft-lg overflow-hidden border border-primary-light/30"
        >
          {/* Subtle background decoration */}
          <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
          <div className="absolute -right-24 -bottom-24 w-80 h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <span className="text-xs uppercase tracking-widest font-semibold text-accent block mb-2">
              Ready for Tenders & Project Consultations
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-4">
              {title}
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed">
              {subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              {onOpenQuoteModal ? (
                <Button
                  variant="gold"
                  size="lg"
                  onClick={onOpenQuoteModal}
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Request a Price Estimate
                </Button>
              ) : (
                <Button
                  to={PATHS.contact}
                  variant="gold"
                  size="lg"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Discuss Your Project
                </Button>
              )}

              <Button
                href={`tel:${COMPANY_INFO.contact.phone.primary}`}
                variant="outline"
                size="lg"
                className="text-white border-white/30 hover:border-white hover:bg-white/10"
                icon={<PhoneCall className="w-4 h-4" />}
                iconPosition="left"
              >
                Call Us: {COMPANY_INFO.contact.phone.displayPrimary}
              </Button>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
