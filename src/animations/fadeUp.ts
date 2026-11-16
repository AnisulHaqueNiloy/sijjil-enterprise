import { gsap } from '@/lib/gsap';

export interface FadeUpOptions {
  y?: number;
  duration?: number;
  delay?: number;
  ease?: string;
  trigger?: Element | string;
  start?: string;
  once?: boolean;
}

/**
 * Reusable fade up animation helper.
 * Animates only autoAlpha and transform y.
 */
export function animateFadeUp(
  targets: gsap.TweenTarget,
  options: FadeUpOptions = {}
): gsap.core.Tween | null {
  const prefersReduced = typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReduced) {
    gsap.set(targets, { autoAlpha: 1, y: 0 });
    return null;
  }

  const {
    y = 35,
    duration = 0.8,
    delay = 0,
    ease = 'power3.out',
    trigger,
    start = 'top 85%',
    once = true,
  } = options;

  return gsap.fromTo(
    targets,
    { autoAlpha: 0, y },
    {
      autoAlpha: 1,
      y: 0,
      duration,
      delay,
      ease,
      scrollTrigger: trigger
        ? {
            trigger: trigger as gsap.DOMTarget,
            start,
            toggleActions: once ? 'play none none none' : 'play reverse play reverse',
            invalidateOnRefresh: true,
          }
        : undefined,
    }
  );
}
