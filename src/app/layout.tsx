import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Doni — Full-Stack Developer",
  description:
    "Portfolio of Doni, a full-stack developer focused on building scalable web systems with clean architecture and thoughtful user experiences.",
  keywords: [
    "Full-Stack Developer",
    "Next.js",
    "React",
    "Laravel",
    "Portfolio",
    "Web Developer",
  ],
  authors: [{ name: "Doni" }],
  openGraph: {
    title: "Doni — Full-Stack Developer",
    description:
      "Building scalable web systems with clean architecture and thoughtful user experiences.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Doni — Full-Stack Developer",
    description:
      "Building scalable web systems with clean architecture and thoughtful user experiences.",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
