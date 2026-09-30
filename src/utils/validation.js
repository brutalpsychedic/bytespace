const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Each rule returns an error message, or '' when the value is fine.
const rules = {
  fullName: (value) => (value.trim().length < 2 ? 'Please enter your full name.' : ''),
  email: (value) => {
    if (!value.trim()) return 'Email is required.';
    return EMAIL_PATTERN.test(value) ? '' : 'Please enter a valid email address.';
  },
  password: (value) => (value.length < 8 ? 'Password must be at least 8 characters.' : ''),
};

// Validates only the fields present in `values`, so Login and Signup share it.
// Returns an object like { email: 'Email is required.' } — empty when valid.
export function validateForm(values) {
  const errors = {};
  for (const [field, value] of Object.entries(values)) {
    const message = rules[field]?.(value);
    if (message) errors[field] = message;
  }
  return errors;
}
