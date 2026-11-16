export interface AuditRole {
  id: string;
  number: string;
  title: string;
  description: string;
  responsibilities: string[];
  seniority: string;
}

export interface AccountingService {
  id: string;
  number: string;
  title: string;
  description: string;
  items: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  details: string;
}

export interface ValueProp {
  number: string;
  title: string;
  description: string;
  highlight: string;
}

export const siteConfig = {
  name: "CALVERIS",
  legalName: "Calveris Limited",
  tagline: "Your audit team, extended.",
  subTagline: "The team behind your team.",
  description: "Specialist backend audit and accounting outsourcing for UK firms. Testing, working papers, bookkeeping and accounts preparation under your direction. Your firm retains signing responsibility.",
  founder: {
    name: "Sri Sivalingam",
    title: "Founder | ACCA",
    credentials: "ACCA-Qualified Professional",
    bio: "Sri is an ACCA-qualified professional with a background in audit at one of the UK's top 10 accountancy firms and extensive experience supporting businesses with year-end accounts, financial reporting and commercial decision-making. Having also successfully run his own retail business for over six years while completing his ACCA, Sri brings both professional and real-world business experience.",
    quote: "I know what it is like when the audit portfolio grows faster than the team. Calveris was created to give UK accountancy firms access to experienced professionals without compromising control, quality or client relationships. We're not here to take your clients. We're here to help you serve more of them.",
    linkedin: "https://www.linkedin.com/in/sri-sivalingam-acca/",
    image: `${import.meta.env.BASE_URL}assets/founder-sri.jpg`,
  },
  contact: {
    email: "info@calveris.co.uk",
    phone: "+44 7803 061011",
    phoneDisplay: "+44 7803 061011",
    whatsapp: "https://wa.me/447803061011",
    address: {
      line1: "5 Borough Gate, High Street",
      line2: "Steyning, England",
      postcode: "BN44 3SB",
      country: "United Kingdom",
    },
    companyNumber: "16327334",
    statutoryDisclaimer: "Calveris provides backend audit and accounting support. We do not accept appointment as statutory auditor, issue audit opinions or sign audit reports. The appointing audit firm retains responsibility for the engagement, supervision, final review and audit report.",
  },
  navLinks: [
    { label: "Home", path: "/" },
    { label: "Audit Support", path: "/audit-team" },
    { label: "Accounting Support", path: "/accounting-team" },
    { label: "How It Works", path: "/how-it-works" },
    { label: "Why Calveris", path: "/why-calveris" },
    { label: "About Us", path: "/about" },
    { label: "Contact", path: "/contact" },
    { label: "5 Redesigns (PDF)", path: "/designs" },
  ],
};

export const auditRoles: AuditRole[] = [
  {
    id: "junior",
    number: "01",
    title: "Audit Junior",
    description: "Audit testing, working papers, documentation and fieldwork support.",
    seniority: "1–2 years UK audit experience",
    responsibilities: [
      "Substantive testing across routine balance sheet sections",
      "Vouching invoices, bank reconciliations and cash confirmations",
      "Detailed working paper preparation to your firm's standards",
      "Drafting audit schedules and client query lists",
    ],
  },
  {
    id: "semi-senior",
    number: "02",
    title: "Audit Semi-Senior",
    description: "Audit sections, testing, working papers and delivery support.",
    seniority: "2–4 years UK audit experience / Part-qualified",
    responsibilities: [
      "Leading key testing areas: revenue, payroll, fixed assets and accruals",
      "Analytical procedures and variance commentary",
      "Liaising with your in-house seniors on fieldwork progress",
      "Reviewing junior working papers before partner submission",
    ],
  },
  {
    id: "senior",
    number: "03",
    title: "Audit Senior",
    description: "Leading audit sections, supervising juniors and supporting managers.",
    seniority: "Senior / Newly qualified / Finalist",
    responsibilities: [
      "Full file preparation and planning documentation",
      "Complex testing: provisions, going concern, consolidation schedules",
      "Supervising junior audit members and resolving fieldwork queries",
      "Direct handover to your audit manager or Responsible Individual (RI)",
    ],
  },
  {
    id: "manager",
    number: "04",
    title: "Audit Manager",
    description: "Senior-level audit management, review and team support.",
    seniority: "Manager / Experienced Senior Manager",
    responsibilities: [
      "Audit file pre-review before partner or RI sign-off",
      "Monitoring statutory deadlines and file completion quality",
      "Supporting technical disclosure and FRS 102 compliance",
      "Helping your firm optimize capacity and audit workflows",
    ],
  },
];

export const accountingServices: AccountingService[] = [
  {
    id: "accounts-preparation",
    number: "01",
    title: "Accounts Preparation",
    description: "Year-end statutory accounts preparation under FRS 102 1A and FRS 105 for limited companies, LLPs and sole traders.",
    items: ["Trial balance reconciliation", "Lead schedule preparation", "Statutory disclosures", "Draft accounts for client sign-off"],
  },
  {
    id: "bookkeeping",
    number: "02",
    title: "Bookkeeping",
    description: "Accurate, timely daily and monthly bookkeeping to keep clients' financial records clean, compliant and audit-ready.",
    items: ["Bank feed reconciliations", "Sales and purchase ledgers", "Receipt Bank / Dext processing", "Supplier statement checks"],
  },
  {
    id: "management-accounts",
    number: "03",
    title: "Management Accounts",
    description: "Monthly and quarterly management accounts packages with variance analysis, KPIs and custom reporting.",
    items: ["Profit & loss and balance sheet", "Cash flow forecasts", "Budget vs actual commentary", "Tailored executive summaries"],
  },
  {
    id: "financial-reporting",
    number: "04",
    title: "Financial Reporting",
    description: "Comprehensive financial reporting and disclosure compliance for growing UK SMEs and mid-market enterprises.",
    items: ["Complex journal postings", "Consolidation workings", "Fixed asset register maintenance", "Director loan account schedules"],
  },
  {
    id: "vat-support",
    number: "05",
    title: "VAT Support",
    description: "Quarterly VAT return preparation, reconciliation, Making Tax Digital (MTD) compliance and partial exemption reviews.",
    items: ["VAT return reconciliations", "MTD compliance verification", "Reverse charge transactions", "EC sales and import VAT workings"],
  },
  {
    id: "acca-accountants",
    number: "06",
    title: "ACCA-Qualified Accountants",
    description: "Dedicated qualified professionals integrated into your practice to lead advisory, compliance and complex engagements.",
    items: ["ACCA/ACA qualified professionals", "Senior file review capability", "Client-facing or backend roles", "Flexible full or part-time contracts"],
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Tell us what you need",
    description: "Role, seniority, software, workload and start date.",
    details: "We start with a direct conversation to understand your firm's specific bottlenecks, required software (e.g. CCH, CaseWare, Xero, MyWorkpapers) and client timelines.",
  },
  {
    number: "02",
    title: "Meet your professional",
    description: "We introduce professionals aligned with your firm's requirements.",
    details: "We match and introduce vetted professionals with verified UK audit or accounting experience. You review their profile and approve the fit before commitment.",
  },
  {
    number: "03",
    title: "Integrate with your team",
    description: "They work within your existing systems and processes.",
    details: "Your new team member works directly within your environment using your firm's email, software and file templates under agreed supervision and NDA.",
  },
  {
    number: "04",
    title: "Scale when you need",
    description: "Increase or adjust capacity as your firm's workload evolves.",
    details: "Scale up for busy season, maintain permanent ongoing capacity, or adjust as your portfolio shifts—with transparent monthly or project pricing.",
  },
];

export const valueProps: ValueProp[] = [
  {
    number: "01",
    title: "Recruitment Without the Wait",
    description: "Access experienced professionals without waiting months to recruit.",
    highlight: "Skip 3-month notice periods and recruiter fees",
  },
  {
    number: "02",
    title: "Experienced Professionals",
    description: "Junior, Semi-Senior, Senior, Manager and ACCA-qualified professionals.",
    highlight: "Vetted UK practice and audit background",
  },
  {
    number: "03",
    title: "Flexible Capacity",
    description: "Build capacity around your actual workload.",
    highlight: "Busy season surges or permanent backend scaling",
  },
  {
    number: "04",
    title: "Founder-Level Access",
    description: "Direct access to Calveris founders and senior leadership.",
    highlight: "Speak directly with Sri anytime",
  },
];

export const capacityPressures = [
  "Growing audit portfolios outstripping current capacity",
  "Severe recruitment bottlenecks and 3-month notice periods",
  "Q1 busy-season deadlines and team fatigue",
  "Partner and manager overload from junior file rework",
  "Difficulty finding experienced UK Audit Seniors",
  "Difficulty finding reliable ACCA-qualified accountants",
];

export const modelComparison = {
  yourFirm: [
    "Your client relationship and fee structure",
    "Your firm's audit methodology and quality standards",
    "Your partner review, audit opinion and statutory signing",
    "Direct client communication and engagement retention",
  ],
  calveris: [
    "Experienced audit and accounting professionals dedicated to your files",
    "Fieldwork, testing, vouchers, lead schedules and working papers",
    "Working directly within your software (CCH, CaseWare, Xero, MyWorkpapers)",
    "Consistent turnaround times and clear query sheets",
  ],
};

export interface DesignConcept {
  id: string;
  themeKey: string;
  number: string;
  title: string;
  tagline: string;
  category: string;
  vibe: string;
  primaryColor: string;
  accentColor: string;
  backgroundColor: string;
  fontDisplay: string;
  fontBody: string;
  heroStyle: string;
  overview: string;
  targetFirms: string;
  strengths: string[];
  palette: { name: string; hex: string; role: string }[];
  typography: { role: string; family: string; weight: string; usage: string }[];
  designFeatures: string[];
}

export const redesignConcepts: DesignConcept[] = [
  {
    id: "concept-1",
    themeKey: "city-executive",
    number: "01",
    title: "The City Executive",
    tagline: "Big-Four Institutional Authority & Trust",
    category: "Corporate Institutional",
    vibe: "Authoritative, Structured, High-Trust, Established",
    primaryColor: "#1E3A8A",
    accentColor: "#991B1B",
    backgroundColor: "#F8FAFC",
    fontDisplay: "Merriweather / Cormorant Garamond",
    fontBody: "Inter / Manrope",
    heroStyle: "Split layout with live delivery metrics, verified audit badge, and City of London backdrop.",
    overview: "Draws direct inspiration from top-tier UK accounting practices (PwC, KPMG, BDO). Emphasizes institutional security, compliance governance, and professional capacity without distractions.",
    targetFirms: "Mid-tier and large UK accountancy partnerships, 10+ partner firms, and regulated audit teams needing reassurance on compliance rigor.",
    strengths: [
      "Maximum partner credibility and instant corporate trust",
      "High-contrast readability with clear fee and seniority tiers",
      "Structured data tables for software integrations (CCH, CaseWare, MyWorkpapers)",
      "Reassuring regulatory disclaimers integrated naturally into the header/footer",
    ],
    palette: [
      { name: "Deep Oxford Navy", hex: "#0B1528", role: "Ink / Headers" },
      { name: "Royal Firm Blue", hex: "#1E3A8A", role: "Primary Brand / Accent" },
      { name: "City Crimson", hex: "#991B1B", role: "Urgent CTA / Indicator" },
      { name: "Chalk Alabaster", hex: "#F8FAFC", role: "Clean Canvas" },
      { name: "Slate Mist", hex: "#E2E8F0", role: "Structural Borders" },
    ],
    typography: [
      { role: "Headlines", family: "Merriweather / Cormorant", weight: "SemiBold 600", usage: "Authoritative serif headers" },
      { role: "Body", family: "Inter / Manrope", weight: "Regular 400", usage: "Clean, legible reading text" },
      { role: "Metrics & Labels", family: "Manrope", weight: "Bold 700", usage: "Uppercase 0.16em tracking" },
    ],
    designFeatures: [
      "Structured trust seals: 'ACCA Certified', 'UK GDPR Compliant', 'Zero Client Poaching'",
      "Seniority matrix with side-by-side comparison tables",
      "Live capacity calculator mockup for busy season",
      "Clean slate cards with subtle drop shadows",
    ],
  },
  {
    id: "concept-2",
    themeKey: "mayfair-heritage",
    number: "02",
    title: "Mayfair Heritage",
    tagline: "Old-Money Luxury & Sovereign Discretion",
    category: "Private Wealth & Luxury",
    vibe: "Discreet, Bespoke, Savile Row Tailored, Ultra-High-End",
    primaryColor: "#C5A880",
    accentColor: "#D4AF37",
    backgroundColor: "#091210",
    fontDisplay: "Cormorant Garamond / Playfair",
    fontBody: "Manrope Light",
    heroStyle: "Full-bleed obsidian backdrop with illuminated champagne gold hairlines and bespoke typography.",
    overview: "Positions Calveris not as an outsourcing contractor, but as a confidential private reserve team. Designed for premier boutique firms that value exceptional discretion, pedigree, and craftsmanship.",
    targetFirms: "Boutique Mayfair, West End, and private client accounting firms servicing high-net-worth families, family offices, and complex groups.",
    strengths: [
      "Commands premium pricing and elevates brand perception tenfold",
      "Immersion in midnight green and metallic gold feels prestigious",
      "Highlights founder Sri Sivalingam as a trusted master craftsman",
      "Discreet NDA and confidentiality guarantees take center stage",
    ],
    palette: [
      { name: "Midnight Forest", hex: "#091210", role: "Dark Canvas" },
      { name: "Deep Bottle Green", hex: "#101C18", role: "Card Surface" },
      { name: "Champagne Gold", hex: "#C5A880", role: "Primary Accent" },
      { name: "Gilded Ochre", hex: "#D4AF37", role: "Hover & Focus" },
      { name: "Parchment Cream", hex: "#F5F3EF", role: "High-contrast Text" },
    ],
    typography: [
      { role: "Headlines", family: "Cormorant Garamond", weight: "Light 300 / Regular 400", usage: "Editorial luxury serifs" },
      { role: "Italics", family: "Cormorant Italic", weight: "Italic 400", usage: "Quotes and emotional anchors" },
      { role: "Metadata", family: "Manrope", weight: "Medium 500", usage: "Subtle gold uppercase labels" },
    ],
    designFeatures: [
      "Gold hairline borders with 25% opacity",
      "Embossed founder crest and signature element",
      "Monochrome black-and-gold portrait framing for Sri",
      "Subtle ambient gradient glow behind luxury cards",
    ],
  },
  {
    id: "concept-3",
    themeKey: "swiss-modern",
    number: "03",
    title: "Swiss Modernist",
    tagline: "Architectural Precision & Blueprint Clarity",
    category: "Minimalist Architectural",
    vibe: "Ultra-Clean, Logical, Crisp, Modern Design Agency",
    primaryColor: "#0052FF",
    accentColor: "#09090B",
    backgroundColor: "#FFFFFF",
    fontDisplay: "Manrope / Helvetica Bold",
    fontBody: "Inter / Manrope",
    heroStyle: "Bold asymmetrical typography with technical index tags `[01/04]`, sharp dividing lines, and Klein Blue buttons.",
    overview: "Inspired by the International Typographic Style (Swiss Style). Strips away unnecessary embellishment to focus on speed, process transparency, and unambiguous capacity numbers.",
    targetFirms: "Forward-thinking, modern multi-partner practices, digital-first accountants, and fast-scaling practices tired of clunky agencies.",
    strengths: [
      "Lightning fast visual hierarchy — partners scan and decide in 30 seconds",
      "Striking International Klein Blue creates unforgettable visual punch",
      "Process steps styled like architectural blueprints with technical precision",
      "Mobile-first responsive clarity on iPads and smartphones",
    ],
    palette: [
      { name: "Pure Canvas", hex: "#FFFFFF", role: "Background" },
      { name: "Pitch Charcoal", hex: "#09090B", role: "High-contrast Typography" },
      { name: "Klein Blue", hex: "#0052FF", role: "Primary Action" },
      { name: "Technical Gray", hex: "#F4F4F5", role: "Secondary Modules" },
      { name: "Blueprint Line", hex: "rgba(9,9,11,0.12)", role: "Precision Dividers" },
    ],
    typography: [
      { role: "Display Headlines", family: "Manrope", weight: "Bold 700 / ExtraBold 800", usage: "Impactful modern titles" },
      { role: "Technical Tags", family: "JetBrains Mono / monospace", weight: "Medium 500", usage: "Numbered labels like [01/04]" },
      { role: "Body Copy", family: "Inter", weight: "Regular 400", usage: "Clean reading paragraphs" },
    ],
    designFeatures: [
      "Modular box grid layout with 1px black outline borders",
      "Technical index numbering system [01/04] on every section",
      "Interactive role slider with immediate turnaround estimations",
      "Clean monospaced software compatibility tags (Xero, CCH, CaseWare)",
    ],
  },
  {
    id: "concept-4",
    themeKey: "fintech-next",
    number: "04",
    title: "Fintech Next",
    tagline: "Dark Glassmorphism & High-Growth Cloud Speed",
    category: "Modern Tech / SaaS",
    vibe: "Hyper-Modern, Cloud-Native, Sleek, Futuristic",
    primaryColor: "#6366F1",
    accentColor: "#8B5CF6",
    backgroundColor: "#080B11",
    fontDisplay: "Manrope / Space Grotesk",
    fontBody: "Inter",
    heroStyle: "Dark glassmorphic HUD with luminous purple-indigo gradients, animated metric badges, and interactive capacity toggles.",
    overview: "Reimagines audit capacity as an on-demand API for accountancy firms. Built with dark-mode aesthetic, glowing border cards, and tech-forward presentation.",
    targetFirms: "Modern cloud-first accounting practices, paperless audit firms, tech-enabled regional networks, and progressive Managing Partners.",
    strengths: [
      "Differentiates Calveris completely from dusty, old-school outsourcing agencies",
      "Exciting modern feel attracts younger partners and forward-looking firms",
      "Glowing interactive components encourage click-through and form submissions",
      "Perfect for highlighting speed (e.g. 'Embedded in 48 hours')",
    ],
    palette: [
      { name: "Void Obsidian", hex: "#080B11", role: "Deep Background" },
      { name: "Glass Chamber", hex: "#0F1523", role: "Card Surface" },
      { name: "Electric Indigo", hex: "#6366F1", role: "Primary Glow" },
      { name: "Hyper Violet", hex: "#8B5CF6", role: "Gradient Accents" },
      { name: "Ice White", hex: "#F8FAFC", role: "Primary Text" },
    ],
    typography: [
      { role: "Headlines", family: "Manrope / Space Grotesk", weight: "Bold 700", usage: "Gradient text headlines" },
      { role: "Data / Metrics", family: "monospace", weight: "SemiBold 600", usage: "Performance statistics" },
      { role: "Body", family: "Inter", weight: "Regular 400", usage: "High-contrast clean body" },
    ],
    designFeatures: [
      "Frosted glassmorphism with backdrop blur and luminous border strokes",
      "Gradient text fills (`bg-gradient-to-r from-indigo-400 to-violet-400`)",
      "Interactive 'Capacity Slider' allowing partners to calculate required seniors",
      "Live status indicator: 'Sri Sivalingam available for consultations'",
    ],
  },
  {
    id: "concept-5",
    themeKey: "nordic-atelier",
    number: "05",
    title: "Nordic Atelier",
    tagline: "Human-Centric Warmth & Editorial Craft",
    category: "Warm Editorial",
    vibe: "Thoughtful, Tactile, Organic, Respectful, Collaborative",
    primaryColor: "#C25E40",
    accentColor: "#292524",
    backgroundColor: "#F5F0EB",
    fontDisplay: "Fraunces / Cormorant Garamond",
    fontBody: "Manrope",
    heroStyle: "Warm linen textured backdrop with earthy terracotta accents, generous whitespace, and warm architectural photo framing.",
    overview: "Focuses on the human connection: audit and accounting are ultimately about people, peace of mind, and mutual respect. Uses warm organic neutrals to feel reassuring, authentic, and completely unpretentious.",
    targetFirms: "Owner-managed regional firms, established family practices, and partners seeking a genuine collaborative extension rather than a faceless offshore mill.",
    strengths: [
      "Reduces anxiety around outsourcing with gentle, comforting warmth",
      "Soft terracotta and espresso typography creates an inviting magazine aesthetic",
      "Highlights Sri Sivalingam's personal journey as an accountant who cares",
      "Warm rounded buttons and cards feel accessible, friendly, and grounded",
    ],
    palette: [
      { name: "Warm Oat Linen", hex: "#F5F0EB", role: "Paper Canvas" },
      { name: "Soft Clay Card", hex: "#FAF7F4", role: "Card Background" },
      { name: "Burnt Terracotta", hex: "#C25E40", role: "Warm Accent" },
      { name: "Espresso Ink", hex: "#292524", role: "Deep Typography" },
      { name: "Warm Sage", hex: "#EAE4DD", role: "Divider / Pill" },
    ],
    typography: [
      { role: "Headlines", family: "Fraunces / Cormorant", weight: "Normal 400 / Medium 500", usage: "Warm organic serif" },
      { role: "Quotes", family: "Cormorant Italic", weight: "Light Italic 300", usage: "Empathetic quotes" },
      { role: "Body", family: "Manrope", weight: "Light 300 / Regular 400", usage: "Gentle readable text" },
    ],
    designFeatures: [
      "Soft rounded pill tags and gentle shadow-free tactile borders",
      "Personal handwritten-style founder sign-off",
      "Magazine-style two-column editorial pull-quotes",
      "Warm testimonial and case-study layout blocks",
    ],
  },
];



