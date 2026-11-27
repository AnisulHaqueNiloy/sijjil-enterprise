import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ShieldCheck, ArrowUp } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { COMPANY_INFO } from '@/data/company';
import { FOOTER_QUICK_LINKS, FOOTER_SERVICE_LINKS } from '@/data/navigation';
import { PATHS } from '@/routes/paths';
import logoImg from '@/assets/logo_icon.png';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary-dark text-slate-300 border-t border-primary-light/30 pt-16 pb-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Tagline */}
          <div className="lg:col-span-2 space-y-4">
            <Link
              to={PATHS.home}
              className="flex items-center gap-3 text-white inline-flex group"
            >
              <div className="w-10 h-10 rounded-brand bg-white p-1 flex items-center justify-center shadow-soft group-hover:scale-105 transition-transform shrink-0 border border-white/20">
                <img
                  src={logoImg}
                  alt="Sijjil Enterprise Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-extrabold text-lg tracking-wider text-white uppercase">
                {COMPANY_INFO.name}
              </span>
            </Link>

            <p className="text-sm text-slate-300/80 leading-relaxed max-w-sm">
              {COMPANY_INFO.tagline}. Trusted contracting partner for Electro-Mechanical, Construction, and IT public sector infrastructure in Bangladesh.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-accent">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>Full compliance with PPR-2008 & CPTU regulations</span>
            </div>
          </div>

          {/* Col 2: Divisions / Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Our Divisions
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {FOOTER_SERVICE_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="hover:text-accent transition-colors block py-0.5"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {FOOTER_QUICK_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="hover:text-accent transition-colors block py-0.5"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Office */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Head Office
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span className="leading-snug">
                  {COMPANY_INFO.contact.address.line1}, {COMPANY_INFO.contact.address.line2}
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <div className="flex flex-col space-y-0.5">
                  <a
                    href={`tel:${COMPANY_INFO.contact.phone.primary}`}
                    className="hover:text-accent transition-colors"
                  >
                    {COMPANY_INFO.contact.phone.displayPrimary}
                  </a>
                  <a
                    href={`tel:${COMPANY_INFO.contact.phone.secondary}`}
                    className="hover:text-accent transition-colors"
                  >
                    {COMPANY_INFO.contact.phone.displaySecondary}
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <a
                  href={`mailto:${COMPANY_INFO.contact.email.general}`}
                  className="hover:text-accent transition-colors truncate"
                >
                  {COMPANY_INFO.contact.email.general}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-xs text-slate-400">
                <Clock className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>
                  {COMPANY_INFO.contact.workingHours.days}: {COMPANY_INFO.contact.workingHours.time}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved. Government & Public Sector Engineering Contractor.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-[11px] text-slate-500">
              Dhaka, Bangladesh
            </span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 p-2 rounded-brand bg-white/5 hover:bg-accent hover:text-primary-dark transition-all focus:outline-none focus:ring-2 focus:ring-accent"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="text-[11px] font-medium">Top</span>
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
};
