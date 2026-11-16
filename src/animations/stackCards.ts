import { gsap, ScrollTrigger } from '@/lib/gsap';

export interface StackCardsOptions {
  cards: HTMLElement[];
  topOffset?: number;
}

/**
 * Creates stacked card scroll effect:
 * Pins each card with pinSpacing: false at 'top top+=120'.
 * As card i+1 scrolls up, card i scales to 0.92 and dims.
 * Runs on desktop (min-width: 1024px) only.
 */
export function createStackedCards(options: StackCardsOptions): gsap.MatchMedia {
  const { cards, topOffset = 120 } = options;

  const mm = gsap.matchMedia();

  mm.add(
    {
      isDesktop: '(min-width: 1024px) and (prefers-reduced-motion: no-preference)',
      isMobile: '(max-width: 1023px)',
      isReduced: '(prefers-reduced-motion: reduce)',
    },
    (context) => {
      const { isDesktop } = context.conditions as { isDesktop: boolean };

      if (!isDesktop || cards.length < 2) {
        cards.forEach((card) => {
          gsap.set(card, { clearProps: 'all' });
        });
        return;
      }

      cards.forEach((card, index) => {
        // Pin current card
        ScrollTrigger.create({
          trigger: card,
          start: `top top+=${topOffset}`,
          endTrigger: cards[cards.length - 1],
          end: `bottom top+=${topOffset + 200}`,
          pin: true,
          pinSpacing: false,
          invalidateOnRefresh: true,
        });

        // As the next card covers this card, scale down and dim
        if (index < cards.length - 1) {
          const nextCard = cards[index + 1];
          gsap.to(card, {
            scale: 0.92,
            autoAlpha: 0.7,
            ease: 'none',
            scrollTrigger: {
              trigger: nextCard,
              start: `top top+=${topOffset + 160}`,
              end: `top top+=${topOffset}`,
              scrub: true,
              invalidateOnRefresh: true,
            },
          });
        }
      });
    }
  );

  return mm;
}
