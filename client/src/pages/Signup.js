import { useState } from 'react';
export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSignup = async () => {
    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    const data = await res.json();
    if (data.message === 'User created') {
      alert('Signup successful');
      window.location.href = '/login';
    } else {
      alert(data.message || 'Signup failed');
    }
  };
  return (
    <div className='p-10 text-center'>
      <h2 className='text-xl mb-4'>Signup</h2>
      <input placeholder='Email' className='border mb-2 p-2' onChange={e => setEmail(e.target.value)} /><br />
      <input type='password' placeholder='Password' className='border mb-2 p-2' onChange={e => setPassword(e.target.value)} /><br />
      <button onClick={handleSignup} className='bg-green-600 text-white px-4 py-2'>Signup</button>
    </div>
  );
}
