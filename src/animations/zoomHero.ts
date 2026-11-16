import { gsap } from '@/lib/gsap';

export interface ZoomHeroOptions {
  container: HTMLElement;
  bgLayer: HTMLElement;
  contentLayer: HTMLElement;
  trustStrip?: HTMLElement | null;
}

/**
 * Creates hero scroll zoom effect:
 * Pins hero for 100% scroll distance.
 * Background layer scales from 1 to 1.3.
 * Content layer fades and moves up.
 * Desktop only (min-width: 1024px), simplified on mobile / reduced motion.
 */
export function createHeroZoom(options: ZoomHeroOptions): gsap.MatchMedia {
  const { container, bgLayer, contentLayer, trustStrip } = options;

  const mm = gsap.matchMedia();

  mm.add(
    {
      isDesktop: '(min-width: 1024px) and (prefers-reduced-motion: no-preference)',
      isMobile: '(max-width: 1023px)',
      isReduced: '(prefers-reduced-motion: reduce)',
    },
    (context) => {
      const { isDesktop, isReduced } = context.conditions as {
        isDesktop: boolean;
        isMobile: boolean;
        isReduced: boolean;
      };

      if (isReduced) {
        gsap.set([bgLayer, contentLayer], { clearProps: 'all', autoAlpha: 1 });
        return;
      }

      if (isDesktop) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            start: 'top top',
            end: '+=100%',
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        tl.to(
          bgLayer,
          {
            scale: 1.3,
            ease: 'none',
          },
          0
        )
        .to(
          contentLayer,
          {
            y: -70,
            autoAlpha: 0.1,
            ease: 'none',
          },
          0
        );

        if (trustStrip) {
          tl.to(
            trustStrip,
            {
              y: -40,
              autoAlpha: 0.2,
              ease: 'none',
            },
            0
          );
        }
      } else {
        // Mobile / tablet: simple subtle entrance
        gsap.fromTo(
          contentLayer,
          { autoAlpha: 0, y: 30 },
          { autoAlpha: 1, y: 0, duration: 0.8, ease: 'power3.out' }
        );
      }
    }
  );

  return mm;
}
