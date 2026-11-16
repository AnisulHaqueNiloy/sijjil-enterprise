import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { useGSAP } from '@gsap/react';

// Register plugins once
gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

// Configure ScrollTrigger
ScrollTrigger.config({
  ignoreMobileResize: true,
  autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load,resize',
});

export { gsap, ScrollTrigger, SplitText, useGSAP };
export default gsap;
