interface ExperienceItem {
  id: string;
  year: string;
  company: string;
  title: string;
  description: string;
  techStack?: string[];
  achievements?: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    id: 'hitachi',
    year: '2021 - Present',
    company: 'Hitachi',
    title: 'Backend Engineer',
    description: 'Specialized in backend development, platform optimization, and cloud migrations within the SAP ecosystem. Led initiatives to reduce build times, migrate Java legacy services to the cloud, and build developer tools.',
    techStack: ['Java', 'Spring Boot', 'Microservices', 'Cloud Platforms', 'SAP Ecosystem', 'CI/CD'],
    achievements: [
      'Reduced build times by 30% through pipeline optimization.',
      'Successfully migrated legacy Java services to AWS cloud, improving scalability.',
      'Developed internal developer tools for streamlined workflows.'
    ]
  },
  {
    id: 'myntra',
    year: '2019 - 2021',
    company: 'Myntra',
    title: 'Build & Release Engineer',
    description: 'Developed key services for build and release, including a Central Configuration Management System that accelerated deployment cycles and improved deployment reliability.',
    techStack: ['CI/CD', 'Configuration Management', 'Jenkins', 'Kubernetes'],
    achievements: [
      'Designed and implemented a Central Configuration Management System, reducing deployment time by 25%.',
      'Improved build pipeline stability and reduced failure rates.'
    ]
  },
  {
    id: 'competitive-programming',
    year: '2017 - Ongoing',
    company: 'Competitive Programming',
    title: 'Algorithmic Author & Participant',
    description: 'Authored algorithmic challenges for GeeksforGeeks and Hackerrank. Participated in ICPC Regionals and secured multiple inter-college contest wins. Achieved top 1% ranking in several competitive programming contests.',
    techStack: ['C++', 'Java', 'Algorithms', 'Data Structures', 'Problem Solving'],
    achievements: [
      'Authored 10+ algorithmic problems for major coding platforms.',
      'ICPC Regionals Participant (2018).',
      'Top 1% ranking on platforms like CodeChef and HackerRank.'
    ]
  },
]; 