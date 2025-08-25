export const githubName = process.env.NEXT_PUBLIC_GITHUB_USERNAME!;
export const fullName = process.env.NEXT_PUBLIC_FULL_NAME!;
export const linkedinName = process.env.NEXT_PUBLIC_LINKEDIN!;
export const twitterName = process.env.NEXT_PUBLIC_TWITTER!;
export const discordId = process.env.NEXT_PUBLIC_DISCORD_ID!;
export const country = process.env.NEXT_PUBLIC_COUNTRY_NAME!;
export const brandName = process.env.NEXT_PUBLIC_BRAND_NAME!;
export const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL!;
export const AvatarURL = `https://avatars.githubusercontent.com/${githubName}`;
export const websiteDescription = `Hi, my name is ${fullName}. I am a full stack developer from ${country} who also loves doing open source projects.`;
export const themeColor = '#ED653A';
export const favIcon = '/favicon.ico';

export const navLinks = [
  { name: 'Home', link: '/' },
  { name: 'Projects', link: '/projects' },
  { name: 'Blog', link: '/blog' },
  { name: 'Contact', link: '/contact' },
  { name: 'Resume', link: '/resume' }
] as const;

export const containerVariant = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

export const itemVariant = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

export const Education = [
  {
    university: "Swastik College",
    title: "Bachelor in Computer Application",
    years: "Ongoing"
  },
  {
    university: "Khopwa College",
    title: "+2 Management (Computer Science)",
    years: "2019"
  }
];

export const WorkExp = [
  {
    company: "Milestone Software Pvt. Ltd",
    title: "Frontend Developer",
    years: "2023 - Present",
    body: "Developing and maintaining modern frontends using React.js and Next.js. Collaborating with UI/UX designers and integrating REST APIs while focusing on performance optimization."
  },
  {
    company: "Milestone Software Pvt. Ltd",
    title: "Technical Support",
    years: "2020 - 2023",
    body: "Provided technical assistance, diagnosed and resolved issues, and trained new staff members."
  },
  {
    company: "Neplex Technology",
    title: "Frontend Developer",
    years: "Present (Project-based)",
    body: "Working on contract-based projects, building modern interfaces using TailwindCSS and Next.js technologies."
  },
  {
    company: "Freelance",
    title: "Self-Employed Developer",
    years: "2021 - Present",
    body: "Managing full development cycle for various client projects ranging from portfolio sites to eCommerce applications."
  }
];
