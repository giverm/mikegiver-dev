export const summary =
  'Full-stack software engineer with 12 years of experience designing, building, and scaling production systems in Ruby on Rails and PostgreSQL, including the React frontend of a digital literacy platform used by 50+ school districts. Background spanning civic tech, edtech, and human services. Combines a Physics PhD\u2019s analytical rigor with hands-on engineering leadership, including managing teams of up to 5 engineers. Currently a core contributor to OSCER, an open-source Medicaid platform at Nava PBC.';

export const experience = [
  {
    title: 'Software Engineer',
    organization: 'Nava PBC',
    dateRange: 'Sep 2025 \u2013 Present',
    active: true,
    items: [
      'Core contributor to OSCER, an open-source Ruby on Rails and PostgreSQL platform built for state Medicaid agencies to administer community engagement requirements under federal H.R.1',
      'Owned delivery of batch upload v2, replacing synchronous CSV processing with a parallel, chunk-based pipeline with HMAC-authenticated API endpoints, byte-range chunk reads from S3, and a storage adapter that streams to either S3 or Azure Blob',
      'Built the batch ingestion record validator and its error reporting, capturing rejected rows alongside their validation errors so data problems can be traced back to their source',
      'Built the data source check service that evaluates enrollee records against multiple administrative sources and publishes the domain events the platform reacts to downstream, and documented that event contract as the stable interface outside implementers integrate against',
      'Built end-to-end exemption screener: a multi-step guided flow with stateless navigation state machine supporting 7 exemption types, enabling Medicaid enrollees to self-determine eligibility without caseworker intervention',
      'Authored the platform’s open-source extraction strategy: three documents including a seven-project comparative analysis and a phased roadmap adopted by other Nava teams',
      'Added dependency CVE scanning and a Dependabot update stream to the team’s CI pipeline',
      'Reviewed teammates’ code daily for correctness and maintainability, and mentored engineers through onboarding',
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
      'Championed the accessibility work that brought the platform to WCAG 2.1 AA compliance',
    ],
  },
  {
    title: 'Senior Software Engineer',
    organization: 'Pioneer Valley Books',
    dateRange: 'Dec 2020 \u2013 Dec 2021',
    items: [
      'Spearheaded technical development of digital reading platform for elementary school literacy programs, launching to 50+ school districts nationwide',
      'Migrated legacy ERB templates to responsive React components, improving page load times and mobile user experience across tablet and Chromebook devices',
      'Contributed to a team effort that raised automated test coverage from 20% to 98%, reducing production bugs and improving deployment confidence',
      'Implemented CI/CD pipelines using Jenkins and GitHub Actions, enabling multiple automated deploys per day',
    ],
  },
  {
    title: 'Senior Developer & Group Manager',
    organization: 'Annkissam, LLC (promoted from Junior Developer)',
    dateRange: 'Jun 2014 \u2013 Nov 2020',
    items: [
      'Managed a development team of up to 5 engineers across multiple client projects, ensuring on-time delivery and maintaining 25%+ profit margins across engagements',
      'Architected and built electronic timesheet application processing thousands of weekly entries for organizations administering self-directed in-home care for people with disabilities',
      'Launched 5 client websites on schedule, managing full development lifecycle from requirements gathering through deployment',
      'Contributed to FMS Engine, a financial management system used by the fiscal intermediaries that manage the finances of self-directed in-home care, maintaining 90%+ test coverage with RSpec and Capybara',
      'Mentored junior developers through code reviews and pair programming, accelerating team skill development',
    ],
  },
];

export const research = [
  {
    title: 'Postdoctoral Research Associate',
    organization: 'Iowa State University',
    dateRange: 'Jun 2013 \u2013 May 2014',
    items: [
      'Conducted research in nonequilibrium statistical physics, nonlinear dynamics, and complex systems, building simulation models of coupled chemical oscillators in C, Mathematica, and MATLAB',
      'Analyzed simulation results using time-series and spectral analysis and regression',
    ],
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
    'Event-Driven Workflows',
    'Background Jobs',
    'Accessibility (WCAG 2.1 AA)',
    'Agile/Scrum',
    'Code Review',
    'Technical Mentorship',
  ],
};
