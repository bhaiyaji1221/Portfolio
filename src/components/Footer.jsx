export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="footer-tagline">
          Designed &amp; built by <span>YourName</span> {/* TODO: Replace */}
          &nbsp;— with React &amp; pure CSS.
        </p>
        <span className="footer-year">© {year}</span>
      </div>
    </footer>
  )
}
