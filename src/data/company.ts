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
      tenders: string;
      displayPrimary: string;
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
  name: "Sijjil Enterprise",
  shortName: "Sijjil",
  tagline: "Quality Construction, Electrical & IT Services",
  heroHeadline: "Reliable Construction, Electrical & IT Contracting in Bangladesh",
  heroSubtext: "We deliver quality government and public sector projects on time — from building construction and electrical power systems to modern software and web portals.",
  aboutStory: [
    "Sijjil Enterprise is a government-enlisted contracting company based in Dhaka, Bangladesh. We specialize in three main areas: Civil Construction, Electro-Mechanical engineering, and Information Technology (IT).",
    "Over the years, we have worked with government departments, public institutions, and private organizations to build durable buildings, roads, safe power systems, and modern digital applications.",
    "We believe in straightforward work: honest pricing, skilled engineers on-site, using quality materials, and finishing every project on schedule."
  ],
  mission: "To deliver durable, safe, and cost-effective construction, electrical, and digital projects with clear communication and on-time completion.",
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
  registrations: [
    {
      title: "Trade License",
      regNumber: "TRAD/DNCC/019284/2024",
      authority: "Dhaka North City Corporation (DNCC)",
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
      line1: "House 24, Road 7, Block F",
      line2: "Banani, Dhaka-1213",
      city: "Dhaka",
      country: "Bangladesh",
      note: "Corporate Office"
    },
    phone: {
      primary: "+88029876543",
      tenders: "+8801700000000",
      displayPrimary: "+880 2 9876543",
      displayTenders: "+880 1700 000000"
    },
    email: {
      general: "info@sijjilenterprise.com",
      tenders: "tenders@sijjilenterprise.com"
    },
    workingHours: {
      days: "Saturday - Thursday",
      time: "9:00 AM - 6:00 PM",
      weekend: "Friday: Closed"
    },
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14602.700319752252!2d90.39860655!3d23.79458215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a0f70deb73%3A0x30c36498f90fe23!2sBanani%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
  }
};
