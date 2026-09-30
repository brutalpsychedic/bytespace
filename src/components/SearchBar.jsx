import { useState } from 'react';
import Button from './Button.jsx';
import { SearchIcon } from './Icons.jsx';
import './SearchBar.css';

// Controlled search input. Calls onSearch(query) when submitted.
export default function SearchBar({ onSearch, placeholder = 'Course, topic, creator' }) {
  const [query, setQuery] = useState('');

  function handleSubmit(event) {
    event.preventDefault(); // stop the browser reloading the page
    onSearch(query.trim());
  }

  return (
    <form className="search-bar" role="search" onSubmit={handleSubmit}>
      <label htmlFor="course-search" className="visually-hidden">
        Search courses
      </label>
      <SearchIcon className="search-bar__icon" width={18} height={18} />
      <input
        id="course-search"
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder={placeholder}
      />
      <Button type="submit" size="sm">
        Search
      </Button>
    </form>
  );
}
