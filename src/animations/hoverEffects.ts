import { gsap } from '@/lib/gsap';

/**
 * Attaches a subtle magnetic pull to CTA buttons on mousemove (desktop fine pointer only).
 */
export function attachMagneticHover(element: HTMLElement): () => void {
  if (typeof window === 'undefined') return () => {};

  const isDesktopPointer = window.matchMedia('(pointer: fine) and (prefers-reduced-motion: no-preference)').matches;
  if (!isDesktopPointer) return () => {};

  const xTo = gsap.quickTo(element, 'x', { duration: 0.3, ease: 'power2.out' });
  const yTo = gsap.quickTo(element, 'y', { duration: 0.3, ease: 'power2.out' });

  const onMouseMove = (e: MouseEvent) => {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = (e.clientX - centerX) * 0.25;
    const deltaY = (e.clientY - centerY) * 0.25;

    // Small, subtle pull limit (-8px to 8px)
    const clampedX = Math.max(-8, Math.min(8, deltaX));
    const clampedY = Math.max(-8, Math.min(8, deltaY));

    xTo(clampedX);
    yTo(clampedY);
  };

  const onMouseLeave = () => {
    xTo(0);
    yTo(0);
  };

  element.addEventListener('mousemove', onMouseMove);
  element.addEventListener('mouseleave', onMouseLeave);

  return () => {
    element.removeEventListener('mousemove', onMouseMove);
    element.removeEventListener('mouseleave', onMouseLeave);
  };
}

/**
 * Smooth card lift with gold border accent on hover using quickTo.
 */
export function attachCardHover(element: HTMLElement): () => void {
  if (typeof window === 'undefined') return () => {};

  const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (isReduced) return () => {};

  const yTo = gsap.quickTo(element, 'y', { duration: 0.3, ease: 'power2.out' });

  const onMouseEnter = () => {
    yTo(-6);
  };

  const onMouseLeave = () => {
    yTo(0);
  };

  element.addEventListener('mouseenter', onMouseEnter);
  element.addEventListener('mouseleave', onMouseLeave);

  return () => {
    element.removeEventListener('mouseenter', onMouseEnter);
    element.removeEventListener('mouseleave', onMouseLeave);
  };
}
