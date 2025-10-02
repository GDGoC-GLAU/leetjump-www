"use client";

import { useState, useEffect } from "react";
import { Chrome, ArrowRight } from "lucide-react";
import { Firefox as FirefoxIcon } from "./icons/Firefox";

type BrowserInfo = {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  storeUrl: string;
  storeName: string;
};

interface BrowserDetectionProps {
  scrollToInstall?: boolean;
}

const BrowserDetection = ({
  scrollToInstall = false,
}: BrowserDetectionProps) => {
  const [browserInfo, setBrowserInfo] = useState<BrowserInfo>({
    name: "Chrome",
    icon: Chrome,
    storeUrl:
      "https://chromewebstore.google.com/detail/leetjump-leetcode-quick-s/mapaacjngblliffleponocgiopaclfld",
    storeName: "Chrome Web Store",
  });

  useEffect(() => {
    const detectBrowser = () => {
      const userAgent = navigator.userAgent;

      if (userAgent.includes("Firefox")) {
        return {
          name: "Firefox",
          icon: FirefoxIcon,
          storeUrl: "https://addons.mozilla.org/en-US/firefox/addon/leetjump",
          storeName: "Firefox Add-ons",
        };
      }

      // Default to Chrome for all Chromium-based browsers
      return {
        name: "Chrome",
        icon: Chrome,
        storeUrl:
          "https://chromewebstore.google.com/detail/leetjump-leetcode-quick-s/mapaacjngblliffleponocgiopaclfld",
        storeName: "Chrome Web Store",
      };
    };

    setBrowserInfo(detectBrowser());
  }, []);

  const BrowserIcon = browserInfo.icon;

  const handleClick = (e: React.MouseEvent) => {
    if (scrollToInstall) {
      e.preventDefault();
      const installSection = document.getElementById("get-started");
      if (installSection) {
        installSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <a
      href={scrollToInstall ? "#get-started" : browserInfo.storeUrl}
      className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium transition-all duration-150 hover:translate-y-[-1px] active:translate-y-0 border border-transparent"
      target={scrollToInstall ? "_self" : "_blank"}
      rel={scrollToInstall ? undefined : "noopener noreferrer"}
      onClick={handleClick}
    >
      <BrowserIcon className="w-5 h-5" />
      Add to {browserInfo.name}
      <ArrowRight className="w-4 h-4" />
    </a>
  );
};

export default BrowserDetection;
