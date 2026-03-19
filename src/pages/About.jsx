function About() {
  return (
    <div>
      <h2 className="mb-2">About Me</h2>
      <p className="text-muted mb-4">Software engineer, physicist, volunteer first responder.</p>

      <div className="about-card mb-4">
        <div className="about-card-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
            <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5M3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.6 26.6 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.93.93 0 0 1-.765.935c-.845.147-2.34.346-4.235.346s-3.39-.2-4.235-.346A.93.93 0 0 1 3 9.219zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a25 25 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25 25 0 0 0 2.166-.233.25.25 0 0 0-.07-.495 25 25 0 0 1-1.872.2.25.25 0 0 0-.2.078l-.738.77-.88-1.778a.25.25 0 0 0-.166-.132"/>
            <path d="M11.5 1H4a1 1 0 0 0-1 1v2H2V2a2 2 0 0 1 2-2h7.5zM14 3V2a1 1 0 0 0-1-1H9.5l2-2H13a2 2 0 0 1 2 2v1zM4.5 16H4a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h.5zM16 14a2 2 0 0 1-2 2h-5.5l2-2H14a1 1 0 0 0 1-1v-1h1z"/>
          </svg>
        </div>
        <div>
          <p>
            I&rsquo;m a software engineer with a PhD in Physics and over a decade of
            professional experience building web applications. My career has taken a
            winding but intentional path, from studying synchronization in
            chemical oscillator networks to shipping production software that serves
            real people.
          </p>
          <p className="mb-0">
            During grad school at Brandeis, I spent most of my time writing simulation
            code in C and MATLAB. Somewhere along the way I realized I liked building
            the software more than I liked writing the papers. After a postdoc at Iowa
            State, I made the jump to professional software engineering and haven&rsquo;t
            looked back.
          </p>
        </div>
      </div>

      <div className="about-card mb-4">
        <div className="about-card-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
            <path d="M5 0a.5.5 0 0 1 .5.5V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2A2.5 2.5 0 0 1 14 4.5h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14a2.5 2.5 0 0 1-2.5 2.5v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14A2.5 2.5 0 0 1 2 11.5H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2A2.5 2.5 0 0 1 4.5 2V.5A.5.5 0 0 1 5 0m-.5 3A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3zM5 6.5A1.5 1.5 0 0 1 6.5 5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5zM6.5 6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5z"/>
          </svg>
        </div>
        <div>
          <h5 className="text-accent mt-0">What I Do Now</h5>
          <p className="mb-0">
            I&rsquo;m currently a software engineer at{' '}
            <a href="https://www.navapbc.com/" target="_blank" rel="noopener noreferrer">
              Nava PBC
            </a>
            , where I work on{' '}
            <a href="https://github.com/navapbc/oscer" target="_blank" rel="noopener noreferrer">
              OSCER
            </a>
            , an open-source platform that helps state Medicaid agencies administer
            community engagement requirements. It&rsquo;s the kind of work I got into
            software engineering to do: building tools that have a direct,
            positive impact on people&rsquo;s lives.
          </p>
        </div>
      </div>

      <div className="about-card mb-4">
        <div className="about-card-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022zm2.004.45a7 7 0 0 0-.985-.299l.219-.976q.576.129 1.126.342zm1.37.71a7 7 0 0 0-.439-.27l.493-.87a8 8 0 0 1 .979.654l-.615.789a7 7 0 0 0-.418-.302zm1.834 1.79a7 7 0 0 0-.653-.796l.724-.69q.406.429.747.91zm.744 1.352a7 7 0 0 0-.214-.468l.893-.45a8 8 0 0 1 .45 1.088l-.95.313a7 7 0 0 0-.179-.483m.53 2.507a7 7 0 0 0-.1-1.025l.985-.17q.1.58.116 1.17zm-.131 1.538q.05-.254.081-.51l.993.123a8 8 0 0 1-.23 1.155l-.964-.267q.069-.247.12-.501m-.952 2.379q.276-.436.486-.908l.914.405q-.253.57-.583 1.098zm-1.668 1.8q.346-.366.63-.778l.826.56a8 8 0 0 1-.748.916zm-2.293 1.18q.26-.104.51-.225l.451.884q-.544.278-1.127.474zm-2.478.435q.107.036.216.066l-.282.964A8 8 0 0 1 7.73 16.1l.068-.994q.12.008.242.008zM8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1"/>
            <path d="M8 4.5a.5.5 0 0 1 .5.5v3.793l2.354 2.353a.5.5 0 0 1-.708.708l-2.5-2.5A.5.5 0 0 1 7.5 9V5a.5.5 0 0 1 .5-.5"/>
          </svg>
        </div>
        <div>
          <h5 className="text-accent mt-0">Where I&rsquo;ve Been</h5>
          <p>
            Before Nava, I spent three and a half years at Pioneer Valley Books leading
            a small engineering team that built a digital reading platform for elementary
            school literacy programs. Before that, I was at Annkissam for six and a half
            years, growing from a junior Rails developer into a senior developer and
            group manager working across nonprofit and healthcare clients.
          </p>
          <p className="mb-0">
            Throughout my career, I&rsquo;ve gravitated toward work that matters:
            edtech, human services, healthcare, civic tech. I like knowing the code I
            write is making someone&rsquo;s day a little easier.
          </p>
        </div>
      </div>

      <div className="about-callout mb-4">
        <div className="about-callout-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 16c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 6 6 6 6m.5-6v-1h2v1a2 2 0 1 1-4 0v-.5a.5.5 0 0 1 1 0v.5a1 1 0 1 0 2 0zm-2-4V5a3.5 3.5 0 1 1 7 0v1a.5.5 0 0 1-1 0V5a2.5 2.5 0 0 0-5 0v1a.5.5 0 0 1-1 0"/>
            <path d="M6.526 0a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5m2 0a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5"/>
          </svg>
        </div>
        <div>
          <h5 className="mt-0 mb-2" style={{ color: 'var(--color-heading)' }}>Outside of Work</h5>
          <p className="mb-0">
            I&rsquo;m a volunteer firefighter and EMT with the{' '}
            <a href="https://www.charltonvfd.org/" target="_blank" rel="noopener noreferrer">
              Charlton Fire Department
            </a>
            . It&rsquo;s a different kind of problem-solving than software, but the
            core is the same: show up, stay calm, and help people when they need it.
            When I&rsquo;m not responding to calls or writing code, I&rsquo;m probably
            dialing in a pourover or experimenting with my AeroPress.
          </p>
        </div>
      </div>

      <div className="about-card mb-4">
        <div className="about-card-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2-2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
          </svg>
        </div>
        <div>
          <h5 className="text-accent mt-0">Get in Touch</h5>
          <p className="mb-0">
            I&rsquo;m always happy to connect. You can find me on{' '}
            <a href="https://github.com/giverm" target="_blank" rel="noopener noreferrer">GitHub</a>
            {' '}or{' '}
            <a href="https://linkedin.com/in/michael-giver" target="_blank" rel="noopener noreferrer">LinkedIn</a>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
