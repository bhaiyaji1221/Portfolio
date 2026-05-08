export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        <span className="navbar-logo">YourName.</span>
        <ul className="navbar-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}
