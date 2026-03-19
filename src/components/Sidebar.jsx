import { NavLink } from 'react-router-dom';
import profile from '../data/profile';
import { GitHubIcon, LinkedInIcon, PersonIcon, DocumentIcon } from './Icons';

function Sidebar() {
  return (
    <aside className="sidebar col-md-4 col-lg-3 p-4 d-flex flex-column align-items-center">
      <img
        src="/photo.jpeg"
        alt={profile.name}
        className="rounded-circle mb-3"
        width="150"
        height="150"
        style={{ objectFit: 'cover' }}
      />
      <h4 className="mb-1">{profile.name}</h4>
      <p className="text-accent mb-1" style={{ fontSize: '0.95rem' }}>
        {profile.title}
      </p>
      <p className="text-muted text-center small mb-4">
        {profile.tagline}
      </p>

      <nav className="nav flex-column w-100 gap-2 mb-4" aria-label="External links">
        <a href={profile.github.url} target="_blank" rel="noopener noreferrer" className="nav-btn" aria-label="GitHub (opens in new tab)">
          <GitHubIcon />
          GitHub
        </a>
        <a href={profile.linkedin.url} target="_blank" rel="noopener noreferrer" className="nav-btn" aria-label="LinkedIn (opens in new tab)">
          <LinkedInIcon />
          LinkedIn
        </a>
      </nav>

      <hr className="sidebar-divider w-100 my-1" />

      <nav className="nav flex-column w-100 gap-2 mt-2 mb-4" aria-label="Site navigation">
        <NavLink to="/" className="nav-btn" end>
          <PersonIcon />
          About
        </NavLink>
        <NavLink to="/resume" className="nav-btn">
          <DocumentIcon />
          Resume
        </NavLink>
      </nav>

      <div className="mt-auto d-flex gap-3">
        <a
          href={profile.github.url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
          aria-label="GitHub (opens in new tab)"
        >
          <GitHubIcon size={24} />
        </a>
        <a
          href={profile.linkedin.url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
          aria-label="LinkedIn (opens in new tab)"
        >
          <LinkedInIcon size={24} />
        </a>
      </div>
    </aside>
  );
}

export default Sidebar;
