function Resume() {
  const skills = [
    'Ruby on Rails', 'React', 'JavaScript', 'Python', 'AWS',
    'Agile', 'CI/CD', 'Docker', 'SQL', 'Git',
    'Web Development', 'Team Leadership',
  ];

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
          Software Engineer &amp; Physics PhD &middot; 10+ Years Building Software Solutions
        </p>
        <p className="small text-muted">
          Ballston Lake, NY &middot; mike.giver@gmail.com &middot; github.com/giverm &middot; linkedin.com/in/michael-giver
        </p>
      </section>

      <hr />

      <section className="resume-section mb-4">
        <h5>Experience</h5>

        <div className="mb-4">
          <div className="d-flex justify-content-between">
            <strong>Software Engineer &mdash; Nava</strong>
            <span className="text-accent" style={{ fontSize: '0.9rem' }}>Sep 2025 &ndash; Present</span>
          </div>
        </div>

        <div className="mb-4">
          <div className="d-flex justify-content-between">
            <strong>Managing Senior Software Engineer &mdash; Pioneer Valley Books</strong>
            <span className="text-accent" style={{ fontSize: '0.9rem' }}>Jan 2022 &ndash; Jun 2025</span>
          </div>
          <ul className="mt-1">
            <li>Managed and mentored a team of up to 4 engineers (Junior to Senior level), conducting regular 1:1s, performance reviews, and career development planning</li>
            <li>Led feature prioritization and technical roadmap planning, collaborating with product managers to deliver high-impact educational technology solutions</li>
            <li>Maintained and optimized AWS-based application infrastructure, ensuring 99.9% uptime for digital learning platform serving thousands of students</li>
            <li>Established engineering best practices, code review standards, and development workflows across the team</li>
          </ul>
        </div>

        <div className="mb-4">
          <div className="d-flex justify-content-between">
            <strong>Senior Software Engineer &mdash; Pioneer Valley Books</strong>
            <span className="text-accent" style={{ fontSize: '0.9rem' }}>Dec 2020 &ndash; Dec 2021</span>
          </div>
          <ul className="mt-1">
            <li>Led technical development of digital reading platform for elementary school literacy programs, serving 50+ school districts nationwide</li>
            <li>Migrated legacy ERB templates to responsive React components, improving page load times and mobile user experience</li>
            <li>Increased automated test coverage from 20% to 98%, reducing production bugs and improving deployment confidence</li>
            <li>Implemented and maintained CI/CD pipelines using Jenkins and GitHub Actions</li>
          </ul>
        </div>

        <div className="mb-4">
          <div className="d-flex justify-content-between">
            <strong>Senior Rails Developer &amp; Group Manager &mdash; Annkissam, LLC</strong>
            <span className="text-accent" style={{ fontSize: '0.9rem' }}>Apr 2017 &ndash; Nov 2020</span>
          </div>
          <ul className="mt-1">
            <li>Led development team of up to 5 engineers across multiple client projects, ensuring on-time delivery and budget adherence</li>
            <li>Architected and built electronic timesheet application handling weekly entries for healthcare organizations</li>
            <li>Managed project profitability and resource allocation, maintaining 25%+ profit margins across client engagements</li>
          </ul>
        </div>

        <div className="mb-4">
          <div className="d-flex justify-content-between">
            <strong>Rails Developer &mdash; Annkissam, LLC</strong>
            <span className="text-accent" style={{ fontSize: '0.9rem' }}>Oct 2015 &ndash; Mar 2017</span>
          </div>
          <ul className="mt-1">
            <li>Successfully launched 5 client websites on schedule, managing full development lifecycle from requirements to deployment</li>
            <li>Built custom features for nonprofit sector clients, improving operational efficiency through automated workflows</li>
            <li>Guided junior developers through code reviews and pair programming, accelerating team skill development</li>
          </ul>
        </div>

        <div className="mb-4">
          <div className="d-flex justify-content-between">
            <strong>Junior Rails Developer &mdash; Annkissam, LLC</strong>
            <span className="text-accent" style={{ fontSize: '0.9rem' }}>Jun 2014 &ndash; Sep 2015</span>
          </div>
          <ul className="mt-1">
            <li>Contributed to FMS Engine, a comprehensive financial management system for human services organizations</li>
            <li>Implemented features using TDD practices with RSpec and Capybara, maintaining 90%+ test coverage</li>
          </ul>
        </div>

        <div className="mb-4">
          <div className="d-flex justify-content-between">
            <strong>Postdoctoral Research Associate &mdash; Iowa State University</strong>
            <span className="text-accent" style={{ fontSize: '0.9rem' }}>Jun 2013 &ndash; May 2014</span>
          </div>
          <ul className="mt-1">
            <li>Conducted original research in nonequilibrium statistical physics, nonlinear dynamics, and complex systems</li>
            <li>Developed complex models of coupled chemical oscillators and ran simulations in C, Mathematica, and Matlab</li>
          </ul>
        </div>

        <div className="mb-4">
          <div className="d-flex justify-content-between">
            <strong>Graduate Research Assistant &mdash; Brandeis University</strong>
            <span className="text-accent" style={{ fontSize: '0.9rem' }}>Jul 2008 &ndash; Jun 2013</span>
          </div>
          <ul className="mt-1">
            <li>Conducted independent research investigating synchronization in noisy oscillator systems</li>
            <li>Developed minimal models and successfully predicted phenomena later verified experimentally</li>
            <li>Mentored undergraduate and junior graduate student researchers</li>
          </ul>
        </div>
      </section>

      <hr />

      <section className="resume-section mb-4">
        <h5>Education</h5>
        <div className="mb-2 d-flex justify-content-between">
          <strong>Ph.D. Physics &mdash; Brandeis University</strong>
          <span className="text-accent" style={{ fontSize: '0.9rem' }}>2008 &ndash; 2013</span>
        </div>
        <div className="mb-2 d-flex justify-content-between">
          <strong>M.S. Physics &mdash; Brandeis University</strong>
          <span className="text-accent" style={{ fontSize: '0.9rem' }}>2008 &ndash; 2010</span>
        </div>
        <div className="mb-2 d-flex justify-content-between">
          <strong>B.S. Physics &mdash; University of Cincinnati</strong>
          <span className="text-accent" style={{ fontSize: '0.9rem' }}>2004 &ndash; 2008</span>
        </div>
      </section>

      <hr />

      <section className="resume-section mb-4">
        <h5>Skills</h5>
        <div className="d-flex flex-wrap gap-1">
          {skills.map((skill) => (
            <span key={skill} className="skill-badge">{skill}</span>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Resume;
