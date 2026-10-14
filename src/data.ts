// ✏️ All site content lives here. Edit this file to make the site yours.
export const profile = {
  name: "Harshit Shah",
  role: "full-stack developer & AI engineer",
  value: "products that ship and people actually use",
  intro: "B.Tech CSE student at KIIT University. I build AI-powered tools and full-stack apps, from NLP resume analysis to a live local marketplace.",
  email: "shahharshit226@gmail.com",
  github: "https://github.com/shahharshit226-glitch",
  linkedin: "https://www.linkedin.com/in/harshitshah506",
  bio: [
    "I'm a 4th-year Computer Science student at KIIT University, building in public: AI tools, full-stack apps and a live startup MVP.",
    "I founded ResaleBrt, a local resale marketplace for Biratnagar, built an AI Resume Analyzer with an agentic email pipeline, and developed the Elabs Society website at KIIT.",
  ],
  skills: {
    Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    Backend: ["Node.js", "FastAPI", "Python", "Java", "SQL"],
    "Data & AI": ["Supabase", "MongoDB", "spaCy", "NLP", "OpenCV", "Firebase"],
    Tooling: ["Docker", "Git", "REST APIs"],
  } as Record<string, string[]>,
};

export type CaseStudy = { role: string; problem: string; process: string[]; tools: string[]; results: string[] };
export type Project = { slug: string; title: string; category: string; summary: string; tags: string[]; hue: number; href?: string; caseStudy?: CaseStudy };

export const projects: Project[] = [
  { slug: "resalebrt", title: "ResaleBrt", category: "Web App", hue: 245, href: "https://resalebrt.com",
    summary: "A community-first local resale marketplace for Biratnagar with admin-reviewed listings and WhatsApp seller contact.",
    tags: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    caseStudy: { role: "Founder & developer",
      problem: "Biratnagar needed a community-first place to buy and sell second-hand items: quick to list on, trustworthy to browse, and easy to contact sellers from.",
      process: ["Designed the product end to end: database schema, UI and admin workflows.", "Added admin review so every listing is moderated before it goes live.", "Connected buyers and sellers through WhatsApp contact and a fast listing flow.", "Built buyer requests in sequenced layers: database, storage, frontend, then admin moderation.", "Protected the app with Upstash Redis rate limiting and Sentry monitoring, with Supabase Realtime for live updates."],
      tools: ["Next.js", "TypeScript", "Supabase", "Upstash Redis", "Sentry", "Tailwind CSS"],
      results: ["Live at resalebrt.com with real users.", "MVP designed, built and launched from scratch.", "User feedback is guiding the next iterations. (Add measured numbers here when you have them.)"] } },
  { slug: "resume-analyzer", title: "AI Resume Analyzer", category: "AI / NLP", hue: 175, href: "https://resume-analyzer-agent-2llu.vercel.app",
    summary: "NLP resume parser with ATS scoring, spaCy skill extraction and an email-based agentic pipeline.",
    tags: ["FastAPI", "React", "spaCy", "Python"],
    caseStudy: { role: "Designer & developer",
      problem: "Candidates rarely know how an applicant tracking system reads their resume, and manual feedback does not scale.",
      process: ["Parsed resumes into structured text.", "Extracted skills with spaCy and scored the resume for ATS compatibility.", "Exposed the analysis through a FastAPI backend with a React interface.", "Added an email-based agentic pipeline so the analysis runs automatically."],
      tools: ["FastAPI", "React", "spaCy", "Python"],
      results: ["Deployed and live on Vercel.", "Fully automated analysis from upload or email to report."] } },
  { slug: "collentra", title: "Collentra", category: "Mobile App", hue: 20,
    summary: "A KIIT student-only collaboration app with a deterministic matching engine, projects and real-time chat, built at zero cost.",
    tags: ["React Native", "Expo", "TypeScript", "Supabase"],
    caseStudy: { role: "Designer & developer",
      problem: "Students struggle to find project partners with the right skills, and the build had to cost nothing and use no paid AI APIs.",
      process: ["Wrote the schema first: Postgres, Row Level Security, auth limited to KIIT accounts, storage and chat.", "Built a weighted, deterministic matching engine (skills, interests, role, complementary skills, availability).", "Shipped the app phase by phase, verifying each with a type check and a full bundle export.", "Tested queries as a real authenticated user, since superuser tests hide RLS bugs."],
      tools: ["React Native", "Expo", "TypeScript", "Supabase", "Postgres RLS"],
      results: ["Auth, profiles, projects, matching-driven discovery and real-time chat are working end to end.", "Still in development: onboarding, notifications and polish."] } },
  { slug: "e-complaint", title: "E-Complaint Management", category: "Web App", hue: 330, href: "https://github.com/shahharshit226-glitch",
    summary: "Complaint tracking with an admin dashboard, real-time status updates and a full resolution workflow.", tags: ["Node.js", "Express", "MongoDB"] },
  { slug: "spotify-clone", title: "Spotify Clone v2", category: "Frontend", hue: 150, href: "https://github.com/shahharshit226-glitch/Spotify_clone2",
    summary: "A precise Spotify frontend clone with interactive player controls and a responsive playlist UI.", tags: ["JavaScript", "HTML5", "CSS3"] },
];

export type Post = { slug: string; title: string; excerpt: string; date: string; category: string; readTime: string; hue: number; body: string[] };
// Sample posts — replace with your own. Lines starting with "## " render as headings.
export const posts: Post[] = [
  { slug: "shipping-an-mvp", title: "Shipping an MVP without over-engineering", date: "2026-10-10", category: "Engineering", readTime: "4 min", hue: 245,
    excerpt: "Start with one flow, one database and an admin who can say no. Add the rest when real users ask.",
    body: ["The fastest way to learn whether a product works is to put a small version in front of real people.", "## Start with the loop", "Pick the single loop that matters, such as list an item, review it, contact the seller, and make that smooth before anything else.", "## Keep a human in the loop", "Admin moderation is cheap to build and buys trust immediately. Automate it later, once you know what to automate.", "## Add infrastructure on evidence", "Rate limiting and monitoring earn their place early. Queues and caching can wait until measurements ask for them."] },
  { slug: "explainable-scores", title: "Making a resume score explainable", date: "2026-10-03", category: "AI", readTime: "3 min", hue: 175,
    excerpt: "A score is only useful when the reader can see exactly why it is what it is.",
    body: ["Opaque scores create arguments. Explainable scores create next steps.", "## Tie every point to a reason", "Each deduction should map to a visible sentence in the report, such as a missing contact section or no measurable results.", "## Prefer rules you can read", "Rule-based skill matching is transparent, though it misses skills outside your list. Review that list as roles change."] },
  { slug: "zero-cost-constraints", title: "What a zero-cost constraint teaches you", date: "2026-09-24", category: "Product", readTime: "3 min", hue: 20,
    excerpt: "No paid APIs means you design the matching logic yourself, and understand it better for it.",
    body: ["A hard constraint is a design tool.", "## Deterministic beats magical", "A weighted score across skills, interests and availability can be tested, tuned and explained to users.", "## Let the database do the work", "Putting the matching logic in database functions keeps the app thin and makes behaviour consistent everywhere."] },
];
export const categories = (items: { category: string }[]) => ["All", ...Array.from(new Set(items.map(i => i.category)))];
export const fmtDate = (d: string) => new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
