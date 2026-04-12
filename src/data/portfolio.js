export const site = {
  name: "Naresh Choudhary",
  title: "Senior Software Engineer",
  email: "nareshc.work@gmail.com",
  location: "India · Remote",
  tagline:
    "I build reliable cloud and backend systems and ship applied AI—AWS-first architecture, Python and FastAPI services, and pragmatic use of Bedrock, MCP, and LLMs where they actually help the product.",
  summary:
    "Senior software engineer focused on cloud computing (primarily AWS), backend development with Python and FastAPI, and applied AI including Amazon Bedrock, MCP, and LLMs. I pair strong engineering discipline with analysis and machine learning so teams get systems that are observable, cost-aware, and safe to evolve.",
  availabilityBadge: "Open to collaborate on impactful, real-world problems",
  aboutHeadline: "From cloud foundations to applied AI—in production",
  aboutSubline:
    "I care about clear ownership boundaries, sensible abstractions, and feedback from real traffic: metrics, logs, and honest postmortems. Flexible across clouds and stacks when the problem calls for it, but opinionated about quality and maintainability.",
  glance: [
    {
      label: "Core delivery",
      value: "AWS · Python · FastAPI · applied AI",
    },
    {
      label: "Collaboration scope",
      value: "Cross-functional product & platform work",
    },
    {
      label: "Preferred collaboration",
      value: "Written specs, async updates, tight review loops",
    },
  ],
  heroFacts: [
    {
      label: "Focus",
      value: "Cloud (AWS), backend, applied AI & analysis",
    },
    {
      label: "Stack ethos",
      value: "Secure defaults, observable, easy to operate",
    },
    {
      label: "Working style",
      value: "Clarity first, iterate with data",
    },
  ],
  footerTagline: "Consistently improving.",
  pageTitle: "TechNaresh",
  links: {
    github: "https://github.com/technaresh",
    linkedin: "https://www.linkedin.com/in/technaresh/",
    resume: "#contact",
  },
}

export const navItems = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#credentials", label: "Credentials" },
  { href: "#contact", label: "Contact" },
]

export const skillTabs = [
  {
    id: "ml",
    label: "ML & AI",
    items: [
      "Applied AI with Amazon Bedrock and managed LLM patterns",
      "MCP-style tool integration and agentic workflows (where appropriate)",
      "Prompting, evaluation, and guardrails for production use",
      "Classical ML for ranking, classification, and forecasting",
      "Bridging notebooks and experiments into shipped services",
    ],
  },
  {
    id: "data",
    label: "Data",
    items: [
      "Analysis for product and engineering decisions",
      "SQL, metrics, and experiment readouts",
      "Data quality checks and pipeline observability",
      "Batch and streaming patterns on AWS (e.g. Kinesis, Lambda, Glue mindset)",
      "Cost and performance tradeoffs in data movement and storage",
    ],
  },
  {
    id: "eng",
    label: "Engineering",
    items: [
      "AWS cloud architecture (VPC, IAM, ECS/EKS-style workloads, serverless)",
      "Python services with FastAPI (flexible to other frameworks when needed)",
      "API design, versioning, and backward-compatible change",
      "CI/CD, infrastructure as code, and operational runbooks",
      "Security basics: least privilege, secrets hygiene, audit-friendly logging",
    ],
  },
]

/** Placeholder case studies — replace with your real projects when ready. */
export const projects = [
  {
    id: "genai-gateway",
    title: "Generative AI gateway on AWS",
    role: "Senior Software Engineer",
    period: "Sample · TBD",
    blurb:
      "Unified access to Bedrock models behind auth, quotas, and audit logging for internal product teams.",
    tags: ["AWS", "Bedrock", "FastAPI", "Python", "IAM"],
    metrics: "Placeholder metric — e.g. latency SLO met under peak load",
    problem:
      "Teams were calling foundation models ad hoc, with inconsistent policies and no central visibility into usage or cost.",
    approach:
      "Designed a thin API gateway with per-team keys, request logging, and configurable routing to approved models and prompts.",
    outcome:
      "Placeholder outcome — describe adoption, cost control, and incident reduction once you add real numbers.",
  },
  {
    id: "mcp-tools",
    title: "Internal tools layer (MCP-inspired)",
    role: "Senior Software Engineer",
    period: "Sample · TBD",
    blurb:
      "Structured tool contracts so assistants can call internal APIs safely with schema validation and timeouts.",
    tags: ["MCP", "Python", "OpenAPI", "LLMs"],
    metrics: "Placeholder — e.g. reduced failed tool calls after launch",
    problem:
      "LLM demos worked in slides but broke in production when tools were underspecified or overloaded core services.",
    approach:
      "Defined explicit tool schemas, rate limits, and idempotent operations; added integration tests against golden prompts.",
    outcome:
      "Placeholder — summarize reliability and developer experience improvements.",
  },
  {
    id: "data-platform-aws",
    title: "Analytics path on AWS",
    role: "Senior Software Engineer",
    period: "Sample · TBD",
    blurb:
      "Event ingestion and curated datasets for dashboards—with lineage and ownership documented for stakeholders.",
    tags: ["AWS", "Python", "SQL", "ETL"],
    metrics: "Placeholder — e.g. fresher dashboards or fewer manual extracts",
    problem:
      "Reporting depended on one-off exports; metrics definitions drifted between teams.",
    approach:
      "Standardized ingestion, naming, and refresh jobs; aligned metric definitions with product and finance.",
    outcome:
      "Placeholder — describe trust in metrics and time saved for analysts.",
  },
]

/**
 * Replace company names and dates with your LinkedIn history when you paste them in.
 * Bullets are aligned to your stated strengths (AWS, FastAPI, AI) as templates.
 */
export const experience = [
  {
    company: "[Current employer — update]",
    role: "Senior Software Engineer",
    period: "20XX — Present",
    points: [
      "Lead or contribute to AWS-based services (networking, IAM, and cost-aware design).",
      "Build and harden Python/FastAPI APIs consumed by web and internal clients.",
      "Ship applied-AI features using Bedrock and related patterns with clear evaluation.",
      "Improve observability, on-call runbooks, and incident response for owned services.",
    ],
  },
  {
    company: "[Previous employer — update]",
    role: "Software Engineer",
    period: "20XX — 20XX",
    points: [
      "Delivered backend features and integrations on cloud infrastructure.",
      "Collaborated across product, data, and SRE-style concerns for releases.",
      "Participated in design reviews, code review, and production support.",
    ],
  },
]

/**
 * GitHub achievements reflect your public profile; add formal certs as separate rows when ready.
 * @see https://github.com/technaresh
 */
export const credentials = [
  {
    title: "GitHub achievements — Pull Shark ×3, YOLO, Pair Extraordinaire, Quickdraw",
    issuer: "GitHub · technaresh",
    year: "—",
  },
  {
    title: "AWS certifications — add exact titles (e.g. Solutions Architect, Developer)",
    issuer: "Amazon Web Services",
    year: "—",
  },
]
