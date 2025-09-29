import {
  ArrowLeft,
  Shield,
  Eye,
  Database,
  Lock,
  MessageCircle,
  Heart,
} from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy - LeetJump Browser Extension",
  description:
    "LeetJump's comprehensive privacy policy. We collect no personal information, store all data locally, and maintain complete transparency about our privacy practices.",
  keywords:
    "leetjump privacy policy, browser extension privacy, data protection, no tracking",
  openGraph: {
    title: "Privacy Policy - LeetJump Browser Extension",
    description:
      "LeetJump's comprehensive privacy policy. We collect no personal information, store all data locally, and maintain complete transparency about our privacy practices.",
    type: "website",
    url: "https://leetjump.lirena.in/privacy",
    siteName: "LeetJump",
    images: [
      {
        url: "/og_4.png",
        width: 1200,
        height: 630,
        alt: "LeetJump Privacy Policy - Your Data Protection",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy - LeetJump Browser Extension",
    description:
      "LeetJump's comprehensive privacy policy. We collect no personal information, store all data locally, and maintain complete transparency about our privacy practices.",
    images: ["/og_4.png"],
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <Header
        title="Privacy Policy"
        subtitle="Last updated: September 28, 2024"
        showBackButton={true}
      />

      {/* Privacy Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* TL;DR Section */}
          <div className="bg-chart-3/10 border border-chart-3/20 p-6 mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-chart-3" />
              <h2 className="text-xl font-bold text-chart-3">
                TL;DR - Your Privacy Matters
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4 text-chart-3" />
                  <span className="text-sm font-medium">
                    No tracking or analytics
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Database className="w-4 h-4 text-chart-3" />
                  <span className="text-sm font-medium">
                    All data stored locally
                  </span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-chart-3" />
                  <span className="text-sm font-medium">
                    No personal information collected
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-chart-3" />
                  <span className="text-sm font-medium">
                    Open source & transparent
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Privacy Policy */}
          <div className="prose prose-sm max-w-none space-y-8">
            <section className="bg-card border border-border p-8">
              <h2 className="text-2xl font-bold mb-4">
                1. Information We Collect
              </h2>
              <h3 className="text-lg font-semibold mb-3">
                We collect NO personal information
              </h3>
              <p className="text-muted-foreground mb-4">
                LeetJump is designed with privacy as a core principle. We do not
                collect, store, or transmit any personal information about our
                users.
              </p>

              <h3 className="text-lg font-semibold mb-3">Technical Data</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  • <strong>LeetCode Problem Data:</strong> We fetch and cache
                  LeetCode problem information (titles, IDs, difficulty levels)
                  locally in your browser
                </li>
                <li>
                  • <strong>User Preferences:</strong> Extension settings are
                  stored locally in your browser's storage
                </li>
                <li>
                  • <strong>No Usage Analytics:</strong> We do not track how you
                  use the extension, which problems you search for, or any user
                  behavior
                </li>
              </ul>
            </section>

            <section className="bg-card border border-border p-8">
              <h2 className="text-2xl font-bold mb-4">
                2. How We Use Information
              </h2>
              <p className="text-muted-foreground mb-4">
                Since we don't collect personal information, there's minimal
                data usage to describe:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  • <strong>Problem Search:</strong> LeetCode problem data is
                  used only to provide search functionality within the extension
                </li>
                <li>
                  • <strong>Local Storage:</strong> All data is stored in your
                  browser's local storage (IndexedDB) and never leaves your
                  device
                </li>
                <li>
                  • <strong>Background Sync:</strong> The extension periodically
                  fetches updated problem data from LeetCode's public API to
                  keep the local database current
                </li>
              </ul>
            </section>

            <section className="bg-card border border-border p-8">
              <h2 className="text-2xl font-bold mb-4">
                3. Data Storage & Security
              </h2>
              <h3 className="text-lg font-semibold mb-3">Local Storage Only</h3>
              <p className="text-muted-foreground mb-4">
                All extension data is stored locally on your device using
                browser APIs:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  • <strong>IndexedDB:</strong> Problem database cached locally
                  for offline access
                </li>
                <li>
                  • <strong>Chrome Storage API:</strong> Extension preferences
                  and settings
                </li>
                <li>
                  • <strong>No Cloud Storage:</strong> No data is uploaded to
                  external servers
                </li>
                <li>
                  • <strong>No Third-party Services:</strong> No analytics,
                  crash reporting, or tracking services
                </li>
              </ul>

              <h3 className="text-lg font-semibold mb-3 mt-6">Data Security</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  • Data is isolated within the browser extension's secure
                  storage
                </li>
                <li>• No network transmission of personal data</li>
                <li>• Extension follows browser security best practices</li>
                <li>• Open source code available for security audits</li>
              </ul>
            </section>

            <section className="bg-card border border-border p-8">
              <h2 className="text-2xl font-bold mb-4">
                4. Third-party Services
              </h2>
              <h3 className="text-lg font-semibold mb-3">LeetCode API</h3>
              <p className="text-muted-foreground mb-4">
                LeetJump connects to LeetCode's public API to fetch problem
                information:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  • <strong>Purpose:</strong> Retrieve problem titles, IDs,
                  difficulty levels, and metadata
                </li>
                <li>
                  • <strong>Data Transmitted:</strong> No personal data is sent;
                  only standard API requests
                </li>
                <li>
                  • <strong>LeetCode Privacy:</strong> Refer to{" "}
                  <a
                    href="https://leetcode.com/privacy/"
                    className="text-chart-2 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LeetCode's Privacy Policy
                  </a>{" "}
                  for their data practices
                </li>
              </ul>

              <h3 className="text-lg font-semibold mb-3 mt-6">
                No Other Third-parties
              </h3>
              <p className="text-muted-foreground">
                LeetJump does not integrate with any other third-party services,
                analytics platforms, advertising networks, or tracking services.
              </p>
            </section>

            <section className="bg-card border border-border p-8">
              <h2 className="text-2xl font-bold mb-4">
                5. Browser Permissions
              </h2>
              <p className="text-muted-foreground mb-4">
                LeetJump requests minimal browser permissions necessary for
                functionality:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  • <strong>Storage:</strong> To cache problem data locally
                </li>
                <li>
                  • <strong>Alarms:</strong> To schedule background sync
                  operations
                </li>
                <li>
                  • <strong>Host Permissions (leetcode.com):</strong> To fetch
                  problem data from LeetCode's API
                </li>
                <li>
                  • <strong>ActiveTab:</strong> To open LeetCode problems when
                  you select them
                </li>
              </ul>
              <p className="text-muted-foreground mt-4">
                We do not request permissions for accessing browsing history,
                personal data, or other websites beyond what's necessary for
                core functionality.
              </p>
            </section>

            <section className="bg-card border border-border p-8">
              <h2 className="text-2xl font-bold mb-4">
                6. Your Rights & Control
              </h2>
              <h3 className="text-lg font-semibold mb-3">Data Control</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  • <strong>Complete Control:</strong> All extension data is on
                  your device and under your control
                </li>
                <li>
                  • <strong>Data Deletion:</strong> Uninstalling the extension
                  removes all stored data
                </li>
                <li>
                  • <strong>No Account Required:</strong> No registration,
                  login, or account creation needed
                </li>
                <li>
                  • <strong>Offline Usage:</strong> Extension works completely
                  offline after initial data sync
                </li>
              </ul>
            </section>

            <section className="bg-card border border-border p-8">
              <h2 className="text-2xl font-bold mb-4">
                7. Changes to This Policy
              </h2>
              <p className="text-muted-foreground mb-4">
                We may update this privacy policy from time to time. Any changes
                will be:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  • Posted on this page with an updated "Last updated" date
                </li>
                <li>
                  • Announced in extension release notes for significant changes
                </li>
                <li>
                  • Committed to maintaining the same privacy-first principles
                </li>
              </ul>
            </section>

            <section className="bg-card border border-border p-8">
              <h2 className="text-2xl font-bold mb-4">
                8. Contact & Questions
              </h2>
              <p className="text-muted-foreground mb-4">
                If you have questions about this privacy policy or LeetJump's
                data practices:
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://github.com/leetjump/extension/issues"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-muted text-muted-foreground font-medium text-sm transition-all duration-150 hover:translate-y-[-1px] hover:bg-muted/80 border border-border"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Issues
                </a>
                <a
                  href="https://discord.gg/leetjump"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-chart-2 text-white font-medium text-sm transition-all duration-150 hover:translate-y-[-1px] hover:bg-chart-2/90"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-4 h-4" />
                  Discord Community
                </a>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
