import './Avatar.css';

function initials(name) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

// Shows a photo when `src` is given, otherwise coloured initials.
export default function Avatar({ name, src, color = 'var(--neutral-400)', size = 40, className = '' }) {
  const style = { '--avatar-size': `${size}px`, backgroundColor: color };

  return (
    <span className={`avatar ${className}`.trim()} style={style} title={name}>
      {src ? <img src={src} alt={name} /> : <span aria-hidden="true">{initials(name)}</span>}
      {!src && <span className="visually-hidden">{name}</span>}
    </span>
  );
}
