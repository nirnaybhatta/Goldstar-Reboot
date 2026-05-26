import { createFileRoute, Link } from "@tanstack/react-router";
import { Settings, Heart, Package, Recycle } from "lucide-react";
import { useEffect, useState } from "react";
const shoeRed = "/src/assets/shoe-red.jpg";
const shoeBlack = "/src/assets/shoe-black.jpg";
const shoeBlue = "/src/assets/shoe-blue.jpg";

export const Route = createFileRoute("/profile")({
  head: () => ({
    meta: [
      { title: "Your Profile — Kickstar" },
      { name: "description", content: "Track your designs, orders and recycling impact." },
    ],
  }),
  component: ProfileGate,
});

const AUTH_KEY = "kickstar.auth";

function ProfileGate() {
  const [authed, setAuthed] = useState<boolean | null>(null);
  useEffect(() => {
    setAuthed(typeof window !== "undefined" && !!localStorage.getItem(AUTH_KEY));
  }, []);
  if (authed === null) return <div className="mx-auto max-w-7xl px-5 py-24" />;
  if (!authed) return <Login onAuth={() => setAuthed(true)} />;
  return <Profile />;
}

function Login({ onAuth }: { onAuth: () => void }) {
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem(AUTH_KEY, JSON.stringify({ email, ts: Date.now() }));
    onAuth();
  };

  return (
    <section className="mx-auto flex max-w-md flex-col px-5 py-16 md:py-24">
      <p className="font-mono text-xs uppercase tracking-widest text-electric">Members only</p>
      <h1 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">
        {mode === "login" ? "Welcome back." : "Join the squad."}
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        {mode === "login"
          ? "Log in to access your designs, orders and recycling rewards."
          : "Create your Kickstar account to start customizing, recycling, and earning points."}
      </p>

      <form onSubmit={submit} className="mt-8 space-y-4">
        {mode === "signup" && (
          <Field label="Full name" placeholder="Nirnay Bhatta" defaultValue="Nirnay Bhatta" />
        )}
        <Field
          label="Email"
          type="email"
          value={email}
          onChange={setEmail}
          placeholder="you@kickstar.np"
          required
        />
        <Field
          label="Password"
          type="password"
          value={password}
          onChange={setPassword}
          placeholder="••••••••"
          required
        />

        <button
          type="submit"
          className="mt-2 w-full rounded-full bg-foreground py-3 text-sm font-semibold text-background transition hover:bg-foreground/85"
        >
          {mode === "login" ? "Log in" : "Create account"}
        </button>
      </form>

      <div className="my-6 flex items-center gap-3 text-xs text-muted-foreground">
        <span className="h-px flex-1 bg-border" /> or <span className="h-px flex-1 bg-border" />
      </div>

      <button
        onClick={() => {
          localStorage.setItem(AUTH_KEY, "guest");
          onAuth();
        }}
        className="w-full rounded-full border border-border bg-background py-3 text-sm font-semibold transition hover:border-foreground"
      >
        Continue as guest
      </button>

      <p className="mt-8 text-center text-sm text-muted-foreground">
        {mode === "login" ? "New to Kickstar?" : "Already have an account?"}{" "}
        <button
          onClick={() => setMode(mode === "login" ? "signup" : "login")}
          className="font-semibold text-foreground underline underline-offset-4"
        >
          {mode === "login" ? "Sign up" : "Log in"}
        </button>
      </p>
    </section>
  );
}

function Field({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  required,
  defaultValue,
}: {
  label: string;
  type?: string;
  value?: string;
  onChange?: (v: string) => void;
  placeholder?: string;
  required?: boolean;
  defaultValue?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
      <input
        type={type}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange ? (e) => onChange(e.target.value) : undefined}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-foreground"
      />
    </label>
  );
}

const designs = [
  { name: "Toxic Lime 01", img: shoeBlack, likes: 142 },
  { name: "Crimson Bloc", img: shoeRed, likes: 86 },
  { name: "Iris Pastel", img: shoeBlue, likes: 47 },
];

function Profile() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-12 md:py-16">
      <div className="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
        <div className="flex items-center gap-5">
          <div className="flex size-20 items-center justify-center rounded-full bg-neon font-display text-3xl font-bold">
            N
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Silver tier · 980 pts
            </p>
            <h1 className="mt-1 font-display text-4xl font-bold tracking-tight md:text-5xl">
              Nirnay Bhatta
            </h1>
            <p className="text-sm text-muted-foreground">Kathmandu · Member since 2025</p>
          </div>
        </div>
        <button className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-xs font-semibold">
          <Settings className="size-3.5" /> Edit profile
        </button>
      </div>

      {/* Stats */}
      <div className="mt-10 grid gap-4 md:grid-cols-4">
        <Stat icon={<Package className="size-4" />} k="6" v="Orders" />
        <Stat icon={<Heart className="size-4" />} k="11" v="Saved designs" />
        <Stat icon={<Recycle className="size-4" />} k="4" v="Pairs recycled" />
        <Stat icon={<Heart className="size-4" />} k="275" v="Community likes" accent />
      </div>

      {/* Tabs */}
      <div className="mt-12">
        <div className="flex gap-2 border-b border-border">
          <Tab active>My designs</Tab>
          <Tab>Orders</Tab>
          <Tab>Recycle history</Tab>
          <Tab>Saved</Tab>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {designs.map((d) => (
            <div
              key={d.name}
              className="overflow-hidden rounded-2xl border border-border bg-background"
            >
              <div className="aspect-square bg-surface">
                <img
                  src={d.img}
                  alt={d.name}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="size-full object-cover"
                />
              </div>
              <div className="flex items-center justify-between p-4">
                <div>
                  <p className="font-display font-semibold">{d.name}</p>
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <Heart className="size-3" /> {d.likes}
                  </p>
                </div>
                <Link
                  to="/customizer"
                  className="text-xs font-semibold underline underline-offset-4"
                >
                  Remix
                </Link>
              </div>
            </div>
          ))}

          <Link
            to="/customizer"
            className="flex aspect-square items-center justify-center rounded-2xl border-2 border-dashed border-border text-sm font-semibold text-muted-foreground transition hover:border-foreground hover:text-foreground"
          >
            + New build
          </Link>
        </div>
      </div>
    </section>
  );
}

function Stat({
  icon,
  k,
  v,
  accent,
}: {
  icon: React.ReactNode;
  k: string;
  v: string;
  accent?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border p-5 ${accent ? "border-foreground bg-neon" : "border-border bg-background"}`}
    >
      <div className="flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-widest opacity-70">{v}</span>
        {icon}
      </div>
      <p className="mt-3 font-display text-3xl font-bold">{k}</p>
    </div>
  );
}

function Tab({ children, active }: { children: React.ReactNode; active?: boolean }) {
  return (
    <button
      className={`relative -mb-px px-4 py-3 text-sm font-semibold transition ${
        active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
      }`}
    >
      {children}
      {active && <span className="absolute inset-x-3 -bottom-px h-0.5 bg-foreground" />}
    </button>
  );
}
