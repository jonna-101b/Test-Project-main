import axios from 'axios';
import { useState, type FormEvent } from 'react';
import { useJwt } from "react-jwt";
// import JWT from ""

// This component is intentionally not wired up to any route or navigation.
// It exists as a standalone UI screen — hook it up (routing, auth state,
// API call, validation, etc.) as part of the exercise.

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();


    const Example = () => {
      const token = "my token";
      const { decodedToken, isExpired } = useJwt(token);
    };
  };

  return (
    <div className="login-page">
      <form className="login-card" onSubmit={handleSubmit}>
        <h2>Log in</h2>
        <p className="login-subtitle">Welcome back to Idea Tracker.</p>

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
        />

        <button type="submit">Log in</button>
      </form>
    </div>
  );
}

export default LoginPage;
