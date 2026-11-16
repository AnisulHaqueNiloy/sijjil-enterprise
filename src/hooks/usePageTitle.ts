import { useEffect } from 'react';

/**
 * Custom hook to update document title and meta description dynamically for each page.
 */
export function usePageTitle(title: string, description?: string): void {
  useEffect(() => {
    const fullTitle = title.includes('Sijjil Enterprise')
      ? title
      : `${title} | Sijjil Enterprise`;
    document.title = fullTitle;

    if (description) {
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute('content', description);
    }
  }, [title, description]);
}
