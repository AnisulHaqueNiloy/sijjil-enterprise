import React from 'react';
import { CheckCircle2, ArrowRight, ShieldCheck, Code } from 'lucide-react';
import { Modal } from '@/components/ui/Modal';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { ServiceItem } from '@/data/services';

export interface ServiceDetailModalProps {
  service: ServiceItem | null;
  isOpen: boolean;
  onClose: () => void;
  onRequestQuote: (serviceTitle: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  isOpen,
  onClose,
  onRequestQuote,
}) => {
  if (!service) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={service.title}
      subtitle={`Service Scope • ${service.divisionSlug.replace('-', ' ').toUpperCase()}`}
      maxWidth="max-w-2xl"
    >
      <div className="space-y-6">
        {/* Description */}
        <div>
          <h4 className="text-xs uppercase font-semibold tracking-wider text-slate-muted mb-2">
            What Is Included
          </h4>
          <p className="text-sm sm:text-base text-slate leading-relaxed">
            {service.fullDesc}
          </p>
        </div>

        {/* Feature Specifications List */}
        <div>
          <h4 className="text-xs uppercase font-semibold tracking-wider text-slate-muted mb-3 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-accent" />
            <span>Key Details & Capabilities</span>
          </h4>
          <div className="bg-lightgrey/60 rounded-brand p-4 border border-slate-border/70">
            <ul className="space-y-2.5">
              {service.features.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate">
                  <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Tech Stack tags if present (for IT) */}
        {service.techStack && service.techStack.length > 0 && (
          <div>
            <h4 className="text-xs uppercase font-semibold tracking-wider text-slate-muted mb-2 flex items-center gap-1.5">
              <Code className="w-4 h-4 text-accent" />
              <span>Technologies & Tools</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {service.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded bg-primary/10 text-primary font-semibold text-xs border border-primary/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Technical Specs Tags */}
        {service.specs && service.specs.length > 0 && (
          <div>
            <h4 className="text-xs uppercase font-semibold tracking-wider text-slate-muted mb-2">
              Standards & Specifications
            </h4>
            <div className="flex flex-wrap gap-2">
              {service.specs.map((spec, idx) => (
                <Badge key={idx} variant="slate" className="text-[11px] font-normal tracking-normal">
                  {spec}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* Footer actions */}
        <div className="pt-4 border-t border-slate-border/60 flex flex-wrap items-center justify-between gap-4">
          <span className="text-xs text-slate-muted">
            Detailed estimates provided within 24 hours.
          </span>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" onClick={onClose}>
              Back
            </Button>
            <Button
              variant="gold"
              size="sm"
              icon={<ArrowRight className="w-4 h-4" />}
              onClick={() => {
                onClose();
                onRequestQuote(service.title);
              }}
            >
              Request an Estimate
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};
