import useSvgId from '../hooks/useSvgId.js';

// Decorative "3D" shapes from the design, drawn as SVG gradients.
// They are purely visual, so they are hidden from screen readers.
// Swap them for PNG exports from Figma if you want the exact render.

// Light → mid → dark stops, taken from the palette tokens in global.css.
const TONES = {
  lime: ['var(--secondary-200)', 'var(--secondary-400)', 'var(--secondary-600)'],
  white: ['var(--surface)', 'var(--neutral-50)', 'var(--neutral-200)'],
};

function Gradient({ id, tone }) {
  const [light, mid, dark] = TONES[tone];
  // CSS variables only work in the style prop, not in SVG attributes like stopColor="…".
  return (
    <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" style={{ stopColor: light }} />
      <stop offset="0.5" style={{ stopColor: mid }} />
      <stop offset="1" style={{ stopColor: dark }} />
    </linearGradient>
  );
}

export function Torus({ className = '', tone = 'lime' }) {
  const id = useSvgId('torus');
  return (
    <svg className={className} viewBox="0 0 200 200" aria-hidden="true">
      <defs>
        <Gradient id={id} tone={tone} />
      </defs>
      <circle cx="100" cy="100" r="66" fill="none" stroke={`url(#${id})`} strokeWidth="44" />
    </svg>
  );
}

export function Cone({ className = '', tone = 'lime' }) {
  const id = useSvgId('cone');
  return (
    <svg className={className} viewBox="0 0 200 200" aria-hidden="true">
      <defs>
        <Gradient id={id} tone={tone} />
      </defs>
      <path d="M118 8 190 178c-40 20-120 16-178-12L118 8Z" fill={`url(#${id})`} />
    </svg>
  );
}

export function Squiggle({ className = '', tone = 'lime' }) {
  const id = useSvgId('squiggle');
  return (
    <svg className={className} viewBox="0 0 180 260" aria-hidden="true">
      <defs>
        <Gradient id={id} tone={tone} />
      </defs>
      <path
        d="M30 30c70-20 110 30 50 60S40 160 110 150s40 60-40 80"
        fill="none"
        stroke={`url(#${id})`}
        strokeWidth="34"
        strokeLinecap="round"
      />
    </svg>
  );
}
