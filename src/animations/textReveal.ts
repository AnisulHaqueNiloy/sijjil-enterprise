import { gsap, SplitText } from '@/lib/gsap';

export interface TextRevealOptions {
  trigger?: gsap.DOMTarget;
  stagger?: number;
  duration?: number;
  ease?: string;
  start?: string;
}

/**
 * Splits text into lines and animates them upwards out of an overflow mask.
 * Automatically handles cleanup and reduced motion.
 */
export function animateTextReveal(
  element: HTMLElement,
  options: TextRevealOptions = {}
): () => void {
  const prefersReduced = typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReduced) {
    gsap.set(element, { autoAlpha: 1 });
    return () => {};
  }

  const {
    trigger = element,
    stagger = 0.08,
    duration = 0.8,
    ease = 'power3.out',
    start = 'top 85%',
  } = options;

  let split: SplitText | null = null;

  try {
    split = new SplitText(element, {
      type: 'lines',
      linesClass: 'split-line',
    });

    // Wrap lines in mask containers for clean reveal
    split.lines.forEach((line) => {
      const parent = line.parentNode;
      const wrapper = document.createElement('div');
      wrapper.style.overflow = 'hidden';
      wrapper.style.display = 'block';
      if (parent) {
        parent.insertBefore(wrapper, line);
        wrapper.appendChild(line);
      }
    });

    gsap.fromTo(
      split.lines,
      { yPercent: 105, autoAlpha: 0 },
      {
        yPercent: 0,
        autoAlpha: 1,
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
  } catch (error) {
    console.warn('SplitText animation fallback triggered:', error);
    gsap.fromTo(
      element,
      { autoAlpha: 0, y: 25 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.7,
        scrollTrigger: {
          trigger,
          start,
          toggleActions: 'play none none none',
        },
      }
    );
  }

  return () => {
    if (split) {
      try {
        split.revert();
      } catch {
        // Safe fallback
      }
    }
  };
}

/**
 * Simple fade-up for body copy, paragraphs, and descriptions.
 */
export function animateParagraphFade(
  element: HTMLElement | HTMLElement[],
  trigger?: HTMLElement
): gsap.core.Tween | null {
  const prefersReduced = typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReduced) {
    gsap.set(element, { autoAlpha: 1, y: 0 });
    return null;
  }

  return gsap.fromTo(
    element,
    { autoAlpha: 0, y: 20 },
    {
      autoAlpha: 1,
      y: 0,
      duration: 0.7,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: trigger || (Array.isArray(element) ? element[0] : element),
        start: 'top 88%',
        toggleActions: 'play none none none',
        invalidateOnRefresh: true,
      },
    }
  );
}
