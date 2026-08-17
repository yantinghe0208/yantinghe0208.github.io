import type { Metadata } from "next";
import "./globals.css";

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
        url: "/profile.jpg",
        width: 1800,
        height: 1201,
        alt: "Portrait of Yanting He",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yanting He | Assistant Professor of Marketing",
    description:
      "Research on the creator economy, digital platforms, and quantitative marketing.",
    images: ["/profile.jpg"],
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
