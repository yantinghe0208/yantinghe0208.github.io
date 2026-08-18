import type { Metadata } from "next";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

const pageTitle = "Research | Yanting He";
const pageDescription =
  "Selected research by Yanting He on the creator economy, digital platforms, and quantitative marketing.";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/research/",
    siteName: "Yanting He",
    type: "website",
    images: [],
  },
  twitter: {
    card: "summary",
    title: pageTitle,
    description: pageDescription,
    images: [],
  },
};

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

export default function ResearchPage() {
  return (
    <main className="page-shell">
      <SiteHeader />
      <section className="section route-section research-section" aria-labelledby="research-title">
        <div className="section-intro">
          <p className="section-number">01</p>
          <div>
            <p className="eyebrow">Research</p>
            <h1 id="research-title">Selected research</h1>
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
                <h2>{paper.title}</h2>
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
      <SiteFooter />
    </main>
  );
}
