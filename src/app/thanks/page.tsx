import {
  CheckCircle,
  Zap,
  Heart,
  MessageCircle,
  Github,
  ArrowRight,
  Sparkles,
  Target,
} from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Welcome to LeetJump! - Thank You for Installing",
  description:
    "Thank you for installing LeetJump! Learn how to get started with the fastest way to navigate LeetCode problems using keyboard shortcuts.",
  robots: "noindex", // Don't index the thanks page
  openGraph: {
    title: "Welcome to LeetJump! - Thank You for Installing",
    description:
      "Thank you for installing LeetJump! Learn how to get started with the fastest way to navigate LeetCode problems using keyboard shortcuts.",
    type: "website",
    url: "https://leetjump.lirena.in/thanks",
    siteName: "LeetJump",
    images: [
      {
        url: "/og_2.png",
        width: 1200,
        height: 630,
        alt: "Welcome to LeetJump - Getting Started",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Welcome to LeetJump! - Thank You for Installing",
    description:
      "Thank you for installing LeetJump! Learn how to get started with the fastest way to navigate LeetCode problems using keyboard shortcuts.",
    images: ["/og_2.png"],
  },
};

export default function ThanksPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <Header
        title="Welcome to LeetJump!"
        subtitle="Thank you for installing our extension"
        showBackButton={true}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Success Icon */}
            <div className="inline-flex items-center justify-center w-20 h-20 bg-chart-3/20 rounded-full mb-8">
              <CheckCircle className="w-10 h-10 text-chart-3" />
            </div>

            {/* Main Message */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Welcome to <span className="text-chart-2">LeetJump</span>!
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                🎉 Thank you for installing LeetJump! You're now ready to
                navigate LeetCode problems like never before.
              </p>
            </div>

            {/* Quick Start */}
            <div className="bg-card border border-border p-8 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold mb-4">
                Get Started in 3 Steps
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-chart-4 text-white text-sm font-bold flex items-center justify-center">
                    1
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold mb-1">Press the Magic Key</h3>
                    <p className="text-sm text-muted-foreground">
                      Press{" "}
                      <kbd className="px-2 py-1 bg-muted border border-border text-xs">
                        Alt+L
                      </kbd>{" "}
                      anywhere on the web to open LeetJump
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-chart-3 text-white text-sm font-bold flex items-center justify-center">
                    2
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold mb-1">Start Searching</h3>
                    <p className="text-sm text-muted-foreground">
                      Type a problem number like "1" or search by name like "two
                      sum"
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-chart-2 text-white text-sm font-bold flex items-center justify-center">
                    3
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold mb-1">Jump to Problems</h3>
                    <p className="text-sm text-muted-foreground">
                      Press{" "}
                      <kbd className="px-2 py-1 bg-muted border border-border text-xs">
                        Enter
                      </kbd>{" "}
                      to open any problem instantly
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Try Now Button */}
            <div className="space-y-4">
              <p className="text-lg font-medium">Ready to try it?</p>
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium text-lg border-2 border-primary animate-pulse">
                <Zap className="w-5 h-5" />
                Press Alt+L now!
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Features */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              What makes LeetJump special?
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="w-12 h-12 bg-chart-4/20 mx-auto flex items-center justify-center">
                  <Zap className="w-6 h-6 text-chart-4" />
                </div>
                <h3 className="font-semibold">Lightning Fast</h3>
                <p className="text-sm text-muted-foreground">
                  Instant search across 3000+ problems with smart caching
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-12 h-12 bg-chart-3/20 mx-auto flex items-center justify-center">
                  <Target className="w-6 h-6 text-chart-3" />
                </div>
                <h3 className="font-semibold">Smart Search</h3>
                <p className="text-sm text-muted-foreground">
                  Search by number, title, or use slash commands like /potd
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-12 h-12 bg-chart-2/20 mx-auto flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-chart-2" />
                </div>
                <h3 className="font-semibold">Privacy First</h3>
                <p className="text-sm text-muted-foreground">
                  No tracking, no analytics. All data stays on your device
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pro Tips */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Pro Tips for Power Users
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card border border-border p-6 space-y-4">
                <h3 className="font-semibold text-lg">Slash Commands</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <code className="px-2 py-1 bg-muted font-mono text-xs">
                      /potd
                    </code>
                    <span className="text-muted-foreground">
                      Jump to Problem of the Day
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <code className="px-2 py-1 bg-muted font-mono text-xs">
                      /help
                    </code>
                    <span className="text-muted-foreground">
                      Show all available commands
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border p-6 space-y-4">
                <h3 className="font-semibold text-lg">Keyboard Navigation</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <kbd className="px-2 py-1 bg-muted border border-border text-xs">
                      ↑↓
                    </kbd>
                    <span className="text-muted-foreground">
                      Navigate through results
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <kbd className="px-2 py-1 bg-muted border border-border text-xs">
                      Esc
                    </kbd>
                    <span className="text-muted-foreground">
                      Close the popup anytime
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community & Support */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-bold">Join the LeetJump Community</h2>
            <p className="text-lg text-muted-foreground">
              Connect with other developers, get support, and help make LeetJump
              even better!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://discord.gg/leetjump"
                className="inline-flex items-center gap-2 px-6 py-3 bg-chart-2 text-white font-medium transition-all duration-150 hover:translate-y-[-1px] hover:bg-chart-2/90"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5" />
                Join Discord
              </a>

              <a
                href="https://github.com/GDGoC-GLAU/leetjump"
                className="inline-flex items-center gap-2 px-6 py-3 bg-muted text-muted-foreground font-medium transition-all duration-150 hover:translate-y-[-1px] hover:bg-muted/80 border border-border"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5" />
                Star on GitHub
              </a>

              <a
                href="https://github.com/sponsors/lirena00"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-chart-2 to-chart-2/80 text-white font-medium transition-all duration-150 hover:translate-y-[-1px] hover:from-chart-2/90 hover:to-chart-2/70"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Heart className="w-5 h-5" />
                Support Development ❤️
              </a>
            </div>

            <div className="text-sm text-muted-foreground">
              LeetJump is free and open source. Your support helps keep it that
              way!
            </div>
          </div>
        </div>
      </section>

      {/* What's Next */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-bold">What's Next?</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card border border-border p-6 text-left space-y-4">
                <h3 className="font-semibold text-lg">Explore the Website</h3>
                <p className="text-sm text-muted-foreground">
                  Learn more about all features, check out release notes, and
                  read our privacy policy.
                </p>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 text-sm text-chart-2 hover:underline"
                >
                  Visit Homepage
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="bg-card border border-border p-6 text-left space-y-4">
                <h3 className="font-semibold text-lg">Stay Updated</h3>
                <p className="text-sm text-muted-foreground">
                  Follow our release notes to stay informed about new features
                  and improvements.
                </p>
                <Link
                  href="/release-notes"
                  className="inline-flex items-center gap-2 text-sm text-chart-2 hover:underline"
                >
                  View Release Notes
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
