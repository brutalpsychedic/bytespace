import './SectionHeading.css';

// Title + optional paragraph used at the top of most sections.
export default function SectionHeading({ title, text, align = 'center', as: Tag = 'h2', className = '' }) {
  return (
    <div className={`section-heading section-heading--${align} ${className}`.trim()}>
      <Tag className="section-heading__title">{title}</Tag>
      {text && <p className="section-heading__text">{text}</p>}
    </div>
  );
}
