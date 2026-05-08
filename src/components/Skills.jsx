const SKILLS = [
  { abbr: '⚛',   name: 'React.js',         desc: 'Component-driven UIs, hooks, context & state management' },
  { abbr: 'JS',  name: 'JavaScript',        desc: 'ES6+, async/await, DOM APIs, and browser internals' },
  { abbr: 'Py',  name: 'Python',            desc: 'Scripting, automation, sockets & security tooling' },
  { abbr: '🔒',  name: 'Network Security',  desc: 'Pen testing, packet analysis, vulnerability assessment' },
  { abbr: 'PHP', name: 'PHP',               desc: 'Server-side logic, REST APIs, and session management' },
  { abbr: 'DB',  name: 'MySQL',             desc: 'Relational schemas, query optimization & migrations' },
  { abbr: '🐧',  name: 'Linux',             desc: 'Shell scripting, server hardening & process management' },
  { abbr: 'CSS', name: 'CSS / HTML',        desc: 'Pixel-perfect, responsive layouts with modern CSS' },
  { abbr: 'Git', name: 'Git',               desc: 'Version control, branching strategies & collaboration' },
]

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="skills-header">
          <p className="section-label">// skills</p>
          <h2 className="section-title">
            Tools I <span>build with</span>
          </h2>
        </div>

        <div className="skills-grid">
          {SKILLS.map(({ abbr, name, desc }) => (
            <div key={name} className="skill-card">
              <div className="skill-icon">{abbr}</div>
              <div className="skill-name">{name}</div>
              <div className="skill-desc">{desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
