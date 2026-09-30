import PathCard from '../components/PathCard.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { learningPaths } from '../data/content.js';
import './LearningPaths.css';

export default function LearningPaths() {
  return (
    <section className="section learning-paths">
      <div className="container">
        <SectionHeading
          title="Explore Diverse Learning Paths at Bytespace"
          text="At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories."
        />
        <ul className="learning-paths__grid">
          {learningPaths.map((path) => (
            <li key={path.label}>
              <PathCard {...path} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
