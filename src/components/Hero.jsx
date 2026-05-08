const CHIPS = [
  'React', 'JavaScript', 'Python', 'Network Security',
  'Linux', 'PHP', 'MySQL', 'Git', 'REST APIs',
]

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-content">
        <p className="hero-eyebrow">Available for work</p>

        <h1 className="hero-name">
          {/* TODO: Replace with your real name */}
          Your<br />
          <span className="grad-text">Name.</span>
        </h1>

        <p className="hero-title">
          {/* TODO: Replace with your real title */}
          Full-Stack Developer &amp; Network Security Enthusiast
        </p>

        <div className="hero-chips">
          {CHIPS.map((c) => (
            <span key={c} className="chip">{c}</span>
          ))}
        </div>

        <div className="hero-ctas">
          <a href="#projects" className="btn-primary">
            View Work
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a href="#contact" className="btn-secondary">
            Contact Me
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll">
        <span>scroll</span>
        <div className="hero-scroll-bar" />
      </div>
    </section>
  )
}
