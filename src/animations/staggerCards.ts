import { gsap } from '@/lib/gsap';

export interface StaggerCardsOptions {
  trigger: gsap.DOMTarget;
  targets: gsap.TweenTarget;
  stagger?: number;
  y?: number;
  duration?: number;
  start?: string;
  ease?: string;
}

/**
 * Animates a grid of cards with stagger.
 * Triggers once at top 85% by default.
 */
export function animateStaggerCards(options: StaggerCardsOptions): gsap.core.Tween | null {
  const prefersReduced = typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const {
    trigger,
    targets,
    stagger = 0.12,
    y = 40,
    duration = 0.8,
    start = 'top 85%',
    ease = 'power3.out',
  } = options;

  if (prefersReduced) {
    gsap.set(targets, { autoAlpha: 1, y: 0 });
    return null;
  }

  return gsap.fromTo(
    targets,
    { autoAlpha: 0, y },
    {
      autoAlpha: 1,
      y: 0,
      duration,
      stagger,
      ease,
      scrollTrigger: {
        trigger,
        start,
        toggleActions: 'play none none none',
        invalidateOnRefresh: true,
      },
    }
  );
}
