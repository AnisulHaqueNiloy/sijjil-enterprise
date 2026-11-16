import React from 'react';

export interface SmoothScrollProps {
  children: React.ReactNode;
}

/**
 * Natural, lightweight scroll container without scroll-hijacking or lag.
 * Allows browser-native 60-120fps scrolling across trackpads, mice, and mobile touch.
 */
export const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  return <>{children}</>;
};
