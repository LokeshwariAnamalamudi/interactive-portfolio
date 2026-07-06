import { profile } from '@/lib/portfolio-data'

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 sm:flex-row">
        <p className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} {profile.name}. Built with Next.js.
        </p>
        <p className="font-mono text-xs text-muted-foreground">Designed &amp; developed with care.</p>
      </div>
    </footer>
  )
}
