export interface Scheme {
  id: string;
  name: string;
  category: 'Central Government' | 'State Government' | 'Sector-Specific Grant';
  sector: string[];
  stage: string[];
  description: string;
  eligibility: string;
  fundingAmount: string;
  documents: string[];
  deadline: string;
  applicationLink: string;
  ministry: string;
  benefit: string;
}

export const schemes: Scheme[] = [
  {
    id: "s1",
    name: "MUDRA Yojana – Mahila Udyam Nidhi",
    category: "Central Government",
    sector: ["All", "Manufacturing", "Services", "Trade"],
    stage: ["Idea", "MVP", "Revenue"],
    description: "Micro-finance loans for women micro-entrepreneurs without collateral under PMMY scheme.",
    eligibility: "Women entrepreneurs aged 18+, non-farm micro/small enterprises, Indian resident",
    fundingAmount: "₹50,000 – ₹10 Lakhs",
    documents: ["Aadhaar Card", "PAN Card", "Business Plan", "Bank Statements (6 months)", "Passport Photo"],
    deadline: "Rolling – No Fixed Deadline",
    applicationLink: "https://www.mudra.org.in",
    ministry: "Ministry of Finance",
    benefit: "Collateral-free loan with subsidized interest rates"
  },
  {
    id: "s2",
    name: "Stand-Up India Scheme",
    category: "Central Government",
    sector: ["Manufacturing", "Services", "Trade", "Agriculture"],
    stage: ["MVP", "Revenue"],
    description: "Bank loans for SC/ST and women entrepreneurs to set up greenfield enterprises.",
    eligibility: "Women entrepreneurs, SC/ST borrowers, first-time enterprise, above 18 years",
    fundingAmount: "₹10 Lakhs – ₹1 Crore",
    documents: ["Identity Proof", "Address Proof", "Business Plan", "Project Report", "CA Certificate"],
    deadline: "Rolling – No Fixed Deadline",
    applicationLink: "https://www.standupmitra.in",
    ministry: "Ministry of Finance / SIDBI",
    benefit: "Composite loan for enterprise setup with 7-year repayment"
  },
  {
    id: "s3",
    name: "Mahila Coir Yojana",
    category: "Central Government",
    sector: ["Manufacturing", "Handicraft"],
    stage: ["Idea", "MVP"],
    description: "Skill training and spinning wheel subsidy for women in coir industry.",
    eligibility: "Women in coir industry, rural areas, artisans",
    fundingAmount: "₹7,900 (spinning wheel subsidy) + Training",
    documents: ["Aadhaar Card", "BPL Certificate (if applicable)", "Bank Account Details"],
    deadline: "Rolling",
    applicationLink: "https://www.coirboard.gov.in",
    ministry: "Ministry of MSME",
    benefit: "Free skill training + equipment subsidy"
  },
  {
    id: "s4",
    name: "TREAD Scheme (Trade Related Entrepreneurship Assistance)",
    category: "Central Government",
    sector: ["All", "Trade", "Services", "Manufacturing"],
    stage: ["Idea", "MVP"],
    description: "Credit and training for women entrepreneurs in non-farm activities through NGOs.",
    eligibility: "Women below poverty line, non-farm activities, through registered NGOs",
    fundingAmount: "Up to ₹30 Lakhs (30% Government Grant + 70% Bank Loan)",
    documents: ["NGO Registration Certificate", "Project Report", "Income Proof", "Aadhaar"],
    deadline: "Rolling",
    applicationLink: "https://msme.gov.in",
    ministry: "Ministry of MSME",
    benefit: "Government grant + subsidized bank loan combo"
  },
  {
    id: "s5",
    name: "Startup India Seed Fund Scheme",
    category: "Central Government",
    sector: ["Technology", "Healthcare", "AgriTech", "EdTech", "All"],
    stage: ["Idea", "MVP"],
    description: "Seed funding for DPIIT-registered startups for proof of concept and prototype development.",
    eligibility: "DPIIT-registered startup, incorporated < 2 years, 51% Indian ownership",
    fundingAmount: "Up to ₹20 Lakhs (PoC) / ₹50 Lakhs (Market Entry)",
    documents: ["DPIIT Certificate", "Incorporation Certificate", "Business Plan", "Pitch Deck", "Team Details"],
    deadline: "Quarterly Applications",
    applicationLink: "https://seedfund.startupindia.gov.in",
    ministry: "DPIIT, Ministry of Commerce",
    benefit: "Non-dilutive seed grant for early-stage validation"
  },
  {
    id: "s6",
    name: "WE Hub – Women Entrepreneur Hub (Telangana)",
    category: "State Government",
    sector: ["Technology", "Innovation", "All"],
    stage: ["Idea", "MVP", "Revenue"],
    description: "India's first state-led incubator exclusively for women entrepreneurs.",
    eligibility: "Women entrepreneurs, Telangana-based preferred, any sector",
    fundingAmount: "Grants up to ₹15 Lakhs + Equity-free support",
    documents: ["Business Registration", "Pitch Deck", "Identity Proof"],
    deadline: "Cohort-based (Bi-Annual)",
    applicationLink: "https://wehub.telangana.gov.in",
    ministry: "Government of Telangana – IT & Industries",
    benefit: "Mentorship + funding + market access"
  },
  {
    id: "s7",
    name: "Kerala Women Entrepreneur Scheme (KSWDC)",
    category: "State Government",
    sector: ["Manufacturing", "Services", "Food Processing"],
    stage: ["Idea", "MVP"],
    description: "Subsidized loans and training for women entrepreneurs in Kerala.",
    eligibility: "Kerala resident women, age 18–55, small business aspiration",
    fundingAmount: "₹1 Lakh – ₹10 Lakhs at subsidized interest",
    documents: ["Aadhaar", "Residence Certificate", "Business Plan", "Bank Passbook"],
    deadline: "Rolling",
    applicationLink: "https://www.kswdc.org",
    ministry: "Government of Kerala – Women & Child Development",
    benefit: "Low-interest loan + skill training"
  },
  {
    id: "s8",
    name: "Annapurna Scheme",
    category: "Central Government",
    sector: ["Food Processing", "Catering", "Services"],
    stage: ["Idea", "MVP"],
    description: "Collateral-free loans for women in food catering business through SBI.",
    eligibility: "Women entrepreneurs in food/catering business, business plan required",
    fundingAmount: "Up to ₹50,000",
    documents: ["Aadhaar", "Business Plan", "Bank Account", "Guarantor Details"],
    deadline: "Rolling",
    applicationLink: "https://www.sbi.co.in",
    ministry: "Ministry of Finance / SBI",
    benefit: "Quick collateral-free micro-loan"
  },
  {
    id: "s9",
    name: "Pradhan Mantri Kaushal Vikas Yojana – Women Track",
    category: "Central Government",
    sector: ["All", "Skill Development"],
    stage: ["Idea"],
    description: "Free skill training and certification for women entrepreneurs to build business capabilities.",
    eligibility: "Indian women, any age, basic education preferred",
    fundingAmount: "Free Training + Certification + ₹500/month stipend",
    documents: ["Aadhaar", "Bank Account", "Photograph", "Educational Certificate"],
    deadline: "Rolling",
    applicationLink: "https://www.pmkvyofficial.org",
    ministry: "Ministry of Skill Development & Entrepreneurship",
    benefit: "Government-certified skill development"
  },
  {
    id: "s10",
    name: "NITI Aayog Women Entrepreneurship Platform (WEP) Grants",
    category: "Central Government",
    sector: ["Technology", "Innovation", "Social Impact"],
    stage: ["MVP", "Revenue"],
    description: "National platform connecting women entrepreneurs with grants, mentors, and markets.",
    eligibility: "Women-led startups/businesses, any sector, MSME/Startup India registration preferred",
    fundingAmount: "Varies – up to ₹25 Lakhs (partner grants)",
    documents: ["Business Registration", "PAN", "Revenue Proof", "Impact Report"],
    deadline: "Grant-specific (Quarterly)",
    applicationLink: "https://wep.gov.in",
    ministry: "NITI Aayog",
    benefit: "Access to government ecosystem + multiple funding sources"
  },
  {
    id: "s11",
    name: "SIDBI Mahila Udyam Nidhi Scheme",
    category: "Central Government",
    sector: ["Manufacturing", "Services", "Technology"],
    stage: ["MVP", "Revenue"],
    description: "Term loans for women micro-enterprises for capital expenditure and working capital.",
    eligibility: "Women-owned enterprises, 51% women ownership, MSME registered",
    fundingAmount: "Up to ₹10 Lakhs",
    documents: ["MSME Registration", "CA-certified Balance Sheet", "Project Report", "KYC Documents"],
    deadline: "Rolling",
    applicationLink: "https://www.sidbi.in",
    ministry: "SIDBI",
    benefit: "Term loan at concessional rates"
  },
  {
    id: "s12",
    name: "Rajasthan State Women's Scheme – Women Entrepreneur Conclave",
    category: "State Government",
    sector: ["All", "Handicraft", "Tourism", "Manufacturing"],
    stage: ["Idea", "MVP", "Revenue"],
    description: "State-level grants and market linkage for Rajasthan women entrepreneurs.",
    eligibility: "Rajasthan domicile, women-led business, MSME sector",
    fundingAmount: "₹5 Lakhs – ₹50 Lakhs",
    documents: ["Domicile Certificate", "Business Registration", "Aadhaar", "Business Plan"],
    deadline: "Annual – State Budget Cycle",
    applicationLink: "https://wcd.rajasthan.gov.in",
    ministry: "Government of Rajasthan",
    benefit: "State grant + export market linkage"
  }
];
