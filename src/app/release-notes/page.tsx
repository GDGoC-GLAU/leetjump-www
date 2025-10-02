import { Suspense } from "react";
import {
  Github,
  MessageCircle,
  Heart,
  Shield,
  ArrowLeft,
  Calendar,
  Tag,
} from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Release Notes - LeetJump Extension Updates",
  description:
    "Stay updated with the latest LeetJump browser extension features, improvements, and bug fixes. View complete changelog and version history.",
  keywords:
    "leetjump release notes, extension updates, changelog, browser extension versions",
  openGraph: {
    title: "Release Notes - LeetJump Extension Updates",
    description:
      "Stay updated with the latest LeetJump browser extension features, improvements, and bug fixes. View complete changelog and version history.",
    type: "website",
    url: "https://leetjump.lirena.in/release-notes",
    siteName: "LeetJump",
    images: [
      {
        url: "/og_3.png",
        width: 1200,
        height: 630,
        alt: "LeetJump Release Notes and Updates",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Release Notes - LeetJump Extension Updates",
    description:
      "Stay updated with the latest LeetJump browser extension features, improvements, and bug fixes. View complete changelog and version history.",
    images: ["/og_3.png"],
  },
};

// GitHub Release type
interface GitHubRelease {
  tag_name: string;
  name: string;
  published_at: string;
  body: string;
  prerelease: boolean;
}

// Fetch release notes from GitHub API
async function getReleaseNotes(): Promise<GitHubRelease[]> {
  try {
    const response = await fetch(
      "https://api.github.com/repos/lirena00/leetjump/releases",
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch releases");
    }

    const releases: GitHubRelease[] = await response.json();
    return releases;
  } catch (error) {
    console.error("Error fetching releases:", error);
    // Fallback to empty array if API fails
    return [];
  }
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function parseReleaseBody(body: string) {
  const sections = {
    description: "",
    whatsNew: "",
    whatsFixed: "",
  };

  // Split the body into sections
  const parts = body.split(/^## /gm);

  // The first part is usually the description (before any ## headers)
  if (parts[0]) {
    sections.description = parts[0].trim();
  }

  // Process the remaining sections
  parts.slice(1).forEach((part) => {
    const lines = part.split("\n");
    const header = lines[0].toLowerCase();
    const content = lines.slice(1).join("\n").trim();

    if (header.includes("what's new") || header.includes("new")) {
      sections.whatsNew = content;
    } else if (
      header.includes("what's fixed") ||
      header.includes("fixed") ||
      header.includes("bug")
    ) {
      sections.whatsFixed = content;
    }
  });

  return sections;
}

function formatMarkdownContent(text: string) {
  return text
    .replace(
      /^\- (.*$)/gim,
      '<li class="ml-4 text-sm text-muted-foreground mb-2">• $1</li>'
    )
    .replace(
      /`([^`]+)`/g,
      '<code class="px-1.5 py-0.5 bg-muted text-xs font-mono rounded">$1</code>'
    )
    .replace(
      /\*\*(.*?)\*\*/g,
      '<strong class="font-medium text-foreground">$1</strong>'
    )
    .replace(
      /\[(.*?)\]\((.*?)\)/g,
      '<a href="$2" class="text-chart-2 hover:underline" target="_blank" rel="noopener noreferrer">$1</a>'
    )
    .replace(/\n\n/g, "<br><br>")
    .replace(/\n/g, "<br>");
}

export default async function ReleaseNotesPage() {
  const show_now = false; // Set to true when you want to show the actual release notes
  const releases = await getReleaseNotes();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <Header
        title="Release Notes"
        subtitle="Stay updated with the latest LeetJump features"
        showBackButton={true}
      />

      {/* Release Notes */}
      <main className="container mx-auto px-4 py-12">
        {show_now ? (
          <div className="max-w-4xl mx-auto space-y-12">
            {releases.map((release, index) => (
              <div
                key={release.tag_name}
                id={release.tag_name}
                className="scroll-mt-20"
              >
                <div className="bg-card border border-border p-8 space-y-6">
                  {/* Release Header */}
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <Tag className="w-5 h-5 text-chart-3" />
                        <h2 className="text-2xl font-bold">{release.name}</h2>
                        {release.prerelease && (
                          <span className="px-2 py-1 bg-chart-4/20 text-chart-4 text-xs font-medium rounded">
                            Pre-release
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {formatDate(release.published_at)}
                        </div>
                        <a
                          href={`https://github.com/GDGoC-GLAU/leetjump/releases/tag/${release.tag_name}`}
                          className="inline-flex items-center gap-1 hover:text-foreground transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4" />
                          View on GitHub
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Release Content */}
                  <div className="prose prose-sm max-w-none space-y-6">
                    {(() => {
                      const sections = parseReleaseBody(release.body);
                      return (
                        <>
                          {/* Description */}
                          {sections.description && (
                            <div className="text-sm text-muted-foreground leading-relaxed">
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: formatMarkdownContent(
                                    sections.description
                                  ),
                                }}
                              />
                            </div>
                          )}

                          {/* What's New */}
                          {sections.whatsNew && (
                            <div>
                              <h3 className="text-lg font-semibold mb-3 text-foreground">
                                What's New
                              </h3>
                              <div className="space-y-1">
                                <div
                                  dangerouslySetInnerHTML={{
                                    __html: formatMarkdownContent(
                                      sections.whatsNew
                                    ),
                                  }}
                                />
                              </div>
                            </div>
                          )}

                          {/* What's Fixed */}
                          {sections.whatsFixed && (
                            <div>
                              <h3 className="text-lg font-semibold mb-3 text-foreground">
                                What's Fixed
                              </h3>
                              <div className="space-y-1">
                                <div
                                  dangerouslySetInnerHTML={{
                                    __html: formatMarkdownContent(
                                      sections.whatsFixed
                                    ),
                                  }}
                                />
                              </div>
                            </div>
                          )}
                        </>
                      );
                    })()}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="max-w-4xl mx-auto text-center py-20">
            <div className="bg-card border border-border p-12 space-y-6">
              <div className="space-y-4">
                <Calendar className="w-12 h-12 text-muted-foreground mx-auto" />
                <h2 className="text-2xl font-bold">
                  Release Notes Coming Soon
                </h2>
                <p className="text-muted-foreground max-w-md mx-auto leading-relaxed">
                  We're working on bringing you detailed release notes and
                  update history. Check back soon for the latest LeetJump
                  features and improvements.
                </p>
              </div>
              <div className="pt-4">
                <a
                  href="https://github.com/GDGoC-GLAU/leetjump/releases"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground font-medium text-sm transition-all duration-150 hover:translate-y-[-1px]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4" />
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Archive Notice - only show when show_now is true */}
        {show_now && (
          <div className="max-w-4xl mx-auto mt-16 p-6 bg-muted/50 border border-border text-center">
            <h3 className="font-semibold mb-2">Looking for older releases?</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Complete release history and changelog are available on GitHub
            </p>
            <a
              href="https://github.com/GDGoC-GLAU/leetjump/releases"
              className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border font-medium text-sm transition-all duration-150 hover:translate-y-[-1px]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-4 h-4" />
              View All Releases
            </a>
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
