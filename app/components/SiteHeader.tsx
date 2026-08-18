export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="wordmark" href="/" aria-label="Yanting He, home">
        Yanting He
      </a>
      <nav aria-label="Primary navigation">
        <a href="/research">Research</a>
        <a href="/teaching">Teaching</a>
        <a href="/Yanting-He-CV.pdf">CV</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>
  );
}
