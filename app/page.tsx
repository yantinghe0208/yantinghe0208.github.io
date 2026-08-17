const researchAreas = [
  {
    number: "01",
    title: "Creator Economy",
    copy: "How creators, audiences, and platforms shape one another through new forms of communication and exchange.",
  },
  {
    number: "02",
    title: "Digital Platforms",
    copy: "How platform design changes disclosure, participation, and market outcomes in digital environments.",
  },
  {
    number: "03",
    title: "Quantitative Marketing",
    copy: "Causal inference and machine learning applied to substantive questions in marketing and the digital economy.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Yanting He, home">
          YH<span>.</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#research">Research</a>
          <a href="#teaching">Teaching</a>
          <a href="/Yanting-He-CV.pdf">CV</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Marketing · Digital Platforms · Creator Economy</p>
          <h1>
            Yanting <em>He</em>
          </h1>
          <p className="role">
            Assistant Professor of Marketing<br />
            The Chinese University of Hong Kong, Shenzhen
          </p>
          <p className="intro">
            I study how people create, communicate, and transact on digital
            platforms—and what those interactions mean for firms and society.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#research">
              Explore my research <span aria-hidden="true">↘</span>
            </a>
            <a className="button button-quiet" href="mailto:heyanting@cuhk.edu.cn">
              Get in touch
            </a>
          </div>
        </div>

        <aside className="focus-card" aria-label="Current research focus">
          <div className="focus-orbit" aria-hidden="true">
            <span />
          </div>
          <p className="focus-label">Current focus</p>
          <h2>Private messaging in the creator economy</h2>
          <p className="focus-meta">Selected working paper · Job market paper</p>
          <a href="#selected-paper">Read about the project →</a>
        </aside>
      </section>

      <section className="research-preview" id="research">
        <div className="section-heading">
          <p className="eyebrow">Research lens</p>
          <h2>Markets are conversations.</h2>
          <p>
            My work connects platform behavior with rigorous empirical methods
            to understand emerging digital markets.
          </p>
        </div>
        <div className="research-grid">
          {researchAreas.map((area) => (
            <article className="research-card" key={area.number}>
              <span>{area.number}</span>
              <h3>{area.title}</h3>
              <p>{area.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="selected-work" aria-labelledby="selected-work-title">
        <div className="work-intro">
          <p className="eyebrow">Selected work</p>
          <h2 id="selected-work-title">Research for a changing digital economy.</h2>
          <p>
            My work studies communication and disclosure on digital platforms,
            combining substantive questions with causal inference and machine
            learning.
          </p>
          <a className="text-link" href="/Yanting-He-CV.pdf">
            Download full CV <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="work-list">
          <article className="work-item" id="publication">
            <div className="work-index">Published · 2025</div>
            <div>
              <div className="work-tags">
                <span>Influencer marketing</span>
                <span>Disclosure</span>
              </div>
              <h3>
                Frontiers: How Much Influencer Marketing Is Undisclosed?
                Evidence from Twitter.
              </h3>
              <p className="authors">
                Daniel Ershov, <strong>Yanting He</strong>, and Stephan Seiler
                <em>Authors listed alphabetically</em>
              </p>
              <p className="venue">Marketing Science, 44(3), 505–515.</p>
              <a
                className="paper-link"
                href="https://doi.org/10.1287/mksc.2024.0838"
                target="_blank"
                rel="noreferrer"
              >
                View publication <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>

          <article className="work-item" id="selected-paper">
            <div className="work-index">Working paper</div>
            <div>
              <div className="work-tags">
                <span>Creator economy</span>
                <span>Private messaging</span>
              </div>
              <h3>Private Messaging in the Creator Economy.</h3>
              <p className="authors">
                <strong>Yanting He</strong> and Andreas Lanz
              </p>
              <p className="venue">Job market paper</p>
              <a
                className="paper-link"
                href="https://proceedings.emac-online.org/pdfs/A2025-126356.pdf"
                target="_blank"
                rel="noreferrer"
              >
                View working paper <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>
        </div>
      </section>

      <section className="teaching" id="teaching" aria-labelledby="teaching-title">
        <div className="teaching-title-block">
          <p className="eyebrow">Teaching</p>
          <h2 id="teaching-title">From methods to managerial insight.</h2>
          <p>
            I teach quantitative marketing at undergraduate, MSc, and doctoral
            levels, with an emphasis on translating analytical tools into
            meaningful decisions.
          </p>
        </div>

        <div className="teaching-timeline">
          <article>
            <div className="timeline-year">2026–Present</div>
            <div>
              <h3>The Chinese University of Hong Kong, Shenzhen</h3>
              <ul>
                <li><span>Marketing Analytics</span> Module Leader · Fall 2026</li>
                <li><span>PhD Seminar</span> Module Leader · Fall 2026</li>
              </ul>
            </div>
          </article>

          <article>
            <div className="timeline-year">2023–2025</div>
            <div>
              <h3>Imperial College London</h3>
              <ul>
                <li><span>Advanced Marketing Analytics</span> MSc Module Tutor</li>
                <li><span>Marketing Analytics</span> MSc Module Tutor</li>
                <li><span>Machine Learning Applications in Marketing</span> MSc Module Tutor</li>
              </ul>
              <p className="award-note">Teaching Excellence Award Recipient · 2024–25</p>
            </div>
          </article>

          <article>
            <div className="timeline-year">2023–2024</div>
            <div>
              <h3>ESCP Business School, London</h3>
              <ul>
                <li><span>Data-Driven Marketing</span> MSc Visiting Lecturer</li>
              </ul>
            </div>
          </article>
        </div>
      </section>

      <section className="contact" id="contact" aria-labelledby="contact-title">
        <div>
          <p className="eyebrow">Connect</p>
          <h2 id="contact-title">Let’s start a conversation.</h2>
        </div>
        <div className="contact-links">
          <a href="mailto:heyanting@cuhk.edu.cn">
            <span>Academic email</span>
            heyanting@cuhk.edu.cn
          </a>
          <a href="mailto:yanting.he.academic@gmail.com">
            <span>Personal email</span>
            yanting.he.academic@gmail.com
          </a>
          <a
            href="https://uk.linkedin.com/in/yanting-he-imperial"
            target="_blank"
            rel="noreferrer"
          >
            <span>Network</span>
            LinkedIn ↗
          </a>
        </div>
      </section>

      <footer>
        <p>© 2026 Yanting He</p>
        <p>Marketing · Digital Platforms · Creator Economy</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
