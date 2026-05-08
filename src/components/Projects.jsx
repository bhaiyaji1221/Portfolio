const PROJECTS = [
  {
    category: 'web · api',
    title: 'WeatherSphere',
    desc: 'Real-time weather dashboard pulling live data from OpenWeatherMap. Features dynamic animated backgrounds, 5-day forecasts, and geolocation detection.',
    tags: ['React', 'OpenWeatherMap API', 'CSS Animations'],
    link: 'https://github.com/yourusername/weathersphere', // TODO: Replace link
  },
  {
    category: 'game · virtual experience',
    title: 'CyberVault',
    desc: 'Browser-based gamified security lab simulating real-world attack and defense scenarios. Players navigate network maps and patch live vulnerabilities.',
    tags: ['JavaScript', 'Canvas API', 'Web Sockets'],
    link: 'https://github.com/yourusername/cybervault', // TODO: Replace link
  },
  {
    category: 'security · tool',
    title: 'NetProbe',
    desc: 'CLI + web interface for port scanning, route tracing, and open vulnerability detection. Uses raw socket programming with a clean Flask dashboard.',
    tags: ['Python', 'Flask', 'Linux Sockets'],
    link: 'https://github.com/yourusername/netprobe', // TODO: Replace link
  },
]

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="projects-header">
          <p className="section-label">// projects</p>
          <h2 className="section-title">
            Things I've <span>shipped</span>
          </h2>
        </div>

        <div className="projects-grid">
          {PROJECTS.map(({ category, title, desc, tags, link }) => (
            <div key={title} className="project-card">
              <span className="project-category">{category}</span>
              <h3 className="project-title">{title}</h3>
              <p className="project-desc">{desc}</p>
              <div className="project-tags">
                {tags.map((t) => <span key={t} className="tag">{t}</span>)}
              </div>
              <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
                View Project <ArrowIcon />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
