import AvatarStack from './AvatarStack.jsx';
import { LevelIcon, StarIcon } from './Icons.jsx';
import { learners } from '../data/people.js';
import './CourseCard.css';

// Course tile used in the course grid, the growth section and the auth pages.
export default function CourseCard({ course, className = '' }) {
  const { title, author, rating, level, lessons, duration, comments, price, learners: extra, image } = course;

  return (
    <article className={`course-card ${className}`.trim()}>
      <div className="course-card__media">
        <img src={image} alt="" loading="lazy" />
        <ul className="course-card__chips">
          <li>{lessons} Lessons</li>
          <li>{duration}</li>
          <li>{comments} Comments</li>
        </ul>
      </div>

      <div className="course-card__body">
        <div className="course-card__header">
          <h3 className="course-card__title" title={title}>
            {title}
          </h3>
          <span className="course-card__rating" aria-label={`Rated ${rating} out of 5`}>
            {rating} <StarIcon width={16} height={16} />
          </span>
        </div>
        <p className="course-card__author">
          by <span>{author}</span>
        </p>

        <div className="course-card__meta">
          <span className="course-card__level">
            <LevelIcon width={14} height={14} /> {level}
          </span>
          <AvatarStack people={learners} max={4} extra={extra} size={28} />
        </div>

        <p className="course-card__price">
          ${price}
          <small>/lifetime</small>
        </p>
      </div>
    </article>
  );
}
