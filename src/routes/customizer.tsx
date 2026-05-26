import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Share2, Save, ArrowUpRight, Wand2 } from "lucide-react";

export const Route = createFileRoute("/customizer")({
  head: () => ({
    meta: [
      { title: "Sneaker Customizer — Kickstar" },
      {
        name: "description",
        content:
          "Design your own sneakers in real time. Pick colors, soles, laces, text and graphics.",
      },
    ],
  }),
  component: Customizer,
});

const upperColors = [
  { name: "Ink", value: "#0a0a0a" },
  { name: "Cloud", value: "#f5f5f5" },
  { name: "Lime", value: "#c6f24c" },
  { name: "Magenta", value: "#ff2e7e" },
  { name: "Cobalt", value: "#2b4dff" },
  { name: "Sand", value: "#d8c9a3" },
];

const soleColors = [
  { name: "White", value: "#ffffff" },
  { name: "Cream", value: "#f1e9d2" },
  { name: "Neon", value: "#c6f24c" },
  { name: "Black", value: "#111111" },
];

const laceStyles = [
  { name: "Flat Cotton", id: "flat" },
  { name: "Rope", id: "rope" },
  { name: "Reflective", id: "reflect" },
  { name: "Holographic", id: "holo" },
];

const graphics = ["None", "Stars", "Stripes", "Mountains", "Mandala"];

const aiPresets = [
  { name: "Himalayan Sunset", upper: "#ff2e7e", sole: "#f1e9d2", text: "RANGEET" },
  { name: "Patan Night", upper: "#0a0a0a", sole: "#c6f24c", text: "NEPAL" },
  { name: "Pokhara Mist", upper: "#d8c9a3", sole: "#ffffff", text: "MIST" },
];

function Customizer() {
  const [upper, setUpper] = useState(upperColors[2].value);
  const [sole, setSole] = useState(soleColors[0].value);
  const [lace, setLace] = useState("flat");
  const [text, setText] = useState("KICKSTAR");
  const [graphic, setGraphic] = useState("None");
  const [limited, setLimited] = useState(true);

  const price = useMemo(() => {
    let p = 6499;
    if (lace === "reflect") p += 400;
    if (lace === "holo") p += 800;
    if (graphic !== "None") p += 600;
    if (text.trim().length > 0) p += 250;
    if (limited) p += 1000;
    return p;
  }, [lace, graphic, text, limited]);

  function applyPreset(p: (typeof aiPresets)[number]) {
    setUpper(p.upper);
    setSole(p.sole);
    setText(p.text);
  }

  return (
    <section className="mx-auto grid max-w-7xl gap-8 px-5 py-10 md:grid-cols-12 md:py-16">
      {/* PREVIEW */}
      <div className="md:col-span-7">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Live build
            </p>
            <h1 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
              Create your style.
            </h1>
          </div>
          <div className="hidden gap-2 md:flex">
            <button className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-semibold">
              <Save className="size-3.5" /> Save
            </button>
            <button className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-semibold">
              <Share2 className="size-3.5" /> Share
            </button>
          </div>
        </div>

        <motion.div
          layout
          className="relative mt-6 aspect-[5/4] overflow-hidden rounded-3xl border border-border bg-surface"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-neon/15 via-transparent to-electric/10" />
          {limited && (
            <div className="absolute left-5 top-5 z-10 rounded-full bg-foreground px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-background">
              ★ Limited Edition · 200 pairs
            </div>
          )}
          <div className="absolute right-5 top-5 z-10 rounded-full border border-border bg-background/90 px-3 py-1 font-mono text-[10px] uppercase tracking-widest backdrop-blur">
            Delivery 4–7 days
          </div>

          {/* Stylized SVG sneaker */}
          <div className="absolute inset-0 flex items-center justify-center p-6">
            <SneakerSVG upper={upper} sole={sole} lace={lace} text={text} graphic={graphic} />
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border bg-background p-4">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Live price
            </p>
            <p className="font-display text-3xl font-bold">Rs {price.toLocaleString()}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button className="inline-flex items-center gap-2 rounded-full border-2 border-foreground bg-background px-5 py-3 text-sm font-semibold">
              <Sparkles className="size-4" /> Save design
            </button>
            <Link
              to="/rewards"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background"
            >
              Add to cart <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* CONTROLS */}
      <aside className="space-y-6 md:col-span-5">
        <Panel
          title="AI style suggestions"
          subtitle="One-tap Nepali-inspired drops"
          icon={<Wand2 className="size-4" />}
        >
          <div className="grid gap-2">
            {aiPresets.map((p) => (
              <button
                key={p.name}
                onClick={() => applyPreset(p)}
                className="flex items-center justify-between rounded-xl border border-border p-3 text-left transition hover:border-foreground"
              >
                <div className="flex items-center gap-3">
                  <div className="flex">
                    <span className="size-6 rounded-l-full" style={{ background: p.upper }} />
                    <span className="size-6 rounded-r-full" style={{ background: p.sole }} />
                  </div>
                  <span className="text-sm font-semibold">{p.name}</span>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  Apply →
                </span>
              </button>
            ))}
          </div>
        </Panel>

        <Panel title="Upper color">
          <Swatches options={upperColors} value={upper} onChange={setUpper} />
        </Panel>

        <Panel title="Sole color">
          <Swatches options={soleColors} value={sole} onChange={setSole} />
        </Panel>

        <Panel title="Laces">
          <div className="grid grid-cols-2 gap-2">
            {laceStyles.map((l) => (
              <button
                key={l.id}
                onClick={() => setLace(l.id)}
                className={`rounded-xl border p-3 text-sm font-medium transition ${
                  lace === l.id
                    ? "border-foreground bg-foreground text-background"
                    : "border-border hover:border-foreground"
                }`}
              >
                {l.name}
              </button>
            ))}
          </div>
        </Panel>

        <Panel title="Custom text">
          <input
            value={text}
            maxLength={12}
            onChange={(e) => setText(e.target.value.toUpperCase())}
            className="w-full rounded-xl border border-border bg-background px-4 py-3 font-mono text-sm uppercase tracking-widest outline-none focus:border-foreground"
            placeholder="YOUR NAME"
          />
        </Panel>

        <Panel title="Graphic">
          <div className="flex flex-wrap gap-2">
            {graphics.map((g) => (
              <button
                key={g}
                onClick={() => setGraphic(g)}
                className={`rounded-full border px-4 py-2 text-xs font-semibold transition ${
                  graphic === g
                    ? "border-foreground bg-foreground text-background"
                    : "border-border"
                }`}
              >
                {g}
              </button>
            ))}
          </div>
        </Panel>

        <label className="flex cursor-pointer items-center justify-between rounded-2xl border-2 border-foreground bg-neon p-4">
          <div>
            <p className="font-display text-base font-bold">Limited edition</p>
            <p className="text-xs">200 pairs only · numbered · +Rs 1,000</p>
          </div>
          <input
            type="checkbox"
            checked={limited}
            onChange={(e) => setLimited(e.target.checked)}
            className="size-5 accent-foreground"
          />
        </label>
      </aside>
    </section>
  );
}

function Panel({
  title,
  subtitle,
  icon,
  children,
}: {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-border bg-background p-5">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="font-display text-base font-bold">{title}</p>
          {subtitle && <p className="text-xs text-muted-foreground">{subtitle}</p>}
        </div>
        {icon}
      </div>
      {children}
    </div>
  );
}

function Swatches({
  options,
  value,
  onChange,
}: {
  options: { name: string; value: string }[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((o) => (
        <button
          key={o.value}
          onClick={() => onChange(o.value)}
          title={o.name}
          className={`size-10 rounded-full border-2 transition ${
            value === o.value ? "border-foreground scale-110" : "border-border"
          }`}
          style={{ background: o.value }}
        />
      ))}
    </div>
  );
}

function SneakerSVG({
  upper,
  sole,
  lace,
  text,
  graphic,
}: {
  upper: string;
  sole: string;
  lace: string;
  text: string;
  graphic: string;
}) {
  const laceColor =
    lace === "holo"
      ? "url(#holo)"
      : lace === "reflect"
        ? "#e7e7e7"
        : lace === "rope"
          ? "#3a2a1a"
          : "#ffffff";

  return (
    <motion.svg
      key={`${upper}-${sole}-${lace}-${graphic}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      viewBox="0 0 600 380"
      className="h-full w-full max-w-[640px] drop-shadow-2xl"
    >
      <defs>
        <linearGradient id="holo" x1="0" x2="1">
          <stop offset="0" stopColor="#ff2e7e" />
          <stop offset="0.5" stopColor="#c6f24c" />
          <stop offset="1" stopColor="#2b4dff" />
        </linearGradient>
        <pattern id="stars" width="20" height="20" patternUnits="userSpaceOnUse">
          <text x="2" y="14" fontSize="12" fill="#ffffff80">
            ★
          </text>
        </pattern>
        <pattern
          id="stripes"
          width="14"
          height="14"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(45)"
        >
          <rect width="6" height="14" fill="#ffffff40" />
        </pattern>
        <pattern id="mountains" width="40" height="20" patternUnits="userSpaceOnUse">
          <polygon points="0,20 10,5 20,20" fill="#ffffff40" />
          <polygon points="20,20 30,8 40,20" fill="#ffffff30" />
        </pattern>
        <pattern id="mandala" width="30" height="30" patternUnits="userSpaceOnUse">
          <circle cx="15" cy="15" r="6" fill="none" stroke="#ffffff60" />
          <circle cx="15" cy="15" r="2" fill="#ffffff60" />
        </pattern>
      </defs>

      {/* Sole */}
      <path
        d="M40 280 Q 60 320 130 325 L 470 325 Q 555 320 565 290 L 555 270 L 50 270 Z"
        fill={sole}
        stroke="#0a0a0a"
        strokeWidth="3"
      />
      {/* Sole accent */}
      <rect x="50" y="295" width="510" height="10" fill="#0a0a0a" opacity="0.15" />

      {/* Upper body */}
      <path
        d="M70 270 Q 80 180 180 160 L 260 150 Q 320 100 380 110 L 470 130 Q 540 145 555 220 L 555 270 Z"
        fill={upper}
        stroke="#0a0a0a"
        strokeWidth="3"
      />

      {/* Graphic overlay */}
      {graphic !== "None" && (
        <path
          d="M70 270 Q 80 180 180 160 L 260 150 Q 320 100 380 110 L 470 130 Q 540 145 555 220 L 555 270 Z"
          fill={`url(#${graphic.toLowerCase()})`}
        />
      )}

      {/* Heel */}
      <path
        d="M70 270 L 70 220 Q 95 195 130 200 L 130 270 Z"
        fill={upper}
        stroke="#0a0a0a"
        strokeWidth="3"
        opacity="0.9"
      />

      {/* Side panel / brand mark */}
      <g transform="translate(290 200) rotate(-12)">
        <rect x="-70" y="-18" width="140" height="36" rx="18" fill="#0a0a0a" />
        <text
          x="0"
          y="6"
          textAnchor="middle"
          fontFamily="Space Grotesk, sans-serif"
          fontWeight="700"
          fontSize="18"
          fill={sole}
        >
          {text || "KICKSTAR"}
        </text>
      </g>

      {/* Laces */}
      {[0, 1, 2, 3, 4].map((i) => (
        <line
          key={i}
          x1={210 + i * 35}
          y1={150 + i * 4}
          x2={250 + i * 35}
          y2={130 + i * 4}
          stroke={laceColor}
          strokeWidth="5"
          strokeLinecap="round"
        />
      ))}

      {/* Toe stitching */}
      <path
        d="M170 250 Q 250 215 340 220"
        fill="none"
        stroke="#0a0a0a"
        strokeWidth="2"
        strokeDasharray="4 4"
        opacity="0.6"
      />
    </motion.svg>
  );
}
