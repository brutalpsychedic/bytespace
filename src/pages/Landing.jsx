import { useState } from 'react';
import Footer from '../components/Footer.jsx';
import CreateManage from '../sections/CreateManage.jsx';
import CreatorCTA from '../sections/CreatorCTA.jsx';
import Discover from '../sections/Discover.jsx';
import Growth from '../sections/Growth.jsx';
import Hero from '../sections/Hero.jsx';
import LearningPaths from '../sections/LearningPaths.jsx';
import LogoStrip from '../sections/LogoStrip.jsx';
import Testimonials from '../sections/Testimonials.jsx';

export default function Landing() {
  // The search lives in the Hero but filters the course grid in Discover,
  // so the shared state sits here in their common parent ("lifting state up").
  const [query, setQuery] = useState('');

  function handleSearch(value) {
    setQuery(value);
    document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      <Hero onSearch={handleSearch} />
      <main>
        <LogoStrip />
        <Discover query={query} onClearQuery={() => setQuery('')} />
        <LearningPaths />
        <div className="soft-bg">
          <Growth />
          <CreateManage />
        </div>
        <CreatorCTA />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
