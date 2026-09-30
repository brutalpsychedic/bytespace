import { Link } from 'react-router-dom';
import useSvgId from '../hooks/useSvgId.js';
import './Logo.css';

// tone="light" → white wordmark (blue backgrounds), tone="dark" → ink wordmark.
export default function Logo({ tone = 'light', showText = true }) {
  const maskId = useSvgId('logo-mask');

  return (
    <Link to="/" className={`logo logo--${tone}`} aria-label="ByteSpace home">
      <svg className="logo__mark" viewBox="0 0 40 40" aria-hidden="true">
        <mask id={maskId}>
          <rect width="40" height="40" fill="white" />
          {/* The "play" triangle is cut out of the b's bowl. */}
          <path d="M20.5 18.5 30 25l-9.5 6.5v-13Z" fill="black" />
        </mask>
        <g mask={`url(#${maskId})`} style={{ fill: 'var(--lime)' }}>
          <rect x="3" y="3" width="11" height="34" rx="5.5" />
          <circle cx="24" cy="25" r="13" />
        </g>
      </svg>
      {showText && <span className="logo__text">ByteSpace</span>}
    </Link>
  );
}
