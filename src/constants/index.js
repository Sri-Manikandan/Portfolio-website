export const HERO_CONTENT = `I architect AI systems — from multi-agent platforms to production-grade pipelines with FastAPI, Langchain, LangGraph, and LLMs. Bridging cutting-edge AI with scalable full-stack applications built on Next.js, Spring Boot, and cloud infrastructure. 15+ hackathons, a co-founded tech company, and a relentless drive to ship software that matters.`;

export const ABOUT_TEXT = `I'm a Computer Science student and Co-Founder of Synergeek Technologies, driven by an insatiable curiosity for technology. My journey spans from building AI-powered agents and multi-agent systems to full-stack web applications. Currently interning at Presidio, I specialize in leveraging LLMs, Langchain, and modern frameworks to solve real-world problems. With 15+ hackathons under my belt and a track record of building production-ready applications, I thrive on turning complex ideas into elegant solutions.`;

export const EXPERIENCES = [
  {
    role: "Intern",
    company: "Presidio",
    period: "Mar 2026 - Present",
    description: "Working on enterprise-grade solutions, contributing to production systems and collaborative development workflows.",
    tags: ["Enterprise", "Production Systems"],
  },
  {
    role: "Co-Founder",
    company: "Synergeek Technologies",
    period: "Oct 2024 - Present",
    website: "https://www.synergeek.in",
    description: "Co-founded a technology and digital solutions company that helps businesses build, grow, and scale using modern software, digital strategies, and artificial intelligence.",
    tags: ["Web Dev", "App Dev", "Digital Marketing", "Entrepreneurship"],
  },
  {
    role: "Full Stack Intern",
    company: "GyanMatrix Technologies Pvt. Ltd",
    period: "Oct 2024 - Nov 2024",
    location: "Coimbatore, Tamil Nadu",
    description: "Developed a Generative AI-based project to solve real-world challenges, integrating AI models for innovative solutions. Collaborated in designing scalable and efficient architectures, ensuring optimal performance and seamless user experience.",
    tags: ["Generative AI", "Full Stack", "Backend", "Frontend"],
  },
];

export const PROJECTS = [
  {
    title: "Deep Research Multi-Agent System",
    description: "A multi-agent deep research system that deploys subagents to perform comprehensive research on topics. Orchestrates multiple AI agents for thorough information gathering and synthesis.",
    technologies: ["Python", "LLMs", "Multi-Agent", "AI Orchestration"],
    github: "https://github.com/Sri-Manikandan/Deep-Research-Multi-Agent-System",
    featured: true,
  },
  {
    title: "Production-Grade AI Agent",
    description: "AI-powered newsletter generator built with FastAPI and Inngest. Searches the web for articles using Bright Data SERP, generates markdown newsletters using OpenAI, with event-driven architecture.",
    technologies: ["FastAPI", "Inngest", "OpenAI", "Bright Data", "Langchain"],
    github: "https://github.com/Sri-Manikandan/Production-grade-AI-Agent",
    featured: true,
  },
  {
    title: "AI Call Agent",
    description: "A fully agentic AI-powered voice assistant for pharmaceutical ordering. The agent speaks to customers via call, diagnoses their health issues, suggests appropriate medicines, and helps them place orders — all in real-time using voice AI.",
    technologies: ["Python", "Langchain", "Deepgram", "Voice AI", "Agentic AI"],
    github: "https://github.com/Sri-Manikandan/AI-Call-Agent",
    featured: true,
  },
  {
    title: "Complan AI - GenAI HR Bot",
    description: "A Generative AI HR bot that guides users, suggests learning resources via Udemy API, conducts SWOT analysis, and generates mock interviews to help candidates prepare and improve their profiles.",
    technologies: ["Generative AI", "Streamlit", "Python", "Langchain", "Vector DB"],
    github: "https://github.com/Sri-Manikandan/Complan-AI",
  },
  {
    title: "SafeWatch AI",
    description: "An AI-powered child safety tool that analyzes website content using Generative AI to determine whether a site is appropriate for children. It fetches and evaluates page content in real-time, flagging unsuitable material to help parents keep kids safe online.",
    technologies: ["Python", "Generative AI", "Web Scraping", "NLP"],
    github: "https://github.com/Sri-Manikandan/SafeWatch-AI",
  },
  {
    title: "JobFit AI",
    description: "Job acquisition system built with Langchain and GPT-4o. Provides personalized resume insights, job matching algorithms for seekers, and efficient resume screening for recruiters.",
    technologies: ["Langchain", "GPT-4o", "Streamlit", "DeepLake"],
    github: "https://github.com/Sri-Manikandan/JobFit-AI",
  },
  {
    title: "YouTube Summarizer",
    description: "An AI tool that automatically summarizes YouTube video content, extracting key points and generating concise summaries for quick consumption.",
    technologies: ["Python", "AI/ML", "NLP", "API Integration"],
    github: "https://github.com/Sri-Manikandan/youtube-summarizer",
  },
  {
    title: "NewsNugget",
    description: "AI-powered news summarization tool that curates and condenses news articles into digestible nuggets of information.",
    technologies: ["Python", "NLP", "Web Scraping", "AI"],
    github: "https://github.com/Sri-Manikandan/newsnugget",
  },
];

export const SKILLS = {
  "AI & ML": [
    { name: "LLMs & GenAI", level: 90 },
    { name: "Langchain", level: 85 },
    { name: "Computer Vision", level: 70 },
    { name: "NLP", level: 80 },
    { name: "LangGraph", level: 80 },
    { name: "Multi-Agent Systems", level: 82 },
  ],
  "Frontend": [
    { name: "React", level: 85 },
    { name: "Next.js", level: 75 },
    { name: "Tailwind CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "TypeScript", level: 70 },
  ],
  "Backend": [
    { name: "Python", level: 92 },
    { name: "Django", level: 85 },
    { name: "FastAPI", level: 82 },
    { name: "Node.js", level: 78 },
    { name: "Spring Boot", level: 70 },
  ],
  "DevOps & DB": [
    { name: "Docker", level: 75 },
    { name: "AWS", level: 70 },
    { name: "MongoDB", level: 80 },
    { name: "PostgreSQL", level: 78 },
    { name: "Git", level: 88 },
  ],
};

export const EDUCATION = [
  {
    institution: "Sri Krishna College of Engineering and Technology",
    degree: "B.E. - Computer Science & Engineering",
    period: "2022 - 2026",
    grade: "CGPA: 8.56 / 10",
  },
  {
    institution: "Yuva Bharathi Public School, Coimbatore",
    degree: "12th - CBSE - Computer Science",
    period: "2014 - 2022",
    grade: "Percentage: 88 / 100",
  },
];

export const CERTIFICATIONS = [
  "AWS Certified Cloud Practitioner",
  "Python For Data Science - NPTEL",
  "Backend Development and APIs - freeCodeCamp",
  "Python Foundation Certification - Infosys Springboard",
];

export const AWARDS = [
  { title: "Zenith Hackathon 2023 Winner", icon: "trophy" },
  { title: "Smart India Hackathon Participant", icon: "trophy" },
  { title: "CSE Science Expo", icon: "award" },
  { title: "Vyapaar Entrepreneurship Ideathon", icon: "bulb" },
];

export const CONTACT = {
  address: "Coimbatore, Tamil Nadu",
  phoneNo: "+91 9677741597",
  email: "srimanikandandev@gmail.com",
};

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/sri-manikandan/",
  github: "https://github.com/Sri-Manikandan",
  instagram: "https://www.instagram.com/mannisshh_/",
};
