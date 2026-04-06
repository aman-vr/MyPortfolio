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
 *  - projects (with note, github, live)    → Projects section
 *
 * Resume: drop the file named resumeFile into /public/ to make the navbar Resume button appear.
 * Meta: pageTitle and metaDescription are applied dynamically (browser tab, search engines).
 *       og:title and og:description in index.html must also be updated manually — social
 *       crawlers (LinkedIn, Twitter) don't execute JavaScript so they read the static HTML.
 */

const profile = {
  name: "Aman Verma",
  role: "Full Stack Developer | .NET & Azure",
  photo: "/aman.jpg",
  logoText: "aman",
  resumeFile: "AmanVerma-CV.pdf",
  pageTitle: "Aman Verma | Backend Engineer",
  metaDescription:
    "Full Stack Developer with 5+ years of .NET and Azure expertise, based in Auckland, NZ. Building clean backend systems and APIs that scale.",
  tagline: "I build backend systems\nthat scale.",
  blogBlurb:
    "I write about backend architecture, .NET, Azure, and things I'm figuring out as I go.",
  contactBlurb:
    "Not actively looking, but always open to interesting problems, collaborations, or just a good conversation about software architecture.",
  bio: {
    short:
      "Backend-focused full stack engineer with 5+ years building production systems on .NET and Azure. I care about clean architecture, thoughtful API design, and software that's built to last.",
    long: [
      "I'm a backend-focused full stack engineer based in Auckland with 5+ years of experience building production systems on .NET and Azure. My primary focus is designing and delivering clean, scalable REST APIs and backend services that are built to last.",
      "What sets me apart is a genuine interest in the business side of software. I hold dual master's degrees — one in Computer Applications, and one in Business Informatics — which gives me the ability to think about engineering problems through a commercial lens, not just a technical one.",
      "Currently at Southern Cross Travel Insurance building full stack systems, while independently exploring how Agentic AI intersects with backend architecture. I'm particularly interested in where autonomous systems meet practical, production-grade engineering.",
    ],
  },
  location: "Auckland, New Zealand",
  social: {
    github: "https://github.com/aman-vr",
    linkedin: "https://linkedin.com/in/aman-vr",
    email: "amanverma@outlook.co.nz",
  },
  education: [
    {
      degree: "Master of Business Informatics",
      institution: "ICL Graduate Business School",
      location: "Auckland, New Zealand",
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
      name: "Microsoft Certified: Azure Developer Associate",
      issuer: "Microsoft",
      issued: "Jan 2024",
      url: "https://learn.microsoft.com/api/credentials/share/en-us/AmanVerma-0981/61380A6EBAA17264?sharingId",
    },
    {
      name: "Microsoft Certified: Azure Fundamentals",
      issuer: "Microsoft",
      issued: "March 2026",
      url: "https://learn.microsoft.com/api/credentials/share/en-us/AmanVerma-4593/5D38E0E1147A5AC4?sharingId=8CA11FB560EAA49E",
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
        "A book chapter examining ocean pollution at the intersection of industrialisation and environmental neglect. Surveys machine learning techniques for formulating data-driven mitigation strategies — emphasising public awareness and the role of technology in protecting aquatic ecosystems.",
      url: "https://www.taylorfrancis.com/books/edit/10.1201/9781003348313/sustainable-digital-technologies-vandana-sharma-balamurugan-balusamy-munish-sabharwal-mariya-ouaissa",
    },
  ],
  interests: ["System Design", "Solution Architecture", "Agentic AI"],
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
    { category: "Frontend", skills: ["React", "JavaScript", "HTML", "CSS"] },
    {
      category: "Practices",
      skills: ["Clean Architecture", "Domain-Driven Design", "xUnit", "OOP"],
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
      title: "Back End Engineer",
      company: "Digital Dreams Limited",
      period: "Apr 2023 – Present",
      location: "Remote",
      tags: ["ASP.NET Core", "REST APIs", "SQL Server"],
      note: "Freelance",
      current: true,
    },
    {
      title: "Full Stack Developer",
      company: "Ditstek Innovations",
      period: "Apr 2023 – Mar 2024",
      location: "India",
      tags: ["C#", ".NET Core", "EF Core", "React"],
      note: null,
      current: false,
    },
    {
      title: "API Developer",
      company: "ISOURSE Technologies",
      period: "Sep 2022 – Apr 2023",
      location: "India",
      tags: ["C#", "ASP.NET Web API", "SQL Server"],
      note: null,
      current: false,
    },
  ],
  projects: [
    {
      title: "Streamly",
      oneliner:
        "Private cloud-based movie streaming platform with HLS adaptive streaming and token-based access control.",
      description:
        "Raw video files are never publicly exposed — an automated FFmpeg ingestion pipeline transcodes uploads into encrypted HLS segments, stored in private Azure Blob Storage and served via time-limited SAS URLs. Access is managed through magic links with SHA256-hashed tokens. Built with clean architecture across four layered .NET projects.",
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
      title: "Araavi",
      oneliner:
        "Multitenant immigration platform with dedicated apps for visa applicants and immigration advisors.",
      description:
        "A multitenant platform serving multiple immigration firms from a single codebase via configuration — no separate deployments per client. Covers two distinct surfaces: an Enquiry App for applicants to submit and track visa cases, and an Advisor App for agents handling case management, invoicing, and team administration. Backed by Azure Service Bus for reliable email delivery with automatic retries, Redis for caching, and Application Insights for structured monitoring.",
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
      note: "Freelance · Digital Dreams",
    },
  ],
};

export default profile;
