import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Recycle, Truck, Gift, Leaf, ArrowUpRight } from "lucide-react";
const recycleImg = "/src/assets/recycle.jpg";

export const Route = createFileRoute("/recycle")({
  head: () => ({
    meta: [
      { title: "Trade Old. Walk New. — Kickstar Recycle" },
      { name: "description", content: "Recycle old shoes for reward points, discounts and exclusive drops. Every pair saves waste from Nepal's rivers." },
    ],
  }),
  component: RecyclePage,
});

const steps = [
  { icon: <Truck className="size-5" />, t: "Request pickup", d: "Schedule a free pickup or drop at any Kickstar Hub across Nepal." },
  { icon: <Recycle className="size-5" />, t: "We upcycle", d: "Soles become sole-foam. Uppers become future linings. Nothing wasted." },
  { icon: <Gift className="size-5" />, t: "You earn", d: "Get points, coupons and early access to limited drops — every drop-off." },
];

function RecyclePage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pb-10 pt-16 md:pt-24">
        <p className="font-mono text-xs uppercase tracking-widest text-eco">Sustainability · Drop 04</p>
        <h1 className="mt-3 max-w-3xl text-balance font-display text-5xl font-bold leading-[0.95] tracking-tight md:text-7xl">
          Trade old. <span className="text-eco">Walk new.</span>
        </h1>
        <p className="mt-5 max-w-xl text-base text-muted-foreground md:text-lg">
          Your worn-out kicks aren't trash — they're tomorrow's soles. Drop them, earn points, and help us keep Nepal's rivers and trails clean.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-12">
          <div className="md:col-span-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-3xl border border-border bg-surface"
            >
              <img src={recycleImg} alt="Hands holding worn sneakers ready for recycling" width={1280} height={1024} loading="lazy" className="aspect-[5/4] w-full object-cover" />
            </motion.div>
          </div>

          <div className="grid gap-4 md:col-span-5">
            <Stat big="3,420 kg" label="Waste diverted from landfill" />
            <Stat big="18,200" label="Pairs recycled by community" />
            <Stat big="42%" label="Recycled material in new soles" accent />
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="mx-auto max-w-7xl px-5 py-20">
        <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">How it works.</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {steps.map((s, i) => (
            <motion.div
              key={s.t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-3xl border border-border bg-background p-6"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex size-10 items-center justify-center rounded-full bg-eco text-foreground">{s.icon}</span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">0{i + 1}</span>
              </div>
              <h3 className="mt-6 font-display text-xl font-bold">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* IMPACT DASHBOARD */}
      <section className="mx-auto max-w-7xl px-5 pb-20">
        <div className="overflow-hidden rounded-3xl border-2 border-foreground bg-background">
          <div className="grid md:grid-cols-2">
            <div className="border-b border-border p-8 md:border-b-0 md:border-r md:p-12">
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Your impact</p>
              <h3 className="mt-2 font-display text-3xl font-bold">You saved 6.2 kg of waste.</h3>
              <p className="mt-2 text-sm text-muted-foreground">That's roughly 4 pairs rescued from a landfill.</p>

              <div className="mt-8 space-y-4">
                <Bar label="Pairs traded" value="4 / 10 to Gold tier" pct={40} />
                <Bar label="CO₂ avoided" value="11.4 kg" pct={70} />
                <Bar label="Materials recovered" value="2.1 kg foam, 0.9 kg rubber" pct={55} />
              </div>
            </div>
            <div className="bg-surface p-8 md:p-12">
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Before / after</p>
              <h3 className="mt-2 font-display text-3xl font-bold">Old laces → new soles.</h3>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <Swatch label="Old upper" colorClass="bg-muted-foreground/40" />
                <Swatch label="Recycled foam" colorClass="bg-eco" />
                <Swatch label="Old sole" colorClass="bg-foreground" />
                <Swatch label="New lining" colorClass="bg-neon" />
              </div>
              <Link
                to="/rewards"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background"
              >
                See your rewards <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PICKUP CTA */}
      <section className="mx-auto max-w-7xl px-5 pb-24">
        <div className="rounded-3xl bg-eco p-10 md:p-16">
          <Leaf className="size-8" />
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-bold leading-tight md:text-5xl">
            Request a free pickup. Today.
          </h2>
          <p className="mt-3 max-w-md text-sm text-foreground/80">
            Available in Kathmandu, Lalitpur, Bhaktapur, Pokhara, Biratnagar — and growing every month.
          </p>
          <form className="mt-6 flex max-w-xl flex-col gap-3 sm:flex-row">
            <input
              type="text"
              placeholder="Your city or area"
              className="flex-1 rounded-full border-2 border-foreground bg-background px-5 py-3 text-sm outline-none"
            />
            <button className="rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background">
              Schedule pickup
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

function Stat({ big, label, accent }: { big: string; label: string; accent?: boolean }) {
  return (
    <div className={`rounded-3xl border border-border p-6 ${accent ? "bg-foreground text-background" : "bg-background"}`}>
      <p className={`font-display text-4xl font-bold ${accent ? "text-neon" : ""}`}>{big}</p>
      <p className="mt-2 text-xs uppercase tracking-widest opacity-70">{label}</p>
    </div>
  );
}

function Bar({ label, value, pct }: { label: string; value: string; pct: number }) {
  return (
    <div>
      <div className="flex items-center justify-between text-sm">
        <span className="font-semibold">{label}</span>
        <span className="text-muted-foreground">{value}</span>
      </div>
      <div className="mt-2 h-2 overflow-hidden rounded-full bg-muted">
        <motion.div initial={{ width: 0 }} whileInView={{ width: `${pct}%` }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="h-full bg-eco" />
      </div>
    </div>
  );
}

function Swatch({ label, colorClass }: { label: string; colorClass: string }) {
  return (
    <div className="rounded-2xl border border-border bg-background p-3">
      <div className={`h-16 rounded-xl ${colorClass}`} />
      <p className="mt-2 text-xs font-medium">{label}</p>
    </div>
  );
}
