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
          <p className="intro">
            I study the creator economy and digital platforms, with a focus on
            how platform design shapes disclosure, participation, and market
            outcomes. My work combines substantive marketing questions with
            causal inference and machine learning.
          </p>
          <p className="interests">
            <span>Research interests</span>
            Creator Economy · Digital Platforms · Quantitative Marketing
          </p>
          <div className="hero-links" aria-label="Profile links">
            <a href="/research">Research <span aria-hidden="true">→</span></a>
            <a href="/Yanting-He-CV.pdf">Curriculum vitae <span aria-hidden="true">↗</span></a>
            <a href="/contact">Contact <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </section>
    </main>
  );
}
