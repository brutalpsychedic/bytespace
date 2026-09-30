import Navbar from '../components/Navbar.jsx';
import SearchBar from '../components/SearchBar.jsx';
import { Cone, Squiggle, Torus } from '../components/Shapes.jsx';
import { CategoryCard, HappyStudentsCard, ProgressCard } from '../components/StatCards.jsx';
import { images } from '../data/images.js';
import './Hero.css';

export default function Hero({ onSearch }) {
  return (
    <section className="hero grid-bg" id="top">
      <Navbar />

      <Squiggle className="hero__shape hero__shape--squiggle-left" />
      <Torus className="hero__shape hero__shape--torus" />
      <Cone className="hero__shape hero__shape--cone" />
      <Squiggle className="hero__shape hero__shape--squiggle-right" />

      <div className="container hero__content">
        <h1 className="hero__title">Get Access to Hundreds Courses Available</h1>
        <p className="hero__text">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </p>
        <SearchBar onSearch={onSearch} />
      </div>

      <div className="hero__visual">
        <div className="hero__circle" aria-hidden="true" />
        <img className="hero__person" src={images.heroStudent} alt="Smiling student with headphones holding a laptop" />
        <CategoryCard className="hero__card hero__card--category" />
        <ProgressCard className="hero__card hero__card--progress" />
        <HappyStudentsCard className="hero__card hero__card--students" />
      </div>
    </section>
  );
}
