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
          <h1 id="contact-title">Get in touch</h1>
        </div>
        <div className="contact-details">
          <p className="contact-role">
            Assistant Professor of Marketing<br />
            The Chinese University of Hong Kong, Shenzhen
          </p>
          <div className="contact-email-list">
            <p className="contact-email">
              <span>Institutional</span>
              <a href="mailto:heyanting@cuhk.edu.cn">heyanting@cuhk.edu.cn</a>
            </p>
            <p className="contact-email">
              <span>Academic</span>
              <a href="mailto:yanting.he.academic@gmail.com">
                yanting.he.academic@gmail.com
              </a>
            </p>
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
        </div>
      </section>

      <aside className="personal-note" aria-labelledby="elsewhere-title">
        <div className="personal-copy">
          <p className="personal-label">Elsewhere</p>
          <p className="personal-text" id="elsewhere-title">
            Outside research, I enjoy Zumba, concerts, and live music.
          </p>
        </div>
      </aside>
      <SiteFooter />
    </main>
  );
}
