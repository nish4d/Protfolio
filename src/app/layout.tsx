import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Nishadul Haque - Full Stack Developer",
    template: "%s - Nishadul Haque",
  },
  description:
    "Building scalable web experiences - frontend to database. Next.js, React, Express.js, MongoDB.",
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Nishadul Haque - Full Stack Developer",
    description:
      "Building scalable web experiences - frontend to database. Next.js, React, Express.js, MongoDB.",
    url: "/",
    siteName: "Nishadul Haque",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nishadul Haque - Full Stack Developer",
    description:
      "Building scalable web experiences - frontend to database. Next.js, React, Express.js, MongoDB.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable} dark`}
    >
      <body
        className="min-h-screen bg-background text-foreground antialiased"
      >
        {children}
      </body>
    </html>
  );
}
