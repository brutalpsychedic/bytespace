import { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthLayout from '../components/AuthLayout.jsx';
import Button from '../components/Button.jsx';
import FormField from '../components/FormField.jsx';
import useAuthForm from '../hooks/useAuthForm.js';

export default function Signup() {
  const [status, setStatus] = useState('');

  const { values, errors, handleChange, handleSubmit } = useAuthForm(
    { fullName: '', email: '', password: '' },
    (form) => setStatus(`Welcome aboard, ${form.fullName}! (demo — no backend connected)`),
  );

  return (
    <AuthLayout
      introTitle="Sign up and come in"
      introText="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost."
      eyebrow="Create an Account"
      title="Welcome to ByteSpace"
      footer={
        <>
          Already have an account? <Link to="/login">Login</Link>
        </>
      }
    >
      <form className="auth-form" onSubmit={handleSubmit} noValidate>
        <FormField
          id="fullName"
          label="Full Name"
          autoComplete="name"
          placeholder="Jamie Davis"
          value={values.fullName}
          onChange={handleChange}
          error={errors.fullName}
        />
        <FormField
          id="email"
          label="Email"
          type="email"
          autoComplete="email"
          placeholder="designer@example.com"
          value={values.email}
          onChange={handleChange}
          error={errors.email}
        />
        <FormField
          id="password"
          label="Password"
          type="password"
          autoComplete="new-password"
          placeholder="********"
          value={values.password}
          onChange={handleChange}
          error={errors.password}
        />
        {status && (
          <p className="auth-form__status" role="status">
            {status}
          </p>
        )}
        <Button type="submit" size="lg" className="auth-form__submit">
          Continue
        </Button>
      </form>
    </AuthLayout>
  );
}
