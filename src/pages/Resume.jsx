import profile from '../data/profile';
import { DownloadIcon } from '../components/Icons';
import TimelineItem from '../components/TimelineItem';
import EducationItem from '../components/EducationItem';

function Resume() {
  const skills = {
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

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Resume</h2>
        <a
          href="/resume.pdf"
          download
          className="btn btn-outline-primary btn-sm"
        >
          <DownloadIcon />
          Download PDF
        </a>
      </div>

      <div className="resume-header mb-4">
        <h4 className="mb-1">{profile.name}</h4>
        <p className="text-accent mb-2">{profile.title}</p>
        <p className="small text-muted mb-3">
          {profile.location} &middot; {profile.github.label} &middot;{' '}
          {profile.linkedin.label}
        </p>
        <p className="mb-0">
          Full-stack software engineer with 10+ years of experience designing,
          building, and scaling production systems in Ruby on Rails and React.
          Background spanning civic tech, edtech, and human services. Combines a
          Physics PhD&rsquo;s analytical rigor with hands-on engineering
          leadership, including managing teams of up to 5 engineers. Currently
          building open-source Medicaid compliance tools at Nava PBC.
        </p>
      </div>

      <section className="resume-section mb-4">
        <h5>Experience</h5>

        <div className="timeline">
          <TimelineItem
            title="Software Engineer"
            organization="Nava PBC"
            dateRange="Sep 2025 – Present"
            active
            items={[
              'Core contributor to OSCER, an open-source Ruby on Rails platform used by state Medicaid agencies to administer community engagement requirements under federal H.R.1, serving enrollees across multiple states',
              'Led implementation of batch upload v2, replacing synchronous CSV processing with a parallel, chunk-based pipeline featuring HMAC-authenticated API endpoints and multi-cloud storage support',
              'Built end-to-end exemption screener: a multi-step guided flow with stateless navigation state machine supporting 7 exemption types, enabling Medicaid enrollees to self-determine eligibility without caseworker intervention',
              'Designed cross-system integration architecture enabling state Medicaid applications to check exemption eligibility via new API endpoints with token-based authentication and HMAC-signed redirects',
            ]}
          />

          <TimelineItem
            title="Managing Senior Software Engineer"
            organization="Pioneer Valley Books"
            dateRange="Jan 2022 – Jun 2025"
            items={[
              'Grew and led a team of up to 4 engineers (Junior through Senior), conducting 1:1s, performance reviews, and career development planning',
              'Drove technical roadmap for digital reading platform serving 50+ school districts, collaborating with product managers to prioritize and ship features',
              'Managed and optimized AWS infrastructure (EC2, RDS, S3), achieving 99.9% uptime for literacy platform serving thousands of students',
            ]}
          />

          <TimelineItem
            title="Senior Software Engineer"
            organization="Pioneer Valley Books"
            dateRange="Dec 2020 – Dec 2021"
            items={[
              'Spearheaded technical development of digital reading platform for elementary school literacy programs, launching to 50+ school districts nationwide',
              'Migrated legacy ERB templates to responsive React components, improving page load times and mobile user experience across tablet and Chromebook devices',
              'Increased automated test coverage from 20% to 98%, reducing production bugs and improving deployment confidence',
              'Implemented CI/CD pipelines using Jenkins and GitHub Actions, enabling multiple automated deploys per day',
            ]}
          />

          <TimelineItem
            title="Senior Developer & Group Manager"
            organization="Annkissam, LLC (promoted from Junior Developer)"
            dateRange="Jun 2014 – Nov 2020"
            items={[
              'Managed a development team of up to 5 engineers across multiple client projects, ensuring on-time delivery and maintaining 25%+ profit margins across engagements',
              'Architected and built electronic timesheet application processing thousands of weekly entries for healthcare organizations',
              'Launched 5 client websites on schedule, managing full development lifecycle from requirements gathering through deployment',
              'Contributed to FMS Engine, a financial management system for human services organizations, maintaining 90%+ test coverage with RSpec and Capybara',
              'Mentored junior developers through code reviews and pair programming, accelerating team skill development',
            ]}
          />
        </div>
      </section>

      <section className="resume-section mb-4">
        <h5>Research</h5>

        <div className="timeline">
          <TimelineItem
            title="Postdoctoral Research Associate"
            organization="Iowa State University"
            dateRange="Jun 2013 – May 2014"
          />

          <TimelineItem
            title="Graduate Research Assistant"
            organization="Brandeis University"
            dateRange="Jul 2008 – Jun 2013"
            items={[
              'Developed computational models of coupled chemical oscillator networks, running large-scale simulations in C, Mathematica, and MATLAB',
              'Developed theoretical models that predicted novel synchronization behavior, subsequently confirmed by independent experimental groups',
              'Published 2 peer-reviewed papers on synchronization patterns and phase entrainment in oscillator systems',
              'Mentored undergraduate and junior graduate student researchers',
            ]}
          />
        </div>
      </section>

      <section className="resume-section mb-4">
        <h5>Education</h5>
        <div className="education-grid">
          <EducationItem
            degree="Ph.D."
            field="Physics"
            school="Brandeis University"
            dateRange="2008 – 2013"
          />
          <EducationItem
            degree="M.S."
            field="Physics"
            school="Brandeis University"
            dateRange="2008 – 2010"
          />
          <EducationItem
            degree="B.S."
            field="Physics"
            school="University of Cincinnati"
            dateRange="2004 – 2008"
          />
        </div>
      </section>

      <section className="resume-section mb-4">
        <h5>Skills</h5>
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="mb-2">
            <span className="text-muted small me-2">{category}:</span>
            {items.map((skill) => (
              <span key={skill} className="skill-badge">
                {skill}
              </span>
            ))}
          </div>
        ))}
      </section>
    </div>
  );
}

export default Resume;
