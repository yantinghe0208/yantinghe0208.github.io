import { SiteHeader } from "./components/SiteHeader";

export default function Home() {
  return (
    <main className="home-shell">
      <SiteHeader />

      <section className="hero hero-home" aria-labelledby="hero-title">
        <figure className="portrait-wrap">
          <img
            src="/profile.jpg"
            alt="Portrait of Yanting He"
            width="1800"
            height="1201"
          />
        </figure>

        <div className="hero-copy">
          <p className="eyebrow">Assistant Professor of Marketing</p>
          <h1 id="hero-title">Yanting He</h1>
          <p className="affiliation">
            School of Management and Economics<br />
            The Chinese University of Hong Kong, Shenzhen
          </p>
          <p className="education-line">
            PhD in Quantitative Marketing and MRes in Business, Imperial
            College London · MSc in Advanced Computer Science, University of
            Manchester
          </p>
          <p className="intro research-focus">
            <span>Research</span>
            My research examines how digital creators, influencers, and
            user-generated content shape consumer behavior, firm performance,
            and society. I study these questions through the design and
            governance of digital platforms.
          </p>
          <div className="interests">
            <span>Research interests</span>
            <ul>
              <li><strong>Substantive:</strong> Creator Economy · Digital Platforms</li>
              <li><strong>Methodological:</strong> Causal Inference · Machine Learning</li>
            </ul>
          </div>
          <div className="hero-links" aria-label="Profile links">
            <a href="/research/">Research <span aria-hidden="true">→</span></a>
            <a href="/Yanting-He-CV.pdf">Curriculum vitae <span aria-hidden="true">↗</span></a>
            <a href="/contact/">Contact <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </section>
    </main>
  );
}
