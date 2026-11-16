import { gsap } from '@/lib/gsap';

export interface HorizontalScrollOptions {
  container: HTMLElement;
  track: HTMLElement;
  progressBar?: HTMLElement | null;
}

/**
 * Creates horizontal scroll effect for process steps:
 * Pins vertically and scrolls horizontally on desktop (min-width: 1024px).
 * On mobile/reduced motion, defaults to clean vertical flow.
 */
export function createHorizontalScroll(options: HorizontalScrollOptions): gsap.MatchMedia {
  const { container, track, progressBar } = options;

  const mm = gsap.matchMedia();

  mm.add(
    {
      isDesktop: '(min-width: 1024px) and (prefers-reduced-motion: no-preference)',
      isMobile: '(max-width: 1023px)',
      isReduced: '(prefers-reduced-motion: reduce)',
    },
    (context) => {
      const { isDesktop } = context.conditions as { isDesktop: boolean };

      if (!isDesktop) {
        gsap.set(track, { clearProps: 'all' });
        if (progressBar) gsap.set(progressBar, { clearProps: 'all' });
        return;
      }

      const getScrollAmount = () => {
        return -(track.scrollWidth - window.innerWidth + 80);
      };

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: () => `+=${Math.max(track.scrollWidth - window.innerWidth + 200, 1200)}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      tl.to(track, {
        x: getScrollAmount,
        ease: 'none',
      });

      if (progressBar) {
        gsap.fromTo(
          progressBar,
          { scaleX: 0, transformOrigin: 'left center' },
          {
            scaleX: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: container,
              start: 'top top',
              end: () => `+=${Math.max(track.scrollWidth - window.innerWidth + 200, 1200)}`,
              scrub: 1,
              invalidateOnRefresh: true,
            },
          }
        );
      }
    }
  );

  return mm;
}
