import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login( { onLogin } ) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault()
        if (username === 'admin' && password === 'admin') {
            onLogin()
            navigate('/users')
        }
    }

  return (
    <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Enter your username' />
        <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter your password' />
        <button type='submit'>Login</button>
    </form>
  )
}
