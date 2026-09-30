import AvatarStack from './AvatarStack.jsx';
import { StarIcon } from './Icons.jsx';
import { learners } from '../data/people.js';
import './StatCards.css';

// The small floating cards layered over photos in the hero, growth,
// creator and auth sections. The parent positions them via `className`.

export function ProgressCard({ label = 'Learning Progress', value = 55, className = '' }) {
  return (
    <div className={`stat-card ${className}`}>
      <p className="stat-card__label">{label}</p>
      <p className="stat-card__value">{value}%</p>
      <div
        className="stat-card__bar"
        role="progressbar"
        aria-label={label}
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <span style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

export function HappyStudentsCard({
  tone = 'white',
  rating = 4.5,
  reviews = 240,
  extra = '2K+',
  people = learners,
  size = 30,
  className = '',
}) {
  return (
    <div className={`stat-card stat-card--${tone} ${className}`}>
      <p className="stat-card__title">Happy Students</p>
      <p className="stat-card__rating">
        <strong>{rating}</strong> <span>({reviews})</span>
        <StarIcon width={13} height={13} />
      </p>
      <AvatarStack people={people} extra={extra} size={size} />
    </div>
  );
}

export function CategoryCard({ title = 'UI/UX Design', meta = '200 Courses · 1000+ Students', className = '' }) {
  return (
    <div className={`stat-card ${className}`}>
      <p className="stat-card__title">{title}</p>
      <p className="stat-card__label">{meta}</p>
    </div>
  );
}

export function RevenueCard({ label, sub, value, badge, className = '' }) {
  return (
    <div className={`stat-card stat-card--blue ${className}`}>
      <p className="stat-card__title">{label}</p>
      <p className="stat-card__label">{sub}</p>
      <p className="stat-card__money">{value}</p>
      {badge && <span className="stat-card__badge">{badge}</span>}
    </div>
  );
}
