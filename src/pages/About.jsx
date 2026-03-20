import profile from '../data/profile';
import AboutCard from '../components/AboutCard';
import {
  RobotIcon,
  CpuIcon,
  ClockHistoryIcon,
  UnlockIcon,
  EnvelopeIcon,
} from '../components/Icons';

function About() {
  return (
    <div>
      <h2 className="mb-2">About Me</h2>
      <p className="text-muted mb-4">
        Software engineer, physicist, volunteer first responder.
      </p>

      <AboutCard icon={<RobotIcon />}>
        <p>
          I&rsquo;m a software engineer with a PhD in Physics and over a decade
          of professional experience building web applications. My career has
          taken a winding but intentional path, from studying synchronization in
          chemical oscillator networks to shipping production software that
          serves real people.
        </p>
        <p className="mb-0">
          During grad school at Brandeis, I spent most of my time writing
          simulation code in C and MATLAB. Somewhere along the way I realized I
          liked building the software more than I liked writing the papers.
          After a postdoc at Iowa State, I made the jump to professional
          software engineering and haven&rsquo;t looked back.
        </p>
      </AboutCard>

      <AboutCard title="What I Do Now" icon={<CpuIcon />}>
        <p className="mb-0">
          I&rsquo;m currently a software engineer at{' '}
          <a
            href="https://www.navapbc.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nava PBC
          </a>
          , where I work on{' '}
          <a
            href="https://github.com/navapbc/oscer"
            target="_blank"
            rel="noopener noreferrer"
          >
            OSCER
          </a>
          , an open-source platform that helps state Medicaid agencies
          administer community engagement requirements. It&rsquo;s the kind of
          work I got into software engineering to do: building tools that have a
          direct, positive impact on people&rsquo;s lives.
        </p>
      </AboutCard>

      <AboutCard title="Where I've Been" icon={<ClockHistoryIcon />}>
        <p>
          Before Nava, I spent three and a half years at Pioneer Valley Books
          leading a small engineering team that built a digital reading platform
          for elementary school literacy programs. Before that, I was at
          Annkissam for six and a half years, growing from a junior Rails
          developer into a senior developer and group manager working across
          nonprofit and healthcare clients.
        </p>
        <p className="mb-0">
          Throughout my career, I&rsquo;ve gravitated toward work that matters:
          edtech, human services, healthcare, civic tech. I like knowing the
          code I write is making someone&rsquo;s day a little easier.
        </p>
      </AboutCard>

      <AboutCard
        variant="callout"
        title="Outside of Work"
        icon={<UnlockIcon />}
      >
        <p className="mb-0">
          I&rsquo;m a volunteer firefighter and EMT with the{' '}
          <a
            href="https://www.charltonvfd.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Charlton Fire Department
          </a>
          . It&rsquo;s a different kind of problem-solving than software, but
          the core is the same: show up, stay calm, and help people when they
          need it. When I&rsquo;m not responding to calls or writing code,
          I&rsquo;m probably dialing in a pourover or experimenting with my
          AeroPress.
        </p>
      </AboutCard>

      <AboutCard title="Get in Touch" icon={<EnvelopeIcon />}>
        <p className="mb-0">
          I&rsquo;m always happy to connect. You can find me on{' '}
          <a
            href={profile.github.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>{' '}
          or{' '}
          <a
            href={profile.linkedin.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          .
        </p>
      </AboutCard>
    </div>
  );
}

export default About;
