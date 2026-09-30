import { useState } from 'react';
import { validateForm } from '../utils/validation.js';

/**
 * Form state shared by Login and Signup.
 * Pass the starting values, e.g. { email: '', password: '' }.
 * Returns the current values/errors, a change handler for inputs, and a
 * submit handler that validates before calling onValid(values).
 */
export default function useAuthForm(initialValues, onValid) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  function handleChange(event) {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    // Clear a field's error as soon as the user starts fixing it.
    if (errors[name]) setErrors((current) => ({ ...current, [name]: '' }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const nextErrors = validateForm(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) onValid(values);
  }

  return { values, errors, handleChange, handleSubmit };
}
