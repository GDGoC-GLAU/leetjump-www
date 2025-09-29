import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "LeetJump - Quick LeetCode Navigation Extension",
  description:
    "Instant access to 3000+ LeetCode problems with Alt+L. Never lose coding momentum with our keyboard-driven browser extension.",
  keywords:
    "leetcode extension, coding practice, browser extension, keyboard shortcuts, algorithm practice",
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "LeetJump - Quick LeetCode Navigation Extension",
    description:
      "Never lose momentum during your coding practice again! Instant search across 3000+ problems with Alt+L.",
    type: "website",
    images: [
      {
        url: "/demo/browser-demo.svg",
        width: 800,
        height: 600,
        alt: "LeetJump extension demo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LeetJump - Quick LeetCode Navigation Extension",
    description:
      "Never lose momentum during your coding practice again! Instant search across 3000+ problems with Alt+L.",
    images: ["/demo/browser-demo.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jetbrainsMono.variable} font-mono antialiased`}
        style={{ letterSpacing: "-0.05em" }}
      >
        {children}
      </body>
    </html>
  );
}
