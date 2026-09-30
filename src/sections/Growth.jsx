import CourseCard from '../components/CourseCard.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { ProgressCard } from '../components/StatCards.jsx';
import { courses } from '../data/courses.js';
import { growthStats } from '../data/content.js';
import { images } from '../data/images.js';
import './Growth.css';

export default function Growth() {
  return (
    <section className="section growth">
      <div className="container growth__inner">
        <div>
          <SectionHeading
            align="left"
            title="Your Path to Professional Growth Starts Here!"
            text="Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need."
          />
          <dl className="growth__stats">
            {growthStats.map((stat) => (
              <div key={stat.label}>
                <dt>{stat.label}</dt>
                <dd>{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="growth__visual">
          <CourseCard course={courses[0]} className="growth__course" />
          <img className="growth__person" src={images.heroStudent} alt="" loading="lazy" />
          <ProgressCard className="growth__progress" />
        </div>
      </div>
    </section>
  );
}
