import profile from '../data/profile';
import {
  summary,
  experience,
  research,
  education,
  skills,
} from '../data/resume';
import { DownloadIcon } from '../components/Icons';
import TimelineItem from '../components/TimelineItem';
import EducationItem from '../components/EducationItem';

function Resume() {
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
        <p className="mb-0">{summary}</p>
      </div>

      <section className="resume-section mb-4">
        <h5>Experience</h5>
        <div className="timeline">
          {experience.map((entry) => (
            <TimelineItem key={entry.dateRange} {...entry} />
          ))}
        </div>
      </section>

      <section className="resume-section mb-4">
        <h5>Research</h5>
        <div className="timeline">
          {research.map((entry) => (
            <TimelineItem key={entry.dateRange} {...entry} />
          ))}
        </div>
      </section>

      <section className="resume-section mb-4">
        <h5>Education</h5>
        <div className="education-grid">
          {education.map((entry) => (
            <EducationItem key={entry.dateRange} {...entry} />
          ))}
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
