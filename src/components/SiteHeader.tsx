import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";
import goldstarLogo from "@/assets/goldstar-logo.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/customizer", label: "Customizer" },
  { to: "/recycle", label: "Recycle" },
  { to: "/rewards", label: "Rewards" },
  { to: "/profile", label: "Profile" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
        <Link to="/" className="flex items-center font-display text-xl font-bold tracking-tight">
          <img src={goldstarLogo} alt="Goldstar" className="h-6 w-auto md:h-7" />
        </Link>
        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            to="/customizer"
            className="hidden items-center gap-2 rounded-full bg-foreground px-4 py-2 text-xs font-semibold text-background transition hover:bg-foreground/85 md:inline-flex"
          >
            <ShoppingBag className="size-3.5" />
            Build yours
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            className="rounded-md border border-border p-2 md:hidden"
            aria-label="Menu"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-border md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-5 py-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-2 text-base font-medium"
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
