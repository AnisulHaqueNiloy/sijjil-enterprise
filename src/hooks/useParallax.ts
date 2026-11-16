import { useRef, type RefObject } from 'react';
import { gsap, useGSAP } from '@/lib/gsap';

interface UseParallaxOptions {
  speed?: number; // percentage of yPercent change, e.g. -20 to 20
  triggerRef?: RefObject<HTMLElement | null>;
  start?: string;
  end?: string;
  scrub?: number | boolean;
}

/**
 * Hook for smooth GSAP parallax scrolling effect using yPercent and scrub.
 * Automatically respects prefers-reduced-motion and is desktop-first (min-width: 1024px).
 */
export function useParallax<T extends HTMLElement = HTMLDivElement>(
  options: UseParallaxOptions = {}
): RefObject<T | null> {
  const elementRef = useRef<T | null>(null);
  const {
    speed = 20,
    triggerRef,
    start = 'top bottom',
    end = 'bottom top',
    scrub = 1,
  } = options;

  useGSAP(() => {
    if (!elementRef.current) return;

    const mm = gsap.matchMedia();
    mm.add(
      {
        isDesktop: '(min-width: 1024px) and (prefers-reduced-motion: no-preference)',
      },
      (context) => {
        const { isDesktop } = context.conditions as { isDesktop: boolean };
        if (isDesktop && elementRef.current) {
          gsap.fromTo(
            elementRef.current,
            { yPercent: -speed },
            {
              yPercent: speed,
              ease: 'none',
              scrollTrigger: {
                trigger: triggerRef?.current || elementRef.current,
                start,
                end,
                scrub,
                invalidateOnRefresh: true,
              },
            }
          );
        }
      }
    );

    return () => mm.revert();
  }, { scope: elementRef, dependencies: [speed, start, end, scrub] });

  return elementRef;
}
