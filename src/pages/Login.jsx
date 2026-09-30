import { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthLayout from '../components/AuthLayout.jsx';
import Button from '../components/Button.jsx';
import FormField from '../components/FormField.jsx';
import { FacebookIcon, GoogleIcon } from '../components/Icons.jsx';
import useAuthForm from '../hooks/useAuthForm.js';

export default function Login() {
  const [status, setStatus] = useState('');

  // There is no backend in this project, so a valid submit just shows a message.
  const { values, errors, handleChange, handleSubmit } = useAuthForm({ email: '', password: '' }, (form) =>
    setStatus(`Signed in as ${form.email} (demo — no backend connected).`),
  );

  return (
    <AuthLayout
      introTitle="Sign in with ease"
      introText="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
      eyebrow="Sign In"
      title="Welcome Back"
      footer={
        <>
          New user? <Link to="/signup">Create an account</Link>
        </>
      }
    >
      <form className="auth-form" onSubmit={handleSubmit} noValidate>
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
          autoComplete="current-password"
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
          Sign In
        </Button>
      </form>

      <p className="auth-divider">or</p>

      <div className="auth-social">
        <button type="button" aria-label="Continue with Facebook">
          <FacebookIcon width={30} height={30} />
        </button>
        <button type="button" aria-label="Continue with Google">
          <GoogleIcon width={30} height={30} />
        </button>
      </div>
    </AuthLayout>
  );
}
