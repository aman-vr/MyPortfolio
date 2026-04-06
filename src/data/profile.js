/**
 * profile.js
 *
 * Single source of truth for all portfolio content.
 * Update this file only — no component files need to be touched.
 *
 * Sections:
 *  - Personal info and social links
 *  - Bio (short for Hero, long paragraphs for About)
 *  - Certifications
 *  - Interests
 *  - Tech stack (grouped by category)
 *  - Experience (work history)
 *  - Projects
 */

const profile = {
  name: "Aman Verma",
  role: "Full Stack Developer | .NET & Azure",
  bio: {
    short:
      "Backend-focused full stack engineer specialising in .NET and Azure. I care about clean architecture, API design, and systems that are built to last. Based in Auckland, open to interesting problems.",
    long: [
      "I'm a backend-focused full stack engineer based in Auckland with 6 years of experience building production systems on .NET and Azure. My primary focus is designing and delivering clean, scalable REST APIs and backend services that are built to last.",
      "I naturally look beyond the code to understand the bigger picture — shaping solutions that make sense in practice, not just in theory. My background spans both Computer Applications and Business Informatics, which means I think about engineering problems with commercial context in mind.",
      "Currently exploring Agentic AI and how it applies to real-world backend systems. Not actively looking, but always open to interesting problems.",
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
        "Multitenant immigration management platform with dedicated apps for visa applicants and advisors, built end-to-end on .NET and Azure.",
      description:
        "Led the full backend architecture and implementation of Araavi — a multitenant platform serving multiple immigration firms from a single codebase via configuration. Built two distinct apps: an Enquiry App for applicants to submit and track visa cases with real-time communication, and an Advisor App for immigration agents covering case management, team collaboration, invoice generation, and user administration. Architected with Unit of Work and Repository patterns for clean data access. Email delivery is handled through Azure Service Bus with automatic retries and delivery tracking. Redis caching reduces response times, and Application Insights provides structured logging for monitoring and debugging. APIs, database schema, and deployment processes are fully documented.",
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
