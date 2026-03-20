export const summary =
  'Full-stack software engineer with 10+ years of experience designing, building, and scaling production systems in Ruby on Rails and React. Background spanning civic tech, edtech, and human services. Combines a Physics PhD\u2019s analytical rigor with hands-on engineering leadership, including managing teams of up to 5 engineers. Currently building open-source Medicaid compliance tools at Nava PBC.';

export const experience = [
  {
    title: 'Software Engineer',
    organization: 'Nava PBC',
    dateRange: 'Sep 2025 \u2013 Present',
    active: true,
    items: [
      'Core contributor to OSCER, an open-source Ruby on Rails platform used by state Medicaid agencies to administer community engagement requirements under federal H.R.1, serving enrollees across multiple states',
      'Led implementation of batch upload v2, replacing synchronous CSV processing with a parallel, chunk-based pipeline featuring HMAC-authenticated API endpoints and multi-cloud storage support',
      'Built end-to-end exemption screener: a multi-step guided flow with stateless navigation state machine supporting 7 exemption types, enabling Medicaid enrollees to self-determine eligibility without caseworker intervention',
      'Designed cross-system integration architecture enabling state Medicaid applications to check exemption eligibility via new API endpoints with token-based authentication and HMAC-signed redirects',
    ],
  },
  {
    title: 'Managing Senior Software Engineer',
    organization: 'Pioneer Valley Books',
    dateRange: 'Jan 2022 \u2013 Jun 2025',
    items: [
      'Grew and led a team of up to 4 engineers (Junior through Senior), conducting 1:1s, performance reviews, and career development planning',
      'Drove technical roadmap for digital reading platform serving 50+ school districts, collaborating with product managers to prioritize and ship features',
      'Managed and optimized AWS infrastructure (EC2, RDS, S3), achieving 99.9% uptime for literacy platform serving thousands of students',
    ],
  },
  {
    title: 'Senior Software Engineer',
    organization: 'Pioneer Valley Books',
    dateRange: 'Dec 2020 \u2013 Dec 2021',
    items: [
      'Spearheaded technical development of digital reading platform for elementary school literacy programs, launching to 50+ school districts nationwide',
      'Migrated legacy ERB templates to responsive React components, improving page load times and mobile user experience across tablet and Chromebook devices',
      'Increased automated test coverage from 20% to 98%, reducing production bugs and improving deployment confidence',
      'Implemented CI/CD pipelines using Jenkins and GitHub Actions, enabling multiple automated deploys per day',
    ],
  },
  {
    title: 'Senior Developer & Group Manager',
    organization: 'Annkissam, LLC (promoted from Junior Developer)',
    dateRange: 'Jun 2014 \u2013 Nov 2020',
    items: [
      'Managed a development team of up to 5 engineers across multiple client projects, ensuring on-time delivery and maintaining 25%+ profit margins across engagements',
      'Architected and built electronic timesheet application processing thousands of weekly entries for healthcare organizations',
      'Launched 5 client websites on schedule, managing full development lifecycle from requirements gathering through deployment',
      'Contributed to FMS Engine, a financial management system for human services organizations, maintaining 90%+ test coverage with RSpec and Capybara',
      'Mentored junior developers through code reviews and pair programming, accelerating team skill development',
    ],
  },
];

export const research = [
  {
    title: 'Postdoctoral Research Associate',
    organization: 'Iowa State University',
    dateRange: 'Jun 2013 \u2013 May 2014',
  },
  {
    title: 'Graduate Research Assistant',
    organization: 'Brandeis University',
    dateRange: 'Jul 2008 \u2013 Jun 2013',
    items: [
      'Developed computational models of coupled chemical oscillator networks, running large-scale simulations in C, Mathematica, and MATLAB',
      'Developed theoretical models that predicted novel synchronization behavior, subsequently confirmed by independent experimental groups',
      'Published 2 peer-reviewed papers on synchronization patterns and phase entrainment in oscillator systems',
      'Mentored undergraduate and junior graduate student researchers',
    ],
  },
];

export const education = [
  {
    degree: 'Ph.D.',
    field: 'Physics',
    school: 'Brandeis University',
    dateRange: '2008 \u2013 2013',
  },
  {
    degree: 'M.S.',
    field: 'Physics',
    school: 'Brandeis University',
    dateRange: '2008 \u2013 2010',
  },
  {
    degree: 'B.S.',
    field: 'Physics',
    school: 'University of Cincinnati',
    dateRange: '2004 \u2013 2008',
  },
];

export const skills = {
  'Languages & Frameworks': [
    'Ruby on Rails',
    'React',
    'JavaScript',
    'TypeScript',
    'Python',
    'HTML/CSS',
    'Stimulus.js',
  ],
  'Infrastructure & Tools': [
    'AWS',
    'Terraform',
    'Docker',
    'PostgreSQL',
    'SQL',
    'CI/CD',
    'Git',
    'Linux',
  ],
  Testing: ['RSpec', 'Capybara', 'Playwright', 'TDD'],
  Practices: [
    'System Design',
    'REST APIs',
    'Agile/Scrum',
    'Code Review',
    'Technical Mentorship',
  ],
};
