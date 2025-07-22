import { useState } from 'react';
export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = async () => {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    const data = await res.json();
    if (data.token) {
      localStorage.setItem('token', data.token);
      window.location.href = '/dashboard';
    } else {
      alert(data.message || 'Login failed');
    }
  };
  return (
    <div className='p-10 text-center'>
      <h2 className='text-xl mb-4'>Login</h2>
      <input placeholder='Email' className='border mb-2 p-2' onChange={e => setEmail(e.target.value)} /><br />
      <input type='password' placeholder='Password' className='border mb-2 p-2' onChange={e => setPassword(e.target.value)} /><br />
      <button onClick={handleLogin} className='bg-blue-600 text-white px-4 py-2'>Login</button>
    </div>
  );
}
