import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 font-display text-xl font-bold">
            <span className="inline-block size-2.5 rounded-full bg-neon" />
            KICKSTAR.np
          </div>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            Designed by you. Made in Nepal. Worn by a generation.
          </p>
        </div>
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Shop
          </p>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/customizer">Customizer</Link>
            </li>
            <li>
              <Link to="/">Drops</Link>
            </li>
            <li>
              <Link to="/">Community</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Impact
          </p>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/recycle">Recycle program</Link>
            </li>
            <li>
              <Link to="/rewards">Rewards</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Studio
          </p>
          <p className="text-sm text-muted-foreground">Kathmandu, NP</p>
          <p className="text-sm text-muted-foreground">hello@kickstar.np</p>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-2 px-5 py-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>© 2026 Kickstar Footwear. All rights reserved.</p>
          <p>Built for the next generation of Nepali streetwear.</p>
        </div>
      </div>
    </footer>
  );
}
