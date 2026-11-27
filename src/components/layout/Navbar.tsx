import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { MAIN_NAV } from '@/data/navigation';
import { COMPANY_INFO } from '@/data/company';
import { PATHS } from '@/routes/paths';
import logoImg from '@/assets/logo_icon.png';

export interface NavbarProps {
  onOpenQuoteModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const location = useLocation();
  const lastScrollY = useRef(0);
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesDropdownOpen(false);
  }, [location.pathname]);

  // Clean, lightweight scroll listener (shadow after 20px, hide on scroll down, show on scroll up)
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (currentScrollY > 150 && currentScrollY > lastScrollY.current && !isMobileMenuOpen) {
        setIsVisible(false); // Scrolling down
      } else {
        setIsVisible(true); // Scrolling up
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobileMenuOpen]);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setIsServicesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsServicesDropdownOpen(false);
    }, 150);
  };

  const isLinkActive = (path: string) => {
    if (path === PATHS.home) {
      return location.pathname === PATHS.home;
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 transform ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${
        isScrolled
          ? 'bg-primary/95 backdrop-blur-md shadow-soft-lg border-b border-primary-light/30 py-3'
          : 'bg-primary/85 backdrop-blur-sm border-b border-white/10 py-4'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <Link
            to={PATHS.home}
            className="flex items-center gap-3 text-white group focus:outline-none focus:ring-2 focus:ring-accent rounded-brand"
            aria-label={`${COMPANY_INFO.name} Home`}
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-brand bg-white p-1 flex items-center justify-center shadow-soft group-hover:scale-105 transition-transform shrink-0 border border-white/20">
              <img
                src={logoImg}
                alt="Sijjil Enterprise Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-base sm:text-lg tracking-wider text-white uppercase group-hover:text-accent-light transition-colors leading-tight">
                {COMPANY_INFO.name}
              </span>
              <span className="text-[10px] tracking-widest text-slate-300 font-medium uppercase">
                Govt. & Public Sector Contractor
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {MAIN_NAV.map((item) => {
              if (item.children) {
                const isActive = isLinkActive(item.path);
                return (
                  <div
                    key={item.title}
                    className="relative"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      to={item.path}
                      className={`inline-flex items-center gap-1 px-3.5 py-2 text-sm font-medium rounded-brand transition-colors ${
                        isActive
                          ? 'text-accent font-semibold bg-white/5'
                          : 'text-slate-200 hover:text-accent hover:bg-white/5'
                      }`}
                      aria-haspopup="true"
                      aria-expanded={isServicesDropdownOpen}
                    >
                      <span>{item.title}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          isServicesDropdownOpen ? 'rotate-180 text-accent' : ''
                        }`}
                      />
                    </Link>

                    {/* Services Dropdown Menu */}
                    <AnimatePresence>
                      {isServicesDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 5 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full left-0 w-72 pt-2 z-50"
                        >
                          <div className="bg-white rounded-brand-lg shadow-soft-xl border border-slate-border/80 p-2 overflow-hidden">
                            <div className="px-3 py-2 border-b border-slate-border/60 mb-1">
                              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-muted">
                                Our Services
                              </span>
                            </div>
                            {item.children.map((subItem) => {
                              const isSubActive = location.pathname === subItem.path;
                              return (
                                <Link
                                  key={subItem.title}
                                  to={subItem.path}
                                  className={`block px-3 py-2.5 rounded-brand text-xs sm:text-sm transition-colors ${
                                    isSubActive
                                      ? 'bg-accent/10 text-accent-700 font-semibold'
                                      : 'text-slate hover:bg-lightgrey hover:text-primary'
                                  }`}
                                >
                                  <div className="font-semibold text-primary">{subItem.title}</div>
                                  <div className="text-[11px] text-slate-muted line-clamp-1 mt-0.5">
                                    {subItem.description}
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              const isActive = isLinkActive(item.path);
              return (
                <Link
                  key={item.title}
                  to={item.path}
                  className={`px-3.5 py-2 text-sm font-medium rounded-brand transition-colors ${
                    isActive
                      ? 'text-accent font-semibold bg-white/5'
                      : 'text-slate-200 hover:text-accent hover:bg-white/5'
                  }`}
                >
                  {item.title}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTA: "Get a Quote" */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant="gold"
              size="sm"
              onClick={onOpenQuoteModal}
              icon={<FileText className="w-4 h-4" />}
            >
              Get a Quote
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-slate-200 hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent rounded-brand"
            aria-label={isMobileMenuOpen ? 'Close main menu' : 'Open main menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden mt-4 pt-4 border-t border-white/10 bg-primary-dark/95 backdrop-blur-md rounded-brand-lg p-5 shadow-soft-xl overflow-hidden"
            >
              <div className="flex flex-col space-y-2">
                {MAIN_NAV.map((item) => {
                  if (item.children) {
                    return (
                      <div key={item.title} className="py-1">
                        <Link
                          to={item.path}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="text-base font-semibold text-accent block py-1"
                        >
                          {item.title}
                        </Link>
                        <div className="pl-3 mt-1.5 border-l-2 border-accent/40 space-y-1.5">
                          {item.children.map((sub) => (
                            <Link
                              key={sub.title}
                              to={sub.path}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="block text-sm text-slate-300 hover:text-white py-1"
                            >
                              {sub.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    );
                  }

                  const isActive = isLinkActive(item.path);
                  return (
                    <Link
                      key={item.title}
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`text-base py-2 px-2 rounded-brand transition-colors ${
                        isActive
                          ? 'text-accent font-bold bg-white/5'
                          : 'text-slate-200 hover:text-white'
                      }`}
                    >
                      {item.title}
                    </Link>
                  );
                })}

                <div className="pt-4 border-t border-white/10 flex flex-col gap-2.5">
                  <Button
                    variant="gold"
                    size="md"
                    className="w-full"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      onOpenQuoteModal();
                    }}
                  >
                    Get a Quote
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </header>
  );
};
