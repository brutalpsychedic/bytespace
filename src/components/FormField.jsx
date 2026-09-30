import './FormField.css';

// Label + input + error message, wired together for screen readers.
export default function FormField({ id, label, error, ...inputProps }) {
  const errorId = `${id}-error`;

  return (
    <div className={`form-field ${error ? 'has-error' : ''}`}>
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} aria-invalid={Boolean(error)} aria-describedby={error ? errorId : undefined} {...inputProps} />
      {error && (
        <p id={errorId} className="form-field__error">
          {error}
        </p>
      )}
    </div>
  );
}
