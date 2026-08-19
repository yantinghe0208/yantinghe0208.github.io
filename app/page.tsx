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
          <div className="education-background">
            <span>Academic background</span>
            <ul>
              <li>
                <strong>Imperial College London</strong> · PhD in Quantitative
                Marketing and MRes in Business
              </li>
              <li>
                <strong>University of Manchester</strong> · MSc in Advanced
                Computer Science
              </li>
            </ul>
          </div>
          <p className="intro research-focus">
            <span>Research</span>
            My research examines the evolving dynamics of the creator economy.
            I combine causal inference with AI-based methods to study how
            creators, consumers, and brands interact, and how these
            interactions shape markets and society. My goal is to
            generate insights that support a more transparent, equitable, and
            effective digital ecosystem.
          </p>
          <div className="interests">
            <span>Research interests</span>
            <ul>
              <li><strong>Topics:</strong> Creator Economy · Digital Platforms</li>
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
