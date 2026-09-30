import { iconsByName } from './Icons.jsx';
import './PathCard.css';

// Tile in the "Explore Diverse Learning Paths" row.
export default function PathCard({ label, icon, href = '#courses' }) {
  const Icon = iconsByName[icon];

  return (
    <a className="path-card" href={href}>
      <span className="path-card__icon">
        <Icon width={22} height={22} />
      </span>
      {label}
    </a>
  );
}
