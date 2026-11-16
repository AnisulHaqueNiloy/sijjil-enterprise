import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
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
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  badge,
  title,
  description,
  breadcrumbs = [],
}) => {
  return (
    <section className="relative bg-gradient-to-b from-primary-dark via-primary to-primary-950 text-white pt-32 pb-16 lg:pt-36 lg:pb-20 border-b border-primary-light/20 overflow-hidden">
      {/* Background Subtle Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      {/* Ambient gold glow */}
      <div className="absolute -top-32 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-xs sm:text-sm text-slate-300/80 mb-6 flex-wrap"
        >
          <Link
            to={PATHS.home}
            className="inline-flex items-center gap-1.5 hover:text-accent transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>

          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={idx}>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400/50" />
              {crumb.path ? (
                <Link
                  to={crumb.path}
                  className="hover:text-accent transition-colors"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-accent font-medium">{crumb.label}</span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Badge */}
        {badge && (
          <div className="mb-3">
            <Badge variant="gold" className="bg-accent/15 text-accent-light border-accent/30">
              {badge}
            </Badge>
          </div>
        )}

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight max-w-4xl leading-tight"
        >
          {title}
        </motion.h1>

        {/* Description */}
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 text-base sm:text-lg text-slate-200/90 max-w-2xl leading-relaxed font-normal"
          >
            {description}
          </motion.p>
        )}
      </Container>
    </section>
  );
};
