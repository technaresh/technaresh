/** Inline SVG doodles — teal strokes, hand-sketched feel. */

export function HeroNetworkDoodle({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 900 520"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <g
        className="text-primary"
        stroke="currentColor"
        strokeWidth="1.15"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.9"
      >
        <path d="M48 120 Q120 88 198 124 T312 108 Q380 72 458 118" />
        <path d="M72 268 Q148 232 224 258 Q302 218 388 252 Q442 228 512 264" />
        <path d="M118 392 Q196 348 274 384 Q352 352 430 396 Q498 368 572 404" />
        <path d="M198 124 Q236 188 224 258" />
        <path d="M312 108 Q338 178 388 252" />
        <path d="M458 118 Q486 196 512 264" />
        <path d="M224 258 Q292 322 274 384" />
        <path d="M388 252 Q418 328 430 396" />
        <path d="M512 264 Q548 334 572 404" />
        <path d="M620 96 Q688 132 748 104 Q812 76 862 128" />
        <path d="M640 240 Q702 208 768 236 Q828 196 878 252" />
        <path d="M612 380 Q692 348 762 392 Q832 364 852 432" />
        <path d="M748 104 Q756 178 768 236" />
        <path d="M862 128 Q842 200 878 252" />
        <path d="M768 236 Q772 312 762 392" />
        <circle cx="198" cy="124" r="5" fill="none" />
        <circle cx="312" cy="108" r="5" fill="none" />
        <circle cx="224" cy="258" r="5" fill="none" />
        <circle cx="388" cy="252" r="5" fill="none" />
        <circle cx="512" cy="264" r="5" fill="none" />
        <circle cx="274" cy="384" r="5" fill="none" />
        <circle cx="748" cy="104" r="5" fill="none" />
        <circle cx="768" cy="236" r="5" fill="none" />
        <circle cx="762" cy="392" r="5" fill="none" />
        <rect
          x="598"
          y="200"
          width="56"
          height="36"
          rx="6"
          transform="rotate(-8 626 218)"
        />
        <path d="M606 218h40M626 206v24" />
      </g>
    </svg>
  )
}

export function IconCloudNode({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M8 26c0-4 3-7 7-7h1.2c1-3.5 4-6 7.8-6 4.6 0 8.2 3.7 8.2 8.2 0 .2 0 .4-.1.6h.9c2.8 0 5 2.2 5 5s-2.2 5-5 5H15c-3.9 0-7-3.1-7-7z"
        className="stroke-primary"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="20" cy="14" r="2.2" className="stroke-primary" strokeWidth="1.2" />
      <path
        d="M14 22h12M20 18v8"
        className="stroke-primary/70"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function IconAIBrain({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M20 8c-4 0-7 2.8-7 6.5 0 1.2.3 2.3.9 3.2-1 .9-1.6 2.1-1.6 3.5 0 2.6 2 4.7 4.5 4.9.5 2.6 3 4.4 5.7 4.4h.5c2.7 0 5.2-1.8 5.7-4.4 2.5-.2 4.5-2.3 4.5-4.9 0-1.4-.6-2.6-1.6-3.5.6-.9.9-2 .9-3.2C27 10.8 24 8 20 8z"
        className="stroke-primary"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 20h8M20 16v8M14 26c1.5 1 3.2 1.5 6 1.5M26 26c-1.5 1-3.2 1.5-6 1.5"
        className="stroke-primary/75"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function IconWrenchBuild({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M12 28l-2 2 3 3 2-2M14 26l8-8"
        className="stroke-primary"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 14c0-3.3 2.7-6 6-6 1 0 2 .2 2.8.7l-3.5 3.5 1.4 1.4 3.5-3.5c.5.8.8 1.8.8 2.8 0 3.3-2.7 6-6 6-1.5 0-2.9-.6-3.9-1.5L14 26"
        className="stroke-primary/85"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function ProjectSchematic({ projectId, className }) {
  const stroke = "currentColor"
  const common = {
    fill: "none",
    stroke,
    strokeWidth: 1.1,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  }

  const box = (x, y, w, h, t) => (
    <g key={t}>
      <rect x={x} y={y} width={w} height={h} rx={3} {...common} />
      <text
        x={x + w / 2}
        y={y + h / 2 + 2.5}
        textAnchor="middle"
        fill="currentColor"
        className="text-muted-foreground"
        style={{ fontSize: "5.5px", fontFamily: "JetBrains Mono, ui-monospace, monospace" }}
      >
        {t}
      </text>
    </g>
  )

  const arrow = (x1, y1, x2, y2) => (
    <path d={`M${x1} ${y1} L${x2} ${y2}`} {...common} />
  )

  if (projectId === "genai-gateway") {
    return (
      <svg
        className={className}
        viewBox="0 0 160 48"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <g className="text-primary/85">
          {box(4, 12, 28, 22, "usr")}
          {arrow(34, 23, 44, 23)}
          {box(44, 8, 36, 30, "gw")}
          {arrow(82, 23, 92, 23)}
          {box(92, 10, 38, 26, "brk")}
          {arrow(132, 23, 138, 23)}
          <path d="M138 18l10 5-10 5V18z" {...common} />
        </g>
      </svg>
    )
  }

  if (projectId === "mcp-tools") {
    return (
      <svg
        className={className}
        viewBox="0 0 160 48"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <g className="text-primary/85">
          {box(6, 14, 30, 20, "LLM")}
          {arrow(38, 24, 48, 24)}
          {box(48, 10, 34, 28, "MCP")}
          {arrow(84, 24, 94, 24)}
          {box(94, 12, 32, 24, "API")}
          {arrow(128, 24, 136, 24)}
          <circle cx="146" cy="24" r="6" {...common} />
        </g>
      </svg>
    )
  }

  return (
    <svg
      className={className}
      viewBox="0 0 160 48"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <g className="text-primary/85">
        {box(8, 14, 26, 20, "evt")}
        {arrow(36, 24, 46, 24)}
        {box(46, 10, 36, 28, "ing")}
        {arrow(84, 24, 94, 24)}
        {box(94, 12, 32, 24, "SQL")}
        {arrow(128, 24, 136, 24)}
        <rect
          x={138}
          y={18}
          width={14}
          height={12}
          rx={2}
          fill="none"
          stroke="currentColor"
          strokeWidth={1.1}
        />
      </g>
    </svg>
  )
}

export function AwsLogoMark({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M14 32c6 3 14 3 20 0M18 28l6-14 6 14M12 20h8M28 20h8"
        className="stroke-foreground/90"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 36h32"
        className="stroke-primary/80"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function GithubLogoMark({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M24 8C14 8 8 15.5 8 24c0 7 4.5 13 11 15 .8.2 1.1-.4 1.1-.8v-3c-4.5 1-5.5-2.2-5.5-2.2-.7-1.9-1.8-2.4-1.8-2.4-1.5-1 .1-1 .1-1 1.6.1 2.5 1.7 2.5 1.7 1.5 2.5 3.8 1.8 4.7 1.4.2-1 .6-1.8 1-2.2-3.6-.4-7.4-1.8-7.4-8.2 0-1.8.6-3.2 1.7-4.4-.2-.4-.7-2 .2-4.2 0 0 1.4-.4 4.5 1.7 1.3-.4 2.7-.5 4-.5 1.4 0 2.7.2 4 .5 3.1-2.1 4.5-1.7 4.5-1.7.9 2.2.3 3.8.2 4.2 1 1.1 1.7 2.6 1.7 4.4 0 6.4-3.8 7.8-7.4 8.2.6.5 1.1 1.5 1.1 3v4.5c0 .5.3 1 1.1.8 6.5-2 11-8 11-15C40 15.5 34 8 24 8z"
        className="stroke-foreground/85"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function ContributionHeatmapDecor({ className }) {
  const cols = 12
  const rows = 4
  const cells = []
  const levels = [0.08, 0.14, 0.22, 0.32, 0.45]
  let n = 0
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const level = levels[(n * 7 + r * 3 + c * 5) % levels.length]
      cells.push(
        <rect
          key={`${r}-${c}`}
          x={4 + c * 7}
          y={4 + r * 7}
          width={5}
          height={5}
          rx={1}
          className="fill-primary"
          opacity={level}
        />
      )
      n++
    }
  }
  return (
    <svg
      className={className}
      viewBox="0 0 100 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      {cells}
    </svg>
  )
}

export function ContactArrowDoodle({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 72 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <g className="text-primary" stroke="currentColor" strokeLinecap="round">
        <path
          d="M6 10 Q26 6 42 18 T64 26"
          strokeWidth="1.35"
          fill="none"
          className="motion-reduce:animate-none motion-reduce:opacity-90 motion-safe:animate-arrow-frame-a"
        />
        <path
          d="M6 12 Q26 10 42 22 T64 30"
          strokeWidth="1.35"
          fill="none"
          className="motion-reduce:animate-none motion-reduce:opacity-90 motion-safe:animate-arrow-frame-b"
        />
        <path
          d="M48 34l14-2-8 12"
          strokeWidth="1.45"
          strokeLinejoin="round"
          fill="none"
        />
      </g>
    </svg>
  )
}
