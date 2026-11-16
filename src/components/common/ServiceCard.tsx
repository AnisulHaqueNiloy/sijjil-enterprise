import React from 'react';
import {
  Zap, Cpu, Wind, BatteryCharging, ArrowUpDown, Droplets, Flame, Wrench,
  Building2, Milestone, Waypoints, Waves, Hammer,
  Globe, Layers, Code2, LayoutDashboard, ShoppingCart, Server,
  Smartphone, CheckSquare, Palette, ShieldAlert, Network, Camera, HardDrive, Monitor,
  HelpCircle, ChevronRight
} from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { ServiceItem } from '@/data/services';

const iconMap: Record<string, React.ElementType> = {
  Zap, Cpu, Wind, BatteryCharging, ArrowUpDown, Droplets, Flame, Wrench,
  Building2, Milestone, Waypoints, Waves, Hammer,
  Globe, Layers, Code2, LayoutDashboard, ShoppingCart, Server,
  Smartphone, CheckSquare, Palette, ShieldAlert, Network, Camera, HardDrive, Monitor
};

export interface ServiceCardProps {
  service: ServiceItem;
  onSelectModal?: (service: ServiceItem) => void;
  className?: string;
  featured?: boolean;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  onSelectModal,
  className,
  featured = false,
}) => {
  const IconComponent = iconMap[service.icon] || HelpCircle;

  return (
    <Card
      hoverLift
      className={`group flex flex-col justify-between cursor-pointer border transition-all duration-300 ${
        featured
          ? 'border-accent/60 bg-gradient-to-b from-white to-lightgrey/50'
          : 'border-slate-border/80 hover:border-accent'
      } ${className || ''}`}
      onClick={() => onSelectModal && onSelectModal(service)}
      role={onSelectModal ? 'button' : undefined}
      tabIndex={onSelectModal ? 0 : undefined}
      onKeyDown={(e) => {
        if (onSelectModal && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          onSelectModal(service);
        }
      }}
      aria-label={`View details for ${service.title}`}
    >
      <div>
        {/* Icon & Category Indicator */}
        <div className="flex items-center justify-between mb-5">
          <div className="w-12 h-12 rounded-brand bg-primary/5 text-primary group-hover:bg-accent group-hover:text-primary-dark flex items-center justify-center transition-all duration-300">
            <IconComponent className="w-6 h-6" />
          </div>
          <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-muted group-hover:text-accent transition-colors">
            Details & Specs
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-primary group-hover:text-primary-light transition-colors mb-2">
          {service.title}
        </h3>

        {/* Short Description */}
        <p className="text-sm text-slate-muted line-clamp-3 mb-4 leading-relaxed">
          {service.shortDesc}
        </p>

        {/* Mini Highlights */}
        {service.features && service.features.length > 0 && (
          <ul className="text-xs text-slate space-y-1.5 mb-6 border-t border-slate-border/60 pt-3">
            {service.features.slice(0, 2).map((feat, idx) => (
              <li key={idx} className="flex items-center gap-2 text-slate-muted">
                <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                <span className="line-clamp-1">{feat}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Action Footer */}
      <div className="pt-2 border-t border-slate-border/40 flex items-center justify-between text-xs font-semibold text-primary group-hover:text-accent">
        <span>View Full Specifications</span>
        <div className="w-7 h-7 rounded-full bg-slate-100 group-hover:bg-accent group-hover:text-primary-dark flex items-center justify-center transition-all transform group-hover:translate-x-1">
          <ChevronRight className="w-4 h-4" />
        </div>
      </div>
    </Card>
  );
};
