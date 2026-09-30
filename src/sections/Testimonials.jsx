import TestimonialCard from '../components/TestimonialCard.jsx';
import { testimonials } from '../data/content.js';
import './Testimonials.css';

export default function Testimonials() {
  return (
    <section className="section testimonials">
      <div className="container">
        <div className="testimonials__header">
          <h2 className="testimonials__title">Discover What Our Community Is Saying</h2>
          <p className="testimonials__text">
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly
            from those who have experienced the transformative journey of learning and creating on our platform.
          </p>
        </div>

        <div className="testimonials__grid">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
