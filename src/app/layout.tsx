import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Viewport } from "next";
import Script from "next/script";

export const viewport: Viewport = {
  themeColor: "#f8f7f4",
};

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
  metadataBase: new URL("https://leetjump.lirena.in"),
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "LeetJump - Quick LeetCode Navigation Extension",
    description:
      "Never lose momentum during your coding practice again! Instant search across 3000+ problems with Alt+L.",
    type: "website",
    url: "https://leetjump.lirena.in",
    siteName: "LeetJump",
    images: [
      {
        url: "/og_1.png",
        width: 1200,
        height: 630,
        alt: "LeetJump - Quick LeetCode Navigation Extension",
      },
      {
        url: "/og_2.png",
        width: 1200,
        height: 630,
        alt: "LeetJump extension demo",
      },
      {
        url: "/og_3.png",
        width: 1200,
        height: 630,
        alt: "LeetJump features showcase",
      },
      {
        url: "/og_4.png",
        width: 1200,
        height: 630,
        alt: "LeetJump extension interface",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LeetJump - Quick LeetCode Navigation Extension",
    description:
      "Never lose momentum during your coding practice again! Instant search across 3000+ problems with Alt+L.",
    images: ["/og_1.png"],
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
        {process.env.NODE_ENV === "production" && (
          <Script
            defer
            src="https://analytics.lirena.in/script.js"
            data-website-id="586b24df-415c-43ab-9721-37145cd15d1f"
            strategy="afterInteractive"
          />
        )}
        {children}
      </body>
    </html>
  );
}
