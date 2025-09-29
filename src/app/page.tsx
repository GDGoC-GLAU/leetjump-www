import {
  Search,
  Zap,
  Target,
  Shield,
  Keyboard,
  Download,
  Github,
  Chrome,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Clock,
  Globe,
  HardDrive,
  RefreshCw,
  Heart,
  Coffee,
  Star,
  Rocket,
  Gift,
} from "lucide-react";
import { Firefox } from "@/components/icons/Firefox";
import Link from "next/link";
import Image from "next/image";
import InteractiveDemo from "@/components/InteractiveDemo";
import BrowserDetection from "@/components/BrowserDetection";
import Header from "@/components/Header";
import DemoCarousel from "@/components/DemoCarousel";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <Header showBackButton={false} showLogo={true} />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Quick navigation to{" "}
                  <span className="text-chart-2">LeetCode problems</span> with
                  keyboard shortcuts
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Never lose momentum during your coding practice again! Instant
                  access to 3000+ problems with universal{" "}
                  <kbd className="px-2 py-1 text-xs bg-muted border border-border rounded font-mono">
                    Alt+L
                  </kbd>{" "}
                  shortcut.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <BrowserDetection scrollToInstall={true} />

                <a
                  href="https://github.com/lirena00/leetjump"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-muted text-muted-foreground font-medium transition-all duration-150 hover:translate-y-[-1px] active:translate-y-0 border border-border"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-5 h-5" />
                  View on GitHub
                </a>
              </div>

              {/* Peerlist Launch Badge */}
              <div className="flex justify-start">
                <a
                  href="https://peerlist.io/lirena00/project/leetjump"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-all duration-150 hover:translate-y-[-1px]"
                >
                  <img
                    src="https://peerlist.io/api/v1/projects/embed/PRJH8OE9LJRGA667EFRBGMP8ND89J9?showUpvote=true&theme=light"
                    alt="LeetJump on Peerlist"
                    style={{ width: "auto", height: "62px" }}
                  />
                </a>
              </div>

              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-chart-3" />
                  <span>3000+ Problems</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-chart-3" />
                  <span>Offline Ready</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-chart-3" />
                  <span>Universal Shortcut</span>
                </div>
              </div>
            </div>

            {/* Interactive Demo */}
            <div className="relative">
              <InteractiveDemo />
            </div>
          </div>
        </div>
      </section>

      {/* Features & Technical Specifications */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              Built for developer efficiency
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every feature designed to keep you in the flow while practicing
              algorithms and data structures.
            </p>
          </div>

          {/* Unified Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {/* Speed & Performance - Large card */}
            <div className="lg:col-span-2 bg-card border border-border p-8 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-chart-4/20 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-chart-4" />
                </div>
                <h3 className="text-xl font-bold">Speed & Performance</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-chart-3" />
                    <span className="text-sm">
                      Instant search across 3000+ problems
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-chart-3" />
                    <span className="text-sm">
                      &lt;150ms search response time
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-chart-3" />
                    <span className="text-sm">Debounced real-time search</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-chart-3" />
                    <span className="text-sm">
                      <kbd className="px-2 py-1 bg-muted border border-border text-xs">
                        Alt+L
                      </kbd>{" "}
                      universal shortcut
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-chart-3" />
                    <span className="text-sm">IndexedDB local caching</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-chart-3" />
                    <span className="text-sm">Efficient result ranking</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Support LeetJump */}
            <div className="bg-gradient-to-br from-chart-2/10 to-chart-2/5 border border-chart-2/20 p-6 space-y-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-chart-2/10 rounded-full -translate-y-10 translate-x-10"></div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <Heart className="w-6 h-6 text-chart-2" />
                  <h3 className="font-bold text-chart-2">Support LeetJump</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  LeetJump is free and open source. Consider supporting
                  development!
                </p>
                <a
                  href="#support"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-chart-2 text-white font-medium text-sm transition-all duration-150 hover:translate-y-[-1px] hover:bg-chart-2/90"
                >
                  <Heart className="w-4 h-4" />
                  Sponsor
                </a>
              </div>
            </div>

            {/* Smart Search */}
            <div className="bg-card border border-border p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-chart-3/20 flex items-center justify-center">
                  <Target className="w-5 h-5 text-chart-3" />
                </div>
                <h3 className="font-semibold">Smart Search</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3 h-3 text-chart-3" />
                  Search by number, title, or keyword
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3 h-3 text-chart-3" />
                  Intelligent result ranking
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3 h-3 text-chart-3" />
                  Slash commands{" "}
                  <span className="text-chart-4 font-mono">/potd</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3 h-3 text-chart-3" />
                  Smart matching with exact priority
                </li>
              </ul>
            </div>

            {/* Data & Storage */}
            <div className="bg-card border border-border p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-chart-3/20 flex items-center justify-center">
                  <HardDrive className="w-5 h-5 text-chart-3" />
                </div>
                <h3 className="font-semibold">Data & Storage</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3 h-3 text-chart-3" />
                  Official LeetCode API
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3 h-3 text-chart-3" />
                  24-hour cache staleness
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3 h-3 text-chart-3" />
                  Offline fallback support
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3 h-3 text-chart-3" />
                  Local storage only
                </li>
              </ul>
            </div>

            {/* Advanced Features & Sync */}
            <div className="lg:col-span-2 bg-card border border-border p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-chart-2/20 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-chart-2" />
                </div>
                <h3 className="font-semibold">Advanced Features & Sync</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 text-chart-3" />
                    Problem of the Day quick access
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 text-chart-3" />
                    Background sync every 6 hours
                  </li>
                </ul>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 text-chart-3" />
                    Rich metadata with difficulty dots
                  </li>
                </ul>
              </div>
            </div>

            {/* Privacy & Security */}
            <div className="bg-card border border-border p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-ring/20 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-ring" />
                </div>
                <h3 className="font-semibold">Privacy & Security</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3 h-3 text-chart-3" />
                  No tracking or analytics
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3 h-3 text-chart-3" />
                  Local data storage only
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3 h-3 text-chart-3" />
                  Minimal browser permissions
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3 h-3 text-chart-3" />
                  Cross-browser compatibility
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              See it in action
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the speed and efficiency of LeetJump with these common
              search patterns.
            </p>
          </div>

          <DemoCarousel />
        </div>
      </section>

      {/* Installation Guide */}
      <section id="get-started" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              Get started in seconds
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Available for Chrome and Chromium browsers, with Firefox support
              coming soon.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Chrome Web Store */}
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-chart-4/20 mx-auto flex items-center justify-center">
                <Chrome className="w-8 h-8 text-chart-4" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Chrome Web Store</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  For Chrome, Edge, and other Chromium browsers
                </p>
                <a
                  href="https://chromewebstore.google.com/detail/leetjump-leetcode-quick-s/mapaacjngblliffleponocgiopaclfld"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-chart-4 text-white font-medium transition-all duration-150 hover:translate-y-[-1px]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="w-4 h-4" />
                  Install Extension
                </a>
              </div>
            </div>

            {/* Firefox Add-ons */}
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-chart-3/20 mx-auto flex items-center justify-center relative">
                <Firefox className="w-9 h-9 text-chart-3 font-bold" />
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
                  <Clock className="w-3 h-3 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Firefox Add-ons</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Coming soon to Firefox extension store
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted text-muted-foreground font-medium border border-border cursor-not-allowed">
                  <Clock className="w-4 h-4" />
                  Coming Soon
                </div>
              </div>
            </div>

            {/* Manual Installation */}
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-chart-2/20 mx-auto flex items-center justify-center">
                <Github className="w-8 h-8 text-chart-2" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Manual Installation
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  For developers who want the latest features
                </p>
                <a
                  href="https://github.com/lirena00/leetjump"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-chart-2 text-white font-medium transition-all duration-150 hover:translate-y-[-1px]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4" />
                  View Source
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section id="support" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              Support LeetJump
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              LeetJump is free and open source. Help us continue improving the
              extension and adding new features.
            </p>
          </div>

          {/* Support Options Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {/* Financial Support */}
            <div className="bg-card border border-border p-8 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-chart-2/20 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-chart-2" />
                </div>
                <h3 className="text-xl font-bold">Financial Support</h3>
              </div>
              <p className="text-muted-foreground">
                Your donations help keep us motivated to improve the extension
                and add new features.
              </p>
              <div className="space-y-3">
                <a
                  href="https://buymeacoffee.com/lirena00"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background font-medium transition-all duration-150 hover:translate-y-[-1px] w-full justify-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Coffee className="w-4 h-4" />
                  Buy me a coffee
                  <span className="text-sm opacity-70">$5</span>
                </a>
                <a
                  href="https://github.com/sponsors/lirena00"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-muted text-muted-foreground font-medium transition-all duration-150 hover:translate-y-[-1px] border border-border w-full justify-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Heart className="w-4 h-4" />
                  Become a sponsor
                </a>
              </div>
            </div>

            {/* Community Support */}
            <div className="bg-card border border-border p-8 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-chart-3/20 flex items-center justify-center">
                  <Star className="w-6 h-6 text-chart-3" />
                </div>
                <h3 className="text-xl font-bold">Community Support</h3>
              </div>
              <p className="text-muted-foreground">
                Not ready to support financially? No problem! These actions help
                us grow the community.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-chart-3" />
                  <span className="text-sm">Star our GitHub repository</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-chart-3" />
                  <span className="text-sm">
                    Share with friends and colleagues
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-chart-3" />
                  <span className="text-sm">
                    Leave a review on extension stores
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-chart-3" />
                  <span className="text-sm">
                    Report bugs and suggest features
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Main CTA */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6">
              Ready to accelerate your coding practice?
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of developers who never lose momentum with
              LeetJump.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center mb-6">
              <BrowserDetection />

              <a
                href="https://github.com/lirena00/leetjump"
                className="inline-flex items-center gap-2 px-8 py-4 bg-muted text-muted-foreground font-medium text-lg transition-all duration-150 hover:translate-y-[-1px] active:translate-y-0 border border-border"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5" />
                Star on GitHub
              </a>
            </div>

            <div className="text-sm text-muted-foreground">
              Free • Open Source • No Registration Required
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
