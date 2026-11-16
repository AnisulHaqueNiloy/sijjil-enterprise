import React, { createContext, useContext, useState, useCallback } from 'react';
import { QuoteModal } from '@/components/common/QuoteModal';

interface QuoteModalContextValue {
  openQuoteModal: (defaultService?: string) => void;
  closeQuoteModal: () => void;
  isQuoteModalOpen: boolean;
}

const QuoteModalContext = createContext<QuoteModalContextValue | undefined>(undefined);

export const QuoteModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const openQuoteModal = useCallback((defaultService?: string) => {
    if (defaultService) setSelectedService(defaultService);
    else setSelectedService('');
    setIsOpen(true);
  }, []);

  const closeQuoteModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <QuoteModalContext.Provider
      value={{
        openQuoteModal,
        closeQuoteModal,
        isQuoteModalOpen: isOpen,
      }}
    >
      {children}
      <QuoteModal
        isOpen={isOpen}
        onClose={closeQuoteModal}
        defaultService={selectedService}
      />
    </QuoteModalContext.Provider>
  );
};

export function useQuoteModal(): QuoteModalContextValue {
  const context = useContext(QuoteModalContext);
  if (!context) {
    throw new Error('useQuoteModal must be used within a QuoteModalProvider');
  }
  return context;
}
