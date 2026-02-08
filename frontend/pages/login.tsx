import { useState } from 'react';
import Navbar from '../components/Navbar';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setMessage('Logged in (demo).');
  };

  return (
    <div>
      <Navbar />
      <main className="max-w-md mx-auto mt-10">
        <h1 className="text-xl font-semibold mb-4">Login</h1>
        <form onSubmit={handleSubmit} className="space-y-3 bg-white rounded shadow p-4">
          <input
            className="border px-3 py-2 rounded w-full"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            className="border px-3 py-2 rounded w-full"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded" type="submit">
            Sign In
          </button>
          {message && <p className="text-green-600">{message}</p>}
        </form>
      </main>
    </div>
  );
}
