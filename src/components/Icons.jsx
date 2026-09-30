// Small inline SVG icon set. Icons inherit colour from the text (currentColor)
// and accept any SVG prop, e.g. <SearchIcon width={16} />.

const stroke = {
  width: 20,
  height: 20,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
};

const solid = { width: 20, height: 20, viewBox: '0 0 24 24', fill: 'currentColor', 'aria-hidden': true };

export const SearchIcon = (props) => (
  <svg {...stroke} {...props}>
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.5-3.5" />
  </svg>
);

export const BagIcon = (props) => (
  <svg {...stroke} {...props}>
    <path d="M5 8h14l-1.2 12H6.2L5 8Z" />
    <path d="M9 8a3 3 0 0 1 6 0" />
  </svg>
);

export const MenuIcon = (props) => (
  <svg {...stroke} {...props}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const CloseIcon = (props) => (
  <svg {...stroke} {...props}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

export const CheckIcon = (props) => (
  <svg {...stroke} strokeWidth={3} {...props}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export const StarIcon = (props) => (
  <svg {...solid} {...props}>
    <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z" />
  </svg>
);

export const LevelIcon = (props) => (
  <svg {...solid} {...props}>
    <rect x="4" y="14" width="3.5" height="6" rx="1" />
    <rect x="10.25" y="9" width="3.5" height="11" rx="1" />
    <rect x="16.5" y="4" width="3.5" height="16" rx="1" />
  </svg>
);

export const PenIcon = (props) => (
  <svg {...stroke} {...props}>
    <path d="m12 19 7-7 3 3-7 7-3-3Z" />
    <path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5Z" />
    <path d="m2 2 7.6 7.6" />
    <circle cx="11" cy="11" r="2" />
  </svg>
);

export const CodeIcon = (props) => (
  <svg {...stroke} {...props}>
    <path d="m16 18 6-6-6-6M8 6l-6 6 6 6" />
  </svg>
);

export const MonitorIcon = (props) => (
  <svg {...stroke} {...props}>
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <path d="M8 21h8M12 17v4" />
  </svg>
);

export const BriefcaseIcon = (props) => (
  <svg {...stroke} {...props}>
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2M2 13h20" />
  </svg>
);

export const MegaphoneIcon = (props) => (
  <svg {...stroke} {...props}>
    <path d="m3 11 18-5v12L3 14v-3Z" />
    <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
  </svg>
);

export const CameraIcon = (props) => (
  <svg {...stroke} {...props}>
    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3Z" />
    <circle cx="12" cy="13" r="3" />
  </svg>
);

export const FacebookIcon = (props) => (
  <svg {...solid} {...props}>
    <path d="M9.1 23.7v-8H6.6V12h2.5v-1.6c0-4.1 1.8-6 5.9-6 .8 0 2.1.2 2.6.3v3.3h-1.4c-1.9 0-2.4.7-2.4 2.5V12h3.7l-.6 3.7h-3.1V24C19.4 23.2 24 18.2 24 12 24 5.4 18.6 0 12 0S0 5.4 0 12c0 5.6 3.9 10.4 9.1 11.7Z" />
  </svg>
);

export const GoogleIcon = (props) => (
  <svg {...solid} {...props}>
    <path d="M12.5 10.9v3.3h7.8c-.2 1.8-.9 3.2-1.8 4.1-1.1 1.1-2.9 2.4-6 2.4-4.8 0-8.6-3.9-8.6-8.7s3.8-8.7 8.6-8.7c2.6 0 4.5 1 5.9 2.3l2.3-2.3C18.7 1.4 16.1 0 12.5 0 5.9 0 .3 5.4.3 12s5.6 12 12.2 12c3.6 0 6.3-1.2 8.4-3.4 2.2-2.2 2.8-5.2 2.8-7.7 0-.8 0-1.5-.2-2H12.5Z" />
  </svg>
);

// Lets data files refer to icons by name (see data/content.js).
export const iconsByName = {
  pen: PenIcon,
  code: CodeIcon,
  monitor: MonitorIcon,
  briefcase: BriefcaseIcon,
  megaphone: MegaphoneIcon,
  camera: CameraIcon,
};
