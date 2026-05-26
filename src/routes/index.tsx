import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, Recycle, Trophy, Palette } from "lucide-react";
const hero = "/src/assets/hero-sneaker.jpg";
const shoeRed = "/src/assets/shoe-red.jpg";
const shoeBlack = "/src/assets/shoe-black.jpg";
const shoeBlue = "/src/assets/shoe-blue.jpg";
import { Marquee } from "@/components/Marquee";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kickstar — Design your own sneakers. Made in Nepal." },
      { name: "description", content: "Customize sneakers, recycle old ones, earn rewards. Nepal's first Gen-Z streetwear footwear platform." },
      { property: "og:image", content: hero },
    ],
  }),
  component: Home,
});

const trending = [
  { name: "Toxic Lime 01", price: "Rs 7,999", img: hero, badge: "Limited" },
  { name: "Crimson Bloc", price: "Rs 6,499", img: shoeRed, badge: "New" },
  { name: "Voltage Black", price: "Rs 7,299", img: shoeBlack, badge: "Hot" },
  { name: "Iris Pastel", price: "Rs 6,799", img: shoeBlue, badge: "Drop" },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-background">
        <div className="pointer-events-none absolute -right-32 top-24 size-[520px] rounded-full bg-neon/30 blur-3xl" />
        <div className="pointer-events-none absolute -left-32 bottom-0 size-[420px] rounded-full bg-electric/20 blur-3xl" />

        <div className="mx-auto grid max-w-7xl gap-10 px-5 pb-10 pt-12 md:grid-cols-12 md:pt-20 md:pb-20">
          <div className="md:col-span-6 md:pt-10">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium"
            >
              <span className="inline-block size-1.5 rounded-full bg-eco" />
              Nepal's first customizable & recycled sneaker
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="mt-5 text-balance font-display text-5xl font-bold leading-[0.95] tracking-tight md:text-7xl"
            >
              Wear your<br />
              <span className="relative inline-block">
                <span className="relative z-10">identity.</span>
                <span className="absolute inset-x-0 bottom-1 z-0 h-4 bg-neon md:h-6" />
              </span>{" "}
              <span className="text-muted-foreground">Step into</span><br />
              the future of streetwear.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
              className="mt-6 max-w-md text-base text-muted-foreground md:text-lg"
            >
              Design every stitch. Trade your old kicks. Level up. Built in Kathmandu for a generation that doesn't wear what everyone else wears.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Link
                to="/customizer"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-semibold text-background transition hover:bg-foreground/85"
              >
                Create your style
                <ArrowUpRight className="size-4 transition-transform group-hover:rotate-45" />
              </Link>
              <Link
                to="/recycle"
                className="inline-flex items-center gap-2 rounded-full border-2 border-foreground bg-background px-6 py-3.5 text-sm font-semibold text-foreground transition hover:bg-foreground hover:text-background"
              >
                Trade old. Walk new.
              </Link>
            </motion.div>

            <div className="mt-10 flex items-center gap-6 text-xs text-muted-foreground">
              <div><span className="font-display text-2xl font-bold text-foreground">12K+</span><br />Custom builds</div>
              <div><span className="font-display text-2xl font-bold text-foreground">3.4t</span><br />Waste recycled</div>
              <div><span className="font-display text-2xl font-bold text-foreground">87</span><br />Drops shipped</div>
            </div>
          </div>

          <div className="relative md:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative aspect-square rounded-3xl bg-surface"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-neon/40 via-transparent to-electric/20" />
              <img
                src={hero}
                alt="Custom Kickstar sneaker — neon green, pink and holographic"
                width={1536}
                height={1280}
                className="absolute inset-0 size-full object-contain p-6"
              />
              <div className="absolute left-5 top-5 rounded-full bg-foreground px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-background">
                Build #00184 · Live
              </div>
              <div className="absolute bottom-5 right-5 flex items-center gap-3 rounded-2xl border border-border bg-background/95 p-3 shadow-brutal-sm backdrop-blur">
                <div className="flex -space-x-2">
                  {["bg-neon", "bg-electric", "bg-foreground", "bg-eco"].map((c) => (
                    <span key={c} className={`size-7 rounded-full border-2 border-background ${c}`} />
                  ))}
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Live price</p>
                  <p className="font-display text-base font-bold">Rs 7,999</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Marquee items={["Designed by you", "Made in Nepal", "Recycle & earn", "Limited drops", "Streetwear futures"]} />

      {/* FEATURE GRID */}
      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="mb-12 flex items-end justify-between gap-6">
          <h2 className="max-w-2xl text-balance font-display text-4xl font-bold tracking-tight md:text-5xl">
            One brand. Three obsessions.
          </h2>
          <p className="hidden max-w-sm text-sm text-muted-foreground md:block">
            Customization, sustainability and reward — built into every pair.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <FeatureCard
            to="/customizer"
            icon={<Palette className="size-5" />}
            title="Custom Builder"
            desc="Pick the upper, sole, laces, text, graphics. Real-time price, AI suggestions, share-ready previews."
            tag="01 / Build"
            accent="bg-neon"
          />
          <FeatureCard
            to="/recycle"
            icon={<Recycle className="size-5" />}
            title="Trade Old. Walk New."
            desc="Drop your old kicks, get points and exclusive drops. Track every kg of waste your closet saved."
            tag="02 / Recycle"
            accent="bg-eco"
          />
          <FeatureCard
            to="/rewards"
            icon={<Trophy className="size-5" />}
            title="Level Up"
            desc="Bronze to Legend. Unlock collectibles, secret colorways and creator collabs the more you play."
            tag="03 / Reward"
            accent="bg-electric"
          />
        </div>
      </section>

      {/* TRENDING */}
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Live community</p>
              <h2 className="mt-1 font-display text-4xl font-bold tracking-tight md:text-5xl">Trending designs</h2>
            </div>
            <Link to="/customizer" className="hidden text-sm font-semibold underline underline-offset-4 md:inline">
              Remix one →
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {trending.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-background transition hover:-translate-y-1 hover:shadow-brutal-sm"
              >
                <div className="aspect-square overflow-hidden bg-surface">
                  <img src={s.img} alt={s.name} loading="lazy" width={1024} height={1024} className="size-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="absolute left-3 top-3 rounded-full bg-foreground px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-background">
                  {s.badge}
                </div>
                <div className="flex items-center justify-between p-4">
                  <div>
                    <p className="font-display font-semibold">{s.name}</p>
                    <p className="text-xs text-muted-foreground">{s.price}</p>
                  </div>
                  <ArrowUpRight className="size-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SUSTAINABILITY BAND */}
      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="grid items-center gap-10 rounded-3xl border border-border bg-foreground p-8 text-background md:grid-cols-2 md:p-14">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-neon px-3 py-1 text-xs font-semibold text-neon-foreground">
              <Sparkles className="size-3.5" /> Sustainability mission
            </div>
            <h2 className="mt-5 text-balance font-display text-4xl font-bold leading-tight md:text-5xl">
              Every old shoe you drop is one less in a river.
            </h2>
            <p className="mt-4 max-w-md text-sm text-background/70">
              We collect old footwear across Kathmandu, Pokhara and Lalitpur, then upcycle every salvageable gram into new soles. You get points. The planet gets a break.
            </p>
            <Link
              to="/recycle"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-neon px-5 py-3 text-sm font-semibold text-neon-foreground"
            >
              Start a pickup <ArrowUpRight className="size-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Stat k="3,420 kg" v="Waste diverted" />
            <Stat k="18,200" v="Pairs traded" />
            <Stat k="42%" v="Recycled material" />
            <Stat k="9 cities" v="Pickup zones" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 pb-24">
        <div className="relative overflow-hidden rounded-3xl border-2 border-foreground bg-neon p-10 md:p-16">
          <div className="absolute -right-10 -top-10 size-40 rounded-full bg-electric/40 blur-2xl" />
          <p className="font-mono text-xs uppercase tracking-widest">Drop 04 · Loading</p>
          <h2 className="mt-2 max-w-2xl font-display text-5xl font-bold leading-[0.95] tracking-tight md:text-7xl">
            Designed by you.<br />Made in Nepal.
          </h2>
          <Link
            to="/customizer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-4 text-sm font-semibold text-background"
          >
            Open the builder <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </section>
    </>
  );
}

function FeatureCard({
  to, icon, title, desc, tag, accent,
}: { to: string; icon: React.ReactNode; title: string; desc: string; tag: string; accent: string }) {
  return (
    <Link
      to={to}
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-background p-6 transition hover:-translate-y-1 hover:shadow-brutal"
    >
      <div>
        <div className="flex items-center justify-between">
          <span className={`inline-flex size-10 items-center justify-center rounded-full ${accent} text-foreground`}>
            {icon}
          </span>
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{tag}</span>
        </div>
        <h3 className="mt-6 font-display text-2xl font-bold">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
      </div>
      <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold">
        Explore <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
      </div>
    </Link>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div className="rounded-2xl border border-background/15 p-5">
      <p className="font-display text-3xl font-bold text-neon">{k}</p>
      <p className="mt-1 text-xs uppercase tracking-widest text-background/60">{v}</p>
    </div>
  );
}
