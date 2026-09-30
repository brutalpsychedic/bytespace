// Placeholder partner logos ("Logoipsum") — one glyph per variant.
const glyphs = {
  circle: <path d="M4 12a8 8 0 1 0 16 0 8 8 0 0 0-16 0Zm4 0h8M12 8v8" />,
  burst: <path d="M12 2v6M12 16v6M2 12h6M16 12h6M5 5l4 4M15 15l4 4M5 19l4-4M15 9l4-4" />,
  bolt: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="m13 6-5 7h4l-1 5 5-7h-4l1-5Z" />
    </>
  ),
  ring: (
    <>
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2c3 3 3 17 0 20M12 2c-3 3-3 17 0 20" />
    </>
  ),
};

export default function PartnerLogo({ variant }) {
  return (
    <span className="partner-logo">
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        {glyphs[variant]}
      </svg>
      Logoipsum
    </span>
  );
}
