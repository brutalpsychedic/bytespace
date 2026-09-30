import { useState } from 'react';
import CategoryPills from '../components/CategoryPills.jsx';
import CourseCard from '../components/CourseCard.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { FEATURED, categories, courses, extraCategories } from '../data/courses.js';
import './Discover.css';

// Course catalogue: category filter + search results from the hero search bar.
export default function Discover({ query, onClearQuery }) {
  const [activeCategory, setActiveCategory] = useState(FEATURED);

  const search = query.toLowerCase();
  const visibleCourses = courses.filter((course) => {
    const inCategory = activeCategory === FEATURED || course.categories.includes(activeCategory);
    const matchesSearch = course.title.toLowerCase().includes(search);
    return inCategory && matchesSearch;
  });

  return (
    <section className="section discover" id="courses">
      <div className="container">
        <SectionHeading
          title={
            <>
              Discover Your Passion,
              <br /> Build Your Skills
            </>
          }
          text="At ByteSpace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life."
        />

        <div className="discover__filters">
          <CategoryPills
            categories={categories}
            extraCategories={extraCategories}
            active={activeCategory}
            onChange={setActiveCategory}
          />
        </div>

        {query && (
          <p className="discover__status" aria-live="polite">
            Showing results for “{query}”.{' '}
            <button type="button" onClick={onClearQuery}>
              Clear search
            </button>
          </p>
        )}

        {visibleCourses.length > 0 ? (
          <div className="discover__grid">
            {visibleCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <p className="discover__empty">No courses here yet — try another category or search term.</p>
        )}
      </div>
    </section>
  );
}
