/*
 * Orange line illustrations drawn in code. Each one is seeded, so the server
 * and the browser draw the same picture and the page never shifts.
 */

const O = "#F15A22";

function rng(seed: number) {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

function dropPath(cx: number, cy: number, k: number) {
  return `M${cx} ${cy - k} C${cx + k * 0.25} ${cy - k * 0.55} ${cx + k * 0.62} ${cy - k * 0.1} ${cx + k * 0.62} ${cy + k * 0.28} A${k * 0.62} ${k * 0.62} 0 0 1 ${cx - k * 0.62} ${cy + k * 0.28} C${cx - k * 0.62} ${cy - k * 0.1} ${cx - k * 0.25} ${cy - k * 0.55} ${cx} ${cy - k} Z`;
}

type ArtProps = { className?: string; seed?: number };

/** Connected wallets and hubs: people paid through a shared network. */
export function NetworkArt({ className, seed = 3 }: ArtProps) {
  const r = rng(seed);
  const hubs = Array.from({ length: 6 }, (_, i) => ({ x: 90 + (i % 3) * 150 + r() * 40, y: 120 + Math.floor(i / 3) * 150 + r() * 40 }));
  const leaves = hubs.flatMap((h) =>
    Array.from({ length: 4 }, () => {
      const a = r() * Math.PI * 2;
      const d = 55 + r() * 45;
      return { hx: h.x, hy: h.y, x: h.x + Math.cos(a) * d, y: h.y + Math.sin(a) * d, big: r() > 0.6 };
    }),
  );
  const hex = (x: number, y: number, s: number) =>
    Array.from({ length: 6 }, (_, i) => `${x + s * Math.cos((Math.PI / 3) * i)},${y + s * Math.sin((Math.PI / 3) * i)}`).join(" ");
  return (
    <svg viewBox="0 0 560 420" className={className} fill="none" aria-hidden="true">
      {hubs.slice(1).map((h, i) => (
        <line key={`hl${i}`} x1={hubs[i].x} y1={hubs[i].y} x2={h.x} y2={h.y} stroke={O} strokeWidth="1.4" />
      ))}
      {leaves.map((l, i) => (
        <line key={`l${i}`} x1={l.hx} y1={l.hy} x2={l.x} y2={l.y} stroke={O} strokeWidth="1" />
      ))}
      {hubs.map((h, i) => (
        <polygon key={`h${i}`} points={hex(h.x, h.y, 17)} fill="#fff" stroke={O} strokeWidth="1.6" />
      ))}
      {leaves.map((l, i) =>
        l.big ? (
          <g key={`p${i}`}>
            <circle cx={l.x} cy={l.y} r="13" fill="#fff" stroke={O} strokeWidth="1.4" />
            <path d={dropPath(l.x, l.y + 1, 8)} fill={O} />
          </g>
        ) : (
          <circle key={`p${i}`} cx={l.x} cy={l.y} r={5 + (i % 3)} fill={i % 2 ? O : "#fff"} stroke={O} strokeWidth="1.2" />
        ),
      )}
    </svg>
  );
}

/** Drops falling into an open palm of ripples: fees earned as money moves. */
export function RippleArt({ className, seed = 7 }: ArtProps) {
  const r = rng(seed);
  const pts = Array.from({ length: 90 }, () => ({ x: 40 + r() * 480, y: 250 + r() * 130 }));
  return (
    <svg viewBox="0 0 560 420" className={className} fill="none" aria-hidden="true">
      {[1, 2, 3, 4, 5, 6, 7].map((i) => (
        <ellipse key={i} cx="280" cy="320" rx={i * 36} ry={i * 10} stroke={O} strokeWidth={i % 3 === 0 ? 2.2 : 1} opacity={1 - i * 0.1} />
      ))}
      {pts.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r={1 + (i % 3) * 0.7} fill={O} opacity={0.35 + (i % 5) * 0.12} />
      ))}
      {[
        [300, 70, 34],
        [205, 150, 26],
        [360, 185, 22],
        [290, 245, 16],
      ].map(([x, y, k], i) => (
        <g key={`d${i}`}>
          <path d={dropPath(x, y, k)} stroke={O} strokeWidth="1.6" fill="#fff" />
          <path d={dropPath(x, y + k * 0.12, k * 0.62)} stroke={O} strokeWidth="1" opacity="0.6" />
          <line x1={x - k * 0.3} x2={x + k * 0.3} y1={y + k * 0.3} y2={y + k * 0.3} stroke={O} strokeWidth="2" strokeLinecap="round" />
        </g>
      ))}
    </svg>
  );
}

/** Isometric shop counter built from triangles: the storefront that gets paid. */
export function StoreArt({ className, seed = 11 }: ArtProps) {
  const r = rng(seed);
  const pts: [number, number][] = [];
  for (let x = 60; x <= 500; x += 40) for (let y = 110; y <= 360; y += 40) pts.push([x + (r() - 0.5) * 22, y + (r() - 0.5) * 22]);
  const inShape = (x: number, y: number) => y > 150 || (x > 100 && x < 460);
  const tris: string[] = [];
  for (let i = 0; i < pts.length; i++) {
    const [x, y] = pts[i];
    if (!inShape(x, y)) continue;
    const right = pts[i + 7];
    const down = pts[i + 1];
    if (right && down && (i + 1) % 7 !== 0) tris.push(`${x},${y} ${right[0]},${right[1]} ${down[0]},${down[1]}`);
  }
  return (
    <svg viewBox="0 0 560 420" className={className} fill="none" aria-hidden="true">
      <path d="M40 150 L280 60 L520 150 Z" stroke={O} strokeWidth="1.6" />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <path key={i} d={`M${60 + i * 80} 150 q40 36 80 0`} stroke={O} strokeWidth="1.4" />
      ))}
      {tris.map((t, i) => (
        <polygon key={i} points={t} stroke={O} strokeWidth="0.8" opacity={0.55 + (i % 4) * 0.1} />
      ))}
      {pts.filter(([x, y]) => inShape(x, y)).map(([x, y], i) => (
        <circle key={`c${i}`} cx={x} cy={y} r="2.2" fill={O} />
      ))}
      {[150, 250, 350].map((x) => (
        <path key={x} d={`M${x} 360 V250 a30 30 0 0 1 60 0 V360`} stroke={O} strokeWidth="2.4" fill="#fff" />
      ))}
      <rect x="40" y="360" width="480" height="18" stroke={O} strokeWidth="1.6" />
      <rect x="20" y="378" width="520" height="18" stroke={O} strokeWidth="1.6" />
    </svg>
  );
}

/** Wire globe carrying drops: money that moves across borders. */
export function GlobeArt({ className, seed = 5 }: ArtProps) {
  const r = rng(seed);
  const cx = 280,
    cy = 190,
    R = 130;
  const nodes = Array.from({ length: 34 }, () => {
    const a = r() * Math.PI * 2;
    const d = Math.sqrt(r()) * R;
    return { x: cx + Math.cos(a) * d, y: cy + Math.sin(a) * d * 0.95 };
  });
  return (
    <svg viewBox="0 0 560 420" className={className} fill="none" aria-hidden="true">
      {[-4, -3, -2, -1, 0, 1, 2, 3, 4].map((i) => (
        <ellipse key={`m${i}`} cx={cx} cy={cy} rx={Math.abs(i) * 30 + 2} ry={R} stroke={O} strokeWidth="0.8" opacity="0.45" />
      ))}
      {[-3, -2, -1, 0, 1, 2, 3].map((i) => {
        const y = cy + i * 36;
        const rx = Math.sqrt(Math.max(0, R * R - (y - cy) ** 2));
        return <ellipse key={`p${i}`} cx={cx} cy={y} rx={rx} ry={rx * 0.14} stroke={O} strokeWidth="0.8" opacity="0.45" />;
      })}
      <circle cx={cx} cy={cy} r={R} stroke={O} strokeWidth="1.8" />
      {nodes.slice(1).map((n, i) => (i % 2 ? <line key={`l${i}`} x1={nodes[i].x} y1={nodes[i].y} x2={n.x} y2={n.y} stroke={O} strokeWidth="0.8" /> : null))}
      {nodes.map((n, i) => (
        <circle key={`n${i}`} cx={n.x} cy={n.y} r={i % 4 === 0 ? 3.4 : 2} fill={O} />
      ))}
      {nodes.slice(0, 8).map((n, i) => (
        <g key={`c${i}`}>
          <circle cx={n.x} cy={n.y} r="15" fill="#fff" stroke={O} strokeWidth="1.6" />
          <path d={dropPath(n.x, n.y + 1, 9)} fill={O} />
        </g>
      ))}
      {[1, 2, 3, 4].map((i) => (
        <ellipse key={`g${i}`} cx={cx} cy={350} rx={90 + i * 40} ry={14 + i * 7} stroke={O} strokeWidth={i === 2 ? 3 : 1} opacity={1 - i * 0.18} />
      ))}
    </svg>
  );
}

/** Concentric dials: a rule engine ticking over. */
export function RingsArt({ className }: ArtProps) {
  const ticks = Array.from({ length: 48 }, (_, i) => (i / 48) * Math.PI * 2);
  return (
    <svg viewBox="0 0 420 420" className={className} fill="none" aria-hidden="true">
      <g transform="translate(210 210)">
        {ticks.map((a, i) => (
          <circle key={i} cx={Math.cos(a) * 185} cy={Math.sin(a) * 185} r="2.2" fill={O} opacity={i % 3 ? 0.6 : 1} />
        ))}
        <circle r="160" stroke={O} strokeWidth="1" />
        <circle r="140" stroke={O} strokeWidth="1.4" strokeDasharray="120 40 30 60" />
        <circle r="118" stroke={O} strokeWidth="9" strokeDasharray="210 50 90 40 170 60" />
        <circle r="96" stroke={O} strokeWidth="1" />
        <circle r="82" stroke={O} strokeWidth="1" strokeDasharray="2 5" />
        <path d="M-150 -130 L-60 -40 M150 130 L60 40 M-200 0 H-165 M165 0 H230 M0 -200 V-165" stroke={O} strokeWidth="1.2" />
        <path d="M-120 -170 A210 210 0 0 1 -40 -205 L-30 -170 A175 175 0 0 0 -100 -140 Z" stroke={O} strokeWidth="1" />
        <path d="M60 170 A180 180 0 0 1 -40 175 L-45 205 A210 210 0 0 0 70 200 Z" stroke={O} strokeWidth="1" />
        <path d={dropPath(0, 4, 34)} fill={O} opacity="0.9" />
      </g>
    </svg>
  );
}

/** Wire sphere of drops over a glowing base: money fit for the chain. */
export function SphereArt({ className, seed = 9 }: ArtProps) {
  const r = rng(seed);
  const pts = Array.from({ length: 40 }, () => {
    const a = r() * Math.PI * 2;
    const d = Math.sqrt(r()) * 120;
    return { x: 250 + Math.cos(a) * d, y: 160 + Math.sin(a) * d };
  });
  return (
    <svg viewBox="0 0 500 420" className={className} fill="none" aria-hidden="true">
      {pts.map((p, i) =>
        pts.slice(i + 1, i + 4).map((q, j) => <line key={`${i}-${j}`} x1={p.x} y1={p.y} x2={q.x} y2={q.y} stroke={O} strokeWidth="0.7" opacity="0.6" />),
      )}
      {pts.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r={i % 5 === 0 ? 3.5 : 2} fill={O} />
      ))}
      {pts.slice(0, 9).map((p, i) => (
        <g key={`d${i}`}>
          <circle cx={p.x} cy={p.y} r={i % 3 === 0 ? 20 : 14} fill="#fff" stroke={O} strokeWidth="1.6" />
          <path d={dropPath(p.x, p.y + 1, i % 3 === 0 ? 12 : 8)} fill={O} />
        </g>
      ))}
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <ellipse key={`e${i}`} cx="250" cy="330" rx={30 + i * 34} ry={8 + i * 9} stroke={O} strokeWidth={i === 2 ? 5 : 1} opacity={1 - i * 0.12} />
      ))}
    </svg>
  );
}

const ARTS = { network: NetworkArt, ripple: RippleArt, store: StoreArt, globe: GlobeArt, rings: RingsArt, sphere: SphereArt };
export type ArtName = keyof typeof ARTS;

export function LineArt({ name, className, seed }: { name: ArtName; className?: string; seed?: number }) {
  const Art = ARTS[name];
  return <Art className={className} seed={seed} />;
}
