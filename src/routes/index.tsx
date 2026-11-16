import React, { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { PageLayout } from '@/components/layout/PageLayout';
import { PATHS } from './paths';

// Lazy loaded page components
const Home = lazy(() => import('@/pages/Home'));
const About = lazy(() => import('@/pages/About'));
const Services = lazy(() => import('@/pages/Services'));
const ElectroMechanical = lazy(() => import('@/pages/ElectroMechanical'));
const Construction = lazy(() => import('@/pages/Construction'));
const IT = lazy(() => import('@/pages/IT'));
const Projects = lazy(() => import('@/pages/Projects'));
const Contact = lazy(() => import('@/pages/Contact'));
const NotFound = lazy(() => import('@/pages/NotFound'));

// Subtle Page Loader
const PageLoader: React.FC = () => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center py-24 space-y-4">
    <div className="w-10 h-10 border-3 border-primary/20 border-t-accent rounded-full animate-spin" />
    <span className="text-xs uppercase tracking-widest text-slate-muted font-semibold">
      Loading...
    </span>
  </div>
);

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PageLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<PageLoader />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: PATHS.about,
        element: (
          <Suspense fallback={<PageLoader />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: PATHS.services,
        element: (
          <Suspense fallback={<PageLoader />}>
            <Services />
          </Suspense>
        ),
      },
      {
        path: PATHS.electroMechanical,
        element: (
          <Suspense fallback={<PageLoader />}>
            <ElectroMechanical />
          </Suspense>
        ),
      },
      {
        path: PATHS.construction,
        element: (
          <Suspense fallback={<PageLoader />}>
            <Construction />
          </Suspense>
        ),
      },
      {
        path: PATHS.it,
        element: (
          <Suspense fallback={<PageLoader />}>
            <IT />
          </Suspense>
        ),
      },
      {
        path: PATHS.projects,
        element: (
          <Suspense fallback={<PageLoader />}>
            <Projects />
          </Suspense>
        ),
      },
      {
        path: PATHS.contact,
        element: (
          <Suspense fallback={<PageLoader />}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: '*',
        element: (
          <Suspense fallback={<PageLoader />}>
            <NotFound />
          </Suspense>
        ),
      },
    ],
  },
]);

export const AppRoutes: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
