const O = "#F15A22";

/** An isometric slab: top face, left face, right face. */
function Slab({ x, y, w, d, h, fill = "#fff" }: { x: number; y: number; w: number; d: number; h: number; fill?: string }) {
  // (x, y) is the top corner of the top face.
  const top = `${x},${y} ${x + w},${y + w / 2} ${x + w - d},${y + w / 2 + d / 2} ${x - d},${y + d / 2}`;
  const left = `${x - d},${y + d / 2} ${x + w - d},${y + w / 2 + d / 2} ${x + w - d},${y + w / 2 + d / 2 + h} ${x - d},${y + d / 2 + h}`;
  const right = `${x + w - d},${y + w / 2 + d / 2} ${x + w},${y + w / 2} ${x + w},${y + w / 2 + h} ${x + w - d},${y + w / 2 + d / 2 + h}`;
  return (
    <g stroke={O} strokeWidth="1.4" strokeLinejoin="round">
      <polygon points={left} fill={fill} />
      <polygon points={right} fill={fill} />
      <polygon points={top} fill={fill} />
    </g>
  );
}

function Wallet({ x, y }: { x: number; y: number }) {
  return (
    <g>
      <Slab x={x} y={y + 40} w={90} d={90} h={8} />
      <Slab x={x} y={y + 22} w={90} d={90} h={8} />
      <Slab x={x + 10} y={y} w={70} d={70} h={16} />
      <path d={`M${x - 20} ${y + 28} l20 -10 l20 10`} stroke={O} strokeWidth="1.2" fill="none" />
      <circle cx={x + 10} cy={y + 30} r="5" fill={O} />
    </g>
  );
}

function Pipe({ x1, x2, y, label }: { x1: number; x2: number; y: number; label: [string, string] }) {
  const mid = (x1 + x2) / 2;
  return (
    <g fontFamily="inherit" fontSize="10" fill={O}>
      <line x1={x1} x2={x2} y1={y} y2={y} stroke={O} strokeDasharray="3 4" />
      <path d={`M${x2 - 6} ${y - 4} L${x2} ${y} L${x2 - 6} ${y + 4}`} stroke={O} fill="none" />
      <line x1={x1} x2={x2} y1={y + 16} y2={y + 16} stroke={O} strokeDasharray="3 4" />
      <path d={`M${x1 + 6} ${y + 12} L${x1} ${y + 16} L${x1 + 6} ${y + 20}`} stroke={O} fill="none" />
      <circle cx={mid} cy={y + 8} r="7" fill="#fff" stroke={O} />
      <circle cx={mid} cy={y + 8} r="2.5" fill={O} />
      <text x={mid + 18} y={y - 5}>{label[0]}</text>
      <text x={mid - 50} y={y + 31}>{label[1]}</text>
    </g>
  );
}

export function FlowDiagram({
  left,
  right,
  className,
  topLabels,
}: {
  left: string;
  right: string;
  className?: string;
  /** Optional captions above and below each side (e.g. "Client" / "Escrowed funds"). */
  topLabels?: { leftTop: string; leftBottom: string; rightTop: string; rightBottom: string };
}) {
  return (
    <svg viewBox="0 0 760 250" className={className} fill="none" aria-hidden="true">
      {/* dotted halo behind each side */}
      {[100, 660].map((cx) => (
        <g key={cx} fill={O} opacity="0.35">
          {Array.from({ length: 40 }, (_, i) => (
            <rect key={i} x={cx - 40 + (i % 10) * 8 + (i % 3)} y={20 + Math.floor(i / 10) * 8} width="4" height="4" />
          ))}
        </g>
      ))}
      <Wallet x={100} y={70} />
      <Wallet x={660} y={70} />
      <Pipe x1={200} x2={290} y={110} label={["drip", "proof"]} />
      <Pipe x1={470} x2={560} y={110} label={["drip", "proof"]} />
      {/* engine: three stacked slabs with the mark on top */}
      <Slab x={380} y={120} w={100} d={100} h={22} />
      <Slab x={380} y={92} w={100} d={100} h={22} />
      <Slab x={380} y={60} w={100} d={100} h={26} />
      <g fontSize="11" fill={O} fontFamily="monospace" opacity="0.8">
        <text x="330" y="160" transform="rotate(26 330 160)">0x1237 · 4663</text>
        <text x="420" y="178" transform="rotate(-26 420 178)">stream · rule</text>
      </g>
      <path d="M380 88 C372 96 369 102 369 106 a11 11 0 0 0 22 0 c0 -4 -3 -10 -11 -18 Z" fill={O} />
      <line x1="374" x2="386" y1="106" y2="106" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" />
      {topLabels && (
        <g fontSize="15" fill="#43403E" fontWeight="600">
          <text x="30" y="14">{topLabels.leftTop}</text>
          <text x="600" y="14">{topLabels.rightTop}</text>
          <text x="30" y="246">{topLabels.leftBottom}</text>
          <text x="600" y="246">{topLabels.rightBottom}</text>
        </g>
      )}
      {!topLabels && (
        <g fontSize="12" fontWeight="600">
          <rect x="52" y="200" width="96" height="22" fill={O} />
          <text x="100" y="215" fill="#fff" textAnchor="middle">{left}</text>
          <rect x="612" y="200" width="96" height="22" fill={O} />
          <text x="660" y="215" fill="#fff" textAnchor="middle">{right}</text>
        </g>
      )}
    </svg>
  );
}
