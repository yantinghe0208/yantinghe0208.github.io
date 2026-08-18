const research = [
  {
    number: "01",
    status: "Marketing Science, 44(3), 505–515 · 2025",
    title:
      "Frontiers: How Much Influencer Marketing Is Undisclosed? Evidence from Twitter.",
    authors: (
      <>
        Daniel Ershov, <strong>Yanting He</strong>, and Stephan Seiler
      </>
    ),
    note: "Authors listed alphabetically",
    href: "https://doi.org/10.1287/mksc.2024.0838",
    linkLabel: "Publication",
  },
  {
    number: "02",
    status: "Selected working paper · Job market paper",
    title: "Private Messaging in the Creator Economy.",
    authors: (
      <>
        <strong>Yanting He</strong> and Andreas Lanz
      </>
    ),
    note: "",
    href: "https://proceedings.emac-online.org/pdfs/A2025-126356.pdf",
    linkLabel: "Working paper",
  },
];

const teaching = [
  {
    years: "2026–Present",
    institution: "The Chinese University of Hong Kong, Shenzhen",
    courses: ["Marketing Analytics · Module Leader", "PhD Seminar · Module Leader"],
  },
  {
    years: "2023–2025",
    institution: "Imperial College London",
    courses: [
      "Advanced Marketing Analytics · MSc Module Tutor",
      "Marketing Analytics · MSc Module Tutor",
      "Machine Learning Applications in Marketing · MSc Module Tutor",
    ],
    award: "Teaching Excellence Award Recipient · 2024–25",
  },
  {
    years: "2023–2024",
    institution: "ESCP Business School, London",
    courses: ["Data-Driven Marketing · MSc Visiting Lecturer"],
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
          <a href="/Yanting-He-CV.pdf">CV</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
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
            <a href="#research">Research <span aria-hidden="true">↓</span></a>
            <a href="/Yanting-He-CV.pdf">Curriculum vitae <span aria-hidden="true">↗</span></a>
            <a href="mailto:heyanting@cuhk.edu.cn">Email <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>

      <section className="section" id="research" aria-labelledby="research-title">
        <div className="section-intro">
          <p className="section-number">01</p>
          <div>
            <p className="eyebrow">Research</p>
            <h2 id="research-title">Selected research</h2>
          </div>
          <p className="section-note">
            My research examines communication and economic behavior in
            emerging digital markets.
          </p>
        </div>

        <div className="paper-list">
          {research.map((paper) => (
            <article className="paper" key={paper.number}>
              <p className="item-number">{paper.number}</p>
              <div className="paper-body">
                <h3>{paper.title}</h3>
                <p className="authors">{paper.authors}</p>
                {paper.note ? <p className="paper-note">{paper.note}</p> : null}
                <p className="paper-status">{paper.status}</p>
              </div>
              <a
                className="text-link"
                href={paper.href}
                target="_blank"
                rel="noreferrer"
              >
                {paper.linkLabel} <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>

        <a className="all-work-link" href="/Yanting-He-CV.pdf">
          View complete research record in my CV <span aria-hidden="true">↗</span>
        </a>
      </section>

      <section className="section teaching" id="teaching" aria-labelledby="teaching-title">
        <div className="section-intro">
          <p className="section-number">02</p>
          <div>
            <p className="eyebrow">Teaching</p>
            <h2 id="teaching-title">Teaching experience</h2>
          </div>
          <p className="section-note">
            Quantitative marketing at undergraduate, MSc, and doctoral levels.
          </p>
        </div>

        <div className="teaching-list">
          {teaching.map((item) => (
            <article key={`${item.years}-${item.institution}`}>
              <p className="years">{item.years}</p>
              <div>
                <h3>{item.institution}</h3>
                {item.courses.map((course) => <p key={course}>{course}</p>)}
                {item.award ? <p className="award">{item.award}</p> : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact" id="contact" aria-labelledby="contact-title">
        <div>
          <p className="section-number">03</p>
          <p className="eyebrow">Contact</p>
          <h2 id="contact-title">Yanting He</h2>
        </div>
        <div className="contact-details">
          <p>
            Assistant Professor of Marketing<br />
            The Chinese University of Hong Kong, Shenzhen
          </p>
          <a href="mailto:heyanting@cuhk.edu.cn">heyanting@cuhk.edu.cn</a>
          <a href="mailto:yanting.he.academic@gmail.com">yanting.he.academic@gmail.com</a>
        </div>
        <div className="contact-links">
          <a href="/Yanting-He-CV.pdf">Curriculum vitae ↗</a>
          <a
            href="https://uk.linkedin.com/in/yanting-he-imperial"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>
        </div>
      </section>

      <footer>
        <p>© 2026 Yanting He</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
