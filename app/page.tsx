const researchAreas = [
  {
    title: "Creator Economy",
    copy: "How creators, audiences, and platforms shape one another through new forms of communication and exchange.",
  },
  {
    title: "Digital Platforms",
    copy: "How platform design changes disclosure, participation, and market outcomes in digital environments.",
  },
  {
    title: "Quantitative Marketing",
    copy: "Causal inference and machine learning applied to substantive questions in marketing and the digital economy.",
  },
];

export default function Home() {
  return (
    <main id="top">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Yanting He, home">
          Yanting He
        </a>
        <nav aria-label="Primary navigation">
          <a href="#research">Research</a>
          <a href="#teaching">Teaching</a>
          <a href="/cv/">CV</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="kicker">Assistant Professor of Marketing</p>
          <h1 id="hero-title">Yanting He</h1>
          <p className="affiliation">
            School of Management and Economics<br />
            The Chinese University of Hong Kong, Shenzhen
          </p>
          <p className="intro">
            I study how people create, communicate, and transact on digital
            platforms—and what those interactions mean for firms and society.
          </p>
          <div className="research-interests" aria-label="Research interests">
            <span>Creator Economy</span>
            <span>Digital Platforms</span>
            <span>Quantitative Marketing</span>
          </div>
          <div className="hero-actions">
            <a className="button button-primary" href="/cv/">
              View CV
            </a>
            <a className="button button-secondary" href="mailto:heyanting@cuhk.edu.cn">
              Email me
            </a>
          </div>
        </div>

        <figure className="portrait-wrap">
          <img
            src="/profile.jpg"
            alt="Portrait of Yanting He"
            width="1800"
            height="1201"
          />
        </figure>
      </section>

      <section className="research-overview section" id="research">
        <div className="section-label">Research</div>
        <div className="section-content">
          <div className="section-heading">
            <h2>Research on emerging digital markets.</h2>
            <p>
              My work connects platform behavior with rigorous empirical methods
              to understand communication, disclosure, and market outcomes.
            </p>
          </div>
          <div className="research-grid">
            {researchAreas.map((area) => (
              <article key={area.title}>
                <h3>{area.title}</h3>
                <p>{area.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="work section" aria-labelledby="work-title">
        <div className="section-label">Selected work</div>
        <div className="section-content">
          <div className="section-heading section-heading-compact">
            <h2 id="work-title">Publications and selected working papers.</h2>
            <a className="simple-link" href="/cv/">
              Full curriculum vitae <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="paper-list">
            <article className="paper">
              <p className="paper-type">Publication · Marketing Science · 2025</p>
              <h3>
                Frontiers: How Much Influencer Marketing Is Undisclosed?
                Evidence from Twitter.
              </h3>
              <p className="authors">
                Daniel Ershov, <strong>Yanting He</strong>, and Stephan Seiler
                <span>Authors listed alphabetically</span>
              </p>
              <p>Marketing Science, 44(3), 505–515.</p>
              <a
                className="simple-link"
                href="https://doi.org/10.1287/mksc.2024.0838"
                target="_blank"
                rel="noreferrer"
              >
                View publication <span aria-hidden="true">↗</span>
              </a>
            </article>

            <article className="paper">
              <p className="paper-type">Selected working paper · Job market paper</p>
              <h3>Private Messaging in the Creator Economy.</h3>
              <p className="authors">
                <strong>Yanting He</strong> and Andreas Lanz
              </p>
              <a
                className="simple-link"
                href="https://proceedings.emac-online.org/pdfs/A2025-126356.pdf"
                target="_blank"
                rel="noreferrer"
              >
                View working paper <span aria-hidden="true">↗</span>
              </a>
            </article>
          </div>
        </div>
      </section>

      <section className="teaching section" id="teaching" aria-labelledby="teaching-title">
        <div className="section-label">Teaching</div>
        <div className="section-content">
          <div className="section-heading">
            <h2 id="teaching-title">Teaching experience.</h2>
            <p>
              I teach quantitative marketing at undergraduate, MSc, and doctoral
              levels, translating analytical tools into managerial insight.
            </p>
          </div>

          <div className="teaching-list">
            <article>
              <p className="year">2026–Present</p>
              <div>
                <h3>The Chinese University of Hong Kong, Shenzhen</h3>
                <p>Marketing Analytics · Module Leader</p>
                <p>PhD Seminar · Module Leader</p>
              </div>
            </article>
            <article>
              <p className="year">2023–2025</p>
              <div>
                <h3>Imperial College London</h3>
                <p>Advanced Marketing Analytics · MSc Module Tutor</p>
                <p>Marketing Analytics · MSc Module Tutor</p>
                <p>Machine Learning Applications in Marketing · MSc Module Tutor</p>
                <p className="award">Teaching Excellence Award Recipient · 2024–25</p>
              </div>
            </article>
            <article>
              <p className="year">2023–2024</p>
              <div>
                <h3>ESCP Business School, London</h3>
                <p>Data-Driven Marketing · MSc Visiting Lecturer</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="contact section" id="contact" aria-labelledby="contact-title">
        <div className="section-label">Contact</div>
        <div className="section-content contact-content">
          <div>
            <h2 id="contact-title">Let’s connect.</h2>
            <p>I welcome conversations about research, teaching, and collaboration.</p>
          </div>
          <div className="contact-links">
            <a href="mailto:heyanting@cuhk.edu.cn">heyanting@cuhk.edu.cn</a>
            <a href="mailto:yanting.he.academic@gmail.com">yanting.he.academic@gmail.com</a>
            <a
              href="https://uk.linkedin.com/in/yanting-he-imperial"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </section>

      <footer>
        <p>© 2026 Yanting He</p>
        <p>Assistant Professor of Marketing · CUHK-Shenzhen</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
