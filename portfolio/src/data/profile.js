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
  certifications: [
    {
      name: "Microsoft Certified: Azure Developer Associate",
      issuer: "Microsoft",
      issued: "Jan 2024",
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
  ],
};

export default profile;
