import type { Metadata } from "next";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

const pageTitle = "Contact | Yanting He";
const pageDescription =
  "Contact information for Yanting He, Assistant Professor of Marketing at CUHK-Shenzhen.";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/contact/",
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

export default function ContactPage() {
  return (
    <main className="page-shell">
      <SiteHeader />
      <section className="contact contact-page" aria-labelledby="contact-title">
        <div>
          <p className="section-number">03</p>
          <p className="eyebrow">Contact</p>
          <h1 id="contact-title">Yanting He</h1>
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

      <aside className="personal-note" aria-label="A personal note">
        <p className="personal-label">Postscript</p>
        <figure>
          <img
            src="/nuonuo.jpg"
            alt="Nuonuo, Yanting He's Westie"
            width="814"
            height="1086"
          />
          <figcaption>Nuonuo, occasional research assistant.</figcaption>
        </figure>
      </aside>
      <SiteFooter />
    </main>
  );
}
