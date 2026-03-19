function Resume() {
  const skills = {
    'Languages & Frameworks': ['Ruby on Rails', 'React', 'JavaScript', 'TypeScript', 'Python', 'Stimulus.js'],
    'Infrastructure & Tools': ['AWS', 'Terraform', 'Docker', 'PostgreSQL', 'CI/CD', 'Git'],
    'Testing': ['RSpec', 'Capybara', 'Playwright', 'TDD'],
    'Practices': ['System Design', 'Agile', 'Code Review', 'Technical Mentorship'],
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
          Download PDF
        </a>
      </div>

      <section className="mb-4">
        <h4>Michael Giver</h4>
        <p className="text-accent">
          Software Engineer &amp; Physics PhD
        </p>
        <p className="small text-muted mb-3">
          Ballston Lake, NY &middot; github.com/giverm &middot; linkedin.com/in/michael-giver
        </p>
        <p>
          Full-stack software engineer with 10+ years of experience shipping production systems
          in civic tech, edtech, and human services. Combines a Physics PhD&rsquo;s analytical rigor
          with hands-on leadership of engineering teams. Currently building open-source
          Medicaid compliance tools at Nava PBC.
        </p>
      </section>

      <hr />

      <section className="resume-section mb-4">
        <h5>Experience</h5>

        <div className="mb-4">
          <div className="d-flex justify-content-between">
            <strong>Software Engineer |Nava PBC</strong>
            <span className="text-accent" style={{ fontSize: '0.9rem' }}>Sep 2025 &ndash; Present</span>
          </div>
          <ul className="mt-1">
            <li>Contribute to OSCER, an open-source Rails platform used by state Medicaid agencies to administer community engagement requirements in compliance with federal H.R.1</li>
            <li>Led implementation of batch upload v2, replacing synchronous CSV processing with a parallel, chunk-based pipeline featuring HMAC-authenticated API endpoints and multi-cloud storage support</li>
            <li>Built end-to-end exemption screener: a multi-step guided flow with stateless navigation state machine supporting 7 exemption types, enabling Medicaid enrollees to self-determine eligibility without caseworker intervention</li>
            <li>Designed cross-system integration architecture enabling state Medicaid applications to check exemption eligibility via new API endpoints with token-based authentication and HMAC-signed redirects</li>
          </ul>
        </div>

        <div className="mb-4">
          <div className="d-flex justify-content-between">
            <strong>Managing Senior Software Engineer |Pioneer Valley Books</strong>
            <span className="text-accent" style={{ fontSize: '0.9rem' }}>Jan 2022 &ndash; Jun 2025</span>
          </div>
          <ul className="mt-1">
            <li>Grew and led a team of up to 4 engineers (Junior through Senior), conducting 1:1s, performance reviews, and career development planning</li>
            <li>Drove technical roadmap for digital reading platform serving 50+ school districts, collaborating with product managers to prioritize and ship features</li>
            <li>Maintained and optimized AWS infrastructure (EC2, RDS, S3), ensuring 99.9% uptime for literacy platform serving thousands of students</li>
          </ul>
        </div>

        <div className="mb-4">
          <div className="d-flex justify-content-between">
            <strong>Senior Software Engineer |Pioneer Valley Books</strong>
            <span className="text-accent" style={{ fontSize: '0.9rem' }}>Dec 2020 &ndash; Dec 2021</span>
          </div>
          <ul className="mt-1">
            <li>Led technical development of digital reading platform for elementary school literacy programs, launching to 50+ school districts nationwide</li>
            <li>Migrated legacy ERB templates to responsive React components, improving page load times and mobile user experience</li>
            <li>Increased automated test coverage from 20% to 98%, reducing production bugs and improving deployment confidence</li>
            <li>Implemented CI/CD pipelines using Jenkins and GitHub Actions, enabling multiple automated deploys per day</li>
          </ul>
        </div>

        <div className="mb-4">
          <div className="d-flex justify-content-between">
            <strong>Junior Developer &rarr; Rails Developer &rarr; Senior Developer &amp; Group Manager |Annkissam, LLC</strong>
            <span className="text-accent" style={{ fontSize: '0.9rem' }}>Jun 2014 &ndash; Nov 2020</span>
          </div>
          <ul className="mt-1">
            <li>Led development team of up to 5 engineers across multiple client projects, ensuring on-time delivery and maintaining 25%+ profit margins across engagements</li>
            <li>Architected and built electronic timesheet application handling weekly entries for healthcare organizations</li>
            <li>Launched 5 client websites on schedule, managing full development lifecycle from requirements gathering through deployment</li>
            <li>Contributed to FMS Engine, a financial management system for human services organizations, maintaining 90%+ test coverage with RSpec and Capybara</li>
            <li>Mentored junior developers through code reviews and pair programming, accelerating team skill development</li>
          </ul>
        </div>
      </section>

      <hr />

      <section className="resume-section mb-4">
        <h5>Research</h5>

        <div className="mb-4">
          <div className="d-flex justify-content-between">
            <strong>Postdoctoral Research Associate |Iowa State University</strong>
            <span className="text-accent" style={{ fontSize: '0.9rem' }}>Jun 2013 &ndash; May 2014</span>
          </div>
          <div className="d-flex justify-content-between mt-2">
            <strong>Graduate Research Assistant |Brandeis University</strong>
            <span className="text-accent" style={{ fontSize: '0.9rem' }}>Jul 2008 &ndash; Jun 2013</span>
          </div>
          <ul className="mt-1">
            <li>Developed computational models of coupled chemical oscillator networks, running large-scale simulations in C, Mathematica, and MATLAB</li>
            <li>Developed theoretical models that predicted novel synchronization behavior, subsequently confirmed by independent experimental groups</li>
            <li>Published 2 peer-reviewed papers on synchronization patterns and phase entrainment in oscillator systems</li>
            <li>Mentored undergraduate and junior graduate student researchers</li>
          </ul>
        </div>
      </section>

      <hr />

      <section className="resume-section mb-4">
        <h5>Education</h5>
        <div className="mb-2 d-flex justify-content-between">
          <strong>Ph.D. Physics |Brandeis University</strong>
          <span className="text-accent" style={{ fontSize: '0.9rem' }}>2008 &ndash; 2013</span>
        </div>
        <div className="mb-2 d-flex justify-content-between">
          <strong>M.S. Physics |Brandeis University</strong>
          <span className="text-accent" style={{ fontSize: '0.9rem' }}>2008 &ndash; 2010</span>
        </div>
        <div className="mb-2 d-flex justify-content-between">
          <strong>B.S. Physics |University of Cincinnati</strong>
          <span className="text-accent" style={{ fontSize: '0.9rem' }}>2004 &ndash; 2008</span>
        </div>
      </section>

      <hr />

      <section className="resume-section mb-4">
        <h5>Skills</h5>
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="mb-2">
            <span className="text-muted small me-2">{category}:</span>
            {items.map((skill) => (
              <span key={skill} className="skill-badge">{skill}</span>
            ))}
          </div>
        ))}
      </section>
    </div>
  );
}

export default Resume;
