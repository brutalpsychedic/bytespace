import { useState } from 'react';
import Button from './Button.jsx';
import Logo from './Logo.jsx';
import { footerColumns, legalLinks } from '../data/content.js';
import './Footer.css';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    // No backend yet — just confirm in the UI.
    setSubscribed(true);
    setEmail('');
  }

  return (
    <footer className="footer">
      <div className="container footer__top">
        <div className="footer__newsletter">
          <Logo tone="dark" />
          <p className="footer__lead">Stay up to date with our latest features and releases by joining our newsletter.</p>

          <form className="footer__form" onSubmit={handleSubmit}>
            <label htmlFor="newsletter-email" className="visually-hidden">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter your email"
            />
            <Button type="submit">Subscribe</Button>
          </form>

          <p className="footer__fine" aria-live="polite">
            {subscribed
              ? 'Thanks for subscribing! 🎉'
              : 'By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.'}
          </p>
        </div>

        <nav className="footer__columns" aria-label="Footer">
          {footerColumns.map((column, index) => (
            <ul key={index}>
              {column.map((label) => (
                <li key={label}>
                  <a href="#top">{label}</a>
                </li>
              ))}
            </ul>
          ))}
        </nav>
      </div>

      <div className="container footer__bottom">
        <p>© {new Date().getFullYear()} ByteSpace. All rights reserved.</p>
        <ul className="footer__legal">
          {legalLinks.map((label) => (
            <li key={label}>
              <a href="#top">{label}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
