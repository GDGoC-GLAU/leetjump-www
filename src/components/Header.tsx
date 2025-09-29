"use client";

import {
  ArrowLeft,
  Github,
  MessageCircle,
  Heart,
  Star,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

interface HeaderProps {
  title?: string;
  subtitle?: string;
  showBackButton?: boolean;
  backUrl?: string;
  showLogo?: boolean;
}

interface GitHubStats {
  stars: number;
}

export default function Header({
  title,
  subtitle,
  showBackButton = false,
  backUrl = "/",
  showLogo = false,
}: HeaderProps) {
  const [githubStats, setGithubStats] = useState<GitHubStats>({ stars: 0 });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchGithubStats() {
      try {
        const response = await fetch(
          "https://api.github.com/repos/lirena00/leetjump"
        );
        if (response.ok) {
          const data = await response.json();
          setGithubStats({ stars: data.stargazers_count || 0 });
        }
      } catch (error) {
        console.error("Failed to fetch GitHub stats:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchGithubStats();
  }, []);

  return (
    <header className="border-b border-border bg-card/50 backdrop-blur sticky top-0 z-50">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {showBackButton && (
              <>
                <Link
                  href={backUrl}
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Home
                </Link>
                <div className="w-px h-6 bg-border"></div>
              </>
            )}
            {showLogo && (
              <Link href="/" className="flex items-center gap-2">
                <img src="/favicon.png" alt="LeetJump" className="w-8 h-8" />
                <span className="text-2xl font-bold">LeetJump</span>
              </Link>
            )}
            {title && <h1 className="text-2xl font-bold">{title}</h1>}
          </div>

          <div className="flex items-center gap-4">
            {subtitle && (
              <div className="text-sm text-muted-foreground hidden md:block">
                {subtitle}
              </div>
            )}

            {/* GitHub Stars */}
            <a
              href="https://github.com/lirena00/leetjump"
              className="inline-flex items-center gap-2 px-3 py-2 bg-background border border-border text-sm transition-all duration-150 hover:translate-y-[-1px] hover:border-foreground/20"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-4 h-4" />
              {!isLoading && (
                <div className="flex items-center gap-1">
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  <span className="font-mono text-xs">{githubStats.stars}</span>
                </div>
              )}
            </a>

            {/* Support Button */}
            {showBackButton ? (
              <Link
                href="/#support"
                className="inline-flex items-center gap-2 px-4 py-2 bg-chart-2 text-white text-sm transition-all duration-150 hover:translate-y-[-1px] hover:bg-chart-2/90"
              >
                <Heart className="w-4 h-4" />
                Support
              </Link>
            ) : (
              <a
                href="#support"
                className="inline-flex items-center gap-2 px-4 py-2 bg-chart-2 text-white text-sm transition-all duration-150 hover:translate-y-[-1px] hover:bg-chart-2/90"
              >
                <Heart className="w-4 h-4" />
                Support
              </a>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
