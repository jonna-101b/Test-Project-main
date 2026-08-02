import { useState, type FormEvent } from 'react';
import { api } from '../../api/api';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await api.post("/auth/login", { username, password });
  
      localStorage.setItem("token", res.data.token);
      navigate("/");
    }
    catch (error: any) {
      console.log(error.message)
      alert(error.message);
    }


  };

  return (
    <div className="login-page">
      <form className="login-card" onSubmit={handleSubmit}>
        <h2>Log in</h2>
        <p className="login-subtitle">Welcome back to Idea Tracker.</p>

        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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
