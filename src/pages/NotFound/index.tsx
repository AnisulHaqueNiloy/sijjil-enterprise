import React from 'react';
import { Home } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { PATHS } from '@/routes/paths';
import { usePageTitle } from '@/hooks/usePageTitle';

const NotFound: React.FC = () => {
  usePageTitle(
    'Page Not Found | Sijjil Enterprise',
    'The requested page or tender record could not be found.'
  );

  return (
    <div className="min-h-[75vh] flex items-center justify-center py-20 bg-lightgrey/40">
      <Container size="sm">
        <div className="bg-white rounded-brand-lg border border-slate-border p-8 sm:p-12 text-center shadow-soft">
          <div className="text-6xl sm:text-8xl font-black text-primary/20 mb-4 select-none">
            404
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-primary mb-3">
            Requested Resource Not Found
          </h1>
          <p className="text-sm sm:text-base text-slate-muted max-w-md mx-auto mb-8 leading-relaxed">
            The page or document link you requested does not exist or may have been relocated during system updates.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              to={PATHS.home}
              variant="primary"
              size="lg"
              icon={<Home className="w-4 h-4" />}
              iconPosition="left"
            >
              Return to Homepage
            </Button>
            <Button
              to={PATHS.services}
              variant="outline"
              size="lg"
            >
              Browse Services
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NotFound;
