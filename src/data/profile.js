/**
 * profile.js
 *
 * Single source of truth for all portfolio content.
 * Update this file only — no component files need to be touched.
 *
 * Fields:
 *  - name, role, photo, tagline, location   → Hero, meta tags
 *  - contactBlurb                          → Contact section
 *  - bio.short                             → Hero
 *  - bio.long                              → About section
 *  - social (github, linkedin, email)      → Navbar, Contact, Footer
 *  - education                             → About section
 *  - certifications (with url)             → Skills section (clickable if url set)
 *  - publications (with url)               → Skills section (clickable if url set)
 *  - interests                             → About section
 *  - stack                                 → Skills section
 *  - experience                            → Experience section
 *  - projects (with note, github, live,    → Projects section
 *    writeup: internal blog path)
 *
 * Resume: drop the file named resumeFile into /public/ to make the navbar Resume button appear.
 * Meta: pageTitle and metaDescription are applied dynamically (browser tab, search engines).
 *       og:title and og:description in index.html must also be updated manually — social
 *       crawlers (LinkedIn, Twitter) don't execute JavaScript so they read the static HTML.
 */

const profile = {
  name: "Aman Verma",
  role: "Software Engineer | .NET, Azure & AI",
  photo: "/portrait.jpg",
  logoText: "aman",
  resumeFile: "resume.pdf",
  pageTitle: "Aman Verma | Software Engineer",
  metaDescription:
    "Software Engineer with 4+ years of .NET and Azure expertise, based in Auckland, NZ. Building clean, scalable systems, with a growing focus on AI.",
  tagline: "I build systems that scale,\nand automate the parts\nI'd rather not do.",
  blogBlurb:
    "Thoughts on software engineering, system design, AI, and the occasional thing I had to learn the hard way.",
  contactBlurb:
    "Always up for an interesting problem, a good collaboration, or a conversation about software. Say hi.",
  bio: {
    short:
      "Software engineer with 4+ years building full stack systems on .NET and Azure, with a focus on clean architecture and thoughtful design. Lately I use AI to make that work faster and more consistent, with checks I trust. Dual master's degrees in tech and business mean I think about cost and value, not just code.",
    long: [
      "Most of my work has been designing and shipping REST APIs and cloud services on .NET and Azure, focused on systems where cutting corners early costs multiples later. Clean architecture, honest contracts, thorough documentation, and code the next developer can actually pick up and run with.",
      "I hold dual master's degrees in Computer Applications and Business Informatics, meaning I can sit in a commercial conversation and translate it directly into engineering decisions. What it costs, what it enables, whether it's solving the right problem.",
      "Lately I've been building AI into my own workflow: a set of skills that take on the repetitive parts of the job while I stay in the loop, orchestrating the work and signing it off. It's taught me as much about engineering discipline as about AI, and I write about it on my blog.",
    ],
  },
  location: "Auckland, NZ",
  social: {
    github: "https://github.com/aman-vr",
    linkedin: "https://linkedin.com/in/aman-vr",
    email: "amanverma@outlook.co.nz",
  },
  education: [
    {
      degree: "Master of Business Informatics",
      institution: "ICL Graduate Business School",
      location: "Auckland, NZ",
      year: "2024-2025",
    },
    {
      degree: "Master of Computer Applications",
      institution: "Vellore Institute of Technology",
      location: "Vellore, India",
      year: "2021-2023",
    },
    {
      degree: "Bachelor of Computer Applications",
      institution: "Chitkara University",
      location: "Rajpura, India",
      year: "2018-2021",
    },
  ],
  certifications: [
    {
      name: "Microsoft Certified: Azure Fundamentals",
      issuer: "Microsoft",
      issued: "Mar 2026",
      url: "https://learn.microsoft.com/api/credentials/share/en-us/AmanVerma-4593/5D38E0E1147A5AC4?sharingId=8CA11FB560EAA49E",
    },
    {
      name: "Microsoft Certified: Azure Data Fundamentals",
      issuer: "Microsoft",
      issued: "May 2026",
      url: "https://learn.microsoft.com/api/credentials/share/en-us/AmanVerma-4593/46D91D5E66706ECC?sharingId=8CA11FB560EAA49E",
    },
    {
      name: "Microsoft Certified: Azure Developer Associate",
      issuer: "Microsoft",
      issued: "Jan 2024",
      url: "https://learn.microsoft.com/api/credentials/share/en-us/AmanVerma-0981/61380A6EBAA17264?sharingId",
    },
  ],
  publications: [
    {
      title: "Effects of Contaminated Ocean Water on the Ecosystem",
      book: "Sustainable Digital Technologies: Trends, Impacts, and Assessments",
      publisher: "CRC Press",
      date: "Sep 2023",
      authors:
        "Aman Verma, Samiksha Sharma, Kajal K., Siva Rama Krishnan Somayaji",
      summary:
        "A book chapter examining ocean pollution at the intersection of industrialisation and environmental neglect. Surveys machine learning techniques for formulating data-driven mitigation strategies, emphasising public awareness and the role of technology in protecting aquatic ecosystems.",
      url: "https://www.taylorfrancis.com/books/edit/10.1201/9781003348313/sustainable-digital-technologies-vandana-sharma-balamurugan-balusamy-munish-sabharwal-mariya-ouaissa",
    },
  ],
  interests: ["System Design", "AI in Software Engineering"],
  stack: [
    {
      category: "Backend",
      skills: [".NET 8", "C#", "ASP.NET Core", "REST APIs", "GraphQL"],
    },
    {
      category: "Cloud",
      skills: [
        "Microsoft Azure",
        "Azure Functions",
        "Azure Cosmos DB",
        "Azure Blob Storage",
      ],
    },
    {
      category: "Database",
      skills: ["SQL Server", "Entity Framework Core", "Redis", "MySQL"],
    },
    { category: "Frontend", skills: ["React", "JavaScript"] },
    {
      category: "Practices",
      skills: ["Clean Architecture", "Domain-Driven Design", "xUnit"],
    },
    {
      category: "Tooling",
      skills: ["Azure DevOps", "PowerShell", "Pester"],
    },
    {
      category: "AI",
      skills: ["GitHub Copilot", "Model Context Protocol (MCP)", "AI-assisted workflows"],
    },
  ],
  experience: [
    {
      title: "Full Stack Developer",
      company: "Southern Cross Travel Insurance",
      period: "Mar 2024 – Present",
      location: "Auckland, NZ",
      tags: ["C#", ".NET", "Azure", "Cosmos DB", "React"],
      note: null,
      current: true,
    },
    {
      title: "Backend Engineer",
      company: "Digital Dreams Limited",
      period: "Apr 2023 – Present",
      location: "Auckland, NZ",
      tags: ["ASP.NET Core", "REST APIs", "SQL Server"],
      note: "Freelance",
      current: true,
    },
    {
      title: "Full Stack Developer",
      company: "Ditstek Innovations",
      period: "Apr 2023 – Mar 2024",
      location: "Chandigarh, India",
      tags: ["C#", ".NET Core", "EF Core", "React"],
      note: null,
      current: false,
    },
    {
      title: "API Developer",
      company: "ISOURSE Technologies",
      period: "Sep 2022 – Apr 2023",
      location: "Delhi, India",
      tags: ["C#", "ASP.NET Web API", "SQL Server"],
      note: null,
      current: false,
    },
  ],
  projects: [
    {
      title: "Streamly",
      oneliner:
        "Private cloud-based movie streaming platform with HLS streaming and token-based access control.",
      description:
        "Raw video files are never publicly exposed: an automated FFmpeg ingestion pipeline transcodes uploads into encrypted HLS segments, stored in private Azure Blob Storage and served via time-limited SAS URLs. Access is managed through magic links with SHA256-hashed tokens. Built with clean architecture across four layered .NET projects.",
      tags: [
        ".NET 8",
        "React",
        "Azure Blob",
        "HLS",
        "FFmpeg",
        "EF Core",
        "SQL Server",
        "Clean Architecture",
      ],
      github: null,
      live: null,
      featured: true,
    },
    {
      title: "Copilot Skills Toolkit",
      oneliner:
        "A personal set of AI skills that take the repetitive work out of my day, with me in the loop for every change.",
      description:
        "Ten GitHub Copilot skills built one at a time on shared standards, so the output is consistent every time. AI does the work; I orchestrate and approve. Every write is previewed and tied to an approval code, the guards are covered by 100+ tests, and one skill keeps the rest in check.",
      tags: ["GitHub Copilot", "MCP", "Azure DevOps", "PowerShell", "Pester"],
      github: null,
      live: null,
      writeup: "/blog/governed-ai-agent-ecosystem",
      featured: false,
      note: "Personal",
    },
    {
      title: "Araavi",
      oneliner:
        "Multitenant immigration platform with dedicated apps for visa applicants and immigration advisors.",
      description:
        "Serves multiple immigration firms from a single codebase via configuration, with no separate deployments per client. Covers two distinct surfaces: an Enquiry App for applicants to submit and track visa cases, and an Advisor App for agents handling case management, invoicing, and team administration. Backed by Azure Service Bus for reliable email delivery with automatic retries, Redis for caching, and Application Insights for structured monitoring.",
      tags: [
        "ASP.NET Core",
        "C#",
        "Azure Service Bus",
        "Application Insights",
        "Redis",
        "Multitenancy",
        "EF Core",
        "SQL Server",
      ],
      github: null,
      live: null,
      featured: false,
      note: "Digital Dreams",
    },
  ],
};

export default profile;
