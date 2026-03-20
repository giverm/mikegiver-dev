import profile from '../data/profile';
import { DownloadIcon } from '../components/Icons';

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
          <div className="timeline-item">
            <div className="timeline-dot timeline-dot-active" />
            <div className="timeline-content">
              <div className="d-flex justify-content-between align-items-start flex-wrap">
                <div>
                  <strong className="d-block">Software Engineer</strong>
                  <span className="text-accent" style={{ fontSize: '0.9rem' }}>
                    Nava PBC
                  </span>
                </div>
                <span className="text-muted small">
                  Sep 2025 &ndash; Present
                </span>
              </div>
              <ul className="mt-2">
                <li>
                  Core contributor to OSCER, an open-source Ruby on Rails
                  platform used by state Medicaid agencies to administer
                  community engagement requirements under federal H.R.1, serving
                  enrollees across multiple states
                </li>
                <li>
                  Led implementation of batch upload v2, replacing synchronous
                  CSV processing with a parallel, chunk-based pipeline featuring
                  HMAC-authenticated API endpoints and multi-cloud storage
                  support
                </li>
                <li>
                  Built end-to-end exemption screener: a multi-step guided flow
                  with stateless navigation state machine supporting 7 exemption
                  types, enabling Medicaid enrollees to self-determine
                  eligibility without caseworker intervention
                </li>
                <li>
                  Designed cross-system integration architecture enabling state
                  Medicaid applications to check exemption eligibility via new
                  API endpoints with token-based authentication and HMAC-signed
                  redirects
                </li>
              </ul>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <div className="d-flex justify-content-between align-items-start flex-wrap">
                <div>
                  <strong className="d-block">
                    Managing Senior Software Engineer
                  </strong>
                  <span className="text-accent" style={{ fontSize: '0.9rem' }}>
                    Pioneer Valley Books
                  </span>
                </div>
                <span className="text-muted small">
                  Jan 2022 &ndash; Jun 2025
                </span>
              </div>
              <ul className="mt-2">
                <li>
                  Grew and led a team of up to 4 engineers (Junior through
                  Senior), conducting 1:1s, performance reviews, and career
                  development planning
                </li>
                <li>
                  Drove technical roadmap for digital reading platform serving
                  50+ school districts, collaborating with product managers to
                  prioritize and ship features
                </li>
                <li>
                  Managed and optimized AWS infrastructure (EC2, RDS, S3),
                  achieving 99.9% uptime for literacy platform serving thousands
                  of students
                </li>
              </ul>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <div className="d-flex justify-content-between align-items-start flex-wrap">
                <div>
                  <strong className="d-block">Senior Software Engineer</strong>
                  <span className="text-accent" style={{ fontSize: '0.9rem' }}>
                    Pioneer Valley Books
                  </span>
                </div>
                <span className="text-muted small">
                  Dec 2020 &ndash; Dec 2021
                </span>
              </div>
              <ul className="mt-2">
                <li>
                  Spearheaded technical development of digital reading platform
                  for elementary school literacy programs, launching to 50+
                  school districts nationwide
                </li>
                <li>
                  Migrated legacy ERB templates to responsive React components,
                  improving page load times and mobile user experience across
                  tablet and Chromebook devices
                </li>
                <li>
                  Increased automated test coverage from 20% to 98%, reducing
                  production bugs and improving deployment confidence
                </li>
                <li>
                  Implemented CI/CD pipelines using Jenkins and GitHub Actions,
                  enabling multiple automated deploys per day
                </li>
              </ul>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <div className="d-flex justify-content-between align-items-start flex-wrap">
                <div>
                  <strong className="d-block">
                    Senior Developer &amp; Group Manager
                  </strong>
                  <span className="text-accent" style={{ fontSize: '0.9rem' }}>
                    Annkissam, LLC (promoted from Junior Developer)
                  </span>
                </div>
                <span className="text-muted small">
                  Jun 2014 &ndash; Nov 2020
                </span>
              </div>
              <ul className="mt-2">
                <li>
                  Managed a development team of up to 5 engineers across
                  multiple client projects, ensuring on-time delivery and
                  maintaining 25%+ profit margins across engagements
                </li>
                <li>
                  Architected and built electronic timesheet application
                  processing thousands of weekly entries for healthcare
                  organizations
                </li>
                <li>
                  Launched 5 client websites on schedule, managing full
                  development lifecycle from requirements gathering through
                  deployment
                </li>
                <li>
                  Contributed to FMS Engine, a financial management system for
                  human services organizations, maintaining 90%+ test coverage
                  with RSpec and Capybara
                </li>
                <li>
                  Mentored junior developers through code reviews and pair
                  programming, accelerating team skill development
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="resume-section mb-4">
        <h5>Research</h5>

        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <div className="d-flex justify-content-between align-items-start flex-wrap">
                <div>
                  <strong className="d-block">
                    Postdoctoral Research Associate
                  </strong>
                  <span className="text-accent" style={{ fontSize: '0.9rem' }}>
                    Iowa State University
                  </span>
                </div>
                <span className="text-muted small">
                  Jun 2013 &ndash; May 2014
                </span>
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <div className="d-flex justify-content-between align-items-start flex-wrap">
                <div>
                  <strong className="d-block">
                    Graduate Research Assistant
                  </strong>
                  <span className="text-accent" style={{ fontSize: '0.9rem' }}>
                    Brandeis University
                  </span>
                </div>
                <span className="text-muted small">
                  Jul 2008 &ndash; Jun 2013
                </span>
              </div>
              <ul className="mt-2">
                <li>
                  Developed computational models of coupled chemical oscillator
                  networks, running large-scale simulations in C, Mathematica,
                  and MATLAB
                </li>
                <li>
                  Developed theoretical models that predicted novel
                  synchronization behavior, subsequently confirmed by
                  independent experimental groups
                </li>
                <li>
                  Published 2 peer-reviewed papers on synchronization patterns
                  and phase entrainment in oscillator systems
                </li>
                <li>
                  Mentored undergraduate and junior graduate student researchers
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="resume-section mb-4">
        <h5>Education</h5>
        <div className="education-grid">
          <div className="education-item">
            <div className="education-degree">Ph.D.</div>
            <strong>Physics</strong>
            <div className="text-muted small">Brandeis University</div>
            <div className="text-accent small">2008 &ndash; 2013</div>
          </div>
          <div className="education-item">
            <div className="education-degree">M.S.</div>
            <strong>Physics</strong>
            <div className="text-muted small">Brandeis University</div>
            <div className="text-accent small">2008 &ndash; 2010</div>
          </div>
          <div className="education-item">
            <div className="education-degree">B.S.</div>
            <strong>Physics</strong>
            <div className="text-muted small">University of Cincinnati</div>
            <div className="text-accent small">2004 &ndash; 2008</div>
          </div>
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
