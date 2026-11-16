import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home, Image as ImageIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { PATHS } from '@/routes/paths';

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

export interface PageHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  breadcrumbs?: BreadcrumbItem[];
  bgImage?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  badge,
  title,
  description,
  breadcrumbs = [],
  bgImage = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1800&auto=format&fit=crop',
}) => {
  return (
    <section className="relative bg-primary-dark text-white pt-28 pb-14 lg:pt-36 lg:pb-20 border-b border-primary-light/30 overflow-hidden">
      {/* Category-Specific Background Photo (Clearly Visible) */}
      {bgImage && (
        <div className="absolute inset-0 z-0">
          <img
            src={bgImage}
            alt={title}
            className="w-full h-full object-cover object-center opacity-45 filter brightness-[0.85] contrast-[1.05]"
          />
          {/* Directional Gradient: Dark on left for text legibility, transparent on right to show the photo */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-950/95 via-primary-950/80 to-primary-950/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-transparent to-black/20" />
          <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />
        </div>
      )}

      {/* Ambient gold glow */}
      <div className="absolute -top-32 right-1/4 w-96 h-96 bg-accent/15 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Breadcrumb, Badge, Title, Description */}
          <div className="lg:col-span-8 flex flex-col items-start text-left">
            {/* Breadcrumb Navigation */}
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-xs sm:text-sm text-slate-200/90 mb-5 flex-wrap drop-shadow-sm"
            >
              <Link
                to={PATHS.home}
                className="inline-flex items-center gap-1.5 hover:text-accent transition-colors font-medium"
              >
                <Home className="w-3.5 h-3.5" />
                <span>Home</span>
              </Link>

              {breadcrumbs.map((crumb, idx) => (
                <React.Fragment key={idx}>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-300/60" />
                  {crumb.path ? (
                    <Link
                      to={crumb.path}
                      className="hover:text-accent transition-colors font-medium"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-accent font-semibold">{crumb.label}</span>
                  )}
                </React.Fragment>
              ))}
            </nav>

            {/* Badge */}
            {badge && (
              <div className="mb-3">
                <Badge variant="gold" className="bg-accent/20 text-accent-light border-accent/40 shadow-soft">
                  {badge}
                </Badge>
              </div>
            )}

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight drop-shadow-md"
            >
              {title}
            </motion.h1>

            {/* Description */}
            {description && (
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="mt-4 text-base sm:text-lg text-slate-100/95 max-w-2xl leading-relaxed font-normal drop-shadow-sm"
              >
                {description}
              </motion.p>
            )}
          </div>

          {/* Right Column: Prominent Category Photo Preview Card (Desktop) */}
          {bgImage && (
            <div className="hidden lg:flex lg:col-span-4 justify-end">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="relative rounded-brand-lg overflow-hidden border-2 border-accent/40 shadow-soft-xl bg-primary-950 w-full max-w-[340px] group"
              >
                <img
                  src={bgImage}
                  alt={title}
                  className="w-full h-48 sm:h-52 object-cover object-center filter brightness-[0.95] contrast-[1.05] group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950 via-primary-950/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
                  <span className="font-semibold text-white truncate drop-shadow-sm flex items-center gap-1.5">
                    <ImageIcon className="w-3.5 h-3.5 text-accent shrink-0" />
                    <span>{title}</span>
                  </span>
                  <span className="text-[10px] text-accent uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-primary-dark/80 border border-accent/30">
                    Active
                  </span>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};
