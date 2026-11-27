import React, { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ScrollToTop } from '@/components/layout/ScrollToTop';
import { SmoothScroll } from '@/components/layout/SmoothScroll';
import { PageTransition } from '@/components/animated/PageTransition';
import { QuoteModalProvider, useQuoteModal } from '@/context/QuoteModalContext';

// Handles direct browser navigation normalization (e.g. ?p=/about, trailing slashes, .html)
const RouteNormalizer: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // 1. Check for query parameter redirect (e.g. ?p=/about or ?path=/about from static hosts)
    const searchParams = new URLSearchParams(location.search);
    const redirectPath = searchParams.get('p') || searchParams.get('path');
    if (redirectPath) {
      searchParams.delete('p');
      searchParams.delete('path');
      const rest = searchParams.toString();
      navigate(redirectPath + (rest ? `?${rest}` : '') + location.hash, { replace: true });
      return;
    }

    // 2. Normalize trailing slashes (e.g. /about/ -> /about)
    if (location.pathname.length > 1 && location.pathname.endsWith('/')) {
      const normalized = location.pathname.slice(0, -1);
      navigate(normalized + location.search + location.hash, { replace: true });
      return;
    }

    // 3. Normalize .html extensions (e.g. /about.html -> /about)
    if (location.pathname.endsWith('.html')) {
      const normalized = location.pathname.replace(/\.html$/, '');
      navigate(normalized + location.search + location.hash, { replace: true });
    }
  }, [location, navigate]);

  return null;
};

const LayoutInner: React.FC = () => {
  const { openQuoteModal } = useQuoteModal();

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate">
      <RouteNormalizer />
      <ScrollToTop />
      <Navbar onOpenQuoteModal={() => openQuoteModal()} />
      <main className="flex-1 w-full overflow-hidden">
        <PageTransition>
          <Outlet />
        </PageTransition>
      </main>
      <Footer />
    </div>
  );
};

export const PageLayout: React.FC = () => {
  return (
    <SmoothScroll>
      <QuoteModalProvider>
        <LayoutInner />
      </QuoteModalProvider>
    </SmoothScroll>
  );
};

export default PageLayout;
