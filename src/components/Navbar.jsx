import { useState } from 'react';
import Button from './Button.jsx';
import Logo from './Logo.jsx';
import { BagIcon, CloseIcon, MenuIcon } from './Icons.jsx';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'Home', href: '#top' },
  { label: 'Courses', href: '#courses' },
  { label: 'Creators', href: '#creators' },
];

export default function Navbar() {
  // Only matters on small screens, where the links collapse into a menu.
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <Logo tone="light" />

        <button
          type="button"
          className="navbar__toggle"
          aria-expanded={isOpen}
          aria-controls="primary-nav"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>

        <nav id="primary-nav" className={`navbar__menu ${isOpen ? 'is-open' : ''}`} aria-label="Main">
          <ul className="navbar__links">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href} onClick={closeMenu}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="navbar__actions">
            <Button to="/login" variant="ghost-light" size="sm">
              Sign In
            </Button>
            <Button to="/signup" variant="outline-light" size="sm">
              Join Us
            </Button>
            <a href="#courses" className="navbar__cart" aria-label="Cart" onClick={closeMenu}>
              <BagIcon />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
