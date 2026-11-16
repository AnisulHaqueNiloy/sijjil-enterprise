import { PATHS } from '@/routes/paths';

export interface NavItem {
  title: string;
  path: string;
  badge?: string;
  children?: {
    title: string;
    path: string;
    description: string;
  }[];
}

export const MAIN_NAV: NavItem[] = [
  {
    title: 'Home',
    path: PATHS.home,
  },
  {
    title: 'About Us',
    path: PATHS.about,
  },
  {
    title: 'Services',
    path: PATHS.services,
    children: [
      {
        title: 'Electro-Mechanical',
        path: PATHS.electroMechanical,
        description: 'Power substations, HVAC, generators, and safety installations.',
      },
      {
        title: 'Construction',
        path: PATHS.construction,
        description: 'Civil structures, bridges, roadways, and public facilities.',
      },
      {
        title: 'Software Development',
        path: PATHS.it,
        description: 'Web applications, mobile apps, and e-governance platforms.',
      },
    ],
  },
  {
    title: 'Projects',
    path: PATHS.projects,
  },
  {
    title: 'Contact Us',
    path: PATHS.contact,
  },
];

export const FOOTER_QUICK_LINKS = [
  { title: 'Home', path: PATHS.home },
  { title: 'About Sijjil', path: PATHS.about },
  { title: 'Our Projects', path: PATHS.projects },
  { title: 'Tendering & Inquiries', path: PATHS.contact },
];

export const FOOTER_SERVICE_LINKS = [
  { title: 'Electro-Mechanical Division', path: PATHS.electroMechanical },
  { title: 'Civil Construction Division', path: PATHS.construction },
  { title: 'Software & Web Development', path: PATHS.it },
  { title: 'All Services Overview', path: PATHS.services },
];
