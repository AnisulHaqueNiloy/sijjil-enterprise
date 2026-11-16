export interface TechStackItem {
  category: string;
  items: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  category: 'electro-mechanical' | 'construction' | 'it-web' | 'it-app' | 'it-infrastructure';
  shortDesc: string;
  fullDesc: string;
  features: string[];
  specs?: string[];
  techStack?: string[];
  icon: string;
  divisionSlug: string;
}

export interface DivisionOverview {
  id: string;
  name: string;
  slug: string;
  subtitle: string;
  summary: string;
  badge: string;
  path: string;
  highlights: string[];
}

export interface ProcessStep {
  step: string;
  title: string;
  desc: string;
}

export const DIVISIONS: DivisionOverview[] = [
  {
    id: 'electro-mechanical',
    name: 'Electro-Mechanical Division',
    slug: 'electro-mechanical',
    subtitle: 'Electrical Power, Air Conditioning & Safety Systems',
    summary: 'We install and maintain electrical wiring, power substations, central air conditioning (HVAC), backup diesel generators, lifts, water pumps, and fire safety systems.',
    badge: 'Division 01',
    path: '/services/electro-mechanical',
    highlights: [
      'Electrical Substations & Power Transformers',
      'Central AC (HVAC) & Ventilation Ducting',
      'Diesel Generators & Auto-Switch Panels',
      'Fire Alarms, Water Sprinklers & Hydrants'
    ]
  },
  {
    id: 'construction',
    name: 'Construction Division',
    slug: 'construction',
    subtitle: 'Building Construction, Roads, Bridges & Drainage',
    summary: 'We build multi-story office buildings, schools, paved roads, concrete bridges, culverts, and municipal drainage canals following proper engineering guidelines.',
    badge: 'Division 02',
    path: '/services/construction',
    highlights: [
      'Multi-Story Concrete (RCC) Buildings',
      'Paved Asphalt Roads & Highways',
      'Concrete Bridges & Water Culverts',
      'Stormwater Drains & Canals'
    ]
  },
  {
    id: 'it',
    name: 'Software & Web Development',
    slug: 'it',
    subtitle: 'Custom Web Apps, Mobile Apps & Enterprise Software',
    summary: 'We design and develop custom web applications, government e-service portals, mobile apps (Android & iOS), cloud database systems, and online payment integrations.',
    badge: 'Division 03',
    path: '/services/it',
    highlights: [
      'Custom Web Apps & E-Governance Portals (Next.js, Node, Laravel)',
      'Android & iOS Mobile Apps (Flutter, React Native)',
      'Online Payment Gateway Integration (bKash, Nagad, Bank Cards)',
      'Admin Dashboards & Cloud Databases'
    ]
  }
];

export const APPROACH_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Discussion & Requirements',
    desc: 'We meet with you to understand your exact project needs, site conditions, and budget.'
  },
  {
    step: '02',
    title: 'Planning & Estimate',
    desc: 'Our engineers prepare clear drawings, work schedules, and a transparent cost estimate.'
  },
  {
    step: '03',
    title: 'Quality Execution',
    desc: 'Our skilled teams carry out the construction, electrical, or software work with daily supervision.'
  },
  {
    step: '04',
    title: 'Testing & Handover',
    desc: 'We test everything thoroughly, clean the site, provide documentation, and hand over the keys.'
  }
];

// ==========================================
// ELECTRO-MECHANICAL (SIMPLE, CLEAR WORDING)
// ==========================================
export const ELECTRO_SERVICES: ServiceItem[] = [
  {
    id: 'substations-transformers',
    title: 'Substations & Transformers',
    category: 'electro-mechanical',
    shortDesc: 'Setup and maintenance of electrical substations and high-voltage transformers.',
    fullDesc: 'We supply, install, and test complete electrical substations and power transformers for commercial buildings, factories, hospitals, and government compounds. We make sure all local utility approvals (DESCO, DPDC, REB) are handled smoothly.',
    features: [
      'Installation of power transformers (100 kVA to 3000 kVA)',
      'HT and LT distribution switchgear panels',
      'Power Factor Improvement (PFI) plants to lower electric bills',
      'Earthing and lightning protection rods',
      'Assistance with DESCO / DPDC / REB utility approvals'
    ],
    specs: ['Capacity: 100 kVA - 3000 kVA', 'Standards: BNBC & IEC Standard'],
    icon: 'Zap',
    divisionSlug: 'electro-mechanical'
  },
  {
    id: 'electrical-installation',
    title: 'Building Electrical Wiring',
    category: 'electro-mechanical',
    shortDesc: 'Complete electrical wiring, main panels, cable trays, and lighting for buildings.',
    fullDesc: 'We handle all interior and exterior electrical wiring for office buildings, hospitals, schools, and government facilities. From main power lines and circuit breaker boxes to office lighting and power outlets, our work is neat, safe, and organized.',
    features: [
      'Complete internal conduit and cable wiring',
      'Main switchboards and distribution circuit boards (DBs)',
      'Busbar trunking (BBT) power delivery systems',
      'Energy-saving LED lighting and outdoor floodlights',
      'Safety grounding and shock-protection earthing'
    ],
    specs: ['Wires: High-grade flame-retardant copper', 'Safety: Proper circuit breakers on every line'],
    icon: 'Cpu',
    divisionSlug: 'electro-mechanical'
  },
  {
    id: 'hvac-ventilation',
    title: 'Central AC & Ventilation (HVAC)',
    category: 'electro-mechanical',
    shortDesc: 'Central air conditioning, VRF systems, ducting, and exhaust fans.',
    fullDesc: 'We design and install cooling systems for buildings of all sizes. Whether you need centralized chiller plants, multi-room VRF systems, or clean ventilation ducting for halls and server rooms, we ensure quiet, energy-efficient cooling.',
    features: [
      'VRF / VRV multi-room air conditioning systems',
      'Central water chiller and air chiller plants',
      'Insulated sheet metal air ducts and ceiling diffusers',
      'Basement exhaust fans and smoke ventilation',
      'Precision AC units for computer server rooms'
    ],
    specs: ['Cooling: VRF & Central Chillers', 'Ducting: Galvanized steel with heat insulation'],
    icon: 'Wind',
    divisionSlug: 'electro-mechanical'
  },
  {
    id: 'power-generators',
    title: 'Diesel Generators & Power Backup',
    category: 'electro-mechanical',
    shortDesc: 'Backup diesel generators and automatic switches so power never cuts out.',
    fullDesc: 'We install heavy-duty diesel generators and automatic transfer switches (ATS). When the main electricity goes out, the generator turns on automatically within seconds, keeping lights, computers, and medical equipment running without interruption.',
    features: [
      'Soundproof diesel generators from 20 kVA to 1500 kVA',
      'Automatic Transfer Switch (ATS) for instant power changeover',
      'Sound-dampening acoustic canopies (low noise)',
      'Fuel storage tanks and automatic refilling pipes',
      'Industrial online UPS systems for computers and servers'
    ],
    specs: ['Engines: Cummins, Perkins, Volvo', 'Noise level: Quiet soundproof canopies'],
    icon: 'BatteryCharging',
    divisionSlug: 'electro-mechanical'
  },
  {
    id: 'elevators-escalators',
    title: 'Elevators & Lifts',
    category: 'electro-mechanical',
    shortDesc: 'Installation and servicing of passenger lifts, hospital bed lifts, and cargo lifts.',
    fullDesc: 'We install safe, smooth, and modern elevators for multi-story buildings, public hospitals, and government offices. All lifts include automatic rescue devices so passengers are never stuck if the power goes out.',
    features: [
      'Fast and smooth passenger elevators',
      'Large stretcher & bed lifts designed for hospitals',
      'Heavy cargo and goods lift platforms',
      'Automatic Rescue Device (ARD) during power failure',
      'Modern stainless steel cabins and digital button panels'
    ],
    specs: ['Capacity: 6 to 24 passengers (450kg - 2000kg)', 'Safety: EN-81 European Safety Standards'],
    icon: 'ArrowUpDown',
    divisionSlug: 'electro-mechanical'
  },
  {
    id: 'pumps-plumbing',
    title: 'Water Pumps & Plumbing',
    category: 'electro-mechanical',
    shortDesc: 'Deep tube-well pumps, water booster systems, and building water pipes.',
    fullDesc: 'We provide complete plumbing and water supply installations. This includes drilling deep tube-wells, installing submersible pumps, water filtration systems, overhead storage tanks, and complete bathroom plumbing lines.',
    features: [
      'Deep tube-well submersible water pumps',
      'Automatic pressure booster pumps for steady water pressure',
      'Water filtration and iron removal units',
      'Heavy-duty uPVC and PPR hot/cold water pipes',
      'Building drainage and waste pipe installation'
    ],
    specs: ['Piping: Tested PPR and heavy uPVC', 'Pumps: Submersible & centrifugal booster pumps'],
    icon: 'Droplets',
    divisionSlug: 'electro-mechanical'
  },
  {
    id: 'fire-safety',
    title: 'Fire Safety & Sprinklers',
    category: 'electro-mechanical',
    shortDesc: 'Fire alarms, smoke detectors, water sprinklers, and fire hydrants.',
    fullDesc: 'We install certified fire protection systems approved by the Bangladesh Fire Service. Our installations include smoke alarm detectors, emergency sirens, fire hose cabinets, outdoor hydrant pillars, and automatic ceiling water sprinklers.',
    features: [
      'Automatic ceiling fire sprinkler pipe networks',
      'Fire hydrant hose reels and outdoor landing valves',
      'Electric and diesel-powered emergency fire pumps',
      'Addressable smoke and heat detector alarm systems',
      'Gas fire suppression systems for server rooms (FM-200)'
    ],
    specs: ['Pumps: High-pressure electric and diesel backup fire pumps', 'Approval: Bangladesh Fire Service certified'],
    icon: 'Flame',
    divisionSlug: 'electro-mechanical'
  },
  {
    id: 'maintenance-amc',
    title: 'Regular Maintenance & Repairs',
    category: 'electro-mechanical',
    shortDesc: 'Routine servicing, electrical checks, and emergency repair support.',
    fullDesc: 'We offer monthly and yearly maintenance contracts (AMC) to keep your electrical, AC, generator, and elevator systems running smoothly. Our on-call technicians fix problems quickly so your building operations never stop.',
    features: [
      'Yearly Maintenance Contracts (AMC) for complete buildings',
      'Monthly servicing for ACs, generators, and elevators',
      'Thermal camera inspections to find loose wires and hot spots',
      'Transformer oil testing and filtering',
      'On-call emergency repair visits'
    ],
    specs: ['Support: Scheduled monthly visits + Emergency hotline', 'Reports: Written inspection report after each visit'],
    icon: 'Wrench',
    divisionSlug: 'electro-mechanical'
  }
];

// ==========================================
// CIVIL CONSTRUCTION (SIMPLE, CLEAR WORDING)
// ==========================================
export const CONSTRUCTION_SERVICES: ServiceItem[] = [
  {
    id: 'building-construction',
    title: 'Building Construction',
    category: 'construction',
    shortDesc: 'Construction of multi-story office buildings, schools, hospitals, and halls.',
    fullDesc: 'We construct complete concrete (RCC) buildings from soil testing and foundation piling to the final coat of paint. We follow Bangladesh National Building Code (BNBC) rules to make sure every building is strong, earthquake-resistant, and long-lasting.',
    features: [
      'Deep foundation piling and heavy concrete base works',
      'Strong reinforced concrete (RCC) columns, beams, and slabs',
      'Brickwork, wall plastering, and weather-proof exterior painting',
      'Interior tile flooring, aluminum windows, and wooden doors',
      'Complete electrical, sanitary, and plumbing integration'
    ],
    specs: ['Structure: Earthquake-resistant RCC frame', 'Code: Bangladesh National Building Code (BNBC)'],
    icon: 'Building2',
    divisionSlug: 'construction'
  },
  {
    id: 'roads-highways',
    title: 'Roads & Highway Construction',
    category: 'construction',
    shortDesc: 'Asphalt paving, road widening, and concrete roads for urban and rural areas.',
    fullDesc: 'We construct asphalt and concrete roads following Roads and Highways Department (RHD) standards. From compacting the ground and laying stone bases to paving smooth black asphalt, our roads are built to carry heavy buses and trucks without breaking.',
    features: [
      'Earth moving, leveling, and heavy roller compaction',
      'Stone aggregate base preparation and bitumen primer',
      'Smooth hot-mix asphalt concrete paving with modern machinery',
      'Rigid concrete roads (pavement) for heavy cargo areas',
      'Reflective road paint lines, signboards, and side guide-rails'
    ],
    specs: ['Pavement: Hot-mix asphalt & reinforced concrete', 'Standards: RHD specification compliant'],
    icon: 'Milestone',
    divisionSlug: 'construction'
  },
  {
    id: 'bridges-culverts',
    title: 'Bridges & Culverts',
    category: 'construction',
    shortDesc: 'Concrete bridges, girder bridges, and box culverts over canals and streams.',
    fullDesc: 'We build durable concrete bridges and multi-vent box culverts across rivers, streams, and canals. Our bridges provide safe, year-round passage for heavy traffic, connecting rural and suburban communities.',
    features: [
      'Prestressed concrete (PSC) girder bridges for wide water channels',
      'Reinforced concrete box culverts for road water crossings',
      'Deep riverbed piling to prevent flood damage and soil wash-away',
      'Strong approach roads with protective stone bank walls',
      'Heavy-duty safety railings and expansion joints'
    ],
    specs: ['Type: Concrete girder bridges & box culverts', 'Loading: Built for heavy truck and bus transport'],
    icon: 'Waypoints',
    divisionSlug: 'construction'
  },
  {
    id: 'drainage-water-supply',
    title: 'Drainage Canals & Water Works',
    category: 'construction',
    shortDesc: 'Concrete drain channels, canal protection, and flood defense walls.',
    fullDesc: 'We build concrete stormwater drains, canal retaining walls, and riverbank protection works to stop seasonal flooding and waterlogging. Our drainage projects ensure rainwater drains away quickly and safely.',
    features: [
      'Reinforced concrete U-drains with heavy concrete top covers',
      'Canal excavation, deepening, and concrete wall lining',
      'Riverbank protection using stone pitching and geo-textile bags',
      'Water sluice gates to control agricultural and flood water',
      'Underground stormwater pipeline laying'
    ],
    specs: ['Materials: High-strength waterproof concrete', 'Purpose: Waterlogging prevention and flood control'],
    icon: 'Waves',
    divisionSlug: 'construction'
  },
  {
    id: 'renovation-maintenance',
    title: 'Building Renovation & Repair',
    category: 'construction',
    shortDesc: 'Structural repairs, roof waterproofing, wall repainting, and modernizing older buildings.',
    fullDesc: 'We repair and modernize older government and commercial buildings. Whether you need structural beam strengthening, roof leak waterproofing, interior partition remodeling, or a fresh modern facade, our team completes it with minimal disruption.',
    features: [
      'Concrete column and beam strengthening (jacketing)',
      'Roof leak repair and heat-reflective waterproofing',
      'Damp wall treatment and fresh interior/exterior painting',
      'Modernizing office interiors, tiles, ceilings, and lighting',
      'Replacing old windows, doors, and damaged sanitary lines'
    ],
    specs: ['Services: Complete turnkey renovation and structural repair'],
    icon: 'Hammer',
    divisionSlug: 'construction'
  }
];

// ==========================================
// IT & SOFTWARE DEVELOPMENT (HEAVILY ENHANCED)
// ==========================================
export const IT_WEB_SERVICES: ServiceItem[] = [
  {
    id: 'custom-web-apps',
    title: 'Custom Web Applications',
    category: 'it-web',
    shortDesc: 'Tailor-made software built with modern stacks (React, Next.js, Node.js, Laravel).',
    fullDesc: 'We build custom web software specifically designed for your organization’s day-to-day work. From internal management tools to complex multi-user platforms, we write clean, maintainable code with high security, fast loading times, and intuitive screens.',
    features: [
      'Modern frontend using React.js, Next.js, and TypeScript',
      'Fast, secure backend APIs built with Node.js, Python, or Laravel',
      'Role-based user permissions (Super Admin, Manager, Staff, Viewer)',
      'Automated PDF report and invoice generation',
      'Interactive tables, search filters, and Excel data export',
      'Mobile-responsive layout that works smoothly on phones and tablets'
    ],
    specs: ['Stack: React, Next.js, Node.js, Laravel', 'Database: PostgreSQL, MySQL, Redis'],
    techStack: ['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    icon: 'Code2',
    divisionSlug: 'it'
  },
  {
    id: 'egov-portals',
    title: 'E-Governance & Public Portals',
    category: 'it-web',
    shortDesc: 'Secure online portals for citizen services, digital applications, and document verification.',
    fullDesc: 'We build citizen-facing public portals and ministry websites that handle thousands of daily visitors. Features include online application submissions, digital tracking numbers, SMS OTP verification, and secure admin approval workflows.',
    features: [
      'Citizen application forms with tracking and reference numbers',
      'Multi-level government officer approval workflows',
      'SMS and Email notification alerts at each processing step',
      'National ID (NID) and identity verification integrations',
      'Downloadable digital certificates with QR code verification',
      'Full bilingual support in Bangla and English'
    ],
    specs: ['Language: Bangla & English bilingual', 'Security: OWASP Top 10 security compliance'],
    techStack: ['React', 'Next.js', 'Node.js', 'Docker', 'PostgreSQL', 'Nginx'],
    icon: 'Layers',
    divisionSlug: 'it'
  },
  {
    id: 'corporate-websites',
    title: 'Corporate & Institutional Websites',
    category: 'it-web',
    shortDesc: 'Fast, elegant websites with easy content management for departments and companies.',
    fullDesc: 'We create clean, modern corporate websites that establish credibility and communicate your mission clearly. Built with sub-second page load times, search engine optimization (SEO), and an easy-to-use admin panel so your team can publish notices, news, and reports easily.',
    features: [
      'Lightning-fast page loading (under 1 second)',
      'Easy Admin Panel (CMS) to publish notices, press releases, and circulars',
      'Search Engine Optimization (SEO) for top Google ranking',
      'Tender circulars and tender document download section',
      'Interactive photo and video gallery of completed projects',
      'Secure contact forms with instant email notifications'
    ],
    specs: ['Performance: 95+ Google Lighthouse speed score', 'CMS: Headless CMS or customized admin dashboard'],
    techStack: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Vercel / Cloudflare'],
    icon: 'Globe',
    divisionSlug: 'it'
  },
  {
    id: 'dashboards-admin',
    title: 'Admin Panels & Analytics Dashboards',
    category: 'it-web',
    shortDesc: 'Real-time charts, KPIs, executive reporting, and project monitoring consoles.',
    fullDesc: 'We design intuitive administrative consoles that turn complex data into clear charts, maps, and reports. Department leaders can monitor active projects, budget spending, staff performance, and inventory in real time.',
    features: [
      'Visual charts, graphs, and metric counters for key numbers',
      'Interactive maps showing project sites across districts of Bangladesh',
      'One-click PDF executive summary and Excel report downloads',
      'Real-time data updates without needing to refresh the page',
      'Dark mode and light mode interface options'
    ],
    specs: ['Charts: Chart.js, Recharts, Leaflet GIS mapping', 'Export: High-resolution PDF & Excel sheets'],
    techStack: ['React', 'TypeScript', 'Recharts', 'Tailwind CSS', 'Node.js'],
    icon: 'LayoutDashboard',
    divisionSlug: 'it'
  },
  {
    id: 'ecommerce-portals',
    title: 'Online Payment & Fee Collection',
    category: 'it-web',
    shortDesc: 'Digital fee collection portals with bKash, Nagad, Rocket, and Bank Card integration.',
    fullDesc: 'We build secure online fee collection portals for government licensing, utility bills, and public services. Integrated with all major Bangladeshi payment providers with automatic instant receipt generation and financial ledger reconciliation.',
    features: [
      'Direct integration with bKash, Nagad, Rocket, and Upay',
      'Visa, MasterCard, and local Bangladeshi debit/credit card gateways',
      'Instant digital payment receipt with scannable QR verification',
      'Daily financial reconciliation reports for accounting teams',
      'Automated SMS payment confirmation messages'
    ],
    specs: ['Gateways: bKash Merchant API, Nagad, Shurjopay, SSLCommerz', 'Security: SSL 256-bit encryption'],
    techStack: ['Node.js', 'Express', 'PostgreSQL', 'Payment Gateways', 'SMS Gateway API'],
    icon: 'ShoppingCart',
    divisionSlug: 'it'
  },
  {
    id: 'hosting-maintenance',
    title: 'Cloud Hosting & Server Management',
    category: 'it-web',
    shortDesc: 'Managed cloud server setup, daily automated backups, and 99.9% uptime maintenance.',
    fullDesc: 'We set up and manage high-availability cloud servers to ensure your website or software is always online, fast, and protected against hacking attempts. We handle security updates, SSL certificates, and daily encrypted backups.',
    features: [
      'Cloud server deployment on AWS, DigitalOcean, or local Bangladesh data centers',
      'Daily automated database and file backups with one-click restore',
      'Free SSL security certificates with automatic renewal',
      'Web Application Firewall (WAF) to block cyber attacks and spam',
      '24/7 server health monitoring with immediate SMS alerts on issues'
    ],
    specs: ['Uptime: 99.9% guaranteed availability', 'Backups: Daily off-site encrypted snapshots'],
    techStack: ['Linux (Ubuntu)', 'Docker', 'Nginx', 'AWS', 'GitHub Actions CI/CD'],
    icon: 'Server',
    divisionSlug: 'it'
  }
];

export const IT_APP_SERVICES: ServiceItem[] = [
  {
    id: 'android-ios-apps',
    title: 'Android & iOS Mobile Apps',
    category: 'it-app',
    shortDesc: 'Smooth, user-friendly mobile apps built using Flutter and React Native.',
    fullDesc: 'We develop beautiful, easy-to-use mobile apps that work smoothly on both Android phones and Apple iPhones. Whether for public citizen access or internal corporate operations, our apps run fast even on budget smartphones.',
    features: [
      'Single codebase that runs on both Android and Apple iOS',
      'Fast, smooth 60fps animations with responsive modern UX',
      'Fingerprint and Face ID biometric login support',
      'Push notification alerts sent directly to users’ phones',
      'Complete handling of Google Play Store and Apple App Store publishing'
    ],
    specs: ['Framework: Flutter & React Native', 'Compatibility: Android 8.0+ and iOS 14+'],
    techStack: ['Flutter', 'Dart', 'React Native', 'Firebase', 'REST APIs'],
    icon: 'Smartphone',
    divisionSlug: 'it'
  },
  {
    id: 'govt-service-apps',
    title: 'Field Survey & Inspection Apps',
    category: 'it-app',
    shortDesc: 'Mobile apps with GPS tagging and offline form saving for field officers.',
    fullDesc: 'We create specialized mobile applications for field inspection teams, survey officers, and site supervisors. Officers can capture site photos, fill out checklists, and record GPS coordinates even in remote areas with no internet connection — the app automatically syncs when online.',
    features: [
      'Offline data saving: fill forms and take photos without internet',
      'Automatic sync to main database once connected to Wi-Fi or mobile data',
      'Camera capture with verified GPS location and timestamp watermark',
      'QR code and barcode scanning for equipment and badge verification',
      'Simple Bangla interface designed for non-technical field workers'
    ],
    specs: ['Offline: SQLite encrypted local database storage', 'Localization: 100% Bangla support'],
    techStack: ['Flutter', 'SQLite', 'Google Maps API', 'Firebase Sync'],
    icon: 'CheckSquare',
    divisionSlug: 'it'
  },
  {
    id: 'app-ui-ux',
    title: 'UI/UX Mobile & Web Design',
    category: 'it-app',
    shortDesc: 'Clean, user-friendly wireframes and interactive prototypes designed in Figma.',
    fullDesc: 'Before writing a single line of code, our UI/UX designers create interactive clickable prototypes in Figma. You can test and review every screen on your phone or computer, ensuring the design is clear, intuitive, and approved by your team.',
    features: [
      'Interactive clickable prototypes in Figma for testing before development',
      'Clear, accessible color schemes and readable Bangla/English typography',
      'User journey mapping to ensure forms are easy to complete',
      'Complete design system with reusable buttons, icons, and components'
    ],
    specs: ['Tool: Figma', 'Standards: Simple, accessible, mobile-first design'],
    techStack: ['Figma', 'Adobe XD', 'Design Systems', 'User Testing'],
    icon: 'Palette',
    divisionSlug: 'it'
  },
  {
    id: 'app-maintenance',
    title: 'App Updates & Support',
    category: 'it-app',
    shortDesc: 'Regular updates for new Android & iOS versions, bug fixes, and feature additions.',
    fullDesc: 'Google and Apple update Android and iOS every year. We ensure your mobile app remains 100% compatible with new phone models, update security libraries, fix user issues, and add new features as your organization grows.',
    features: [
      'Yearly updates to support the newest Android and iOS releases',
      'Crash monitoring and rapid bug fix releases',
      'App speed and battery consumption optimization',
      'Adding new features, pages, and integrations as needed'
    ],
    specs: ['Target: 99.5% crash-free sessions across all devices'],
    techStack: ['Firebase Crashlytics', 'Google Play Console', 'Apple App Store Connect'],
    icon: 'ShieldAlert',
    divisionSlug: 'it'
  }
];

export const IT_INFRASTRUCTURE_SERVICES: ServiceItem[] = [
  {
    id: 'networking-cabling',
    title: 'Office Networking & Fiber Cabling',
    category: 'it-infrastructure',
    shortDesc: 'Cat6 network cabling, optical fiber connections, and high-speed office Wi-Fi.',
    fullDesc: 'We install organized, high-speed computer networks for offices, universities, and government campuses. From neat server racks and labeled network ports to optical fiber backbones and enterprise Wi-Fi routers that cover entire buildings.',
    features: [
      'Structured Cat6 / Cat6A network cabling with neat rack patch panels',
      'High-speed optical fiber backbone connecting multiple floors or buildings',
      'Commercial Wi-Fi 6 access points with seamless roaming',
      'Managed network switches and router configuration',
      'Cable testing and labeling for easy future maintenance'
    ],
    specs: ['Cabling: Cat6, Cat6A & Single-Mode Optical Fiber', 'Brands: Cisco, Mikrotik, CommScope'],
    icon: 'Network',
    divisionSlug: 'it'
  },
  {
    id: 'cctv-security',
    title: 'CCTV Security & Surveillance',
    category: 'it-infrastructure',
    shortDesc: 'High-definition IP security cameras, night vision, and centralized control rooms.',
    fullDesc: 'We install high-definition security camera systems for government buildings, factories, warehouses, and compounds. Monitor your premises in 4K resolution with clear night vision, central digital recording (NVR), and remote viewing from your phone or PC.',
    features: [
      'High-resolution 4K and 1080p IP security cameras with night vision',
      'Central Network Video Recorder (NVR) with 30-90 days storage',
      'Smart detection: human motion alerts, intrusion lines, and vehicle entry',
      'Central security guard monitoring screen setup',
      'Secure password-protected live viewing on smartphone app'
    ],
    specs: ['Resolution: 4K Ultra HD & 4MP Starlight Night Vision', 'Storage: 30 to 90 days continuous recording'],
    icon: 'Camera',
    divisionSlug: 'it'
  },
  {
    id: 'datacenter-setup',
    title: 'Server Room & Data Center Setup',
    category: 'it-infrastructure',
    shortDesc: 'Server racks, precision cooling AC, clean fire suppression, and backup power.',
    fullDesc: 'We design and construct clean, secure computer server rooms for government ministries and corporations. We install server rack cabinets, dedicated precision air conditioners, UPS power backups, and fire gas suppression systems that protect electronic equipment.',
    features: [
      'Standard 42U server rack cabinets with cable management',
      'Precision cooling air conditioners to keep servers at exact temperature',
      'Clean agent gas fire suppression (FM-200) safe for electronics',
      'Online double-conversion UPS systems for uninterrupted server power',
      'Room temperature and water leak alarm monitoring'
    ],
    specs: ['Racks: 42U / 24U Server Enclosures', 'Cooling: Precision PAC with automatic backup'],
    icon: 'HardDrive',
    divisionSlug: 'it'
  },
  {
    id: 'hardware-supply',
    title: 'Computer & Hardware Supply',
    category: 'it-infrastructure',
    shortDesc: 'Supply of brand desktop PCs, laptops, rack servers, printers, and scanners.',
    fullDesc: 'We supply genuine brand computer equipment for government tenders and institutional offices. All supplied hardware comes with official manufacturer warranty, on-site setup, and after-sales repair support.',
    features: [
      'Brand desktop computers and corporate laptops (Dell, HP, Lenovo)',
      'High-performance rackmount computer servers (Dell PowerEdge, HPE)',
      'Heavy-duty network laser printers, document scanners, and photocopiers',
      'Interactive touchscreens and conference room projectors',
      'Genuine software licenses and operating system installation'
    ],
    specs: ['Warranty: Official 3-Year Manufacturer Warranty on all systems'],
    icon: 'Monitor',
    divisionSlug: 'it'
  }
];

export const IT_BUILD_PROCESS: ProcessStep[] = [
  {
    step: '01',
    title: 'Understanding Requirements',
    desc: 'We listen to your team, map out your workflow, and write down clear specifications for the software or network.'
  },
  {
    step: '02',
    title: 'UI/UX Design & Prototype',
    desc: 'We design clean, clickable Figma screens so you can see and approve the interface before coding begins.'
  },
  {
    step: '03',
    title: 'Coding & Development',
    desc: 'Our programmers build the system using clean, modern code (React, Next.js, Node, Laravel) with regular demo updates.'
  },
  {
    step: '04',
    title: 'Testing & Quality Check',
    desc: 'We test every button, form, and security check on multiple devices and computers to ensure zero bugs.'
  },
  {
    step: '05',
    title: 'Launch, Training & Support',
    desc: 'We deploy the software to the cloud or your server, train your staff, and provide continuous technical support.'
  }
];

export const CIVIL_PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Site Survey & Soil Test',
    desc: 'We check the soil condition, ground level, and site boundaries to plan the foundation correctly.'
  },
  {
    step: '02',
    title: 'Drawings & Estimates',
    desc: 'We prepare architectural drawings, structural engineering calculations, and clear material estimates.'
  },
  {
    step: '03',
    title: 'Foundation & Piling',
    desc: 'We complete the underground piling and concrete base work to give the structure a solid footing.'
  },
  {
    step: '04',
    title: 'Structure & Finishing',
    desc: 'We cast the concrete pillars, beams, and slabs, followed by brickwork, plastering, tiles, and paint.'
  },
  {
    step: '05',
    title: 'Final Quality Check & Handover',
    desc: 'We inspect every room, test plumbing and electrical points, clean the site, and hand over the keys.'
  }
];

export const MEP_PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Power Load & AC Sizing',
    desc: 'We calculate exact electrical power demands, cooling loads, and water flow requirements for the building.'
  },
  {
    step: '02',
    title: 'Permits & Approvals',
    desc: 'We help submit technical papers and obtain clearance from electricity providers and fire safety authorities.'
  },
  {
    step: '03',
    title: 'Equipment Sourcing',
    desc: 'We procure tested, genuine transformers, AC units, generators, pumps, and fire safety equipment.'
  },
  {
    step: '04',
    title: 'Installation & Wiring',
    desc: 'Our licensed electricians and technicians mount equipment, run cable trays, and connect all pipes neatly.'
  },
  {
    step: '05',
    title: 'Testing & Handover',
    desc: 'We power up and test all systems under full load, train your staff, and provide maintenance manuals.'
  }
];
