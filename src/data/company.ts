import directorImage from '@/assets/director_aligned.jpeg';
import operationalManagerImage from '@/assets/operational_manager_aligned.jpeg';

export interface CoreValue {
  title: string;
  description: string;
  iconName: 'ShieldCheck' | 'Award' | 'HardHat' | 'Clock' | 'Eye';
}

export interface LegalRegistration {
  title: string;
  regNumber: string;
  authority: string;
  validity: string;
  placeholderNotice: string;
}

export interface LeadershipMember {
  title: string;
  role: string;
  image: string;
  description: string;
  responsibilities: string[];
}

export interface CompanyInfo {
  name: string;
  shortName: string;
  tagline: string;
  heroHeadline: string;
  heroSubtext: string;
  aboutStory: string[];
  mission: string;
  vision: string;
  trustPoints: Array<{ title: string; subtitle: string; icon: string }>;
  coreValues: CoreValue[];
  registrations: LegalRegistration[];
  leadership: LeadershipMember[];
  contact: {
    address: {
      line1: string;
      line2: string;
      city: string;
      country: string;
      note: string;
    };
    phone: {
      primary: string;
      secondary: string;
      tenders: string;
      displayPrimary: string;
      displaySecondary: string;
      displayTenders: string;
    };
    email: {
      general: string;
      tenders: string;
    };
    workingHours: {
      days: string;
      time: string;
      weekend: string;
    };
    mapEmbedUrl: string;
  };
}

export const COMPANY_INFO: CompanyInfo = {
  name: "SIJJIL ENTERPRISE",
  shortName: "Sijjil",
  tagline: "Complete Solutions, Solid Results",
  heroHeadline: "Reliable Construction, Electrical & IT Contracting in Bangladesh",
  heroSubtext: "Complete Solutions, Solid Results — We deliver quality government and public sector projects on time, from building construction and electrical power systems to modern web applications.",
  aboutStory: [
    "Sijjil Enterprise is an enlisted contracting company based in Jatrabari, Dhaka. We specialize in three main disciplines: Civil Construction, Electro-Mechanical engineering (MEP), and Information Technology (IT).",
    "Over the years, we have worked with government departments, public institutions, and private organizations to build durable buildings, roads, safe power systems, and modern digital applications.",
    "Our motto is 'Complete Solutions, Solid Results' — honest pricing, skilled engineers on-site, using quality materials, and finishing every project on schedule."
  ],
  mission: "To deliver durable, safe, and cost-effective construction, electrical, and digital projects with clear communication and solid results.",
  vision: "To be one of Bangladesh's most dependable and respected contracting companies for government and public sector works.",
  trustPoints: [
    {
      title: "Government Registered",
      subtitle: "Enlisted contractor with active trade, tax, and VAT papers",
      icon: "FileCheck2"
    },
    {
      title: "Certified Engineers",
      subtitle: "Qualified civil, electrical, and software engineers on staff",
      icon: "HardHat"
    },
    {
      title: "Quality Materials",
      subtitle: "Tested materials that meet all national standards",
      icon: "ShieldCheck"
    },
    {
      title: "On-Time Completion",
      subtitle: "Clear project timelines and dedicated daily site supervision",
      icon: "ClockCheck"
    }
  ],
  coreValues: [
    {
      title: "Honesty & Trust",
      description: "We give clear estimates, fair pricing, and keep our word on every contract.",
      iconName: "ShieldCheck"
    },
    {
      title: "Good Quality Work",
      description: "We use tested materials and follow correct engineering methods on every job.",
      iconName: "Award"
    },
    {
      title: "Worker & Site Safety",
      description: "We enforce proper safety gear, helmets, and clear site safety rules at all times.",
      iconName: "HardHat"
    },
    {
      title: "On-Time Delivery",
      description: "We plan each phase carefully so your project finishes without unnecessary delays.",
      iconName: "Clock"
    },
    {
      title: "Open Communication",
      description: "Regular project updates, clear bills, and no hidden surprises for our clients.",
      iconName: "Eye"
    }
  ],
  leadership: [
    {
      title: "Director",
      role: "Executive Leadership & Strategy",
      image: directorImage,
      description: "Leading corporate strategy, government contract relationships, tender compliance, and executive oversight for Sijjil Enterprise.",
      responsibilities: [
        "Executive Leadership & Corporate Governance",
        "Public Procurement & Tender Negotiations",
        "Strategic Partnerships & Client Trust"
      ]
    },
    {
      title: "Operational Manager",
      role: "Operations & Project Execution",
      image: operationalManagerImage,
      description: "Overseeing day-to-day site operations, multi-disciplinary engineering squads, logistics management, and on-time project handover.",
      responsibilities: [
        "Field Operations & Daily Site Supervision",
        "Civil, MEP & Software Project Delivery",
        "Resource Scheduling & Quality Assurance"
      ]
    }
  ],
  registrations: [
    {
      title: "Trade License",
      regNumber: "TRAD/DNCC/019284/2024",
      authority: "Dhaka City Corporation",
      validity: "Up to Date (FY 2024-2025)",
      placeholderNotice: "Valid trade license for general contracting, civil works, electrical, and IT supply."
    },
    {
      title: "TIN (Tax Certificate)",
      regNumber: "TIN-4829-1029-XXXX",
      authority: "National Board of Revenue (NBR)",
      validity: "Active Tax Payer",
      placeholderNotice: "Regular tax returns submitted with clean tax clearance certificate."
    },
    {
      title: "VAT / BIN Registration",
      regNumber: "BIN-003819284-0101",
      authority: "Customs, Excise & VAT Department",
      validity: "Active 13-Digit BIN",
      placeholderNotice: "Compliant with government e-GP and standard billing requirements."
    },
    {
      title: "Contractor Enlistment",
      regNumber: "ENLIST-PWD/RHD-CLASS-1",
      authority: "Public Works & Roads Departments",
      validity: "Active Enlisted Contractor",
      placeholderNotice: "Enlisted for public sector construction, MEP, and institutional supply."
    }
  ],
  contact: {
    address: {
      line1: "235, South Kutubkhali, Dhania",
      line2: "Jatrabari, Dhaka-1236",
      city: "Dhaka",
      country: "Bangladesh",
      note: "Head Office"
    },
    phone: {
      primary: "+8801711193428",
      secondary: "+8801911355230",
      tenders: "+8801911355230",
      displayPrimary: "+880 1711-193428",
      displaySecondary: "+880 1911-355230",
      displayTenders: "+880 1911-355230"
    },
    email: {
      general: "Info.sijjilenterprise@gmail.com",
      tenders: "Info.sijjilenterprise@gmail.com"
    },
    workingHours: {
      days: "Saturday - Thursday",
      time: "9:00 AM - 6:00 PM",
      weekend: "Friday: Closed"
    },
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14612.394142728286!2d90.43000000000002!3d23.708000000000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9b1d1f7c703%3A0x6e9f4a5c5ff4c980!2sJatrabari%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
  }
};
