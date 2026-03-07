export interface Incubator {
  id: string;
  name: string;
  location: string;
  sectorFocus: string[];
  stageSupported: string[];
  equityRequirement: string;
  fundingCapacity: string;
  description: string;
  applicationProcess: string;
  benefits: string[];
  website: string;
}

export const incubators: Incubator[] = [
  {
    id: "inc1",
    name: "WE Hub",
    location: "Hyderabad, Telangana",
    sectorFocus: ["Technology", "FMCG", "Social Impact", "All"],
    stageSupported: ["Idea", "MVP", "Early Growth"],
    equityRequirement: "None (Equity-free)",
    fundingCapacity: "Up to ₹15 Lakhs (Grants)",
    description: "India's first state-led incubator for women. Provides mentorship, market access, and a supportive community.",
    applicationProcess: "Online application followed by pitch presentations.",
    benefits: ["Co-working space", "Industry mentorship", "Market linkage", "Grant opportunities"],
    website: "https://wehub.telangana.gov.in"
  },
  {
    id: "inc2",
    name: "IIM Bangalore – NSRCEL (Women Startup Program)",
    location: "Bengaluru, Karnataka",
    sectorFocus: ["Technology", "Social Ventures", "Healthcare", "SaaS"],
    stageSupported: ["Idea", "MVP"],
    equityRequirement: "Case-by-case",
    fundingCapacity: "Access to Seed Funding & Grants",
    description: "A flagship program for women-led startups providing structured training and incubation at India's top business school.",
    applicationProcess: "Rolling applications and cohort-based selection.",
    benefits: ["High-quality training", "Top-tier mentorship", "Access to investors", "Academic resources"],
    website: "https://nsrcel.org"
  },
  {
    id: "inc3",
    name: "CIIE.CO – GUSEC (HerStart)",
    location: "Ahmedabad, Gujarat",
    sectorFocus: ["Innovation", "Technology", "Social Entrepreneurship"],
    stageSupported: ["Idea", "MVP"],
    equityRequirement: "None for grants",
    fundingCapacity: "Grants up to ₹20 Lakhs",
    description: "HerStart is a dedicated platform for women entrepreneurs under Gujarat University Startup and Entrepreneurship Council.",
    applicationProcess: "Through HerStart portal and annual conclaves.",
    benefits: ["Incubation space", "Prototype support", "Legal assistance", "Govt. connecting"],
    website: "https://herstart.gujaratuniversity.ac.in"
  },
  {
    id: "inc4",
    name: "IIT Madras – C-TIDES",
    location: "Chennai, Tamil Nadu",
    sectorFocus: ["DeepTech", "Manufacturing", "AI/ML", "Hardware"],
    stageSupported: ["MVP", "Scaling"],
    equityRequirement: "2% – 5% Equity",
    fundingCapacity: "Up to ₹50 Lakhs (Equity/Debt)",
    description: "Technology Business Incubator specializing in deep-tech startups and hardware innovations.",
    applicationProcess: "Rigorous technical screening and business evaluation.",
    benefits: ["Technical labs", "IP support", "VC network", "Industrial tie-ups"],
    website: "https://ctides.iitm.ac.in"
  },
  {
    id: "inc5",
    name: "ZONE Startups – Empower",
    location: "Mumbai, Maharashtra",
    sectorFocus: ["FinTech", "EdTech", "Consumer Tech"],
    stageSupported: ["MVP", "Growth"],
    equityRequirement: "Variable",
    fundingCapacity: "Investor matching up to ₹5 Crores",
    description: "Accelerator program for women-led startups with a focus on scaling and investor readiness.",
    applicationProcess: "Competitive application for the annual cohort.",
    benefits: ["Global network", "Sales pipeline support", "Bootcamps", "Investor demo day"],
    website: "https://india.zonestartups.com"
  }
];
