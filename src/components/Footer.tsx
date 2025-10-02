import { Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Left side - Logo and brand name with attribution */}
          <div className="flex flex-col items-center gap-3 md:items-start">
            <div className="flex items-center gap-3">
              <Image
                src="/favicon.png"
                alt="LeetJump Logo"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <span className="text-lg font-semibold">LeetJump</span>
            </div>
            <div className="text-sm text-muted-foreground flex items-center gap-1">
              Made with <span className="text-red-500 text-base">❤️</span> by{" "}
              <a
                href="https://www.lirena.in/"
                className="hover:text-foreground transition-colors underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                lirena00
              </a>
            </div>
          </div>

          {/* Right side - Navigation links */}
          <div className="flex items-center gap-6">
            <Link
              href="https://github.com/GDGoC-GLAU/leetjump"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-4 h-4" />
              GitHub
            </Link>
            <Link
              href="/release-notes"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Release Notes
            </Link>
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
