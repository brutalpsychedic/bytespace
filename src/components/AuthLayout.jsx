import CourseCard from './CourseCard.jsx';
import Logo from './Logo.jsx';
import { Cone, Squiggle, Torus } from './Shapes.jsx';
import { HappyStudentsCard } from './StatCards.jsx';
import { courses } from '../data/courses.js';
import './AuthLayout.css';

const backCourse = courses.find((c) => c.id === 'digital-asset');
const frontCourse = courses.find((c) => c.id === 'big-data');

/**
 * Shared shell for Login and Signup: blue grid background, intro copy and
 * card collage on the left, the white form card (children) on the right.
 */
export default function AuthLayout({ introTitle, introText, eyebrow, title, children, footer }) {
  return (
    <div className="auth grid-bg">
      <div className="container auth__inner">
        <header className="auth__brand">
          <Logo showText={false} />
        </header>

        <section className="auth__intro">
          <p className="auth__intro-title">{introTitle}</p>
          <p className="auth__intro-text">{introText}</p>

          <div className="auth__showcase" aria-hidden="true">
            <CourseCard course={backCourse} className="auth__card auth__card--back" />
            <CourseCard course={frontCourse} className="auth__card auth__card--front" />
            <HappyStudentsCard tone="lime" className="auth__students" size={36} />
            <Torus className="auth__shape auth__shape--torus" />
            <Cone className="auth__shape auth__shape--cone" />
            <Squiggle tone="white" className="auth__shape auth__shape--squiggle" />
          </div>
        </section>

        <main className="auth-card">
          <p className="auth-card__eyebrow">{eyebrow}</p>
          <h1 className="auth-card__title">{title}</h1>
          {children}
          <p className="auth-card__switch">{footer}</p>
        </main>
      </div>
    </div>
  );
}
