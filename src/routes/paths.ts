export const PATHS = {
  home: '/',
  about: '/about',
  services: '/services',
  electroMechanical: '/services/electro-mechanical',
  construction: '/services/construction',
  it: '/services/it',
  projects: '/projects',
  contact: '/contact',
} as const;

export type PathKey = keyof typeof PATHS;
