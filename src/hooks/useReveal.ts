import { useRef, type RefObject } from 'react';
import { gsap, useGSAP } from '@/lib/gsap';

interface UseRevealOptions {
  y?: number;
  duration?: number;
  delay?: number;
  ease?: string;
  start?: string;
  once?: boolean;
}

export function useReveal<T extends HTMLElement = HTMLDivElement>(
  options: UseRevealOptions = {}
): RefObject<T | null> {
  const containerRef = useRef<T | null>(null);
  const {
    y = 35,
    duration = 0.8,
    delay = 0,
    ease = 'power3.out',
    start = 'top 85%',
    once = true,
  } = options;

  useGSAP(() => {
    if (!containerRef.current) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      gsap.set(containerRef.current, { autoAlpha: 1, y: 0 });
      return;
    }

    gsap.fromTo(
      containerRef.current,
      { autoAlpha: 0, y },
      {
        autoAlpha: 1,
        y: 0,
        duration,
        delay,
        ease,
        scrollTrigger: {
          trigger: containerRef.current,
          start,
          toggleActions: once ? 'play none none none' : 'play reverse play reverse',
          invalidateOnRefresh: true,
        },
      }
    );
  }, { scope: containerRef, dependencies: [y, duration, delay, ease, start, once] });

  return containerRef;
}
