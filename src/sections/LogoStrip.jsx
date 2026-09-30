import PartnerLogo from '../components/PartnerLogo.jsx';
import { partners } from '../data/content.js';
import './LogoStrip.css';

export default function LogoStrip() {
  return (
    <section className="logo-strip" aria-label="Trusted by">
      <ul className="container logo-strip__list">
        {partners.map((variant) => (
          <li key={variant}>
            <PartnerLogo variant={variant} />
          </li>
        ))}
      </ul>
    </section>
  );
}
