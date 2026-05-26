import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Trophy, Flame, Users, ShoppingBag, Recycle, Share2, Star, Lock } from "lucide-react";

export const Route = createFileRoute("/rewards")({
  head: () => ({
    meta: [
      { title: "Rewards & Drops — Kickstar" },
      { name: "description", content: "Earn points by buying, recycling, referring and sharing. Climb tiers from Bronze to Legend." },
    ],
  }),
  component: Rewards,
});

const tiers = [
  { name: "Bronze", min: 0, color: "bg-[#c89060]" },
  { name: "Silver", min: 500, color: "bg-[#c0c0c0]" },
  { name: "Gold", min: 1500, color: "bg-neon" },
  { name: "Legend", min: 3000, color: "bg-foreground text-background" },
];

const earn = [
  { icon: <ShoppingBag className="size-4" />, t: "Buy a pair", p: "+250 pts" },
  { icon: <Recycle className="size-4" />, t: "Recycle old kicks", p: "+150 pts" },
  { icon: <Users className="size-4" />, t: "Refer a friend", p: "+200 pts" },
  { icon: <Share2 className="size-4" />, t: "Share a design", p: "+50 pts" },
  { icon: <Flame className="size-4" />, t: "Daily streak", p: "+10 pts" },
];

const badges = [
  { n: "First Step", earned: true },
  { n: "Eco Drop", earned: true },
  { n: "Streetcaster", earned: true },
  { n: "Trendsetter", earned: false },
  { n: "Mountain Mode", earned: false },
  { n: "Legend", earned: false },
];

const drops = [
  { n: "Holo Phantom", min: "Gold", note: "Unlocks at 1,500 pts" },
  { n: "Patan Pulse", min: "Silver", note: "Unlocks at 500 pts" },
  { n: "Annapurna Edition", min: "Legend", note: "Unlocks at 3,000 pts" },
];

function Rewards() {
  const points = 980;
  const next = tiers.find((t) => t.min > points)!;
  const progress = Math.min(100, (points / next.min) * 100);

  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pb-10 pt-16 md:pt-24">
        <p className="font-mono text-xs uppercase tracking-widest text-electric">Play · Earn · Unlock</p>
        <h1 className="mt-3 max-w-3xl text-balance font-display text-5xl font-bold leading-[0.95] tracking-tight md:text-7xl">
          Level up your <span className="inline-flex items-center gap-3">streetwear<Trophy className="size-12 text-electric md:size-16" /></span>
        </h1>

        {/* Points dashboard */}
        <div className="mt-10 grid gap-5 md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="rounded-3xl border-2 border-foreground bg-background p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Your balance</p>
                  <p className="mt-1 font-display text-6xl font-bold tracking-tight">{points} <span className="text-base text-muted-foreground">pts</span></p>
                </div>
                <span className="inline-flex items-center gap-2 rounded-full bg-neon px-3 py-1 text-xs font-semibold">
                  <Trophy className="size-3.5" /> Silver tier
                </span>
              </div>
              <div className="mt-6">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>Progress to {next.name}</span>
                  <span>{next.min - points} pts to go</span>
                </div>
                <div className="mt-2 h-3 overflow-hidden rounded-full bg-muted">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: `${progress}%` }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="h-full bg-electric" />
                </div>
              </div>

              <div className="mt-6 grid grid-cols-4 gap-2">
                {tiers.map((t) => (
                  <div key={t.name} className={`rounded-xl border border-border p-3 text-center ${t.color}`}>
                    <p className="font-display text-sm font-bold">{t.name}</p>
                    <p className="text-[10px] opacity-70">{t.min} pts</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="rounded-3xl border border-border bg-surface p-6">
              <p className="font-display text-base font-bold">Earn points</p>
              <ul className="mt-4 space-y-2">
                {earn.map((e) => (
                  <li key={e.t} className="flex items-center justify-between rounded-xl border border-border bg-background p-3">
                    <span className="flex items-center gap-3 text-sm font-medium">
                      <span className="inline-flex size-8 items-center justify-center rounded-full bg-neon text-foreground">{e.icon}</span>
                      {e.t}
                    </span>
                    <span className="font-mono text-xs font-semibold text-electric">{e.p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* BADGES */}
      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="flex items-end justify-between">
          <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">Collectible badges</h2>
          <p className="hidden text-sm text-muted-foreground md:block">3 / 6 unlocked</p>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
          {badges.map((b, i) => (
            <motion.div
              key={b.n}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className={`flex aspect-square flex-col items-center justify-center rounded-2xl border-2 p-4 text-center ${
                b.earned ? "border-foreground bg-neon" : "border-dashed border-border bg-surface text-muted-foreground"
              }`}
            >
              {b.earned ? <Star className="size-7" /> : <Lock className="size-6" />}
              <p className="mt-2 font-display text-sm font-bold">{b.n}</p>
              <p className="text-[10px] uppercase tracking-widest opacity-70">{b.earned ? "Unlocked" : "Locked"}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* EXCLUSIVE DROPS */}
      <section className="mx-auto max-w-7xl px-5 pb-24">
        <div className="rounded-3xl bg-foreground p-8 text-background md:p-12">
          <p className="font-mono text-xs uppercase tracking-widest text-neon">Exclusive drops</p>
          <h2 className="mt-2 max-w-xl font-display text-4xl font-bold leading-tight md:text-5xl">
            The more you play, the rarer it gets.
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {drops.map((d) => (
              <div key={d.n} className="rounded-2xl border border-background/15 p-6">
                <p className="font-mono text-xs uppercase tracking-widest text-neon">{d.min}</p>
                <p className="mt-3 font-display text-2xl font-bold">{d.n}</p>
                <p className="mt-1 text-xs text-background/60">{d.note}</p>
                <Link to="/customizer" className="mt-4 inline-block text-xs font-semibold underline underline-offset-4">
                  Preview →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
