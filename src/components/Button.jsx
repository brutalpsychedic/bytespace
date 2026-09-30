import { Link } from 'react-router-dom';
import './Button.css';

/**
 * One button style for the whole site.
 * - `to`   → renders a React Router <Link> (in-app pages)
 * - `href` → renders a plain <a> (anchors / external)
 * - neither → renders a <button>
 * variant: 'lime' | 'outline-light' | 'ghost-light' | 'outline'
 * size:    'sm' | 'md' | 'lg'
 */
export default function Button({ to, href, variant = 'lime', size = 'md', className = '', children, ...rest }) {
  const classes = `btn btn--${variant} btn--${size} ${className}`.trim();

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  );
}
