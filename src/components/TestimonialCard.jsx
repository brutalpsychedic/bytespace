import Avatar from './Avatar.jsx';
import './TestimonialCard.css';

export default function TestimonialCard({ name, role, quote, color, avatar }) {
  return (
    <figure className="testimonial-card">
      <Avatar name={name} src={avatar} color={color} size={56} />
      <figcaption>
        <h3 className="testimonial-card__name">{name}</h3>
        <p className="testimonial-card__role">{role}</p>
      </figcaption>
      <blockquote className="testimonial-card__quote">“{quote}”</blockquote>
    </figure>
  );
}
