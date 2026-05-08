const STATS = [
  { number: '3+',  label: 'Years Coding' },
  { number: '12+', label: 'Projects Built' },
  { number: '8+',  label: 'Security Labs' },
  { number: '10+', label: 'Technologies' },
]

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <p className="section-label">// about me</p>
        <h2 className="section-title">
          Crafting code &amp; <span>securing systems</span>
        </h2>

        <div className="about-grid">
          {/* Left — Bio */}
          <div className="about-bio">
            {/* TODO: Replace with your real bio */}
            <p>
              Hey — I'm a <strong>full-stack developer</strong> with a deep focus on
              network security. I build fast, responsive web apps and love digging into
              how systems break so I can make them stronger.
            </p>
            <p>
              My stack spans from <strong>React &amp; PHP</strong> on the application
              layer to <strong>Linux hardening, packet analysis, and penetration
              testing</strong> at the infrastructure level. I treat security as a
              first-class concern in every project I ship.
            </p>
            <p>
              When I'm not coding, I'm exploring CTF challenges, dissecting CVEs, or
              building tools that make security workflows faster and smarter.
            </p>
          </div>

          {/* Right — Stats 2×2 grid */}
          <div className="about-stats">
            {STATS.map(({ number, label }) => (
              <div key={label} className="stat-card">
                <div className="stat-number grad-text">{number}</div>
                <div className="stat-label">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
