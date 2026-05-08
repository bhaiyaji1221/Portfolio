/* SVG icons as inline components */
function EmailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
      stroke="#00ffc2" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}
function GithubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
      stroke="#00ffc2" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  )
}
function LinkedinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
      stroke="#00ffc2" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}
function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}

const LINKS = [
  {
    icon: <EmailIcon />,
    label: 'Email',
    value: 'you@email.com',       // TODO: Replace
    href: 'mailto:you@email.com', // TODO: Replace
  },
  {
    icon: <GithubIcon />,
    label: 'GitHub',
    value: 'github.com/yourhandle',           // TODO: Replace
    href: 'https://github.com/yourhandle',    // TODO: Replace
  },
  {
    icon: <LinkedinIcon />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/yourname',                  // TODO: Replace
    href: 'https://linkedin.com/in/yourname',           // TODO: Replace
  },
]

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <p className="section-label">// contact</p>
        <h2 className="section-title">
          Let's <span>work together</span>
        </h2>

        <div className="contact-wrap">
          <div className="contact-header">
            <p>
              Open to freelance projects, collaborations, and full-time opportunities.
              Drop me a message — I usually respond within 24 hours.
            </p>
          </div>

          <div className="contact-rows">
            {LINKS.map(({ icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={label !== 'Email' ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="contact-row"
              >
                <div className="contact-row-icon">{icon}</div>
                <span className="contact-row-label">{label}</span>
                <span className="contact-row-value">{value}</span>
                <span className="contact-arrow"><ArrowIcon /></span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
