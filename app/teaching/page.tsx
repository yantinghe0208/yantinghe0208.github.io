import type { Metadata } from "next";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

const pageTitle = "Teaching | Yanting He";
const pageDescription =
  "Teaching experience of Yanting He in marketing analytics and quantitative marketing.";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/teaching/",
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

export default function TeachingPage() {
  return (
    <main className="page-shell">
      <SiteHeader />
      <section className="section route-section teaching" aria-labelledby="teaching-title">
        <div className="section-intro">
          <p className="section-number">02</p>
          <div>
            <p className="eyebrow">Teaching</p>
            <h1 id="teaching-title">Teaching experience</h1>
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
                <h2>{item.institution}</h2>
                {item.courses.map((course) => {
                  const [name, role] = course.split(" · ");
                  return (
                    <p key={course}>
                      <strong>{name}</strong>
                      {role ? <> · {role}</> : null}
                    </p>
                  );
                })}
                {item.award ? <p className="award">{item.award}</p> : null}
              </div>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
