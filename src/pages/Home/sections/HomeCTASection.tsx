import React from 'react';
import { CTABand } from '@/components/common/CTABand';
import { useQuoteModal } from '@/context/QuoteModalContext';

export const HomeCTASection: React.FC = () => {
  const { openQuoteModal } = useQuoteModal();

  return (
    <CTABand
      title="Discuss Your Next Public Infrastructure Tender"
      subtitle="Connect with our senior engineering directors for technical pre-qualification, tender scheduling, and compliant execution capabilities."
      onOpenQuoteModal={() => openQuoteModal()}
    />
  );
};
