import type { Metadata } from "next";
import { GoogleAnalytics } from "./components/GoogleAnalytics";
import "./globals.css";

const GA_MEASUREMENT_ID = "G-LVG41FT10J";

export const metadata: Metadata = {
  metadataBase: new URL("https://yantinghe0208.github.io"),
  title: "Yanting He | Assistant Professor of Marketing",
  description:
    "Yanting He is an Assistant Professor of Marketing at The Chinese University of Hong Kong, Shenzhen.",
  openGraph: {
    title: "Yanting He | Assistant Professor of Marketing",
    description:
      "Research on the creator economy, digital platforms, and quantitative marketing.",
    url: "https://yantinghe0208.github.io",
    siteName: "Yanting He",
    images: [
      {
        url: "/og.png",
        width: 1731,
        height: 909,
        alt: "Yanting He — Marketing, Digital Platforms, and Creator Economy",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yanting He | Assistant Professor of Marketing",
    description:
      "Research on the creator economy, digital platforms, and quantitative marketing.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}');
            `,
          }}
        />
      </head>
      <body>
        {children}
        <GoogleAnalytics />
      </body>
    </html>
  );
}
