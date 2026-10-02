export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  category: string;
  url: string;
  displayUrl: string;
  description: string;
  fullOverview: string;
  image: string;
  metrics: { label: string; value: string }[];
  services: string[];
  featured?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  highlights: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  year: string;
  description: string;
}

export interface SkillCategory {
  name: string;
  description: string;
  skills: { name: string; level: number; tags: string }[];
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  priceUSD: number;
  priceINR: number;
  period: string;
  popular?: boolean;
  features: string[];
  ctaText: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  organization: string;
  initials: string;
}

export const PORTFOLIO_OWNER = {
  name: "Amrit Sharma",
  headline: "Digital Marketer • Performance Marketer • Social Media Strategist",
  subheadline: "Growth-driven marketer specializing in Paid Media, SEO, Social Media Intelligence, and High-Converting Content.",
  bio: "Results-driven Digital Marketing professional with 2+ years of experience in Social Media Intelligence, Paid Media, Performance Marketing, and SEO. Proven track record in managing multi-platform social media pages, conducting market & audience research, executing paid campaigns, and securing Google Page 1 search rankings.",
  email: "amritksh0024@gmail.com",
  phones: ["+91-9289656024", "+91-9315063354"],
  whatsapp: "+919289656024",
  location: "Vasant Kunj, New Delhi - 110070",
  languages: [
    { language: "Hindi", proficiency: "Native" },
    { language: "English", proficiency: "Intermediate" }
  ],
  stats: [
    { value: "3.5x", label: "Average ROAS", context: "Meta & Google Ads" },
    { value: "230K+", label: "Influencer Reach Managed", context: "Creator Partnerships" },
    { value: "40%+", label: "Channel Subscriber Surge", context: "6-Month Growth" },
    { value: "Page 1", label: "Google Rankings", context: "Organic SEO Keywords" }
  ]
};

export const PROJECTS: ProjectItem[] = [
  {
    id: "gfoi-ngo",
    title: "Global Foundation of India (GFOI)",
    client: "Global Foundation of India",
    category: "Non-Profit & Social Impact",
    url: "http://gfoi.ngo/",
    displayUrl: "gfoi.ngo",
    description: "Multi-channel digital awareness, donor engagement funnels, and organic brand storytelling for a prominent humanitarian non-profit.",
    fullOverview: "Structured and executed end-to-end digital positioning for GFOI to drive community engagement, transparent program highlights, and donor trust. Developed tailored content themes showcasing on-ground social impacts across health, education, and relief work.",
    image: "/src/assets/images/gfoi_ngo_showcase_1790913757476.jpg",
    metrics: [
      { label: "Donor Inquiries", value: "+180%" },
      { label: "Organic Reach", value: "4.2x" },
      { label: "Community Engagement", value: "+210%" }
    ],
    services: ["Social Media Strategy", "Donor Engagement", "Content Creation", "Brand Positioning"],
    featured: true
  },
  {
    id: "tn-sharma-contractor",
    title: "T.N. Sharma Contractor",
    client: "T.N. Sharma Infrastructure",
    category: "Construction & Infrastructure",
    url: "https://tnsharmacontractor.com/",
    displayUrl: "tnsharmacontractor.com",
    description: "Corporate digital presence, local Google Search optimization, and enterprise tender inquiry generation for a premier civil contractor.",
    fullOverview: "Architected a credible web platform and localized search footprint for T.N. Sharma Contractor. Optimized technical metadata, project showcase portfolios, and civil engineering credentials to capture high-value government and private infrastructure bids.",
    image: "/src/assets/images/construction_web_showcase_1790913783464.jpg",
    metrics: [
      { label: "Local Google Ranking", value: "Top 3" },
      { label: "Commercial RFPs", value: "+35%" },
      { label: "Search Visibility", value: "+145%" }
    ],
    services: ["Local SEO", "Web Architecture", "Lead Generation", "Brand Credentials"],
    featured: true
  },
  {
    id: "call-mitra",
    title: "Call Mitra App Growth & Performance",
    client: "Call Mitra App",
    category: "Mobile App & Performance Marketing",
    url: "https://callmitraapp.com",
    displayUrl: "callmitraapp.com",
    description: "End-to-end digital acquisition, viral influencer collaborations (231K+ creator), and paid funnel optimization to scale user installs.",
    fullOverview: "Spearheaded user acquisition campaigns across Meta Ads and social channels. Devised video scripts and creative briefs for influencer partners, resulting in rapid organic retention and cost-effective app install spikes.",
    image: "/src/assets/images/callmitra_app_showcase_1790913771927.jpg",
    metrics: [
      { label: "App Installs", value: "35,000+" },
      { label: "Cost Per Install", value: "-28%" },
      { label: "Creator Reach", value: "231K+ Followers" }
    ],
    services: ["Performance Marketing", "App Acquisition", "Influencer Strategy", "Meta Ads"],
    featured: true
  },
  {
    id: "gsce-and-gs-shorthand",
    title: "GSCE.in & GS Shorthand Institute",
    client: "GS Shorthand Institute",
    category: "EdTech & Exam Preparation",
    url: "https://gsce.in",
    displayUrl: "gsce.in · gsshorthandinstitute.com",
    description: "Dominant Page 1 & Page 2 Google keyword rankings, 40% YouTube subscriber surge, and 3x social creative engagement.",
    fullOverview: "Executed targeted technical, on-page, and off-page SEO audits. Led YouTube content optimization with high-CTR thumbnails and keyword-rich video descriptions that accelerated student enrollments across northern India.",
    image: "/src/assets/images/hero_amrit_marketer_1790913743593.jpg",
    metrics: [
      { label: "Google SERP", value: "Page 1 & 2" },
      { label: "YouTube Growth", value: "+40% in 6 Mo" },
      { label: "Engagement Rate", value: "3x Surge" }
    ],
    services: ["Search Engine Optimization", "YouTube SEO", "Video Editing", "Content Design"]
  },
  {
    id: "skill-perfect",
    title: "Skill Perfect EdTech Platform",
    client: "Skill Perfect",
    category: "EdTech & Career Upskilling",
    url: "https://skillperfect.in/",
    displayUrl: "skillperfect.in",
    description: "High-converting course landing page optimization, student lead generation funnels, and automated nurture sequences.",
    fullOverview: "Refined value propositions, headline messaging, and social proof integration on Skill Perfect's web properties. Integrated high-intent lead capture mechanisms that slashed cost-per-lead for professional certification programs.",
    image: "/src/assets/images/construction_web_showcase_1790913783464.jpg",
    metrics: [
      { label: "Trial Conversion", value: "22%" },
      { label: "Cost Per Lead", value: "₹18 Avg" },
      { label: "Course Inquiries", value: "+95%" }
    ],
    services: ["Conversion Rate Optimization", "Paid Lead Funnels", "Copywriting", "Landing Pages"]
  },
  {
    id: "gs-english-academy",
    title: "GS English Academy",
    client: "GS English Academy",
    category: "Language Academy",
    url: "https://gsenglishacademy.com/",
    displayUrl: "gsenglishacademy.com",
    description: "Student enrollment funnels, localized search discovery, and student testimonial showcases across Delhi NCR.",
    fullOverview: "Designed and rolled out seasonal enrollment campaigns targeting students preparing for competitive and spoken English proficiency tests. Boosted classroom and online cohort admissions through targeted local geotargeting.",
    image: "/src/assets/images/gfoi_ngo_showcase_1790913757476.jpg",
    metrics: [
      { label: "Batch Enrollment", value: "+65%" },
      { label: "Organic Search Visitors", value: "+110%" },
      { label: "Student Inquiries", value: "450+/mo" }
    ],
    services: ["Social Media Campaigns", "Local Search Optimization", "Creative Design", "Funnel Strategy"]
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "pragyam",
    role: "Social Media Intelligence & Paid Media",
    company: "Pragyam Impact Solutions",
    location: "ITO, New Delhi",
    period: "2026 – Present",
    current: true,
    highlights: [
      "Conduct in-depth audience research, competitor analysis, and market intelligence to develop data-driven social media strategies.",
      "Manage and optimize paid media campaigns across Meta Ads and Google Ads (₹50,000+ monthly budget), consistently delivering 3.5x ROAS.",
      "Handle end-to-end social media page management for multiple enterprise and NGO clients, including content scheduling and community engagement.",
      "A/B test ad creatives, audiences, and landing pages to optimize CTR and slash cost-per-lead by 25%.",
      "Generate comprehensive weekly and monthly executive performance dashboards for stakeholders."
    ]
  },
  {
    id: "call-mitra",
    role: "Performance Marketer",
    company: "Call Mitra App",
    location: "New Delhi",
    period: "2025",
    highlights: [
      "Led end-to-end digital marketing covering SEO strategy, social media promotion, content creation, and online brand visibility.",
      "Partnered with two high-profile Instagram creators — including an influencer with 231K followers — crafting growth and audience scaling strategies.",
      "Designed and developed SEO-friendly WordPress websites for multiple clients with emphasis on UX and search visibility.",
      "Produced branded video edits and promotional graphic collateral across Meta platforms and YouTube."
    ]
  },
  {
    id: "gs-shorthand",
    role: "Digital Marketing Intern",
    company: "GS Shorthand Institute / GSCE.in",
    location: "New Delhi",
    period: "2024",
    highlights: [
      "Managed SEO for GSCE.in and GS Shorthand Institute, securing consistent Page 1 and Page 2 rankings on Google.",
      "Grew official YouTube channel subscribers by 40% in 6 months through rigorous video SEO, metadata planning, and custom high-CTR thumbnails.",
      "Conducted extensive on-page and off-page keyword research, backlink prospecting, and technical SEO site audits.",
      "Assisted in editing video lectures, designing course brochures, and structuring LMS digital modules."
    ]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    id: "du-sol",
    degree: "Bachelor of Commerce (B.Com)",
    institution: "Delhi University (SOL)",
    location: "New Delhi",
    year: "First Year: 2026",
    description: "Foundational studies in business economics, commercial management, financial accounting, and market economics."
  },
  {
    id: "digital-cert",
    degree: "Advanced Performance Marketing & Social Intelligence",
    institution: "Specialized Industry Practicum",
    location: "New Delhi",
    year: "2024 – 2025",
    description: "Hands-on mastery in Meta Ads Manager, Google Ads, GA4 conversion tracking, audience psychographics, and SEMrush analytics."
  },
  {
    id: "creative-cert",
    degree: "Creative Content & Commercial Video Production",
    institution: "Creative Suite Specialization",
    location: "New Delhi",
    year: "2023 – 2024",
    description: "Practical production in Adobe Photoshop, Canva Pro, CapCut, Premiere Pro, and visual ad copy architecture."
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Paid Media & Growth",
    description: "Scalable performance advertising engineered for maximum ROAS and customer acquisition.",
    skills: [
      { name: "Meta Ads Manager (FB & IG)", level: 96, tags: "Pixel · CBO · Lookalikes" },
      { name: "Google Ads (Search & Display)", level: 92, tags: "PMax · Keyword Bidding · Quality Score" },
      { name: "Campaign Budget Optimization (CBO)", level: 95, tags: "Budget Scaling · Audience Stacking" },
      { name: "A/B Creative & Copy Testing", level: 94, tags: "CTR Lift · CPL Reduction" },
      { name: "Retargeting & Funnel Stacking", level: 90, tags: "Custom Audiences · Exclusion Rules" }
    ]
  },
  {
    name: "SEO & Search Engine Marketing",
    description: "Technical, on-page, and authority-building strategies to dominate Google search results.",
    skills: [
      { name: "On-Page & Keyword Research", level: 94, tags: "Search Intent · Semantic LSI" },
      { name: "Technical SEO & Core Web Vitals", level: 90, tags: "Crawlability · Indexing · Schema" },
      { name: "Google Search Console & GA4", level: 92, tags: "Event Tracking · SERP Impressions" },
      { name: "SEMrush & Ahrefs Auditing", level: 88, tags: "Backlink Gap · Competitor Ranking" },
      { name: "Local SEO & Google Business Profile", level: 95, tags: "Map Pack · Local Citations" }
    ]
  },
  {
    name: "Social Intelligence & Content",
    description: "Trend-responsive content creation, influencer partnerships, and community growth.",
    skills: [
      { name: "Social Media Intelligence", level: 95, tags: "Competitor Analysis · Sentiment Tracking" },
      { name: "YouTube Channel & Video SEO", level: 92, tags: "Title Optimization · CTR Thumbnails" },
      { name: "Influencer Partnership Strategy", level: 90, tags: "230K+ Reach · Brief Formulation" },
      { name: "Graphic Design (Photoshop & Canva)", level: 90, tags: "Ad Banners · Social Carousels" },
      { name: "Short-Form Video (CapCut & Premiere)", level: 88, tags: "Pacing · Hooks · Subtitles" }
    ]
  },
  {
    name: "Tools & Analytics",
    description: "Industry-standard platforms utilized daily for execution, reporting, and workflow speed.",
    skills: [
      { name: "Google Analytics 4 (GA4)", level: 92, tags: "Conversion Paths · Custom Events" },
      { name: "WordPress CMS Management", level: 90, tags: "Elementor · Yoast · Speed Optimization" },
      { name: "Hootsuite & Scheduling Tools", level: 88, tags: "Content Calendars · Automated Feeds" },
      { name: "Trello & Project Workflow", level: 94, tags: "Sprint Boards · Asset Delivery" },
      { name: "Google Workspace & MS Office", level: 95, tags: "Sheets Modeling · Reporting Decks" }
    ]
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter Growth",
    tagline: "Ideal for early-stage brands, local businesses, or single-product campaigns.",
    priceUSD: 800,
    priceINR: 45000,
    period: "month",
    features: [
      "Single-Platform Paid Ads Setup (Meta Ads or Google Ads)",
      "Target Audience & Competitor Market Research",
      "Up to 4 Custom Ad Creatives + High-Converting Ad Copies",
      "Bi-Weekly Performance Dashboard & KPI Check",
      "Initial Conversion Pixel / Tag Setup",
      "Dedicated WhatsApp Support (Standard business hours)"
    ],
    ctaText: "Get Started with Starter"
  },
  {
    id: "professional",
    name: "Professional Scale",
    tagline: "Complete multi-channel engine for growing brands demanding high ROAS and organic ranking.",
    priceUSD: 1600,
    priceINR: 90000,
    period: "month",
    popular: true,
    features: [
      "Dual-Platform Paid Media Management (Meta Ads + Google Ads)",
      "Comprehensive Organic SEO Strategy & Keyword Optimization",
      "12 Custom Designed Creatives / Reels per month",
      "Creator & Influencer Outreach Strategy (Up to 2 partners)",
      "A/B Testing on Audiences, Hooks & Landing Pages",
      "Weekly In-Depth Performance Reports with ROAS Breakdown",
      "Dedicated Priority WhatsApp & Bi-Weekly Strategy Sync Calls"
    ],
    ctaText: "Scale with Professional"
  },
  {
    id: "premium",
    name: "Enterprise Dominance",
    tagline: "Full-stack growth partner covering paid acquisition, organic dominance, and creative direction.",
    priceUSD: 2800,
    priceINR: 160000,
    period: "month",
    features: [
      "Omnichannel Campaigns (Meta, Google Search & Display, YouTube, LinkedIn)",
      "Custom SEO-Optimized Landing Page / Web Architecture Review",
      "End-to-End Creative Direction (Full Graphic Suites + Video Editing)",
      "Advanced GA4 Custom Event Tracking & Conversion API (CAPI)",
      "Competitor Social Intelligence & Trend Forecasting Reports",
      "Direct 24/7 Slack / WhatsApp Emergency Support Channel",
      "Weekly Strategic Growth Sprints with Dedicated Marketer Time"
    ],
    ctaText: "Partner with Premium"
  }
];

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Discover",
    subtitle: "Audience & Market Intelligence",
    description: "In-depth competitor analysis, buyer persona psychographics, historical audit of past ad accounts, and identification of untapped organic keyword opportunities."
  },
  {
    number: "02",
    title: "Plan",
    subtitle: "Strategic Architecture",
    description: "Formulating a tailored full-funnel roadmap, budget allocation matrix across Meta/Google, keyword mapping, and clear weekly performance benchmarks."
  },
  {
    number: "03",
    title: "Create",
    subtitle: "High-Converting Production",
    description: "Designing thumb-stopping ad visuals, editing punchy short-form video hooks, crafting persuasive copy, and structuring SEO-optimized landing pages."
  },
  {
    number: "04",
    title: "Deliver",
    subtitle: "Execution & ROAS Scaling",
    description: "Campaign launch, algorithmic monitoring, relentless A/B testing of angles, budget reallocation to winning ad sets, and transparent executive reporting."
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "t1",
    quote: "Amrit transformed our NGO's digital awareness and donor inquiry funnels. His strategic clarity, deep commitment to social impact, and creative ad management helped us expand our outreach across crucial programs.",
    author: "Dr. R. K. Verma",
    role: "Project Director",
    organization: "Global Foundation of India (GFOI)",
    initials: "RV"
  },
  {
    id: "t2",
    quote: "Working with Amrit on Call Mitra delivered a massive lift in app user acquisition. His ability to negotiate with a 231K follower creator and optimize our Meta paid campaigns brought our CPI down by nearly 30%.",
    author: "Gaurav Malhotra",
    role: "Founder & Product Lead",
    organization: "Call Mitra App",
    initials: "GM"
  },
  {
    id: "t3",
    quote: "Our institutes secured Page 1 and Page 2 rankings on Google for vital shorthand and competitive exam queries. Amrit also steered our YouTube channel to a 40% subscriber leap in just 6 months.",
    author: "S. K. Singh",
    role: "Academic Director",
    organization: "GS Shorthand Institute & GSCE.in",
    initials: "SS"
  }
];
