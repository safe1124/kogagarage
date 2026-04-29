"use client"

import { FadeIn } from "./motion"

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-5xl px-6">
        <FadeIn>
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div>
              <p className="text-lg font-medium">KOGA</p>
              <p className="text-sm text-muted-foreground">iOS Developer</p>
            </div>

            <nav className="flex items-center gap-8">
              <a
                href="#about"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                About
              </a>
              <a
                href="#projects"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Projects
              </a>
              <a
                href="#timeline"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Timeline
              </a>
              <a
                href="#contact"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Contact
              </a>
            </nav>

            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Kodai Koga
            </p>
          </div>
        </FadeIn>
      </div>
    </footer>
  )
}
