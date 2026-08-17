import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://yantinghe0208.github.io"),
  title: "Yanting He · Marketing Scholar",
  description:
    "Yanting He is an Assistant Professor of Marketing at The Chinese University of Hong Kong, Shenzhen.",
  openGraph: {
    title: "Yanting He · Marketing Scholar",
    description:
      "Research on the creator economy, digital platforms, and quantitative marketing.",
    url: "https://yantinghe0208.github.io",
    siteName: "Yanting He",
    images: [
      {
        url: "/og.png",
        width: 1792,
        height: 922,
        alt: "Yanting He — Marketing, Digital Platforms, Creator Economy",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yanting He · Marketing Scholar",
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
      <body>{children}</body>
    </html>
  );
}
