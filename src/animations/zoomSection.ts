import { gsap } from '@/lib/gsap';

export interface ZoomSectionOptions {
  element: HTMLElement;
  trigger?: HTMLElement;
}

/**
 * Zoom in/out section transition:
 * Starts at scale 0.9 with reduced opacity,
 * scales to 1 as it enters the viewport (scrub),
 * and scales slightly down to 0.95 as it leaves.
 */
export function createZoomSection(options: ZoomSectionOptions): gsap.MatchMedia {
  const { element, trigger = element } = options;

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
        gsap.set(element, { clearProps: 'all' });
        return;
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      // Entry phase: scale 0.9 -> 1.0, opacity 0.4 -> 1.0
      tl.fromTo(
        element,
        { scale: 0.9, autoAlpha: 0.4 },
        { scale: 1.0, autoAlpha: 1.0, ease: 'none', duration: 0.5 }
      )
      // Exit phase: scale 1.0 -> 0.95
      .to(
        element,
        { scale: 0.95, ease: 'none', duration: 0.5 }
      );
    }
  );

  return mm;
}
