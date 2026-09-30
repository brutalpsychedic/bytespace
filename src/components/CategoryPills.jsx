import { useState } from 'react';
import './CategoryPills.css';

// Row of selectable category chips. The parent owns the selected value
// (`active`) so it can filter courses; this component only reports clicks.
export default function CategoryPills({ categories, extraCategories = [], active, onChange }) {
  const [showMore, setShowMore] = useState(false);
  const visible = showMore ? [...categories, ...extraCategories] : categories;

  return (
    <div className="category-pills" role="group" aria-label="Filter courses by category">
      {visible.map((category) => (
        <button
          key={category}
          type="button"
          className={`category-pill ${category === active ? 'is-active' : ''}`}
          aria-pressed={category === active}
          onClick={() => onChange(category)}
        >
          {category}
        </button>
      ))}
      {extraCategories.length > 0 && (
        <button type="button" className="category-pill category-pill--more" onClick={() => setShowMore((s) => !s)}>
          {showMore ? '− Less' : '+ More'}
        </button>
      )}
    </div>
  );
}
