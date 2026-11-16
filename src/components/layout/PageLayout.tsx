import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ScrollToTop } from '@/components/layout/ScrollToTop';
import { SmoothScroll } from '@/components/layout/SmoothScroll';
import { PageTransition } from '@/components/animated/PageTransition';
import { QuoteModalProvider, useQuoteModal } from '@/context/QuoteModalContext';

const LayoutInner: React.FC = () => {
  const { openQuoteModal } = useQuoteModal();

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate">
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
